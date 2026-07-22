import React, { useState } from 'react';
import { useHospital } from '../context/HospitalContext';
import { Briefcase, Award, CheckCircle, GraduationCap, Send, ShieldCheck, Heart } from 'lucide-react';

export default function Careers() {
  const { submitJobApplication } = useHospital();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("nurse");
  const [message, setMessage] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const jobOpenings = [
    { id: "job-1", title: "Senior Cardiologist Fellow", department: "Cardiology", type: "Full-Time", experience: "5+ Years", desc: "Oversee advanced angioplasty procedures and lead clinical trials." },
    { id: "job-2", title: "Critical Care Registered Nurse (ICU)", department: "ICU", type: "Shift Rotation", experience: "2+ Years", desc: "Monitor hemodynamics, coordinate with specialists, and manage life support systems." },
    { id: "job-3", title: "Clinical Pathology Research Assistant", department: "Laboratory", type: "Full-Time", experience: "1+ Years", desc: "Operate molecular scanner systems and prepare tissue biopsy summaries." },
    { id: "job-4", title: "Medical Receptionist & Secretary", department: "Administration", type: "Full-Time", experience: "Entry Level", desc: "Manage patient appointment rosters, coordinate billing queries, and coordinate translation requests." }
  ];

  const benefits = [
    { title: "Premium Health Coverage", desc: "Complete medical, dental, and vision insurance for you and your direct dependents." },
    { title: "Clinical Study Grants", desc: "Fully funded grants for attending international medical symposia and research works." },
    { title: "Retirement Program", desc: "Matching 401(k) contribution plan with integrated wealth consulting." },
    { title: "Luxury Workspaces", desc: "Modern clinical wards, private physician lounges, and automated medical assistants." }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    submitJobApplication({
      applicantName: name,
      applicantEmail: email,
      applicantPhone: phone,
      selectedRole: role,
      notes: message
    });

    setStatusMsg("Your application has been received! Our human resource team will contact you for interviews.");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setTimeout(() => setStatusMsg(""), 6000);
  };

  return (
    <div className="space-y-16 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs text-primary font-bold tracking-wider uppercase">Join Our Crew</span>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Shape the Future of Modern Medicine
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          At St. Marina, we support clinical growth, provide modern diagnostic environments, and reward dedication with premium benefits.
        </p>
      </section>

      {/* Grid: Openings and Benefits */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        {/* Open Roles list */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-heading font-extrabold text-2xl text-slate-950 flex items-center space-x-2">
            <Briefcase className="w-6 h-6 text-primary" />
            <span>Active Job Openings</span>
          </h3>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xs space-y-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-slate-900">{job.title}</h4>
                    <span className="text-xs text-primary font-bold tracking-wide">{job.department} Department</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">{job.type}</span>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">{job.experience}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="font-heading font-extrabold text-2xl text-slate-950 flex items-center space-x-2">
            <Award className="w-6 h-6 text-emerald-500" />
            <span>Benefits & Perks</span>
          </h3>
          <div className="bg-slate-950 text-white rounded-3xl p-8 space-y-6 shadow-xl">
            {benefits.map((b, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="font-heading font-bold text-sm flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{b.title}</span>
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed pl-5">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Form */}
      <section className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xs text-left max-w-3xl mx-auto space-y-6">
        <h3 className="font-heading font-extrabold text-2xl text-slate-900 flex items-center space-x-2">
          <GraduationCap className="w-7 h-7 text-primary" />
          <span>Submit Your Career Application</span>
        </h3>

        {statusMsg && (
          <div className="bg-emerald-50 text-emerald-800 p-4 rounded-2xl border border-emerald-500/20 font-semibold text-xs md:text-sm flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>{statusMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Your Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Phone Number *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +1 (555) 012-3456"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Job Role / Internship Position</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden font-semibold"
              >
                <option value="Senior Cardiologist Fellow">Senior Cardiologist Fellow</option>
                <option value="Critical Care Registered Nurse (ICU)">Critical Care Registered Nurse (ICU)</option>
                <option value="Clinical Pathology Research Assistant">Clinical Pathology Research Assistant</option>
                <option value="Medical Receptionist & Secretary">Medical Receptionist & Secretary</option>
                <option value="General Clinical Internship">General Clinical Internship (Students)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase">Short Cover Letter / Cover details</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Why would you like to join St. Marina? Outline your key clinical credentials..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm py-4 rounded-xl transition-all flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Career Application</span>
          </button>
        </form>
      </section>
    </div>
  );
}
