import { MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Kontaktujte <span className="text-rojo">Nás</span>
          </h2>
          <div className="w-24 h-1 bg-rojo mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="glass p-8 rounded-sm flex items-start gap-6 hover:border-rojo border border-transparent transition-colors">
              <div className="bg-rojo-dark p-4 rounded-full text-rojo">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Adresa</h3>
                <p className="text-gray-400 text-lg">Sokolská<br />020 61 Lednické Rovne<br />Slovensko</p>
              </div>
            </div>

            <div className="glass p-8 rounded-sm flex items-start gap-6 hover:border-rojo border border-transparent transition-colors">
              <div className="bg-rojo-dark p-4 rounded-full text-rojo">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Telefón</h3>
                <p className="text-gray-400 text-lg mb-2">Zavolajte nám pre rýchlu konzultáciu.</p>
                <a href="tel:+421910171435" className="text-2xl font-bold text-white hover:text-rojo transition-colors">+421 910 171 435</a>
              </div>
            </div>

            <div className="glass p-8 rounded-sm flex items-start gap-6 hover:border-rojo border border-transparent transition-colors">
              <div className="bg-rojo-dark p-4 rounded-full text-rojo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Sociálne siete</h3>
                <p className="text-gray-400 text-lg mb-4">Sledujte naše najnovšie projekty na Facebooku.</p>
                <a href="https://www.facebook.com/profile.php?id=100087877516690" target="_blank" rel="noreferrer" className="inline-block bg-[#1877F2] hover:bg-blue-600 text-white px-6 py-2 rounded-sm font-bold transition-colors">
                  ROJO Service s.r.o.
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[500px] lg:h-auto rounded-sm overflow-hidden border border-gray-800 relative shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
              src="https://maps.google.com/maps?q=Sokolsk%C3%A1,%20020%2061%20Lednick%C3%A9%20Rovne,%20Slovensko&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
