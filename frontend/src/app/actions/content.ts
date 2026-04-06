'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const ContentSchema = z.object({
    title: z.string().min(1, 'Il titolo è obbligatorio').max(500),
    slug: z
        .string()
        .min(1, 'Lo slug è obbligatorio')
        .max(200)
        .regex(/^[a-z0-9-]+$/, 'Lo slug può contenere solo lettere minuscole, numeri e trattini'),
    excerpt: z.string().max(1000).optional(),
    full_content: z.string().optional(),
    type: z.enum(['NEWS', 'SCIENTIFIC', 'EVENT', 'VIDEO', 'PODCAST']),
    category: z.string().min(1, 'La categoria è obbligatoria').max(200),
    action_code: z.string().max(100).optional(),
    image_url: z.string().max(500).optional(),
    author: z.string().max(200).optional(),
    published_date: z.string().optional(),
    tags: z.array(z.string()).optional(),
});

export type ContentFormState = { success: boolean; error?: string };

export async function saveContent(id: string | null, data: unknown): Promise<ContentFormState> {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return { success: false, error: 'Non autorizzato.' };
    }

    const parsed = ContentSchema.safeParse(data);
    if (!parsed.success) {
        return { success: false, error: parsed.error.issues[0].message };
    }

    if (id) {
        const { error } = await supabase.from('contents').update(parsed.data).eq('id', id);
        if (error) {
            console.error('Content update error:', error);
            return { success: false, error: 'Errore durante il salvataggio.' };
        }
    } else {
        const { error } = await supabase.from('contents').insert([parsed.data]);
        if (error) {
            console.error('Content insert error:', error);
            return { success: false, error: 'Errore durante il salvataggio.' };
        }
    }

    // Invalidate ISR cache so public pages reflect the update immediately
    revalidatePath('/', 'layout');

    redirect('/admin/content');
}
