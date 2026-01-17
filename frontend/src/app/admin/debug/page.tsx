
import { createClient } from '@/utils/supabase/server';

export const revalidate = 0;

export default async function DebugPage() {
    const supabase = await createClient();
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    let connectionStatus = 'Unknown';
    let errorMessage = '';
    let count = null;

    try {
        // Attempt to fetch count of contents
        const { count: c, error } = await supabase.from('contents').select('*', { count: 'exact', head: true });
        if (error) throw error;
        count = c;
        connectionStatus = 'Success';
    } catch (e: any) {
        connectionStatus = 'Error';
        errorMessage = e.message;
    }

    return (
        <div className="p-8 space-y-6 max-w-2xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-gray-800">Supabase Connection Debug</h1>
            <p className="text-gray-600">This page tests the server-side connection to Supabase.</p>

            <div className="space-y-4">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Environment Variables</h3>
                    <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">NEXT_PUBLIC_SUPABASE_URL</span>
                            <span className={url ? "text-green-600" : "text-red-600"}>
                                {url ? `Defined` : 'UNDEFINED ❌'}
                            </span>
                        </div>
                        <div className="flex justify-between pt-2">
                            <span className="text-gray-500">NEXT_PUBLIC_SUPABASE_ANON_KEY</span>
                            <span className={key ? "text-green-600" : "text-red-600"}>
                                {key ? `Defined` : 'UNDEFINED ❌'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={`p-6 rounded-xl border ${connectionStatus === 'Success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <h3 className={`font-bold text-lg mb-2 ${connectionStatus === 'Success' ? 'text-green-800' : 'text-red-800'}`}>
                        Connection Status: {connectionStatus}
                    </h3>

                    {errorMessage && (
                        <div className="bg-white p-4 rounded border border-red-100 text-red-600 font-mono text-xs break-all">
                            {errorMessage}
                        </div>
                    )}

                    {count !== null && (
                        <p className="text-green-700">
                            ✅ Successfully connected to database.<br />
                            Found <strong>{count}</strong> rows in 'contents' table.
                        </p>
                    )}
                </div>

                <div className="text-xs text-gray-400 text-center pt-8">
                    Debug ID: {new Date().toISOString()}
                </div>
            </div>
        </div>
    );
}
