'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { saveContent } from '@/app/actions/content';

interface ContentData {
    id?: string;
    title?: string;
    slug?: string;
    excerpt?: string;
    full_content?: string;
    type?: string;
    category?: string;
    action_code?: string;
    image_url?: string;
    author?: string;
    published_date?: string;
    tags?: string[];
}

export default function ContentForm({ initialData }: { initialData?: ContentData }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const isEditing = !!initialData?.id;

    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        slug: initialData?.slug || '',
        excerpt: initialData?.excerpt || '',
        full_content: initialData?.full_content || '',
        type: initialData?.type || 'NEWS',
        category: initialData?.category || '',
        action_code: initialData?.action_code || 'NEWS',
        image_url: initialData?.image_url || '',
        author: initialData?.author || 'HEMPRO',
        published_date: initialData?.published_date || new Date().toISOString().split('T')[0],
        tags: initialData?.tags?.join(', ') || '',
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        startTransition(async () => {
            const result = await saveContent(initialData?.id ?? null, {
                ...formData,
                tags: formData.tags.split(',').map((t) => t.trim()).filter((t) => t),
            });

            if (result && !result.success) {
                setError(result.error ?? 'Errore sconosciuto.');
            }
            // On success, saveContent calls redirect() server-side
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Titolo</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Slug (URL)</label>
                        <input
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50 font-mono text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tipo</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        >
                            <option value="NEWS">News</option>
                            <option value="SCIENTIFIC">Scientifico</option>
                            <option value="EVENT">Evento</option>
                            <option value="VIDEO">Video</option>
                            <option value="PODCAST">Podcast</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Categoria</label>
                        <input
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            placeholder="Es. Idroponica"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Codice Azione</label>
                        <input
                            name="action_code"
                            value={formData.action_code}
                            onChange={handleChange}
                            placeholder="Es. AZIONE 2A"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Estratto (breve descrizione)</label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Contenuto Completo (Markdown)</label>
                        <textarea
                            name="full_content"
                            value={formData.full_content}
                            onChange={handleChange}
                            rows={15}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50 font-mono text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">URL Immagine</label>
                        <input
                            name="image_url"
                            value={formData.image_url}
                            onChange={handleChange}
                            placeholder="/images/..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Autore</label>
                        <input
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Data Pubblicazione</label>
                        <input
                            type="date"
                            name="published_date"
                            value={formData.published_date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tags (separati da virgola)</label>
                        <input
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="Tag1, Tag2, Tag3"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/20 outline-none transition-all bg-gray-50"
                        />
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-all"
                    >
                        Annulla
                    </button>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-8 py-3 bg-[#036C42] text-white rounded-xl font-bold hover:bg-[#025a36] transition-all shadow-lg shadow-[#036C42]/20 disabled:opacity-70"
                    >
                        {isPending ? 'Salvataggio...' : (isEditing ? 'Salva Modifiche' : 'Crea Contenuto')}
                    </button>
                </div>
            </div>
        </form>
    );
}
