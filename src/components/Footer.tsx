export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold tracking-tighter flex items-center gap-2 mb-2">
              <span className="text-white">ROJO</span>
              <span className="text-rojo">Service</span>
            </div>
            <p className="text-gray-500 font-medium">S.R.O.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 text-center md:text-right">
            <a href="#sluzby" className="text-gray-400 hover:text-rojo transition-colors uppercase text-sm font-bold tracking-wider">Služby</a>
            <a href="#rezervacia" className="text-gray-400 hover:text-rojo transition-colors uppercase text-sm font-bold tracking-wider">Rezervácia</a>
            <a href="#kontakt" className="text-gray-400 hover:text-rojo transition-colors uppercase text-sm font-bold tracking-wider">Kontakt</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {currentYear} ROJO Service s.r.o. Všetky práva vyhradené.</p>
          <p>Dizajn a vývoj na mieru.</p>
        </div>
      </div>
    </footer>
  );
}
