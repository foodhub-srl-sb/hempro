
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function ContentListPage() {
    const supabase = await createClient();
    const { data: contents } = await supabase
        .from('contents')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-serif font-bold text-[#036C42]">Gestione Contenuti</h1>
                <Link
                    href="/admin/content/new"
                    className="bg-[#036C42] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#025a36] transition-all shadow-lg shadow-[#036C42]/20 flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nuovo Contenuto
                </Link>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="p-6 font-bold text-gray-500 text-xs uppercase tracking-wider">Titolo</th>
                                <th className="p-6 font-bold text-gray-500 text-xs uppercase tracking-wider">Tipo</th>
                                <th className="p-6 font-bold text-gray-500 text-xs uppercase tracking-wider">Categoria</th>
                                <th className="p-6 font-bold text-gray-500 text-xs uppercase tracking-wider">Data</th>
                                <th className="p-6 font-bold text-gray-500 text-xs uppercase tracking-wider text-right">Azioni</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {contents?.map((item: any) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-all group">
                                    <td className="p-6">
                                        <div className="font-bold text-gray-900 group-hover:text-[#036C42] transition-colors">{item.title}</div>
                                        <div className="text-xs text-gray-400 mt-1">{item.slug}</div>
                                    </td>
                                    <td className="p-6">
                                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-bold">
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="p-6 text-sm text-gray-600 font-medium">
                                        {item.category}
                                    </td>
                                    <td className="p-6 text-sm text-gray-500">
                                        {item.published_date ? new Date(item.published_date).toLocaleDateString() : '-'}
                                    </td>
                                    <td className="p-6 text-right">
                                        <Link
                                            href={`/admin/content/${item.id}`}
                                            className="text-[#47A4B5] font-bold hover:text-[#388a99] transition-colors"
                                        >
                                            Modifica
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {(!contents || contents.length === 0) && (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-gray-500">
                                        Nessun contenuto trovato. Crea il primo!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
