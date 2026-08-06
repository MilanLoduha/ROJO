import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-rojo-dark/90 via-rojo-dark/70 to-background z-10" />
        <img 
          src="/rojo-auto.jpg" 
          alt="ROJO Offroad Service" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="container mx-auto px-4 z-20 text-center flex flex-col items-center mt-20">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
          Profesionálny <span className="text-rojo">Servis</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl font-light">
          Špecializujeme sa na autoklampiarske práce, drsné offroad úpravy a spoľahlivú údržbu vášho vozidla.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#rezervacia" className="bg-rojo hover:bg-red-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-wider rounded-sm transition-all shadow-[0_0_20px_rgba(204,0,0,0.4)] hover:shadow-[0_0_30px_rgba(204,0,0,0.6)]">
            Rezervovať termín
          </Link>
          <Link href="#sluzby" className="glass text-white px-8 py-4 text-lg font-bold uppercase tracking-wider rounded-sm transition-all hover:bg-white hover:text-rojo-dark">
            Naše služby
          </Link>
        </div>
      </div>
      
      {/* Decorative gear bottom right */}
      <div className="absolute -bottom-20 -right-20 opacity-10 rotate-45 z-0 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </div>
    </section>
  );
}
