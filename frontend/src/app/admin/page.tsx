
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function AdminDashboard() {
    const supabase = await createClient();

    // Fetch stats in parallel
    const [
        { count: contentCount },
        { count: subCount },
        { count: messageCount },
        { data: recentMessages }
    ] = await Promise.all([
        supabase.from('contents').select('*', { count: 'exact', head: true }),
        supabase.from('subscriptions').select('*', { count: 'exact', head: true }),
        supabase.from('contacts').select('*', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('contacts').select('*').eq('status', 'new').order('created_at', { ascending: false }).limit(5)
    ]);

    return (
        <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-serif font-bold text-[#036C42]">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 font-medium">Contenuti Totali</h3>
                        <div className="w-10 h-10 bg-[#036C42]/10 rounded-full flex items-center justify-center text-[#036C42]">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{contentCount || 0}</p>
                    <div className="mt-4">
                        <Link href="/admin/content" className="text-sm text-[#036C42] hover:text-[#025a36] font-medium">
                            Gestisci contenuti &rarr;
                        </Link>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 font-medium">Iscritti Newsletter</h3>
                        <div className="w-10 h-10 bg-[#47A4B5]/10 rounded-full flex items-center justify-center text-[#47A4B5]">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{subCount || 0}</p>
                    <div className="mt-4">
                        <Link href="/admin/submissions" className="text-sm text-[#47A4B5] hover:text-[#388a99] font-medium">
                            Vedi lista &rarr;
                        </Link>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 font-medium">Messaggi Nuovi</h3>
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{messageCount || 0}</p>
                    <div className="mt-4">
                        <Link href="/admin/messages" className="text-sm text-yellow-600 hover:text-yellow-700 font-medium">
                            Vedi messaggi &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            {/* Recent Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Attività Recente</h2>
                </div>
                {recentMessages && recentMessages.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                        {recentMessages.map((msg: any) => (
                            <div key={msg.id} className="p-6 hover:bg-gray-50 transition-all flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-gray-900">{msg.name}</h4>
                                    <p className="text-sm text-gray-500">{msg.organization || 'Privato'} • {new Date(msg.created_at).toLocaleDateString()}</p>
                                    <p className="text-gray-600 mt-2 line-clamp-1">{msg.message}</p>
                                </div>
                                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Nuovo</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-12 text-center text-gray-500">
                        Nessuna nuova attività da segnalare.
                    </div>
                )}
            </div>
        </div>
    );
}
