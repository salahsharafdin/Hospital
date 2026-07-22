import React from 'react';
import { faqs } from '../data/faqs';
import FAQAccordion from '../components/FAQAccordion';
import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
  return (
    <div className="space-y-12 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase">
          <HelpCircle className="w-4 h-4" />
          <span>Patient Help Desk</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Find answers to the 20 most frequently asked questions regarding clinical booking, emergency ambulance dispatches, international billing support, and patient visitation rules.
        </p>
      </section>

      {/* FAQ list */}
      <section className="text-left">
        <FAQAccordion items={faqs} />
      </section>
    </div>
  );
}
