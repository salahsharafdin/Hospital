import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-left space-y-8">
      <div className="flex items-center space-x-3 border-b border-slate-100 pb-6">
        <div className="bg-primary/10 p-3 rounded-2xl text-primary">
          <Shield className="w-8 h-8" />
        </div>
        <div>
          <h1 className="font-heading font-extrabold text-3xl text-slate-900">Privacy Policy</h1>
          <p className="text-slate-400 text-xs md:text-sm font-semibold mt-1">Last Updated: July 22, 2026</p>
        </div>
      </div>

      <div className="text-slate-600 text-xs md:text-sm leading-relaxed space-y-6">
        <p>
          At St. Marina International Hospital, patient privacy and medical confidentiality are fundamental to our clinical practice. This Privacy Policy details how we compile, encrypt, and share information collected during your appointments, registration bookings, and virtual consulting sessions.
        </p>

        <h3 className="font-heading font-bold text-lg text-slate-950 mt-8">1. Information We Collect</h3>
        <p>
          We collect personal data required to register patients, process insurance approvals, and perform diagnoses. This includes full names, contact phone numbers, birthdates, insurance coverage summaries, and clinical medical histories.
        </p>

        <h3 className="font-heading font-bold text-lg text-slate-950 mt-8">2. Medical Confidentiality</h3>
        <p>
          In accordance with global health data regulations (including HIPAA guidelines), your clinical records, lab outcomes, and psychiatric counseling sessions are fully protected under absolute medical confidentiality. No health records are shared with third parties without your signed permission, except where mandated by law.
        </p>

        <h3 className="font-heading font-bold text-lg text-slate-950 mt-8">3. Web Analytics & Cookies</h3>
        <p>
          Our website utilizes secure cookies to monitor web loading speeds, remember selected search criteria in the doctors registry, and keep track of submit forms. You can disable cookies in your web browser preferences.
        </p>

        <h3 className="font-heading font-bold text-lg text-slate-950 mt-8">4. Data Security</h3>
        <p>
          St. Marina deploys high-standard SSL encryption and firewalls to safeguard our patient portals. In the unlikely event of data interruptions, affected patients will be notified within 72 hours.
        </p>
      </div>
    </div>
  );
}
