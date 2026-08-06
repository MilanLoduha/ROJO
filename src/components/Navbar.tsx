'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-rojo-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-white text-3xl">ROJO</span>
          <span className="text-rojo text-3xl">Service</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold uppercase tracking-wider text-gray-300">
          <Link href="#sluzby" className="hover:text-rojo transition-colors">Služby</Link>
          <Link href="#rezervacia" className="hover:text-rojo transition-colors">Rezervácia</Link>
          <Link href="#kontakt" className="hover:text-rojo transition-colors">Kontakt</Link>
          <Link href="#rezervacia" className="bg-rojo hover:bg-red-700 text-white px-6 py-2 rounded-sm transition-colors ml-4">
            Objednať sa
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-rojo-dark border-t border-gray-800 shadow-xl">
          <div className="flex flex-col px-6 py-4 gap-4 text-center">
            <Link href="#sluzby" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-rojo py-2 border-b border-gray-800">Služby</Link>
            <Link href="#rezervacia" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-rojo py-2 border-b border-gray-800">Rezervácia</Link>
            <Link href="#kontakt" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-rojo py-2 border-b border-gray-800">Kontakt</Link>
            <Link href="#rezervacia" onClick={() => setIsOpen(false)} className="bg-rojo hover:bg-red-700 text-white py-3 rounded-sm transition-colors mt-2">
              Objednať sa
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
