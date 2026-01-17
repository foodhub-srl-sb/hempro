
import { createClient } from '@/utils/supabase/server';

export default async function SubscriptionsPage() {
    const supabase = await createClient();
    const { data: subs } = await supabase
        .from('subscriptions')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-serif font-bold text-[#036C42]">Iscrizioni Newsletter</h1>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="p-6 font-bold text-gray-500 text-xs uppercase tracking-wider">Email</th>
                            <th className="p-6 font-bold text-gray-500 text-xs uppercase tracking-wider">Data Iscrizione</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {subs?.map((item: any) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-all">
                                <td className="p-6 text-gray-900 font-medium">
                                    {item.email}
                                </td>
                                <td className="p-6 text-sm text-gray-500">
                                    {new Date(item.created_at).toLocaleDateString()} {new Date(item.created_at).toLocaleTimeString()}
                                </td>
                            </tr>
                        ))}
                        {(!subs || subs.length === 0) && (
                            <tr>
                                <td colSpan={2} className="p-12 text-center text-gray-500">
                                    Nessuna iscrizione trovata.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
