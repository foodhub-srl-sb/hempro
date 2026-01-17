import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const STAKEHOLDERS = {
    'aziende-agricole': {
        title: 'Aziende Agricole',
        subtitle: 'Opportunità di coltivazione e diversificazione',
        description: 'Il progetto HEMPRO offre alle aziende agricole nuove opportunità per diversificare la produzione attraverso la coltivazione della canapa per uso alimentare (microgreens, baby leaf, semi).',
        benefits: [
            'Protocolli di coltivazione ottimizzati per il territorio pugliese',
            'Selezione di varietà ad alta resa e valore nutrizionale',
            'Supporto tecnico per l\'introduzione di nuove colture',
            'Diversificazione del reddito aziendale'
        ],
        image: '/images/hero-bg.jpg', // Using existing asset or generic
        cta: 'Partecipa ai Workshop'
    },
    'ricercatori': {
        title: 'Ricercatori',
        subtitle: 'Innovazione scientifica e biotecnologie',
        description: 'HEMPRO è un hub di ricerca per lo studio delle proprietà nutrizionali della canapa e lo sviluppo di nuovi processi di trasformazione alimentare.',
        benefits: [
            'Caratterizzazione nutrizionale di varietà autoctone',
            'Sviluppo di alimenti funzionali (Tempeh di canapa)',
            'Pubblicazioni scientifiche e disseminazione',
            'Networking con CNR-ISPA e partner internazionali'
        ],
        image: '/images/hero-bg.jpg',
        cta: 'Consulta le Pubblicazioni'
    },
    'trasformatori': {
        title: 'Trasformatori',
        subtitle: 'Nuovi ingredienti e prodotti ad alto valore',
        description: 'Per le aziende di trasformazione alimentare, HEMPRO sviluppa prototipi di prodotti innovativi come il Tempeh di canapa e ingredienti funzionali.',
        benefits: [
            'Protocolli di produzione scalabili industrialmente',
            'Sviluppo di prodotti plant-based innovativi',
            'Analisi di shelf-life e qualità sensoriale',
            'Accesso a materie prime tracciate e di qualità'
        ],
        image: '/images/hero-bg.jpg',
        cta: 'Scopri i Prototipi'
    },
    'pubblica-amministrazione': {
        title: 'Pubblica Amministrazione',
        subtitle: 'Sostenibilità e sviluppo territoriale',
        description: 'Il progetto promuove un modello di economia circolare e sostenibile, valorizzando le risorse del territorio pugliese in linea con gli obiettivi regionali.',
        benefits: [
            'Promozione di filiere corte e sostenibili',
            'Recupero di colture tradizionali con metodi innovativi',
            'Impatti positivi su ambiente e occupazione locale',
            'Valorizzazione del marchio "Made in Puglia"'
        ],
        image: '/images/hero-bg.jpg',
        cta: 'Leggi il Report'
    }
};

export async function generateMetadata({ params }: { params: { type: string } }) {
    const data = STAKEHOLDERS[params.type as keyof typeof STAKEHOLDERS];
    if (!data) return { title: 'Pagina Non Trovata' };

    return {
        title: `${data.title} | HEMPRO Hub`,
        description: data.description,
    };
}

export default function StakeholderPage({ params }: { params: { type: string } }) {
    const data = STAKEHOLDERS[params.type as keyof typeof STAKEHOLDERS];

    if (!data) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[50vh] bg-[#036C42] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                {/* Fallback pattern if image fails */}
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-20"></div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <span className="text-[#47A4B5] font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in">
                        Hub Stakeholder
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        {data.title}
                    </h1>
                    <p className="text-white/80 text-xl font-light max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {data.subtitle}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-[#036C42] mb-8">
                            Cosa offre HEMPRO
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            {data.description}
                        </p>

                        <div className="space-y-6">
                            {data.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#47A4B5]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#47A4B5]"></div>
                                    </div>
                                    <p className="text-gray-700 font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-12 border-t border-gray-100">
                            <Link href="/contatti" className="inline-flex items-center gap-3 bg-[#036C42] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#025a36] transition-all group">
                                {data.cta}
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-[#fbf9f4] rounded-[3rem] p-12 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#47A4B5]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#036C42]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-[#036C42] mb-6">Risorse Correlate</h3>
                            <ul className="space-y-4">
                                <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47A4B5] transition-colors cursor-pointer group">
                                    <Link href="/risorse" className="flex items-center justify-between">
                                        <span className="text-gray-600 group-hover:text-[#036C42] transition-colors">Documentazione Tecnica</span>
                                        <span className="text-[#47A4B5] text-sm">PDF</span>
                                    </Link>
                                </li>
                                <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47A4B5] transition-colors cursor-pointer group">
                                    <Link href="/progetto" className="flex items-center justify-between">
                                        <span className="text-gray-600 group-hover:text-[#036C42] transition-colors">Il Progetto nel Dettaglio</span>
                                        <span className="text-[#47A4B5] text-sm">→</span>
                                    </Link>
                                </li>
                                <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47A4B5] transition-colors cursor-pointer group">
                                    <Link href="/contatti" className="flex items-center justify-between">
                                        <span className="text-gray-600 group-hover:text-[#036C42] transition-colors">Contatta i Responsabili</span>
                                        <span className="text-[#47A4B5] text-sm">✉️</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
