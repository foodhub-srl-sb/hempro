import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Il Progetto | HEMPRO Hub',
    description: "HEMPRO è l'ecosistema d'avanguardia che unisce le competenze del CNR-ISPA alla vitalità del tessuto agricolo pugliese.",
};

const RESEARCH_AREAS = [
    {
        title: 'Caratterizzazione Biochimica',
        desc: 'Analisi avanzate dei profili lipidici, amminoacidici e terpenici per definire il valore nutrizionale superiore della canapa pugliese.',
        id: '01',
    },
    {
        title: 'Biotecnologie Alimentari',
        desc: 'Sviluppo di processi fermentativi ottimizzati (Tempeh) e tecniche di stabilizzazione per nuovi ingredienti funzionali.',
        id: '02',
    },
    {
        title: 'Agricoltura di Precisione',
        desc: 'Sperimentazione su sistemi floating e indoor-farming per la produzione di microgreens ad alta densità di nutrienti.',
        id: '03',
    },
];

const LEADERSHIP = [
    { name: 'CNR-ISPA', role: 'Coordinamento Scientifico', desc: 'Eccellenza nella ricerca agroalimentare e biotecnologica.' },
    { name: 'Regione Puglia', role: 'Ente Finanziatore', desc: "Sostegno all'innovazione tramite la L.R. 21/2017." },
];

export default function ProgettoPage() {
    return (
        <div className="bg-[#fbf9f4] min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-16 pb-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-full h-full lg:w-2/3 bg-[#036C42]/[0.02] -skew-x-12 translate-x-32 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="animate-fade-in">
                            <div className="inline-flex items-center gap-4 mb-10 group">
                                <span className="w-16 h-px bg-[#47A4B5] group-hover:w-24 transition-all duration-500"></span>
                                <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.6em]">Visione Istituzionale</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#036C42] leading-[0.9] mb-12">
                                Dalla <span className="italic text-[#47A4B5]">Scienza</span> <br />
                                al Mercato.
                            </h1>
                            <p className="text-gray-500 text-xl font-light leading-relaxed mb-14 max-w-lg">
                                HEMPRO è l&apos;ecosistema d&apos;avanguardia che unisce le competenze del{' '}
                                <span className="text-[#036C42] font-bold">CNR-ISPA</span> alla vitalità del tessuto agricolo pugliese
                                per tracciare il futuro della canapa alimentare.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-3xl font-serif font-bold text-[#036C42] mb-2">30</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#47A4B5]">Mesi di Ricerca</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-serif font-bold text-[#036C42] mb-2">100%</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#47A4B5]">Open Data</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#47A4B5]/10 rounded-full blur-[120px]"></div>
                            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white">
                                <Image
                                    src="/images/lab_analysis.png"
                                    alt="Ricerca Scientifica Avanzata"
                                    fill
                                    className="object-cover grayscale-[100%] hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#036C42]/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-12 left-12 right-12 text-white">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#47A4B5] mb-4">Focus Laboratorio</p>
                                    <h3 className="text-3xl font-serif font-bold leading-tight">Caratterizzazione Molecolare della Canapa</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Focus */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#036C42] mb-6">Aree di Ricerca Strategica</h2>
                        <p className="text-gray-400 font-light max-w-xl mx-auto">
                            HEMPRO si sviluppa su tre direttrici scientifiche integrate per garantire l&apos;innovazione lungo tutta la filiera.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 rounded-[3rem] overflow-hidden shadow-sm border border-gray-100">
                        {RESEARCH_AREAS.map((area) => (
                            <div key={area.id} className="bg-white p-16 group hover:bg-[#036C42] transition-all duration-700 cursor-default">
                                <span className="text-5xl font-serif italic text-gray-100 group-hover:text-[#47A4B5]/20 transition-colors mb-8 block">
                                    {area.id}
                                </span>
                                <h4 className="text-2xl font-serif font-bold text-[#036C42] group-hover:text-white mb-6 transition-colors">
                                    {area.title}
                                </h4>
                                <p className="text-gray-400 group-hover:text-white/60 text-sm leading-relaxed transition-colors font-light">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership & Network */}
            <section className="py-32 bg-[#036C42] relative overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage:
                            'linear-gradient(30deg, #47A4B5 12%, transparent 12.5%, transparent 87%, #47A4B5 87.5%, #47A4B5)',
                        backgroundSize: '80px 140px',
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.5em] block mb-8">
                                Governance Tecnico-Istituzionale
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                                Un Network di <br />
                                <span className="text-[#47A4B5]">Eccellenza</span>
                            </h2>
                            <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
                                Il progetto HEMPRO è coordinato dall&apos;Istituto di Scienze delle Produzioni Alimentari del CNR.
                            </p>

                            <div className="space-y-6">
                                {LEADERSHIP.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-8 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-[#47A4B5] flex items-center justify-center text-white font-serif font-bold group-hover:scale-110 transition-transform">
                                            {item.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{item.name}</h4>
                                            <p className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-widest mb-2">{item.role}</p>
                                            <p className="text-white/40 text-xs font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="pt-24">
                                <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 text-center group hover:-translate-y-4 transition-transform duration-500">
                                    <div className="relative w-20 h-20 mx-auto mb-6">
                                        <Image
                                            src="/images/icons/icon-earth.png"
                                            alt="Impatto Locale"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h5 className="text-[#036C42] font-serif font-bold text-xl mb-3">Impatto Locale</h5>
                                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                                        Valorizziamo la biodiversità pugliese attraverso filiere sostenibili.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-[#47A4B5] p-12 rounded-[3.5rem] shadow-2xl text-[#036C42] text-center group hover:-translate-y-4 transition-transform duration-500">
                                    <div className="relative w-20 h-20 mx-auto mb-6">
                                        <Image
                                            src="/images/icons/icon-sprout.png"
                                            alt="Agro-Innovation"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h5 className="font-serif font-bold text-xl mb-3">Agro-Innovation</h5>
                                    <p className="text-[#036C42]/60 text-xs font-bold uppercase tracking-widest">Protocolli Validati</p>
                                </div>
                                <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 backdrop-blur-xl text-center group hover:-translate-y-4 transition-transform duration-500">
                                    <div className="relative w-20 h-20 mx-auto mb-6">
                                        <Image
                                            src="/images/icons/icon-lightning.png"
                                            alt="Digital Hub"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h5 className="text-white font-serif font-bold text-xl mb-3">Digital Hub</h5>
                                    <p className="text-white/40 text-xs font-light">Trasferimento tecnologico istantaneo e globale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-40 bg-[#fbf9f4] text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-[#47A4B5]/20 font-serif text-[180px] leading-none mb-[-120px] select-none">&ldquo;</div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#036C42] leading-tight italic mb-16 relative z-10">
                        Forniamo alla Puglia gli strumenti scientifici per trasformare una coltura millenaria in un asset di sviluppo
                        resiliente e tecnologico.
                    </h2>
                    <div className="w-20 h-1 bg-[#47A4B5] mx-auto mb-8"></div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.6em]">
                        Legge Regionale 21/2017 - Progetto HEMPRO
                    </p>
                </div>
            </section>
        </div>
    );
}
