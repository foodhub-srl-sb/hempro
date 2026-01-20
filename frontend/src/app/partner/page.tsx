import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Partner | HEMPRO Hub',
    description: 'I partner del progetto HEMPRO: CNR-ISPA, Ortogourmet, Fattorie Canapuglia e Food Hub.',
};

const PARTNERS = [
    {
        name: 'CNR-ISPA',
        fullName: 'Istituto di Scienze delle Produzioni Alimentari',
        role: 'Soggetto Proponente & Coordinatore Scientifico',
        description:
            'Centro di eccellenza internazionale. Coordina la Parte A del progetto, gestisce la ricerca in laboratorio, la caratterizzazione chimico-nutrizionale e lo sviluppo dei protocolli biotecnologici.',
        logo: '/images/Partners/CNR-ISPA.jpg',
        color: 'bg-blue-50',
    },
    {
        name: 'Ortogourmet',
        fullName: 'Ortogourmet Società Agricola Srl',
        role: 'Partner Parte B - Produzione Prodotti Freschi',
        description:
            'Azienda specializzata in microgreens e baby leaf con impianti fuori suolo. Referente per la produzione pilota in serra e il trasferimento tecnologico.',
        logo: '/images/Partners/Ortogourmet.png',
        color: 'bg-green-50',
    },
    {
        name: 'Fattorie Canapuglia',
        fullName: 'Fattorie Canapuglia Società Agricola Srls',
        role: 'Partner Parte B - Sementi e Trasformazione',
        description:
            'Esperto nella produzione e commercializzazione di sementi certificate. Referente per la produzione in campo e per la produzione pilota del tempeh.',
        logo: '/images/Partners/CANAPUGLIA.avif',
        color: 'bg-amber-50',
    },
    {
        name: 'Food Hub',
        fullName: 'Food Hub Srl Società Benefit',
        role: 'Responsabile Divulgazione e Formazione',
        description:
            "Startup innovativa focalizzata sul trasferimento dell'innovazione nell'agrifood. Gestisce la comunicazione multicanale, i webinar e la community digitale.",
        logo: '/images/Partners/Food Hub SRL SB.png',
        color: 'bg-purple-50',
    },
];

export default function PartnerPage() {
    return (
        <div className="py-8 bg-[#fbf9f4] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-in">
                    <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
                        Ecosistema di Eccellenza
                    </span>
                    <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Partner di Progetto HEMPRO</h1>
                    <p className="text-gray-500 max-w-3xl mx-auto text-lg font-light leading-relaxed">
                        Un partenariato strategico approvato dalla Regione Puglia nell&apos;ambito della Legge Regionale 21/2017 per
                        la promozione della canapa a fini produttivi e ambientali.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
                    {PARTNERS.map((partner, index) => (
                        <div
                            key={partner.name}
                            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start gap-6">
                                <div
                                    className={`w-20 h-20 ${partner.color} rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform overflow-hidden p-2`}
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} Logo`}
                                        width={60}
                                        height={60}
                                        className="object-contain max-h-14"
                                    />
                                </div>
                                <div className="flex-1">
                                    <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-widest block mb-2">
                                        {partner.role}
                                    </span>
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">{partner.name}</h3>
                                    <p className="text-xs text-gray-400 font-medium mb-6 uppercase tracking-tight">{partner.fullName}</p>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-50">
                                <p className="text-gray-600 font-light leading-relaxed">{partner.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#036C42] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl animate-fade-in">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 transform translate-x-20"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Informazioni Generali</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#47A4B5] flex items-center justify-center font-bold text-xs flex-shrink-0">
                                        €
                                    </div>
                                    <p className="text-white/80 font-light">
                                        <strong>Costo Complessivo:</strong> € 204.000,00
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#47A4B5] flex items-center justify-center font-bold text-xs flex-shrink-0">
                                        ⏱
                                    </div>
                                    <p className="text-white/80 font-light">
                                        <strong>Durata:</strong> 30 Mesi
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#47A4B5] flex items-center justify-center font-bold text-xs flex-shrink-0">
                                        ✓
                                    </div>
                                    <p className="text-white/80 font-light">
                                        <strong>Soggetto Capofila:</strong> CNR-ISPA (Bari)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10 text-center bg-white/5 backdrop-blur-sm">
                            <Image
                                src="/images/hemp_research.png"
                                alt="Ricerca Botanica Biotech Canapa"
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover rounded-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#47A4B5]">
                                Proposta Progettuale HEMPRO
                            </p>
                            <p className="text-xs text-white/60 mt-2">Finanziato ai sensi della Legge Regionale 6 giugno 2017, n. 21</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
