'use client';
import { useState } from 'react';
import { Calendar, User, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rezervacia" className="py-24 bg-rojo-dark relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rojo to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Rezervácia <span className="text-rojo">termínu</span>
          </h2>
          <p className="text-gray-400">
            Vyplňte formulár nižšie a my sa vám ozveme s potvrdením termínu.
          </p>
        </div>

        <div className="glass p-8 md:p-10 rounded-sm">
          {submitStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={64} className="text-green-500 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-2">Správa odoslaná!</h3>
              <p className="text-gray-400 text-lg">Ďakujeme za váš záujem. V krátkom čase vás budeme kontaktovať pre potvrdenie termínu.</p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="mt-8 bg-rojo hover:bg-red-700 text-white px-6 py-2 rounded-sm transition-colors"
              >
                Odoslať novú požiadavku
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <User size={16} className="text-rojo" /> Meno a priezvisko
                  </label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-gray-700 focus:border-rojo text-white px-4 py-3 rounded-sm outline-none transition-colors focus:ring-1 focus:ring-rojo"
                    placeholder="Jozef Mrkvička"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Phone size={16} className="text-rojo" /> Telefónne číslo
                  </label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-background border border-gray-700 focus:border-rojo text-white px-4 py-3 rounded-sm outline-none transition-colors focus:ring-1 focus:ring-rojo"
                    placeholder="+421 900 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Mail size={16} className="text-rojo" /> Email
                  </label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-gray-700 focus:border-rojo text-white px-4 py-3 rounded-sm outline-none transition-colors focus:ring-1 focus:ring-rojo"
                    placeholder="vas@email.sk"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                  <FileText size={16} className="text-rojo" /> Poznámka / Popis problému
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-background border border-gray-700 focus:border-rojo text-white px-4 py-3 rounded-sm outline-none transition-colors focus:ring-1 focus:ring-rojo resize-none"
                  placeholder="Bližšie špecifikujte vašu požiadavku..."
                ></textarea>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-900/50 border border-red-500 text-white px-4 py-3 rounded-sm">
                  Došlo k chybe pri odosielaní. Prosím, skúste to znova alebo nás kontaktujte telefonicky.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-rojo hover:bg-red-700 text-white font-bold uppercase tracking-wider py-4 rounded-sm transition-colors text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Odosiela sa...' : 'Odoslať požiadavku'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
