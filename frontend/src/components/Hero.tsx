"use client";

import React from 'react';
import Image from 'next/image';

export function Hero() {
    const scrollToActions = () => {
        document.getElementById('actions')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative bg-[#fbf9f4] overflow-hidden min-h-[90vh] flex items-center">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
            <div
                className="absolute top-1/2 left-0 w-full h-full opacity-[0.03] pointer-events-none -translate-y-1/2"
                style={{ backgroundImage: 'radial-gradient(#036C42 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="lg:w-3/5 py-24">
                    <div className="inline-flex items-center space-x-3 bg-white px-5 py-2 rounded-full mb-10 shadow-sm border border-gray-100">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#47A4B5] animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#036C42]">L.R. 21/2017 Regione Puglia</span>
                    </div>

                    <h1 className="text-6xl lg:text-[10rem] font-serif font-bold text-[#036C42] leading-[0.85] mb-12 tracking-tight">
                        HEMPRO <br />
                        <span className="text-[#47A4B5] italic ml-4 lg:ml-12 text-[0.8em]">Hub</span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-gray-500 font-light max-w-xl mb-16 leading-relaxed">
                        Innovazione scientifica per la filiera della{' '}
                        <span className="text-[#036C42] font-semibold">canapa alimentare</span> in Puglia. Dalla ricerca
                        biotecnologica del <span className="text-[#036C42] font-semibold italic">CNR</span> all&apos;impresa
                        agricola.
                    </p>

                    <div className="flex flex-wrap gap-8 items-center">
                        <button
                            onClick={scrollToActions}
                            className="bg-[#036C42] text-white px-12 py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-[#47A4B5] transition-all shadow-2xl shadow-[#036C42]/20 hover:shadow-[#47A4B5]/30 hover:-translate-y-1"
                        >
                            Scopri le Azioni
                        </button>
                        <div className="flex items-center gap-6 border-l border-gray-200 pl-8">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold">
                                    CN
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">
                                    RP
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-[10px] font-bold">
                                    +2
                                </div>
                            </div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                                Progetto Multistakeholder <br />
                                <span className="text-[#036C42]">Lead: CNR-ISPA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Component */}
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5">
                <div className="h-full w-full relative overflow-hidden">
                    <Image
                        className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                        src="/images/industrial_hemp_field.png"
                        alt="Coltivazione di Canapa Industriale in Puglia"
                        fill
                        sizes="40vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f4] via-[#fbf9f4]/10 to-transparent"></div>
                    <div className="absolute bottom-20 left-10 glass p-10 rounded-[3rem] border border-white/20 shadow-2xl backdrop-blur-2xl">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#47A4B5] mb-4">Focus Puglia</p>
                        <h4 className="text-3xl font-serif font-bold text-[#036C42] mb-2 leading-tight">
                            Varietà Certificate <br />
                            per il Territorio
                        </h4>
                        <div className="flex gap-4 mt-8">
                            <div className="w-12 h-px bg-[#036C42]/20 self-center"></div>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#036C42]/40 italic">
                                Ricerca Agronomica CNR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
