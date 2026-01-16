
import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#036C42] text-white pt-24 pb-8 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <img src="/images/hempro-logo.png" alt="HEMPRO Logo" className="h-16 w-auto" />
            </div>
            <p className="text-white/50 text-base font-light leading-relaxed max-w-md mb-10">
              Hemp Production, Characterization, and Valorisation of Innovative Products.
              La rete d'eccellenza per l'innovazione della filiera canapicola pugliese guidata dal CNR-ISPA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#036C42] transition-all duration-300">
                <span className="text-[10px] font-bold">LN</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#036C42] transition-all duration-300">
                <span className="text-[10px] font-bold">YT</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#036C42] transition-all duration-300">
                <span className="text-[10px] font-bold">RG</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#47A4B5] mb-4">Newsletter Scientifica</h4>
            <p className="text-white/60 text-sm font-light mb-8">Ricevi i risultati tecnici, i bandi regionali e gli aggiornamenti sulle innovazioni Novel Food.</p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email professionale"
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-[#47A4B5] transition-colors"
                />
                <button type="submit" className="bg-[#47A4B5] text-white px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#036C42] transition-all shadow-xl shadow-[#47A4B5]/10">
                  Iscriviti Ora
                </button>
              </form>
            ) : (
              <div className="bg-[#47A4B5] text-[#036C42] p-6 rounded-2xl text-center animate-fade-in font-bold text-xs uppercase tracking-widest">
                ✓ Iscrizione completata con successo
              </div>
            )}
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-white/5">
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">Navigazione</h5>
            <ul className="space-y-4">
              {['Home', 'Il Progetto', 'Archivio Risorse', 'Galleria Media'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-[#47A4B5] text-sm font-light transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47A4B5] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">Hub Stakeholder</h5>
            <ul className="space-y-4">
              {['Aziende Agricole', 'Ricercatori', 'Trasformatori', 'Pubblica Amministrazione'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-[#47A4B5] text-sm font-light transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47A4B5] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">Supporto</h5>
            <ul className="space-y-4">
              {['Domande Frequenti', 'Supporto Tecnico', 'Privacy Policy', 'Cookie Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-[#47A4B5] text-sm font-light transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47A4B5] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">Contatti</h5>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              CNR - ISPA Bari<br />
              Via G. Amendola, 122/O<br />
              70126 Bari (BA), IT<br />
              <span className="text-[#47A4B5] font-bold mt-4 block">+39 080 5929357</span>
            </p>
          </div>
        </div>

        {/* Institutional Partners Section (Essential for EU/Regional Projects) */}
        <div className="py-12 flex flex-wrap justify-center items-center gap-12 lg:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <div className="text-center">
            <div className="text-xs font-black uppercase tracking-tighter mb-2">Regione Puglia</div>
            <div className="h-12 w-32 border border-white/20 rounded flex items-center justify-center bg-white/5">LOGO</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-black uppercase tracking-tighter mb-2">CNR - ISPA</div>
            <div className="h-12 w-32 border border-white/20 rounded flex items-center justify-center bg-white/5">LOGO</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-black uppercase tracking-tighter mb-2">PSR Puglia</div>
            <div className="h-12 w-32 border border-white/20 rounded flex items-center justify-center bg-white/5">LOGO</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-black uppercase tracking-tighter mb-2">Unione Europea</div>
            <div className="h-12 w-32 border border-white/20 rounded flex items-center justify-center bg-white/5">LOGO</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.4em] text-center md:text-left leading-loose">
            PROGETTO HEMPRO - CUP: B39J20000000000 | Finanziamento L.R. n.21/2017 "Promozione della canapa per scopi produttivi ed ambientali"
          </div>
          <div className="text-[10px] font-medium text-white/40 tracking-widest">
            © {new Date().getFullYear()} CNR-ISPA HUB. TUTTI I DIRITTI RISERVATI.
          </div>
        </div>
      </div>
    </footer>
  );
};
