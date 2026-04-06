'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';

const ContactSchema = z.object({
    name: z.string().min(2, 'Il nome deve avere almeno 2 caratteri').max(100),
    email: z.string().email('Inserisci un indirizzo email valido'),
    organization: z.string().max(200).optional(),
    message: z.string().min(10, 'Il messaggio deve avere almeno 10 caratteri').max(5000),
});

export type ContactFormState = { success: boolean; error?: string };

export async function submitContact(data: unknown): Promise<ContactFormState> {
    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
        return { success: false, error: parsed.error.issues[0].message };
    }

    const supabase = await createClient();
    const { error } = await supabase.from('contacts').insert([{
        name: parsed.data.name,
        email: parsed.data.email,
        organization: parsed.data.organization || null,
        message: parsed.data.message,
    }]);

    if (error) {
        console.error('Contact form error:', error);
        return { success: false, error: "Errore durante l'invio. Riprova più tardi." };
    }

    return { success: true };
}
