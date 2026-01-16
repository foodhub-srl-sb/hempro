
export enum ContentType {
  BLOG = 'DOCUMENTO',
  VIDEO = 'VIDEO',
  WEBINAR = 'WEBINAR',
  SCIENTIFIC = 'RICERCA',
  AUDIO = 'AUDIO/PODCAST',
  NEWS = 'NEWS FLASH'
}

export interface ContentItem {
  id: string;
  actionCode: string; // E.g., Azione 2A
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

export type ViewType = 'home' | 'resources' | 'about' | 'detail' | 'partners' | 'contacts';
