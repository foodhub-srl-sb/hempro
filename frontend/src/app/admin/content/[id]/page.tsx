
import { createClient } from '@/utils/supabase/server';
import ContentForm from '@/components/admin/ContentForm';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function EditContentPage({ params }: Props) {
    const { id } = await params;
    const isNew = id === 'new';

    let initialData = null;

    if (!isNew) {
        const supabase = await createClient();
        const { data } = await supabase
            .from('contents')
            .select('*')
            .eq('id', id)
            .single();

        initialData = data;
    }

    return (
        <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-serif font-bold text-[#036C42]">
                {isNew ? 'Nuovo Contenuto' : 'Modifica Contenuto'}
            </h1>
            <ContentForm initialData={initialData} />
        </div>
    );
}
