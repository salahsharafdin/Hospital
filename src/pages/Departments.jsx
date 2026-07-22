import React from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';
import { Activity, ShieldAlert, ArrowRight, Heart, Brain, Bone, Activity as Diagnostic, Star } from 'lucide-react';

export default function Departments() {
  return (
    <div className="space-y-16 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Intro Banner */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs text-primary font-bold tracking-wider uppercase">Clinical Centers</span>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Specialized Clinical Departments
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          St. Marina operates 18 dedicated departments, each equipped with modern diagnostics, expert physicians, and comfortable treatment rooms.
        </p>
      </section>

      {/* Grid of 18 departments */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {departments.map((dept) => {
          return (
            <div
              key={dept.id}
              id={dept.id}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between text-left"
            >
              <div>
                <div className="bg-primary/5 text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">{dept.name}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                  {dept.description}
                </p>

                {/* mini stats */}
                <div className="grid grid-cols-3 gap-2 border-t border-b border-slate-100 py-4 mb-6 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Doctors</span>
                    <span className="text-slate-900 font-extrabold text-sm">{dept.stats.doctors}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Success</span>
                    <span className="text-emerald-500 font-extrabold text-sm">{dept.stats.successRate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Served</span>
                    <span className="text-slate-900 font-extrabold text-xs md:text-sm">{dept.stats.patientsServed}</span>
                  </div>
                </div>
              </div>

              <Link
                to={`/department/${dept.id}`}
                className="text-primary font-bold text-sm inline-flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform"
              >
                <span>Full department profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
