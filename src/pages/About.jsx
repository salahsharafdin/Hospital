import React from 'react';
import { Calendar, Award, Shield, Users, Target, Milestone } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Users, title: "Compassion First", desc: "Every diagnosis, surgery, and consultation is delivered with deep respect, empathy, and warm bedside manners." },
    { icon: Target, title: "Clinical Excellence", desc: "We adhere strictly to evidence-based medical research and international safety standards." },
    { icon: Award, title: "Pioneering Innovation", desc: "By deploying advanced robotic operating rooms, silent 3T MRIs, and AI diagnostics, we lead the medical frontier." },
    { icon: Shield, title: "Integrity & Privacy", desc: "Your health records, personal background, and counseling sessions are kept under absolute confidentiality." }
  ];

  const milestones = [
    { year: "1998", title: "Foundation", desc: "St. Marina clinic was established in Springfield, offering outpatient services and family practice." },
    { year: "2005", title: "Cardiology Center Expansion", desc: "Inaugurated our first comprehensive cardiovascular wing and emergency catheterization lab." },
    { year: "2012", title: "Accreditation & Expansion", desc: "Awarded Joint Commission International (JCI) accreditation and expanded to 350 beds." },
    { year: "2018", title: "Robotic Surgical Integration", desc: "Acquired advanced surgical robotics, completing Springfield's first robotic hip replacement." },
    { year: "2026", title: "Smart Hospital Upgrade", desc: "Updated clinical systems with AI-guided diagnosis, 3T silent MRIs, and luxury maternal suites." }
  ];

  const team = [
    { name: "Dr. Elizabeth Vance", role: "Chief Executive Officer (CEO)", desc: "A visionary medical director with over 25 years of healthcare architecture experience." },
    { name: "Dr. Richard Albright", role: "Chief Medical Officer (CMO)", desc: "Board-certified cardiologist guiding our clinical safety and surgical teams." },
    { name: "Sarah Jenkins, RN", role: "Chief Nursing Officer (CNO)", desc: "Overseeing inpatient care operations, nursing schedules, and patient feedback." },
    { name: "David Sterling", role: "Chief Financial Officer (CFO)", desc: "Leading financial operations, international billing networks, and project planning." }
  ];

  return (
    <div className="space-y-24 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Banner / Intro */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight">
          Pioneering Global Medical <br />
          <span className="text-gradient">Solutions Since 1998</span>
        </h1>
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
          At St. Marina, we combine modern technology with patient-centric care to deliver the safest and most advanced clinical outcomes in the region.
        </p>
      </section>

      {/* CEO Message */}
      <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xs grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-left">
        <div className="lg:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
            alt="Dr. Elizabeth Vance, CEO"
            className="rounded-3xl shadow-lg w-full h-[320px] object-cover border border-slate-100"
          />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <span className="text-xs text-primary font-bold tracking-wider uppercase">Message from the CEO</span>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900">
            \"Our mission is to make advanced clinical treatments accessible, painless, and premium.\"
          </h2>
          <div className="text-slate-600 text-sm md:text-base space-y-4 leading-relaxed">
            <p>
              Welcome to St. Marina International Hospital. For nearly three decades, we have worked diligently to establish a healthcare environment that places patient wellness, diagnostic accuracy, and cutting-edge technology above everything else.
            </p>
            <p>
              By investing in state-of-the-art diagnostic machinery and retaining a highly qualified board-certified specialist panel, we are proud to offer some of the most reliable and compassionate medical operations in the world today.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-base">Dr. Elizabeth Vance</h4>
            <p className="text-slate-500 text-xs font-semibold">Chief Executive Officer, St. Marina Hospital</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/15 space-y-4">
          <h3 className="font-heading font-extrabold text-xl text-primary">Our Vision</h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            To build a world-class smart medical center recognized internationally for clinical research excellence, advanced technology integration, and exceptional patient care.
          </p>
        </div>
        <div className="bg-emerald-500/5 rounded-3xl p-8 border border-emerald-500/15 space-y-4">
          <h3 className="font-heading font-extrabold text-xl text-emerald-600">Our Mission</h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            To deliver safe, personalized, and state-of-the-art clinical solutions through a multi-specialty panel, advanced diagnostics, and compassionate family-friendly environments.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900">Our Core Values</h2>
          <p className="text-slate-500">The clinical guidelines that govern our patient relationships and medical operations daily.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                <v.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-slate-950 text-base">{v.title}</h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900">Hospital Timeline</h2>
          <p className="text-slate-500">A brief chronicle of our expansion, clinical milestones, and technological steps.</p>
        </div>
        <div className="relative border-l border-slate-200 ml-4 md:ml-1/2 space-y-12 text-left">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-3.5 top-1 bg-white border-4 border-primary w-7 h-7 rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110" />
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs inline-block max-w-md">
                <span className="font-heading font-extrabold text-lg text-primary">{m.year}</span>
                <h4 className="font-heading font-bold text-slate-900 text-base mt-1">{m.title}</h4>
                <p className="text-slate-500 text-xs md:text-sm mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership / Management Team */}
      <section className="space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900">Leadership Team</h2>
          <p className="text-slate-500">Meet the board members and clinical chiefs managing our hospital's departments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {team.map((t, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 p-6 rounded-3xl space-y-3">
              <h4 className="font-heading font-bold text-slate-900 text-base">{t.name}</h4>
              <span className="text-xs text-primary font-bold tracking-wide block">{t.role}</span>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
