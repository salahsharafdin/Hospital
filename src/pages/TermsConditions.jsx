import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-left space-y-8">
      <div className="flex items-center space-x-3 border-b border-slate-100 pb-6">
        <div className="bg-primary/10 p-3 rounded-2xl text-primary">
          <FileText className="w-8 h-8" />
        </div>
        <div>
          <h1 className="font-heading font-extrabold text-3xl text-slate-900">Terms & Conditions</h1>
          <p className="text-slate-400 text-xs md:text-sm font-semibold mt-1">Last Updated: July 22, 2026</p>
        </div>
      </div>

      <div className="text-slate-600 text-xs md:text-sm leading-relaxed space-y-6">
        <p>
          Welcome to the online services of St. Marina International Hospital. By accessing our appointment form, dispatch portal, or medical journal, you agree to comply with the terms and conditions outlined below.
        </p>

        <h3 className="font-heading font-bold text-lg text-slate-950 mt-8">1. Online Appointment Booking</h3>
        <p>
          Online bookings represent consultation requests. St. Marina registration coordinators reserve the right to reschedule or modify appointments based on clinical urgency or specialist schedules.
        </p>

        <h3 className="font-heading font-bold text-lg text-slate-950 mt-8">2. Ambulance Dispatch Requests</h3>
        <p>
          The emergency ambulance dispatcher request should only be used during actual clinical emergencies. False dispatches represent legal infractions subject to local fines.
        </p>

        <h3 className="font-heading font-bold text-lg text-slate-950 mt-8">3. General Medical Disclaimer</h3>
        <p>
          All content, articles, and preventative health guides in the St. Marina Medical Journal are provided for information purposes only. Journal entries do not constitute professional diagnosis or surgical recommendation. Always seek advice from your physician.
        </p>

        <h3 className="font-heading font-bold text-lg text-slate-950 mt-8">4. Billing & Fees</h3>
        <p>
          Consultation fees listed in the doctors directory apply to basic outpatient checkups. Additional diagnostic scans, lab panels, or surgical tools used during your visit will be billed separately.
        </p>
      </div>
    </div>
  );
}
