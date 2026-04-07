'use client';

import { useTransition } from 'react';
import { toggleContentPublished } from '@/app/actions/content';

interface Props {
    id: string;
    published: boolean;
}

export function TogglePublishedButton({ id, published }: Props) {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(async () => {
            await toggleContentPublished(id, published);
        });
    };

    return (
        <button
            onClick={handleClick}
            disabled={isPending}
            title={published ? 'Nascondi dal sito' : 'Pubblica sul sito'}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-50 ${
                published
                    ? 'bg-red-50 text-red-600 hover:bg-red-100'
                    : 'bg-green-50 text-green-700 hover:bg-green-100'
            }`}
        >
            {isPending ? '...' : published ? 'Nascondi' : 'Pubblica'}
        </button>
    );
}
