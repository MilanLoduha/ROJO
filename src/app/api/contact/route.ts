import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, message } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'finoland637@gmail.com',
      subject: `Nová požiadavka: ${name} - ROJO Service`,
      html: `
        <h2>Nová požiadavka z webu ROJO Service</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Telefón:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Správa / Poznámka:</strong></p>
        <p>${message}</p>
      `,
    };

    // Ak nie sú nastavené ENV premenné (pri testovaní / prvom spustení), len zalogujeme
    if (!process.env.SMTP_USER) {
      console.log('--- EMAIL MOCK ---');
      console.log('Pre ostrú prevádzku nastavte SMTP_USER a SMTP_PASS v .env.local');
      console.log(mailOptions);
      console.log('------------------');
      return NextResponse.json({ success: true, mocked: true });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
