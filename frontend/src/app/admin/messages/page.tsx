
import { createClient } from '@/utils/supabase/server';

export default async function MessagesPage() {
    const supabase = await createClient();
    const { data: messages } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-serif font-bold text-[#036C42]">Messaggi Contatti</h1>

            <div className="space-y-4">
                {messages?.map((msg: any) => (
                    <div key={msg.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{msg.name}</h3>
                                <p className="text-sm text-gray-500">{msg.email}</p>
                                {msg.organization && (
                                    <p className="text-xs text-[#036C42] font-bold uppercase tracking-wide mt-1">{msg.organization}</p>
                                )}
                            </div>
                            <div className="text-right">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 ${msg.status === 'new' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    {msg.status}
                                </span>
                                <p className="text-xs text-gray-400">
                                    {new Date(msg.created_at).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {msg.message}
                        </div>
                    </div>
                ))}

                {(!messages || messages.length === 0) && (
                    <div className="p-12 text-center text-gray-500 bg-white rounded-3xl border border-gray-100">
                        Nessun messaggio ricevuto.
                    </div>
                )}
            </div>
        </div>
    );
}
