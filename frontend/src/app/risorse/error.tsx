'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function RisorseError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Risorse error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#fbf9f4] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">
                    Errore nel caricamento
                </span>
                <h1 className="text-4xl font-serif font-bold text-[#036C42] mb-4">
                    Risorse non disponibili
                </h1>
                <p className="text-gray-500 font-light mb-10">
                    Non è stato possibile caricare le risorse. Il servizio potrebbe essere temporaneamente non disponibile.
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-[#036C42] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#47A4B5] transition-all"
                    >
                        Riprova
                    </button>
                    <Link
                        href="/"
                        className="px-6 py-3 border border-[#036C42]/20 text-[#036C42] rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#036C42] hover:text-white transition-all"
                    >
                        Torna alla Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
