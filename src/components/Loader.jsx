import React from 'react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-slate-500 font-heading font-medium animate-pulse">
        Loading clinical records...
      </p>
    </div>
  );
}
