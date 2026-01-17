import React from 'react';

const stats = [
    { value: '4', label: 'Partner Leader' },
    { value: '3', label: 'Linee Prodotto' },
    { value: '30', label: 'Mesi Ricerca' },
    { value: '100%', label: 'Finanziato Puglia' },
];

export function StatsSection() {
    return (
        <section className="py-20 bg-[#036C42] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="group cursor-default">
                            <p className="text-4xl font-serif font-bold mb-2 group-hover:text-[#47A4B5] transition-colors">
                                {stat.value}
                            </p>
                            <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
