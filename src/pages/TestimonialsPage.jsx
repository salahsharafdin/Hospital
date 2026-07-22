import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, MessageSquare } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="space-y-12 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase">
          <MessageSquare className="w-4 h-4" />
          <span>Patient Stories</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Letters of Recovery & Gratitude
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Read recovery stories and clinical experience reviews from at least 12 patients who traveled globally to St. Marina Hospital.
        </p>
      </section>

      {/* Grid: 12 testimonials */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {testimonials.map((test) => (
          <div
            key={test.id}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-lg transition-all space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex text-emerald-500">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic">
                "{test.comment}"
              </p>
            </div>
            <div className="flex items-center space-x-4 border-t border-slate-100 pt-4">
              <img src={test.photo} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">{test.name}</h4>
                <p className="text-slate-400 text-[11px] font-semibold">{test.country}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
