
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
      <div className="flex items-center gap-2">
        <button 
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="group flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all hover:border-[#47A4B5] hover:text-[#036C42] disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400"
        >
          <svg className="w-4 h-4 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Precedente
        </button>
        
        <div className="flex gap-1.5 mx-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button 
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-11 h-11 rounded-xl font-bold text-[11px] transition-all flex items-center justify-center ${currentPage === page ? 'bg-[#036C42] text-white shadow-lg scale-110' : 'bg-white border border-gray-100 text-gray-400 hover:border-[#47A4B5] hover:text-[#036C42]'}`}
            >
              {page}
            </button>
          ))}
        </div>

        <button 
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="group flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all hover:border-[#47A4B5] hover:text-[#036C42] disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400"
        >
          Successivo
          <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
        Pagina <span className="text-[#036C42]">{currentPage}</span> di {totalPages}
      </div>
    </div>
  );
};
