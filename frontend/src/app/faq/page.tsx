import { Metadata } from 'next';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: 'Domande Frequenti (FAQ) | HEMPRO Hub',
    description: 'Risposte alle domande più comuni sul progetto HEMPRO, la coltivazione della canapa e i prodotti innovativi.',
};

const FAQS = [
    {
        q: "Che cos'è il progetto HEMPRO?",
        a: "HEMPRO (Hemp Production, Characterization, and Valorisation of Innovative Products) è un progetto finanziato dalla Regione Puglia che mira a valorizzare la filiera della canapa attraverso lo sviluppo di nuovi prodotti alimentari ad alto valore aggiunto, come microgreens, baby leaf e tempeh di canapa."
    },
    {
        q: "Chi sono i partner del progetto?",
        a: "Il progetto è guidato dal CNR-ISPA (Istituto di Scienze delle Produzioni Alimentari) in collaborazione con due aziende agricole pugliesi, Ortogourmet (specializzata in microgreens) e Fattorie Canapuglia (produzione e trasformazione canapa), e la start-up innovativa Food Hub per la comunicazione e disseminazione."
    },
    {
        q: "Quali sono i prodotti innovativi sviluppati?",
        a: "Il progetto si concentra su due linee principali: prodotti freschi come 'microgreens' e 'baby leaf' di canapa, caratterizzati da un elevato profilo nutrizionale, e prodotti trasformati come il 'tempeh di canapa', un sostituto della carne ottenuto fermentando i semi decorticati."
    },
    {
        q: "Cosa sono i microgreens di canapa?",
        a: "Sono giovani piantine di canapa raccolte allo stadio di prima foglia vera (o cotiledonare). Sono considerati 'superfood' perché contengono una concentrazione di nutrienti e composti benefici spesso superiore rispetto alla pianta adulta."
    },
    {
        q: "Come posso partecipare o collaborare?",
        a: "Le attività del progetto sono aperte a tutti gli stakeholder interessati. Verranno organizzati workshop dimostrativi presso le aziende agricole partner e webinar online. Teniamo molto al trasferimento tecnologico verso le aziende del territorio."
    },
    {
        q: "Il progetto è sostenibile?",
        a: "Sì, la canapa è una coltura altamente sostenibile con ottime capacità di cattura della CO2. Inoltre, le tecniche di coltivazione fuori suolo (idroponica) adottate per i microgreens permettono un notevole risparmio idrico."
    }
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-[#fbf9f4] py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#47A4B5] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Supporto</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#036C42] mb-6">Domande Frequenti</h1>
                    <p className="text-gray-500 text-lg font-light">Tutto quello che devi sapere sul progetto di innovazione della filiera canapicola.</p>
                </div>

                <div className="space-y-6">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:border-[#47A4B5]/30 transition-colors">
                            <h3 className="text-xl font-bold text-[#036C42] mb-4 flex items-start justify-between">
                                {faq.q}
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-light">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-6">Non hai trovato la risposta che cercavi?</p>
                    <a href="/contatti" className="inline-block bg-[#036C42] text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#47A4B5] transition-colors">
                        Scrivici un messaggio
                    </a>
                </div>
            </div>
        </div>
    );
}
