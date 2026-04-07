// Types for content items — values must match the DB ENUM exactly
export enum ContentType {
    NEWS = 'NEWS',
    SCIENTIFIC = 'SCIENTIFIC',
    EVENT = 'EVENT',
    VIDEO = 'VIDEO',
    PODCAST = 'PODCAST',
}

export interface ContentItem {
    id: string;
    slug: string;
    actionCode: string;
    type: ContentType;
    title: string;
    excerpt: string;
    fullContent?: string;
    category: string;
    date: string;
    imageUrl: string;
    author: string;
    readTime?: string;
    videoUrl?: string;
    audioUrl?: string;
    tags: string[];
}
