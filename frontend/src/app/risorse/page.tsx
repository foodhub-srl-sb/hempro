import { getAllContent } from '@/lib/content';
import { ResourceFilters } from '@/components/ResourceFilters';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Risorse | HEMPRO Hub',
    description: 'Esplora tutti i report tecnici, video, podcast e documenti scientifici del progetto HEMPRO.',
};

export const revalidate = 0;

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
        </main>
    );
}
