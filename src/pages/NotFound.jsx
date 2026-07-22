import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldAlert, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-6">
      <div className="bg-red-500/10 text-red-500 p-4 rounded-full animate-bounce">
        <ShieldAlert className="w-16 h-16" />
      </div>
      <div className="space-y-2">
        <h1 className="font-heading font-black text-6xl text-slate-900">404</h1>
        <h2 className="font-heading font-extrabold text-2xl text-slate-800">Clinical Record Not Found</h2>
        <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed mx-auto">
          The medical directory, patient record, or page url you are requesting is either archived, deleted, or entered incorrectly.
        </p>
      </div>
      <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <Link
          to="/"
          className="bg-gradient-primary text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md shadow-primary/20 hover:scale-102 transition-transform"
        >
          Return to Dashboard
        </Link>
        <Link
          to="/emergency"
          className="bg-red-500 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md shadow-red-500/10 hover:scale-102 transition-transform flex items-center justify-center space-x-1.5"
        >
          <span>Emergency Room</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
