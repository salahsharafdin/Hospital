import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // { success: boolean, message: string }

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setStatus({ success: false, message: "Please fill in all required fields." });
      return;
    }

    // mock API success trigger
    setStatus({ success: true, message: "Your message has been sent successfully! Our administrative desk will reply soon." });
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");

    setTimeout(() => setStatus(null), 6000);
  };

  return (
    <div className="space-y-16 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs text-primary font-bold tracking-wider uppercase">Get In Touch</span>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Contact Our Hospital Administration
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Have an inquiry, administrative request, billing question, or general feedback? Fill out the form below or contact our desk directly.
        </p>
      </section>

      {/* Grid: Form and Contacts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-xs space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-950">Send Us A Message</h3>

            {status && (
              <div
                className={`flex items-center space-x-3 p-4 rounded-2xl animate-pulse-subtle ${
                  status.success ? "bg-emerald-50 text-emerald-800 border border-emerald-500/20" : "bg-amber-50 text-amber-800 border border-amber-500/20"
                }`}
              >
                {status.success ? <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> : <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />}
                <span className="text-xs md:text-sm font-semibold">{status.message}</span>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4">
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
                  <label className="text-xs font-bold text-slate-700 uppercase">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 012-3456"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Subject *</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. billing query, feedback..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Message / Inquiry *</label>
                <textarea
                  rows="5"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your request in detail..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm py-4 rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Info & Map */}
        <div className="lg:col-span-1 space-y-8">
          {/* Quick Details */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xs space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-950">Hospital Coordinates</h3>
            <ul className="space-y-4 text-xs md:text-sm text-slate-600">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>742 Evergreen Terrace, Medical District, Springfield, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 019-2831</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@stmarinahospital.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">Hours of Operation</p>
                  <p>Inpatients & Emergencies: 24/7 Support</p>
                  <p>Administrative Desk: Mon-Fri (8:00 AM - 6:00 PM)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Interactive Sketch Map */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-4 text-center">
            <div className="bg-slate-800 w-full h-40 rounded-2xl flex flex-col items-center justify-center border border-slate-700/50">
              <MapPin className="w-8 h-8 text-primary animate-bounce mb-2" />
              <span className="font-heading font-bold text-xs">GPS: 39.7817° N, 89.6501° W</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Springfield Medical Hub</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We are located directly opposite the Springfield Central Park. Ample free multi-level parking is available for visitors.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md hover:bg-primary-hover transition-colors"
            >
              Open Route Planner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
