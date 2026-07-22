import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { Calendar, User, Tag, ChevronLeft, ArrowRight } from 'lucide-react';

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-heading font-bold text-3xl text-slate-900">Article Not Found</h2>
        <p className="text-slate-500">The medical journal entry you requested does not exist in our system.</p>
        <Link to="/blog" className="text-primary font-bold hover:underline inline-flex items-center space-x-1">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to medical journal</span>
        </Link>
      </div>
    );
  }

  // select other posts for recommendation sidebar
  const recommendedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Back link */}
      <div className="text-left">
        <Link
          to="/blog"
          className="text-slate-500 hover:text-primary font-semibold text-sm inline-flex items-center space-x-1"
        >
          <ChevronLeft className="w-4.5 h-4.5" />
          <span>Back to Medical Journal</span>
        </Link>
      </div>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        {/* Full Article Body */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs">
            <div className="h-96 bg-slate-100 relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-bold text-[10px] px-3.5 py-1.5 rounded-xl uppercase tracking-widest flex items-center space-x-1">
                <Tag className="w-3 h-3 text-primary shrink-0" />
                <span>{post.category}</span>
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-6">
              <div className="flex items-center space-x-4 text-slate-400 text-xs md:text-sm font-semibold">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-4.5 h-4.5 shrink-0" />
                  <span>{post.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <User className="w-4.5 h-4.5 shrink-0" />
                  <span>Written by {post.author}</span>
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight">
                {post.title}
              </h1>
              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed italic border-l-4 border-primary pl-4">
                {post.excerpt}
              </p>
              <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-line pt-4">
                {post.content}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar recommendations */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xs space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-950 border-b border-slate-100 pb-2">
              Related Articles
            </h3>
            <div className="space-y-6">
              {recommendedPosts.map((rec) => (
                <Link
                  key={rec.id}
                  to={`/blog/${rec.id}`}
                  className="group block space-y-2"
                >
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">{rec.category}</span>
                  <h4 className="font-heading font-bold text-slate-900 group-hover:text-primary transition-colors text-sm md:text-base leading-snug line-clamp-2">
                    {rec.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold">{rec.date}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Consultation Promo */}
          <div className="bg-gradient-primary text-white rounded-3xl p-8 shadow-xl text-center space-y-4">
            <h3 className="font-heading font-bold text-lg">Consult With Our Specialist Panel</h3>
            <p className="text-slate-100 text-xs leading-relaxed">
              Our authors are active board-certified clinicians in surgery, oncology, cardiology, neurology, and orthopedics.
            </p>
            <Link
              to="/appointment"
              className="inline-block bg-white text-primary font-bold text-xs px-5 py-3 rounded-xl shadow-md hover:bg-slate-50 transition-colors"
            >
              Book Consultation Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
