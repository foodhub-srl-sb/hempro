import { getAllContent } from '@/lib/content';
import { ResourceFilters } from '@/components/ResourceFilters';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Risorse | HEMPRO Hub',
    description: 'Esplora tutti i report tecnici, video, podcast e documenti scientifici del progetto HEMPRO.',
};

export const revalidate = 3600;

export default async function RisorsePage() {
    const allContent = await getAllContent();

    return (
        <main className="min-h-screen bg-[#fbf9f4]">
            {/* Header Section */}
            <section className="pt-16 pb-24 bg-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#036C42 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.6em] block mb-6">
                            Hub Tecnico
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#036C42] leading-tight mb-8">
                            Archivio <span className="italic text-[#47A4B5]">Risorse</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            Report scientifici, video tutorial, podcast e documenti tecnici prodotti dal network HEMPRO.
                            Tutti i contenuti sono liberamente accessibili.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section with Filters */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceFilters items={allContent} />
            </section>

            {/* Glossario Azioni */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.6em] block mb-4">
                            Progetto HEMPRO
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-gray-900">
                            Glossario delle Azioni
                        </h2>
                        <p className="mt-3 text-gray-500 font-light">
                            I contenuti dell&apos;archivio sono classificati in base alle Azioni del progetto di ricerca, articolate in due parti.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Parte A */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="bg-[#036C42] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg">
                                    Parte A — Ricerca
                                </span>
                                <span className="text-xs text-gray-400">CNR-ISPA</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { code: 'A1', label: 'Project management', desc: 'Coordinamento, monitoraggio fisico, finanziario e valutazione interna del progetto.' },
                                    { code: 'A2', label: 'Coltivazione microgreens e baby leaf', desc: 'Ottimizzazione delle condizioni di coltivazione di microgreens e baby leaf di canapa.' },
                                    { code: 'A3', label: 'Produzione Tempeh di canapa', desc: 'Selezione dei processi biotecnologici per la produzione di Tempeh di canapa in scala di laboratorio.' },
                                    { code: 'A4', label: 'Caratterizzazione nutrizionale', desc: 'Analisi del profilo nutrizionale dei prodotti ottenuti in laboratorio e a livello aziendale.' },
                                ].map((a) => (
                                    <div key={a.code} className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#036C42]/20 hover:bg-[#036C42]/[0.02] transition-all">
                                        <span className="shrink-0 w-10 h-10 rounded-xl bg-[#036C42]/10 text-[#036C42] text-sm font-bold flex items-center justify-center">
                                            {a.code}
                                        </span>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{a.label}</p>
                                            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{a.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Parte B */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="bg-[#47A4B5] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg">
                                    Parte B — Sperimentazione
                                </span>
                                <span className="text-xs text-gray-400">Canapuglia · Ortogourmet</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { code: 'B1', label: 'Produzione in campo', desc: 'Produzione di canapa da seme e ottenimento del seme decorticato da differenti varietà.' },
                                    { code: 'B2', label: 'Trasferimento in azienda', desc: 'Trasferimento dei protocolli di coltivazione di microgreens e baby leaf in contesto aziendale commerciale.' },
                                    { code: 'B3', label: 'Scala pilota Tempeh', desc: 'Trasferimento su scala pilota della produzione di Tempeh base canapa in azienda.' },
                                    { code: 'B7', label: 'Divulgazione e formazione', desc: 'Attività informative, didattiche e dimostrative per diffondere la conoscenza della canapa nel settore alimentare.' },
                                ].map((b) => (
                                    <div key={b.code} className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#47A4B5]/20 hover:bg-[#47A4B5]/[0.02] transition-all">
                                        <span className="shrink-0 w-10 h-10 rounded-xl bg-[#47A4B5]/10 text-[#47A4B5] text-sm font-bold flex items-center justify-center">
                                            {b.code}
                                        </span>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{b.label}</p>
                                            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
