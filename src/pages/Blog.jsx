import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // unique categories list
  const categoryList = useMemo(() => {
    const list = new Set(blogs.map(b => b.category));
    return Array.from(list);
  }, []);

  const filteredBlogs = useMemo(() => {
    let result = [...blogs];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        b =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "") {
      result = result.filter(b => b.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  // reset pagination on search change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBlogs.slice(start, start + itemsPerPage);
  }, [filteredBlogs, currentPage]);

  return (
    <div className="space-y-12 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <section className="text-left space-y-4 max-w-3xl">
        <span className="text-xs text-primary font-bold tracking-wider uppercase">Wellness Center Hub</span>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          St. Marina Medical Journal & News
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Read articles written by our board-certified clinical panel on heart care, pediatric health, stroke therapy, and modern robotics surgery breakthroughs.
        </p>
      </section>

      {/* Filters */}
      <section className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col lg:flex-row gap-4 justify-between items-center">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search journal entries by title or category..."
        />
        <div className="flex gap-2 w-full lg:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full lg:w-auto bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary text-xs md:text-sm font-semibold"
          >
            <option value="">All Categories</option>
            {categoryList.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Blog Cards list */}
      {paginatedBlogs.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paginatedBlogs.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between text-left"
            >
              <div>
                <div className="h-56 bg-slate-100 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 text-white font-bold text-[10px] px-3 py-1.5 rounded-xl uppercase tracking-widest flex items-center space-x-1">
                    <Tag className="w-3 h-3 text-primary shrink-0" />
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 shrink-0" />
                      <span>{post.author}</span>
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-slate-950 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 mt-4">
                <Link
                  to={`/blog/${post.id}`}
                  className="text-primary font-bold text-sm inline-flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="text-center py-20 bg-white border border-slate-100 rounded-3xl">
          <p className="text-slate-500 font-heading font-medium text-lg">No medical articles match your search.</p>
        </section>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
