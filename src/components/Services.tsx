import { Wrench, Mountain, Settings } from 'lucide-react';

const services = [
  {
    title: 'Autoklampiarske práce',
    description: 'Profesionálna oprava po nehode, precízne odstraňovanie preliačenín a komplexné klampiarske úpravy pre dokonalý vzhľad vášho vozidla.',
    icon: <Wrench size={48} className="text-rojo" />,
  },
  {
    title: 'Offroad úpravy áut',
    description: 'Špecializované vyváranie rámov, zákazková výroba a montáž pevnostných nárazníkov, navijakov a iných offroad doplnkov do extrémnych podmienok.',
    icon: <Mountain size={48} className="text-rojo" />,
  },
  {
    title: 'Servis a údržba vozidiel',
    description: 'Pravidelná údržba, výmena prevádzkových kvapalín, kompletný servis bŕzd, čapov, kolies a príprava na STK pre vašu maximálnu bezpečnosť.',
    icon: <Settings size={48} className="text-rojo" />,
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Čo <span className="text-rojo">ponúkame</span>
          </h2>
          <div className="w-24 h-1 bg-rojo mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sme pripravení postarať sa o vaše auto od bežného servisu až po extrémne offroad úpravy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-sm hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-rojo group"
            >
              <div className="mb-6 p-4 bg-rojo-dark inline-block rounded-full group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(204,0,0,0.1)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
