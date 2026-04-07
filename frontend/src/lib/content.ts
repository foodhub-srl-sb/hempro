import { createClient } from '@/utils/supabase/server';
import { ContentItem, ContentType } from './types';

interface ContentRow {
    id: string;
    slug: string;
    action_code: string | null;
    type: string;
    title: string;
    excerpt: string | null;
    full_content: string | null;
    category: string;
    published_date: string | null;
    image_url: string | null;
    author: string | null;
    tags: string[] | null;
    video_url: string | null;
    audio_url: string | null;
}

// Helper to map DB row to ContentItem
function mapToContentItem(row: ContentRow): ContentItem {
    return {
        id: row.id,
        slug: row.slug,
        actionCode: row.action_code || 'NEWS',
        type: row.type as ContentType,
        title: row.title,
        excerpt: row.excerpt || '',
        fullContent: row.full_content || '',
        category: row.category,
        date: row.published_date ? new Date(row.published_date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }) : '',
        imageUrl: row.image_url || '/images/hemp_research.png',
        author: row.author || 'HEMPRO',
        tags: row.tags || [],
        videoUrl: row.video_url || undefined,
    };
}

export async function getAllContent(): Promise<ContentItem[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('contents')
        .select('*')
        .order('published_date', { ascending: false });

    if (error) {
        console.error('Error fetching content:', error);
        return [];
    }

    return data.map(mapToContentItem);
}

export async function getContentBySlug(slug: string): Promise<ContentItem | undefined> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('contents')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error(`Error fetching content for slug ${slug}:`, error);
        return undefined;
    }

    return mapToContentItem(data);
}

export async function getContentByType(type: ContentType): Promise<ContentItem[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('contents')
        .select('*')
        .eq('type', type)
        .order('published_date', { ascending: false });

    if (error) {
        console.error(`Error fetching content for type ${type}:`, error);
        return [];
    }

    return data.map(mapToContentItem);
}

export async function getFeaturedContent(count: number = 3): Promise<ContentItem[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('contents')
        .select('*')
        .order('published_date', { ascending: false })
        .limit(count);

    if (error) {
        console.error('Error fetching featured content:', error);
        return [];
    }

    return data.map(mapToContentItem);
}

// Kept for compatibility but should be replaced by real filters
export async function getRelatedContent(currentSlug: string, count: number = 3): Promise<ContentItem[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('contents')
        .select('*')
        .neq('slug', currentSlug)
        .limit(count);

    if (error) return [];
    return data.map(mapToContentItem);
}
