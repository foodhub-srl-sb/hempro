
import React, { useState } from 'react';

const FAQS = [
  {
    q: "Come posso partecipare ai webinar formativi?",
    a: "Tutti i webinar sono gratuiti e aperti agli stakeholder. Puoi iscriverti tramite il modulo in questa pagina selezionando 'Iscrizione Webinar' o seguendo i link nelle singole schede risorsa."
  },
  {
    q: "I dati della ricerca CNR sono pubblici?",
    a: "Sì, HEMPRO è un progetto di divulgazione finanziato dalla Regione Puglia. Tutti i report tecnici e i manuali pubblicati nell'Archivio Risorse sono consultabili liberamente."
  },
  {
    q: "Sono un'azienda agricola, posso ricevere assistenza in campo?",
    a: "Il progetto prevede fasi di trasferimento tecnologico. Contattaci indicando la tua posizione e il tipo di coltura per valutare l'inserimento nelle attività pilota."
  }
];

export const ContactsView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    role: 'other'
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', role: 'other' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#fbf9f4] min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-[#036C42] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#47A4B5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.5em] block mb-6">Connect with HEMPRO</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Supporto & Network</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Siamo qui per facilitare il trasferimento tecnologico e rispondere alle esigenze di aziende, ricercatori e cittadini.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in">
            {/* Contact Details Card */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-[#036C42] mb-10">Ufficio di Coordinamento</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#fbf9f4] flex items-center justify-center text-2xl shadow-sm border border-gray-100 group-hover:bg-[#036C42] group-hover:text-white transition-all duration-300">
                    📍
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-[#47A4B5] uppercase tracking-widest mb-1">Sede Scientifica</h4>
                    <p className="text-[#036C42] font-bold text-sm">CNR - ISPA</p>
                    <p className="text-gray-400 text-xs leading-relaxed">Via G. Amendola, 122/O <br/>70126 Bari (BA), Italia</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#fbf9f4] flex items-center justify-center text-2xl shadow-sm border border-gray-100 group-hover:bg-[#036C42] group-hover:text-white transition-all duration-300">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-[#47A4B5] uppercase tracking-widest mb-1">Email Istituzionale</h4>
                    <p className="text-[#036C42] font-bold text-sm">info@hempro-puglia.it</p>
                    <p className="text-gray-400 text-xs">Risposta garantita entro 48h</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#fbf9f4] flex items-center justify-center text-2xl shadow-sm border border-gray-100 group-hover:bg-[#036C42] group-hover:text-white transition-all duration-300">
                    📞
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-[#47A4B5] uppercase tracking-widest mb-1">Segreteria Progetto</h4>
                    <p className="text-[#036C42] font-bold text-sm">+39 080 5929357</p>
                    <p className="text-gray-400 text-xs">Lun-Ven, 09:00 - 13:00</p>
                  </div>
                </div>
              </div>

              {/* Stylized Map Placeholder */}
              <div className="mt-12 relative h-48 bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 group">
                 <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#036C42] uppercase tracking-widest">Apri in Google Maps</span>
                    <a href="https://maps.google.com/?q=CNR+ISPA+Bari" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#47A4B5] text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                 </div>
              </div>
            </div>

            {/* Stakeholder Card */}
            <div className="bg-[#47A4B5] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-xl font-serif font-bold mb-4 relative z-10">Sei un'azienda agricola?</h4>
              <p className="text-white/80 text-sm font-light leading-relaxed mb-8 relative z-10">
                Accedi a consulenze dedicate per l'implementazione di microgreens e colture fuori suolo.
              </p>
              <button className="bg-[#036C42] text-white px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#036C42] transition-all relative z-10">
                Richiedi Consulenza
              </button>
            </div>
          </div>

          {/* Right Column: Form & FAQ */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Contact Form */}
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100 relative">
              <div className="mb-10">
                <h3 className="text-3xl font-serif font-bold text-[#036C42] mb-4">Inviaci un Messaggio</h3>
                <p className="text-gray-400 text-sm font-light">Compila il modulo sottostante per essere ricontattato dal nostro team tecnico.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mario Rossi" 
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#47A4B5]/20 focus:bg-white focus:border-gray-100 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Aziendale / Privata</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="m.rossi@azienda.it" 
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#47A4B5]/20 focus:bg-white focus:border-gray-100 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Il tuo Ruolo</label>
                    <select 
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#47A4B5]/20 focus:bg-white focus:border-gray-100 transition-all text-sm appearance-none"
                    >
                      <option value="other">Altro / Cittadino</option>
                      <option value="farmer">Azienda Agricola</option>
                      <option value="researcher">Ricercatore / Studente</option>
                      <option value="processor">Trasformatore Alimentare</option>
                      <option value="institution">Ente Pubblico</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Oggetto</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#47A4B5]/20 focus:bg-white focus:border-gray-100 transition-all text-sm appearance-none"
                    >
                      <option value="">Seleziona...</option>
                      <option value="webinar">Iscrizione Webinar</option>
                      <option value="technical">Supporto Tecnico</option>
                      <option value="research">Quesito Scientifico</option>
                      <option value="press">Ufficio Stampa</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Messaggio</label>
                  <textarea 
                    required
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Come possiamo aiutarti?" 
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#47A4B5]/20 focus:bg-white focus:border-gray-100 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'sending' || status === 'success'}
                  type="submit" 
                  className={`w-full py-5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.4em] transition-all shadow-xl flex items-center justify-center gap-3 ${
                    status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#036C42] text-white hover:bg-[#47A4B5] shadow-[#036C42]/20 hover:shadow-[#47A4B5]/20'
                  }`}
                >
                  {status === 'idle' && 'Invia Richiesta'}
                  {status === 'sending' && (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Elaborazione...
                    </div>
                  )}
                  {status === 'success' && '✓ Richiesta Ricevuta'}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#036C42] px-4">Domande Frequenti</h3>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === idx ? 'border-[#47A4B5] shadow-md' : 'border-gray-100 shadow-sm'}`}
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-8 py-5 flex items-center justify-between text-left group"
                    >
                      <span className={`text-sm font-bold transition-colors ${openFaq === idx ? 'text-[#47A4B5]' : 'text-[#036C42] group-hover:text-[#47A4B5]'}`}>{faq.q}</span>
                      <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#47A4B5]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === idx && (
                      <div className="px-8 pb-6 animate-fade-in">
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
