
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { ContentType, ContentItem } from '../types';
import { MOCK_CONTENT } from '../constants';
import { ContentCard } from './ContentCard';
import { ResourceListView } from './ResourceListView';
import { ResourceFilters, SortOption } from './ResourceFilters';
import { Pagination } from './Pagination';

interface ResourcesViewProps {
  onOpenDetail: (id: string) => void;
}

const ITEMS_PER_PAGE_GRID = 6;
const ITEMS_PER_PAGE_LIST = 10;

// Optimized date parsing with simple cache for common values
const dateCache: Record<string, number> = {};
const parseItalianDate = (dateStr: string): number => {
  if (dateCache[dateStr]) return dateCache[dateStr];
  
  const months: Record<string, string> = {
    'Gen': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'Mag': '05', 'Giu': '06',
    'Lug': '07', 'Ago': '08', 'Set': '09', 'Ott': '10', 'Nov': '11', 'Dic': '12'
  };
  const parts = dateStr.split(' ');
  if (parts.length < 3) return 0;
  const day = parts[0].padStart(2, '0');
  const month = months[parts[1]] || '01';
  const year = parts[2];
  
  const ts = new Date(`${year}-${month}-${day}`).getTime();
  dateCache[dateStr] = ts;
  return ts;
};

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onOpenDetail }) => {
  const [filter, setFilter] = useState<ContentType | 'ALL'>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string | 'ALL'>('ALL');
  const [tagFilter, setTagFilter] = useState<string | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [tagQuery, setTagQuery] = useState('');
  const [sortType, setSortType] = useState<SortOption>('DATE_DESC');
  const [displayMode, setDisplayMode] = useState<'GRID' | 'LIST'>('GRID');
  const [currentPage, setCurrentPage] = useState(1);

  // Memoize categories to prevent recalculation on every render
  const categories = useMemo(() => {
    const cats = new Set(MOCK_CONTENT.map(item => item.category));
    return ['ALL', ...Array.from(cats)];
  }, []);

  // Memoize all tags
  const allTags = useMemo(() => {
    const tags = new Set(MOCK_CONTENT.flatMap(item => item.tags));
    return ['ALL', ...Array.from(tags).sort()];
  }, []);

  // Optimization: Pre-calculate searchable fields and timestamps
  const contentWithMetadata = useMemo(() => {
    return MOCK_CONTENT.map(item => ({
      ...item,
      searchStr: `${item.title} ${item.excerpt} ${item.actionCode}`.toLowerCase(),
      timestamp: parseItalianDate(item.date)
    }));
  }, []);

  const filteredContent = useMemo(() => {
    let result = [...contentWithMetadata];
    
    if (filter !== 'ALL') result = result.filter(item => item.type === filter);
    if (categoryFilter !== 'ALL') result = result.filter(item => item.category === categoryFilter);
    if (tagFilter !== 'ALL') result = result.filter(item => item.tags.includes(tagFilter));
    
    if (tagQuery.trim()) {
      const tq = tagQuery.toLowerCase();
      result = result.filter(item => item.tags.some(tag => tag.toLowerCase().includes(tq)));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(item => item.searchStr.includes(q));
    }

    // Faster sort using pre-calculated metadata
    result.sort((a, b) => {
      switch (sortType) {
        case 'DATE_DESC': return b.timestamp - a.timestamp;
        case 'DATE_ASC': return a.timestamp - b.timestamp;
        case 'TITLE_ASC': return a.title.localeCompare(b.title);
        case 'TITLE_DESC': return b.title.localeCompare(a.title);
        default: return 0;
      }
    });
    
    return result;
  }, [filter, categoryFilter, tagFilter, tagQuery, searchQuery, sortType, contentWithMetadata]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, categoryFilter, tagFilter, tagQuery, searchQuery, displayMode, sortType]);

  const itemsPerPage = displayMode === 'GRID' ? ITEMS_PER_PAGE_GRID : ITEMS_PER_PAGE_LIST;
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
  
  const paginatedContent = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredContent.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredContent, currentPage, itemsPerPage]);

  const resetFilters = useCallback(() => {
    setFilter('ALL');
    setCategoryFilter('ALL');
    setTagFilter('ALL');
    setSearchQuery('');
    setTagQuery('');
    setSortType('DATE_DESC');
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen animate-fade-in" id="resource-top">
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <span className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Knowledge Repository</span>
            <h1 className="text-5xl font-serif font-bold text-gray-900 leading-tight">Risorse Tecniche</h1>
          </div>
          
          <div className="bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm flex items-center">
             <button 
              onClick={() => setDisplayMode('GRID')}
              className={`px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${displayMode === 'GRID' ? 'bg-[#036C42] text-white shadow-md' : 'text-gray-400 hover:text-gray-900'}`}
             >
               Griglia
             </button>
             <button 
              onClick={() => setDisplayMode('LIST')}
              className={`px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${displayMode === 'LIST' ? 'bg-[#036C42] text-white shadow-md' : 'text-gray-400 hover:text-gray-900'}`}
             >
               Elenco
             </button>
          </div>
        </div>

        <ResourceFilters 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          tagQuery={tagQuery}
          onTagQueryChange={setTagQuery}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          categories={categories}
          tagFilter={tagFilter}
          onTagChange={setTagFilter}
          allTags={allTags}
          typeFilter={filter}
          onTypeChange={setFilter}
          sortType={sortType}
          onSortChange={setSortType}
          resultsCount={filteredContent.length}
          onReset={resetFilters}
        />
      </div>

      {paginatedContent.length > 0 ? (
        <>
          {displayMode === 'GRID' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {paginatedContent.map(item => <ContentCard key={item.id} item={item} onOpen={onOpenDetail} />)}
            </div>
          ) : (
            <ResourceListView items={paginatedContent} onItemClick={onOpenDetail} />
          )}

          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="text-center py-40 bg-white rounded-[3rem] border border-dashed border-gray-200 shadow-inner">
          <div className="text-5xl mb-6 grayscale">📂</div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Nessuna corrispondenza trovata</h3>
          <p className="text-gray-400 font-light mb-10 max-w-sm mx-auto leading-relaxed">
            La ricerca per i criteri impostati non ha prodotto risultati. Prova a semplificare i tag o rimuovere la query testuale.
          </p>
          <button 
            onClick={resetFilters}
            className="px-8 py-4 bg-[#036C42] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#47A4B5] transition-all"
          >
            Azzera tutti i filtri
          </button>
        </div>
      )}
    </section>
  );
};
