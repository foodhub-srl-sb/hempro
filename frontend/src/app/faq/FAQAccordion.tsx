"use client";

import { useState } from 'react';

interface FAQ {
    q: string;
    a: string;
}

interface FAQAccordionProps {
    faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#47A4B5]/30 transition-colors overflow-hidden"
                    >
                        <button
                            type="button"
                            onClick={() => toggle(index)}
                            className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#47A4B5]"
                            aria-expanded={isOpen}
                        >
                            <h3 className="text-xl font-bold text-[#036C42]">{faq.q}</h3>
                            <span
                                className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#47A4B5] flex items-center justify-center text-[#47A4B5] font-bold text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </button>
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-8 pb-6 text-gray-600 leading-relaxed font-light">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
