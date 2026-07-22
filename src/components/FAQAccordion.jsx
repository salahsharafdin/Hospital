import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id || index}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>{item.question}</span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
              )}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-96 border-t border-slate-100" : "max-h-0"
              }`}
            >
              <div className="p-5 text-slate-600 leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
