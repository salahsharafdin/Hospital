import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 h-5 text-slate-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-2xl bg-white text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent shadow-xs hover:border-slate-300 transition-all text-sm md:text-base font-medium"
        placeholder={placeholder}
      />
    </div>
  );
}
