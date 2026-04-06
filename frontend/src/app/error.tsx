'use client';

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Global error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#fbf9f4] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="w-20 h-20 bg-[#036C42]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">
                    ⚠️
                </div>
                <h1 className="text-3xl font-serif font-bold text-[#036C42] mb-4">
                    Qualcosa è andato storto
                </h1>
                <p className="text-gray-500 font-light mb-8">
                    Si è verificato un errore inaspettato. Riprova o contattaci se il problema persiste.
                </p>
                <button
                    onClick={reset}
                    className="px-8 py-4 bg-[#036C42] text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#47A4B5] transition-all"
                >
                    Riprova
                </button>
            </div>
        </div>
    );
}
