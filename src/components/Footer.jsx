import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHospital } from '../context/HospitalContext';
import { Activity, Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Footer() {
  const { subscribeNewsletter } = useHospital();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // { success: boolean, message: string }

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    const result = subscribeNewsletter(email);
    setStatus(result);
    if (result.success) {
      setEmail("");
    }
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner with Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="font-heading font-extrabold text-2xl text-white">Subscribe to our Wellness Newsletter</h3>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Get the latest medical articles, preventative health guides, and hospital announcements delivered to your inbox weekly.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl py-4 pl-5 pr-14 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-primary hover:bg-primary-hover text-white p-2.5 rounded-xl transition-all flex items-center justify-center"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {status && (
              <div
                className={`mt-3 flex items-center space-x-2 text-xs font-semibold p-2.5 rounded-xl animate-pulse-subtle ${
                  status.success ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                }`}
              >
                {status.success ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{status.message}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-xl text-white shadow-lg">
              <Activity className="w-5 h-5" />
            </div>
            <span className="font-heading font-black text-lg tracking-wider text-white">ST. MARINA</span>
          </div>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            St. Marina International Hospital is a state-of-the-art multi-specialty healthcare center delivering premium clinical solutions and compassionate patient experiences.
          </p>
          <div className="flex space-x-3 pt-2">
            {/* Social media links placeholder icons */}
            {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
              <span
                key={s}
                className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all cursor-pointer text-xs uppercase font-bold"
              >
                {s[0]}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Hospital Links</h4>
          <ul className="space-y-3.5 text-xs md:text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/doctors" className="hover:text-primary transition-colors">Our Specialists</Link></li>
            <li><Link to="/departments" className="hover:text-primary transition-colors">Clinical Departments</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Medical Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Hospital Gallery</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers & Internships</Link></li>
          </ul>
        </div>

        {/* Support & Legal */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Support</h4>
          <ul className="space-y-3.5 text-xs md:text-sm">
            <li><Link to="/faq" className="hover:text-primary transition-colors">Frequently Asked Questions</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Details</Link></li>
            <li><Link to="/emergency" className="hover:text-primary transition-colors">Emergency Protocol</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Direct Contact</h4>
          <ul className="space-y-4 text-xs md:text-sm text-slate-400">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>742 Evergreen Terrace, Medical District, Springfield, USA</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>+1 (555) 019-2831</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>contact@stmarinahospital.com</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Outpatient Clinic Hours</p>
                <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-950 py-6 text-center text-xs text-slate-500 border-t border-slate-900/50">
        <p>&copy; {new Date().getFullYear()} St. Marina International Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
}
