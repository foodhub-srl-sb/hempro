import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type DatabaseContent = {
    id: string;
    slug: string;
    title: string;
    excerpt: string | null;
    full_content: string | null;
    type: 'SCIENTIFIC' | 'NEWS' | 'EVENT' | 'VIDEO' | 'PODCAST';
    category: string;
    action_code: string | null;
    image_url: string | null;
    author: string | null;
    published_date: string | null;
    tags: string[] | null;
    video_url: string | null;
    audio_url: string | null;
    created_at: string;
};
