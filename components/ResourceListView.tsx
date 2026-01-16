
import React from 'react';
import { ContentItem } from '../types';

interface ResourceListViewProps {
  items: ContentItem[];
  onItemClick: (id: string) => void;
}

export const ResourceListView: React.FC<ResourceListViewProps> = ({ items, onItemClick }) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Codice Azione</th>
            <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Titolo Risorsa</th>
            <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Tipo</th>
            <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Referente</th>
            <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Data</th>
            <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-right">Azione</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr 
              key={item.id} 
              className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group cursor-pointer" 
              onClick={() => onItemClick(item.id)}
            >
              <td className="px-8 py-6">
                <span className="text-[10px] font-bold bg-[#036C42]/5 text-[#036C42] px-3 py-1 rounded-md">{item.actionCode}</span>
              </td>
              <td className="px-8 py-6">
                <p className="font-bold text-[#111] text-sm group-hover:text-[#47A4B5] transition-colors">{item.title}</p>
                <div className="flex gap-2 mt-1">
                    {item.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[9px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded uppercase tracking-tighter">{t}</span>
                    ))}
                </div>
              </td>
              <td className="px-8 py-6">
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">{item.type}</span>
              </td>
              <td className="px-8 py-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{item.author}</span>
              </td>
              <td className="px-8 py-6">
                <span className="text-xs text-gray-400">{item.date}</span>
              </td>
              <td className="px-8 py-6 text-right">
                <button className="text-[#036C42] hover:text-[#47A4B5] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
