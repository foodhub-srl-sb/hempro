'use client';

import { useState, useTransition } from 'react';
import { submitContact } from '@/app/actions/contact';

export default function ContattiPage() {
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        startTransition(async () => {
            const result = await submitContact({
                name: formData.name,
                email: formData.email,
                organization: formData.organization || undefined,
                message: formData.message,
            });

            if (result.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', organization: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                setError(result.error ?? 'Errore sconosciuto.');
            }
        });
    };

    return (
        <div className="py-8 bg-[#fbf9f4] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Info Section */}
                    <div className="animate-fade-in">
                        <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
                            Contattaci
                        </span>
                        <h1 className="text-5xl font-serif font-bold text-[#036C42] mb-8">
                            Lavoriamo <span className="italic text-[#47A4B5]">Insieme</span>
                        </h1>
                        <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
                            Siamo a disposizione per rispondere alle tue domande sul progetto HEMPRO, discutere potenziali
                            collaborazioni o fornire informazioni sulle nostre ricerche.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-[#036C42]/10 rounded-2xl flex items-center justify-center text-2xl">📍</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Sede Operativa</h3>
                                    <p className="text-gray-500 font-light">
                                        CNR - ISPA Bari
                                        <br />
                                        Via G. Amendola, 122/O
                                        <br />
                                        70126 Bari (BA), Italia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-[#036C42]/10 rounded-2xl flex items-center justify-center text-2xl">📞</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Telefono</h3>
                                    <a href="tel:+390805929357" className="text-[#47A4B5] font-bold hover:underline">+39 080 5929357</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-[#036C42]/10 rounded-2xl flex items-center justify-center text-2xl">✉️</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                    <a href="mailto:info@hempropuglia.it" className="text-[#47A4B5] font-bold hover:underline">info@hempropuglia.it</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Inviaci un Messaggio</h2>

                        {submitted ? (
                            <div className="bg-[#036C42] text-white p-8 rounded-2xl text-center">
                                <div className="text-4xl mb-4">✓</div>
                                <p className="font-bold">Messaggio inviato con successo!</p>
                                <p className="text-white/60 text-sm mt-2">Ti risponderemo al più presto.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                        {error}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                        Nome e Cognome *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 text-gray-900 focus:border-[#47A4B5] focus:outline-none transition-colors"
                                        placeholder="Il tuo nome"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 text-gray-900 focus:border-[#47A4B5] focus:outline-none transition-colors"
                                        placeholder="nome@email.it"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                        Organizzazione
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.organization}
                                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 text-gray-900 focus:border-[#47A4B5] focus:outline-none transition-colors"
                                        placeholder="Azienda o ente (opzionale)"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                        Messaggio *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 text-gray-900 focus:border-[#47A4B5] focus:outline-none transition-colors resize-none"
                                        placeholder="Come possiamo aiutarti?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full bg-[#036C42] text-white py-5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#47A4B5] transition-all shadow-lg shadow-[#036C42]/20 disabled:opacity-70"
                                >
                                    {isPending ? 'Invio in corso...' : 'Invia Messaggio'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
