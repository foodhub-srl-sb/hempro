'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';

const NewsletterSchema = z.object({
    email: z.string().email('Inserisci un indirizzo email valido'),
});

export type NewsletterFormState = { success: boolean; error?: string };

export async function subscribeNewsletter(data: unknown): Promise<NewsletterFormState> {
    const parsed = NewsletterSchema.safeParse(data);
    if (!parsed.success) {
        return { success: false, error: parsed.error.issues[0].message };
    }

    const supabase = await createClient();
    const { error } = await supabase.from('subscriptions').insert([{ email: parsed.data.email }]);

    if (error) {
        if (error.code === '23505') {
            return { success: false, error: 'Questa email è già iscritta alla newsletter.' };
        }
        console.error('Newsletter error:', error);
        return { success: false, error: "Errore durante l'iscrizione. Riprova più tardi." };
    }

    return { success: true };
}
