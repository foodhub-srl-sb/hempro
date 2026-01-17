"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContentType, ContentItem } from '@/lib/types';

interface Props {
    item: ContentItem;
}

export const ContentCard: React.FC<Props> = memo(({ item }) => {
    const getIcon = () => {
        switch (item.type) {
            case ContentType.BLOG: return '📜';
            case ContentType.VIDEO: return '🎥';
            case ContentType.WEBINAR: return '🎤';
            case ContentType.SCIENTIFIC: return '🔬';
            case ContentType.AUDIO: return '🎧';
            case ContentType.NEWS: return '⚡';
            default: return '📄';
        }
    };

    const getTypeColor = () => {
        switch (item.type) {
            case ContentType.AUDIO: return 'bg-purple-600';
            case ContentType.NEWS: return 'bg-amber-500';
            default: return 'bg-[#036C42]';
        }
    };

    return (
        <Link
            href={`/risorse/${item.slug}`}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full"
        >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute top-4 left-4 ${getTypeColor()} px-3 py-1 rounded-md text-[9px] font-bold text-white uppercase tracking-widest`}>
                    {item.actionCode}
                </div>
                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-lg text-[9px] font-bold text-[#036C42] flex items-center gap-1.5 uppercase tracking-widest border border-white/40 bg-white/80 backdrop-blur-sm">
                    <span className="text-sm">{getIcon()}</span>
                    {item.type}
                </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-[10px] text-[#47A4B5] font-bold mb-3 uppercase tracking-[0.2em]">
                    {item.category} <span className="mx-2 opacity-30">|</span> {item.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#036C42] group-hover:underline decoration-[#47A4B5] decoration-2 underline-offset-4 transition-all duration-300 leading-tight font-serif">
                    {item.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-[8px] font-bold text-gray-400 border border-gray-100 px-2 py-0.5 rounded-md uppercase tracking-widest group-hover:border-[#036C42]/10 group-hover:text-[#036C42]/60 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 text-sm mb-8 flex-1 line-clamp-2 leading-relaxed font-light">
                    {item.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#036C42]/5 flex items-center justify-center text-[10px] font-bold text-[#036C42] border border-[#036C42]/10">
                            {item.author.charAt(0)}
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Ref. {item.author}</span>
                    </div>
                    <div className="text-[#036C42] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 group/btn transition-colors duration-300 group-hover:text-[#47A4B5]">
                        Consulta
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
});

ContentCard.displayName = 'ContentCard';
