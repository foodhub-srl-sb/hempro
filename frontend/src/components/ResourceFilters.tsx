'use client';

import { useState, useMemo } from 'react';
import { ContentCard } from './ContentCard';
import { ContentItem } from '@/lib/types';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ResourceFiltersProps {
    items: ContentItem[];
}

const CONTENT_TYPES = [
    { value: 'all', label: 'Tutti', icon: '📚' },
    { value: 'SCIENTIFIC', label: 'Ricerca', icon: '🔬' },
    { value: 'NEWS', label: 'News', icon: '📰' },
    { value: 'VIDEO', label: 'Video', icon: '🎬' },
    { value: 'PODCAST', label: 'Podcast', icon: '🎧' },
];

export function ResourceFilters({ items }: ResourceFiltersProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showFilters, setShowFilters] = useState(false);

    // Extract unique categories from items
    const categories = useMemo(() => {
        const cats = [...new Set(items.map(item => item.category))];
        return cats.sort();
    }, [items]);

    // Filter items based on search and filters
    const filteredItems = useMemo(() => {
        return items.filter(item => {
            // Search filter
            const matchesSearch = searchQuery === '' ||
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            // Type filter
            const matchesType = selectedType === 'all' || item.type === selectedType;

            // Category filter
            const matchesCategory = !selectedCategory || item.category === selectedCategory;

            return matchesSearch && matchesType && matchesCategory;
        });
    }, [items, searchQuery, selectedType, selectedCategory]);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedType('all');
        setSelectedCategory(null);
    };

    const hasActiveFilters = searchQuery !== '' || selectedType !== 'all' || selectedCategory !== null;

    return (
        <div>
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-1 relative">
                        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cerca per titolo, tag o parola chiave..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#47A4B5] focus:ring-2 focus:ring-[#47A4B5]/10 transition-all"
                        />
                    </div>

                    {/* Filter Toggle Button (Mobile) */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-[#036C42]/10 text-[#036C42] rounded-xl font-medium"
                    >
                        <FunnelIcon className="w-5 h-5" />
                        Filtri
                    </button>

                    {/* Clear Filters */}
                    {hasActiveFilters && (
                        <button
                            onClick={clearFilters}
                            className="flex items-center gap-2 px-4 py-3 text-gray-500 hover:text-red-500 transition-colors"
                        >
                            <XMarkIcon className="w-4 h-4" />
                            <span className="text-sm">Resetta</span>
                        </button>
                    )}
                </div>

                {/* Type Filters - Always visible on desktop */}
                <div className={`mt-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Tipo di Contenuto</p>
                    <div className="flex flex-wrap gap-2">
                        {CONTENT_TYPES.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => setSelectedType(type.value)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedType === type.value
                                        ? 'bg-[#036C42] text-white shadow-lg shadow-[#036C42]/20'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <span>{type.icon}</span>
                                <span>{type.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Filters */}
                <div className={`mt-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Categoria</p>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedCategory === null
                                    ? 'bg-[#47A4B5] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Tutte
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedCategory === cat
                                        ? 'bg-[#47A4B5] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-8 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                    {filteredItems.length} {filteredItems.length === 1 ? 'risorsa trovata' : 'risorse trovate'}
                </span>
                {hasActiveFilters && (
                    <span className="text-xs text-[#47A4B5]">
                        Filtri attivi
                    </span>
                )}
            </div>

            {/* Content Grid */}
            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredItems.map((item) => (
                        <ContentCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nessun risultato</h3>
                    <p className="text-gray-500">Prova a modificare i filtri o la ricerca</p>
                    <button
                        onClick={clearFilters}
                        className="mt-4 text-[#47A4B5] font-medium hover:underline"
                    >
                        Resetta tutti i filtri
                    </button>
                </div>
            )}
        </div>
    );
}
