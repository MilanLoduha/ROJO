import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, message } = data;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials not configured. Set SMTP_USER and SMTP_PASS in Vercel environment variables.');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"ROJO Service Web" <${smtpUser}>`,
      to: 'finoland637@gmail.com',
      replyTo: email,
      subject: `Nová rezervácia od ${name} – ROJO Service`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #1a1a1a; color: #ededed; border-radius: 8px;">
          <h2 style="color: #cc0000; border-bottom: 2px solid #cc0000; padding-bottom: 10px;">Nová rezervácia z webu ROJO Service</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #aaa; width: 140px;">Meno:</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Telefón:</td><td style="padding: 8px 0; font-weight: bold;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #cc0000;">${email}</a></td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #222; border-left: 3px solid #cc0000; border-radius: 4px;">
            <p style="color: #aaa; margin: 0 0 8px;">Správa:</p>
            <p style="margin: 0;">${message || '(bez správy)'}</p>
          </div>
          <p style="margin-top: 24px; color: #666; font-size: 12px;">Táto správa bola odoslaná cez webový formulár na rojo-service.vercel.app</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email', details: String(error) }, { status: 500 });
  }
}
