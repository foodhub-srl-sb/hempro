
import React from 'react';
import { ContentType } from '../types';

export type SortOption = 'DATE_DESC' | 'DATE_ASC' | 'TITLE_ASC' | 'TITLE_DESC';

interface ResourceFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  tagQuery: string;
  onTagQueryChange: (query: string) => void;
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  tagFilter: string;
  onTagChange: (tag: string) => void;
  allTags: string[];
  typeFilter: ContentType | 'ALL';
  onTypeChange: (type: ContentType | 'ALL') => void;
  sortType: SortOption;
  onSortChange: (sort: SortOption) => void;
  resultsCount: number;
  onReset: () => void;
}

export const ResourceFilters: React.FC<ResourceFiltersProps> = ({
  searchQuery, onSearchChange,
  tagQuery, onTagQueryChange,
  categoryFilter, onCategoryChange, categories,
  tagFilter, onTagChange, allTags,
  typeFilter, onTypeChange,
  sortType, onSortChange,
  resultsCount, onReset
}) => {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-10 animate-fade-in">
      {/* Top Bar: Main Searches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] font-bold text-[#036C42] uppercase tracking-widest ml-1 flex items-center gap-2">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            Ricerca Globale
          </label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cerca in titoli e descrizioni..." 
              className="w-full bg-gray-50 px-6 py-4 rounded-2xl outline-none text-sm focus:ring-2 focus:ring-[#47A4B5]/20 transition-all border border-gray-100 placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold text-[#036C42] uppercase tracking-widest ml-1 flex items-center gap-2">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            Filtra per Tag (Parole Chiave)
          </label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Es: biotecnologie, microgreens, Azione 3A..." 
              className="w-full bg-gray-50 px-6 py-4 rounded-2xl outline-none text-sm focus:ring-2 focus:ring-[#47A4B5]/20 transition-all border border-gray-100 placeholder-gray-400 font-mono italic"
              value={tagQuery}
              onChange={(e) => onTagQueryChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Middle Bar: Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-50">
        <div className="space-y-3">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Ambito Operativo</label>
          <div className="relative">
            <select 
              value={categoryFilter}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full bg-gray-50 px-5 py-3.5 rounded-xl text-sm border border-gray-100 outline-none focus:ring-2 focus:ring-[#47A4B5]/20 appearance-none cursor-pointer font-medium"
            >
              <option value="ALL">Tutti gli Ambiti</option>
              {categories.filter(c => c !== 'ALL').map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Ordina per</label>
          <div className="relative">
            <select 
              value={sortType}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="w-full bg-gray-50 px-5 py-3.5 rounded-xl text-sm border border-gray-100 outline-none focus:ring-2 focus:ring-[#47A4B5]/20 appearance-none cursor-pointer font-medium"
            >
              <option value="DATE_DESC">Data: Più Recenti</option>
              <option value="DATE_ASC">Data: Meno Recenti</option>
              <option value="TITLE_ASC">Titolo: A - Z</option>
              <option value="TITLE_DESC">Titolo: Z - A</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end">
          <div className="flex justify-between items-center h-[52px] bg-[#fbf9f4] px-6 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#036C42]"></span>
              <span className="text-xs text-[#036C42] font-bold uppercase tracking-tight">
                {resultsCount} Risorse trovate
              </span>
            </div>
            <button 
              onClick={onReset}
              className="text-[#47A4B5] text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#036C42] transition-colors flex items-center gap-2"
            >
              Reset Filtri
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar: Modalities */}
      <div className="space-y-4">
        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Tipologia Documentale</label>
        <div className="flex flex-wrap gap-3">
          {(['ALL', ContentType.SCIENTIFIC, ContentType.BLOG, ContentType.VIDEO, ContentType.WEBINAR, ContentType.AUDIO, ContentType.NEWS] as const).map(f => (
            <button 
              key={f}
              onClick={() => onTypeChange(f)}
              className={`px-6 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest border transition-all ${typeFilter === f ? 'bg-[#036C42] text-white border-[#036C42] shadow-lg scale-105' : 'bg-white text-gray-400 border-gray-100 hover:border-[#47A4B5] hover:text-[#036C42]'}`}
            >
              {f === 'ALL' ? 'Tutte le Risorse' : f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
