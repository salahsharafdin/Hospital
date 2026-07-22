import React from 'react';
import { Link } from 'react-router-dom';
import { useHospital } from '../context/HospitalContext';
import { doctors } from '../data/doctors';
import { departments } from '../data/departments';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import StatsCounter from '../components/StatsCounter';
import FAQAccordion from '../components/FAQAccordion';
import { Heart, Activity, Award, UserCheck, Calendar, Phone, ArrowRight, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';

export default function Home() {
  const { subscribeNewsletter } = useHospital();
  const [email, setEmail] = React.useState("");
  const [newsMsg, setNewsMsg] = React.useState("");

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    const res = subscribeNewsletter(email);
    setNewsMsg(res.message);
    setEmail("");
    setTimeout(() => setNewsMsg(""), 5000);
  };

  // select featured datasets
  const featuredDocs = doctors.slice(0, 4);
  const previewDeps = departments.slice(0, 6);
  const homeFaqs = faqs.slice(0, 5);

  const stats = [
    { target: "250+", label: "Expert Doctors", suffix: "+" },
    { target: "85000+", label: "Patients Served", suffix: "+" },
    { target: "12000+", label: "Surgeries Conducted", suffix: "+" },
    { target: "18", label: "Departments", suffix: "" },
    { target: "15+", label: "International Awards", suffix: "+" },
    { target: "650", label: "Premium Beds", suffix: "" },
    { target: "1400+", label: "Hospital Employees", suffix: "+" },
    { target: "24", label: "Active Ambulances", suffix: "" },
    { target: "12", label: "Outpatient Clinics", suffix: "" },
    { target: "85+", label: "Advanced Lab Machines", suffix: "+" }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>International Clinical Excellence</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
              World-Class Healthcare <br />
              <span className="text-gradient">For Your Family</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              St. Marina International Hospital integrates groundbreaking robotic surgical technologies, global clinical diagnostics, and compassionate, patient-centered care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3.5 sm:space-y-0 sm:space-x-4 pt-4">
              <Link
                to="/appointment"
                className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/30 text-white py-4 px-8 rounded-2xl font-bold text-sm text-center transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
              <Link
                to="/emergency"
                className="bg-red-500 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 text-white py-4 px-8 rounded-2xl font-bold text-sm text-center transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>Emergency Room</span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl -z-10 translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
              alt="St. Marina Luxury Hospital Lobby"
              className="rounded-3xl shadow-2xl border border-slate-100 object-cover w-full h-[320px] sm:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Statistics Counters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900">Hospital at a Glance</h2>
          <p className="text-slate-500">Live operational data and capacity milestones reflecting our international reach and commitment.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-all text-center">
              <StatsCounter target={stat.target} suffix={stat.suffix} />
              <p className="text-slate-500 text-xs font-bold uppercase mt-2 tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Departments Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2 text-left">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900">Clinical Departments</h2>
            <p className="text-slate-500">Pioneering diagnostic therapies across specialized medical fields.</p>
          </div>
          <Link
            to="/departments"
            className="mt-4 md:mt-0 text-primary font-bold text-sm flex items-center space-x-1 hover:underline"
          >
            <span>View All Departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewDeps.map((dep) => (
            <div
              key={dep.id}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="bg-primary/5 text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-3">{dep.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{dep.description}</p>
              </div>
              <Link
                to={`/departments#${dep.id}`}
                className="text-primary font-semibold text-sm flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2 text-left">
              <h2 className="font-heading font-extrabold text-3xl text-slate-900">Featured Specialists</h2>
              <p className="text-slate-500">Consult with world-class practitioners certified by international boards.</p>
            </div>
            <Link
              to="/doctors"
              className="mt-4 md:mt-0 text-primary font-bold text-sm flex items-center space-x-1 hover:underline"
            >
              <span>Meet All Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDocs.map((doc) => (
              <Link
                key={doc.id}
                to={`/doctor/${doc.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all group block text-left"
              >
                <div className="overflow-hidden relative h-64 bg-slate-100">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-xs">
                    ★ {doc.rating}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-xs text-primary font-bold tracking-wider uppercase">{doc.department}</span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-500">{doc.specialty}</p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{doc.experience} Years Exp</span>
                    <span className="text-slate-800 font-bold">${doc.consultationFee} Fee</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
            WHY ST. MARINA
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            Setting the Benchmark for Global Patient Services
          </h2>
          <p className="text-slate-500">
            St. Marina is not just a hospital; it is a clinical center dedicated to offering the safest diagnostic treatments, research breakthroughs, and luxury facilities.
          </p>

          <div className="space-y-4">
            {[
              { icon: ShieldCheck, title: "International Certifications", desc: "Joint Commission International (JCI) accredited ensuring maximum surgical safety guidelines." },
              { icon: HeartHandshake, title: "Patient Comfort & Suites", desc: "Private VIP suites, child-friendly pediatric areas, and comprehensive translation assistants." },
              { icon: Award, title: "Robotic & Precision Operations", desc: "Pioneering robotic arms and 3D diagnostics minimizing scarring and hospitalization stay." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-950 text-base">{item.title}</h4>
                  <p className="text-slate-500 text-xs md:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
            alt="High-tech hospital equipment room"
            className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
          />
        </div>
      </section>

      {/* Testimonials Review Slider */}
      <section className="bg-primary/5 py-24 border-y border-primary/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl text-slate-900">What Our Patients Say</h2>
            <p className="text-slate-500">Read stories of recovery and clinical excellence from our patient family.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((test) => (
              <div key={test.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs space-y-6 text-left flex flex-col justify-between">
                <p className="text-slate-600 italic text-sm md:text-base leading-relaxed">
                  "{test.comment}"
                </p>
                <div className="flex items-center space-x-4">
                  <img src={test.photo} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">{test.name}</h4>
                    <p className="text-slate-500 text-xs">{test.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-500">Quick answers to common questions about appointments, insurance, and visiting hours.</p>
        </div>
        <FAQAccordion items={homeFaqs} />
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-16 text-white text-center space-y-6 shadow-xl shadow-primary/20">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl">Stay Updated with Health Insights</h2>
          <p className="text-slate-100 max-w-xl mx-auto text-sm md:text-base">
            Subscribe to our monthly healthcare magazine and check out the latest advances in clinical therapies, healthy lifestyle tips, and hospital programs.
          </p>
          <form onSubmit={handleNewsSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 font-semibold text-sm flex-grow"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-8 rounded-2xl font-bold text-sm transition-all"
            >
              Subscribe
            </button>
          </form>
          {newsMsg && (
            <p className="text-xs font-bold text-emerald-300 animate-pulse">{newsMsg}</p>
          )}
        </div>
      </section>
    </div>
  );
}
