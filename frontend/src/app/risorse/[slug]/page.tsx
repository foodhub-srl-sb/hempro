import { getContentBySlug, getAllContent } from '@/lib/content';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const content = await getAllContent();
    return content.map((item) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const item = await getContentBySlug(slug);
    if (!item) return { title: 'Risorsa non trovata' };

    return {
        title: `${item.title} | HEMPRO Hub`,
        description: item.excerpt,
    };
}

export const revalidate = 0;

export default async function RisorsaDetailPage({ params }: Props) {
    const { slug } = await params;
    const item = await getContentBySlug(slug);

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="relative h-[50vh] overflow-hidden">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>

                {/* Back Button */}
                <Link
                    href="/risorse"
                    className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-black/40 transition-all"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-bold">Torna alle Risorse</span>
                </Link>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
                <div className="bg-white rounded-[3rem] shadow-2xl p-12 md:p-16">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <span className="bg-[#036C42] text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                            {item.actionCode}
                        </span>
                        <span className="text-[#47A4B5] text-sm font-bold">{item.category}</span>
                        <span className="text-gray-400 text-sm">{item.date}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                        {item.title}
                    </h1>

                    {/* Author */}
                    <div className="flex items-center gap-4 mb-12 pb-12 border-b border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-[#036C42]/10 flex items-center justify-center text-lg font-bold text-[#036C42]">
                            {item.author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">{item.author}</p>
                            <p className="text-sm text-gray-400">Autore</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <ReactMarkdown
                            components={{
                                h1: ({ ...props }) => <h1 className="text-3xl font-serif font-bold text-[#036C42] mt-10 mb-6 leading-tight" {...props} />,
                                h2: ({ ...props }) => <h2 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6 border-l-4 border-[#47A4B5] pl-4" {...props} />,
                                h3: ({ ...props }) => <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4" {...props} />,
                                p: ({ ...props }) => <p className="text-gray-600 text-lg leading-relaxed font-light mb-6" {...props} />,
                                ul: ({ ...props }) => <ul className="list-disc list-outside ml-6 space-y-2 mb-8 text-gray-600" {...props} />,
                                li: ({ ...props }) => <li className="pl-2" {...props} />,
                                strong: ({ ...props }) => <strong className="font-bold text-gray-900" {...props} />,
                                blockquote: ({ ...props }) => <blockquote className="border-l-4 border-[#036C42]/20 pl-6 italic text-gray-500 my-8" {...props} />,
                            }}
                        >
                            {item.fullContent || item.excerpt}
                        </ReactMarkdown>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Tags</p>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-lg"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div className="h-32"></div>
        </main>
    );
}
