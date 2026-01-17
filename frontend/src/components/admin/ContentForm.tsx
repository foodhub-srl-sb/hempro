'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function ContentForm({ initialData }: { initialData?: any }) {
    const router = useRouter();
    const supabase = createClient();
    const isEditing = !!initialData?.id;

    const [loading, setLoading] = useState(false);
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
        tags: initialData?.tags?.join(', ') || ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            tags: formData.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t)
        };

        try {
            if (isEditing) {
                const { error } = await supabase
                    .from('contents')
                    .update(payload)
                    .eq('id', initialData.id);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from('contents')
                    .insert([payload]);
                if (error) throw error;
            }

            router.push('/admin/content');
            router.refresh();
        } catch (error) {
            console.error('Error saving content:', error);
            alert('Errore durante il salvataggio.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
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
                        disabled={loading}
                        className="px-8 py-3 bg-[#036C42] text-white rounded-xl font-bold hover:bg-[#025a36] transition-all shadow-lg shadow-[#036C42]/20 disabled:opacity-70"
                    >
                        {loading ? 'Salvataggio...' : (isEditing ? 'Salva Modifiche' : 'Crea Contenuto')}
                    </button>
                </div>
            </div>
        </form>
    );
}
