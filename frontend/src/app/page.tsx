import { Hero } from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';
import { ContentCard } from '@/components/ContentCard';
import { getFeaturedContent } from '@/lib/content';
import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage() {
  const featuredContent = await getFeaturedContent(3);

  return (
    <main className="animate-fade-in space-y-0">
      <Hero />
      <StatsSection />

      {/* Target Audience Path Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#036C42 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-24">
            <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.6em] block mb-6">
              Esplora l&apos;Hub
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#036C42] leading-tight">
              Percorsi di <br />
              Formazione <span className="italic text-[#47A4B5]">Mirata</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Aziende Agricole',
                desc: 'Ottimizzazione dei sistemi produttivi fuori suolo e tecniche di coltivazione biologica.',
                icon: '🚜',
              },
              {
                title: 'Ricerca & Sviluppo',
                desc: 'Accesso ai report tecnici e dati biochimici del CNR-ISPA Bari per aziende R&D.',
                icon: '🔬',
              },
              {
                title: 'Food Innovation',
                desc: 'Sviluppo di meat-substitutes a base di canapa (Tempeh) e superfood funzionali.',
                icon: '🍲',
              },
            ].map((path, i) => (
              <Link
                key={i}
                href="/risorse"
                className="group relative bg-[#fbf9f4] p-12 rounded-[3.5rem] border border-gray-100 hover:bg-[#036C42] transition-all duration-700 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-5xl mb-10 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {path.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#036C42] group-hover:text-white mb-6 transition-colors">
                  {path.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/60 text-sm font-light leading-relaxed mb-10 transition-colors">
                  {path.desc}
                </p>
                <div className="flex items-center gap-3 text-[#47A4B5] font-bold text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">
                  Accedi all&apos;Hub
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Leadership Highlight */}
      <section className="py-32 bg-[#036C42] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#47A4B5]/5 -skew-x-12 translate-x-32 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#47A4B5]/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <Image
                src="/images/hemp_research.png"
                alt="Biotecnologie Alimentari CNR"
                width={600}
                height={400}
                className="rounded-[4rem] shadow-2xl relative z-10 border border-white/10 grayscale-[100%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#47A4B5] p-10 rounded-[3rem] text-[#036C42] z-20 shadow-2xl hidden md:block">
                <p className="text-5xl font-serif font-bold mb-2">99%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-none">
                  Tracciabilità <br />
                  Scientifica
                </p>
              </div>
            </div>
            <div>
              <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.5em] block mb-8">
                Leadership CNR-ISPA
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
                Eccellenza nella <br />
                Caratterizzazione
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                HEMPRO analizza i profili lipidici, amminoacidici e terpenici delle varietà più promettenti
                coltivate in Puglia, definendo nuovi standard di qualità per l&apos;industria alimentare.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
                {[
                  { t: 'Analisi Nutraceutica', d: 'Protocolli HPLC per il controllo qualità.' },
                  { t: 'Novel Food Compliance', d: 'Sostegno normativo per i nuovi derivati.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#47A4B5] flex items-center justify-center text-[10px] font-bold text-[#036C42] flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.t}</h4>
                      <p className="text-white/30 text-xs font-light">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/risorse"
                className="inline-block px-10 py-5 bg-white text-[#036C42] rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#47A4B5] hover:text-white transition-all shadow-xl"
              >
                Vedi Report Tecnici
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Feed Section */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.6em] block mb-6">
              Aggiornamenti Live
            </span>
            <h2 className="text-4xl font-serif font-bold text-[#036C42]">Ultime dal Network</h2>
          </div>
          <Link
            href="/risorse"
            className="group px-8 py-4 border border-[#036C42]/20 text-[#036C42] rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#036C42] hover:text-white transition-all flex items-center gap-3"
          >
            Tutte le Risorse
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredContent.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
