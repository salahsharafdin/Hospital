import React from 'react';
import { services } from '../data/services';
import * as Icons from 'lucide-react';

export default function Services() {
  // helper to safely render Lucide icon components based on string
  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.Activity;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <div className="space-y-16 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs text-primary font-bold tracking-wider uppercase">Our Clinical Capabilities</span>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Comprehensive Medical Services
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          St. Marina provides at least 25 specialized hospital services to address diagnostics, outpatient therapies, robotic operations, and emergency crisis logistics.
        </p>
      </section>

      {/* Grid of 25 services */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {services.map((serv) => (
          <div
            key={serv.id}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs hover:shadow-lg transition-all flex items-start space-x-6 hover:-translate-y-0.5"
          >
            <div className="bg-primary/10 text-primary p-3 rounded-2xl shrink-0">
              {renderIcon(serv.icon)}
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-lg text-slate-950">{serv.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{serv.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
