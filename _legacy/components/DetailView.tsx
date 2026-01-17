
import React, { useState } from 'react';
import { ContentItem, ContentType } from '../types';
import ReactMarkdown from 'react-markdown';

interface DetailViewProps {
  item: ContentItem;
  onBack: () => void;
}

export const DetailView: React.FC<DetailViewProps> = ({ item, onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(item.title);

  const socialLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in">
      <button
        onClick={onBack}
        className="mb-12 flex items-center gap-3 text-gray-400 hover:text-[#036C42] transition-all duration-300 font-bold text-[11px] uppercase tracking-widest group"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Torna all'Archivio Risorse
      </button>

      <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
        <div className="aspect-[21/9] w-full overflow-hidden relative">
          {!isPlaying ? (
            <>
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full bg-[#036C42] flex items-center justify-center">
              <div className="text-center p-10">
                {item.type === ContentType.AUDIO ? (
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#47A4B5] rounded-full flex items-center justify-center mb-6 shadow-xl">
                      <span className="text-4xl text-white">🎧</span>
                    </div>
                    <p className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-2">Riproduzione Audio Hub...</p>
                    <div className="flex gap-1 items-center h-8 mb-8">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="w-1.5 bg-[#47A4B5] rounded-full" style={{ height: `${Math.random() * 100}%`, animation: `bounce 1s infinite ${i * 0.1}s` }}></div>)}
                    </div>
                  </div>
                ) : (
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#47A4B5] mx-auto mb-4"></div>
                )}
                <p className="text-white text-[10px] font-bold tracking-widest uppercase">Streaming Contenuto Formativo...</p>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="mt-8 text-white/50 hover:text-white text-[10px] uppercase font-bold tracking-widest underline"
                >
                  Chiudi Player
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="p-10 md:p-20">
          <div className="flex flex-wrap gap-6 items-center mb-10">
            <span className="bg-[#47A4B5]/10 text-[#47A4B5] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
              {item.category}
            </span>
            <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">{item.date}</span>
            <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">• Ref. {item.author}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-12 leading-tight">
            {item.title}
          </h1>



          <div className="mb-16">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-serif font-bold text-[#036C42] mt-10 mb-6 leading-tight" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6 border-l-4 border-[#47A4B5] pl-4" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4" {...props} />,
                p: ({ node, ...props }) => <p className="text-gray-600 text-lg leading-relaxed font-light mb-6" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 space-y-2 mb-8 text-gray-600" {...props} />,
                li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-[#036C42]/20 pl-6 italic text-gray-500 my-8" {...props} />,
              }}
            >
              {item.fullContent || item.excerpt}
            </ReactMarkdown>
          </div>

          {(item.type === ContentType.VIDEO || item.type === ContentType.WEBINAR || item.type === ContentType.AUDIO) && !isPlaying && (
            <div
              onClick={() => setIsPlaying(true)}
              className="mt-12 bg-[#036C42] rounded-[2.5rem] p-12 flex flex-col items-center justify-center min-h-[300px] text-white relative overflow-hidden group/vid cursor-pointer shadow-2xl border border-white/10"
            >
              <div className="absolute inset-0 bg-black/20 group-hover/vid:bg-black/40 transition-colors"></div>
              <div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 mb-6 group-hover/vid:scale-110 transition-transform duration-500">
                {item.type === ContentType.AUDIO ? (
                  <span className="text-3xl">🎧</span>
                ) : (
                  <svg className="w-8 h-8 text-[#47A4B5]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <h3 className="relative z-10 text-xl font-serif font-bold mb-3 tracking-wide">
                {item.type === ContentType.AUDIO ? 'Ascolta Risorsa Audio' : item.type === ContentType.VIDEO ? 'Riproduci Pillola Video' : 'Accedi al Webinar On-Demand'}
              </h3>
              <p className="relative z-10 text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">Contenuto riservato agli stakeholder HEMPRO</p>
            </div>
          )}

          {/* Social Share Section */}
          <div className="mt-20 pt-10 border-t border-gray-100 text-center">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Condividi questa risorsa</h4>
            <div className="flex justify-center gap-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#0077b5] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#005a8a] transition-all shadow-lg hover:shadow-[#0077b5]/20 hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#000000] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
              >
                X / Twitter
              </a>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-gray-50 flex flex-wrap gap-3">
            {item.tags.map(tag => (
              <span key={tag} className="bg-gray-50 text-gray-400 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:text-[#036C42] transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
};
