import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/50 py-3 px-4 md:px-8 border-b border-slate-200/50">
      <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 font-medium max-w-7xl mx-auto">
        <li>
          <Link to="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="w-4 h-4 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayValue = value
            .replace(/-/g, ' ')
            .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="text-slate-800 font-semibold truncate max-w-[200px]" aria-current="page">
                  {displayValue}
                </span>
              ) : (
                <Link to={to} className="hover:text-primary transition-colors truncate max-w-[200px]">
                  {displayValue}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
