import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';
import { ChevronLeft, ArrowRight, Activity, Calendar, Star, CheckCircle } from 'lucide-react';

export default function DepartmentDetail() {
  const { id } = useParams();
  const department = departments.find((d) => d.id === id);

  if (!department) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-heading font-bold text-3xl text-slate-900">Department Profile Not Found</h2>
        <p className="text-slate-500">The clinical wing you are requesting is not listed in our directories.</p>
        <Link to="/departments" className="text-primary font-bold hover:underline inline-flex items-center space-x-1">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to departments list</span>
        </Link>
      </div>
    );
  }

  // filter doctors for this department
  const departmentDoctors = doctors.filter(
    (d) => d.department.toLowerCase() === department.name.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Back link */}
      <div className="text-left">
        <Link
          to="/departments"
          className="text-slate-500 hover:text-primary font-semibold text-sm inline-flex items-center space-x-1"
        >
          <ChevronLeft className="w-4.5 h-4.5" />
          <span>Back to Clinical Centers</span>
        </Link>
      </div>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        {/* Left Info: Name, Description, Stats */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xs space-y-6">
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900">{department.name}</h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{department.details}</p>

            <div className="border-t border-slate-100 pt-6">
              <h3 className="font-heading font-bold text-slate-900 mb-4">Core Clinical Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {department.features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-700 text-xs md:text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Info: Stats Overview card & quick Appointment Form link */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl shadow-slate-900/10">
            <h3 className="font-heading font-bold text-lg">Department Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400 text-xs font-bold uppercase">Doctors Panel</span>
                <span className="font-heading font-bold text-lg text-primary">{department.stats.doctors} Specialists</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400 text-xs font-bold uppercase">Success Rate</span>
                <span className="font-heading font-bold text-lg text-emerald-400">{department.stats.successRate}</span>
              </div>
              <div className="flex items-center justify-between pb-3">
                <span className="text-slate-400 text-xs font-bold uppercase">Annual Capacity</span>
                <span className="font-heading font-bold text-lg">{department.stats.patientsServed} Patients</span>
              </div>
            </div>

            <Link
              to={`/appointment?dept=${encodeURIComponent(department.name)}`}
              className="block w-full bg-gradient-accent text-white py-3.5 rounded-2xl font-bold text-sm text-center shadow-md shadow-emerald-500/20 hover:scale-102 transition-all"
            >
              Book Department Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Specialist Panel for this Department */}
      <section className="space-y-8 text-left">
        <h3 className="font-heading font-extrabold text-2xl text-slate-900">
          Our {department.name} Specialists
        </h3>
        {departmentDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {departmentDoctors.map((doc) => (
              <Link
                key={doc.id}
                to={`/doctor/${doc.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all group block"
              >
                <div className="relative h-60 bg-slate-100">
                  <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white font-bold text-xs px-2.5 py-1 rounded-lg">
                    ★ {doc.rating}
                  </div>
                </div>
                <div className="p-5 space-y-1">
                  <h4 className="font-heading font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {doc.name}
                  </h4>
                  <p className="text-xs text-slate-500">{doc.specialty}</p>
                  <p className="text-xs text-slate-400 pt-2">{doc.experience} years clinical practice</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center text-slate-500">
            No specific doctor listed under this department right now. Please book an appointment with our General Surgery department.
          </div>
        )}
      </section>
    </div>
  );
}
