import React, { useState } from 'react';
import { useHospital } from '../context/HospitalContext';
import { PhoneCall, ShieldAlert, Heart, Truck, HelpCircle, CheckCircle, Clock } from 'lucide-react';

export default function Emergency() {
  const { requestAmbulance, activeEmergency, dismissEmergency } = useHospital();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("cardiac");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !location) return;

    requestAmbulance({
      patientName: name,
      patientPhone: phone,
      location,
      condition
    });

    setStatusMsg("Ambulance request dispatched! The team is on route.");
    setName("");
    setPhone("");
    setLocation("");
  };

  const firstAidTips = [
    { title: "Chest Pain / Cardiac Arrest", desc: "Keep the person seated, avoid strenuous movement. Call ambulance immediately. Perform CPR at 100-120 compressions per minute if patient stops breathing." },
    { title: "Choking (Heimlich Maneuver)", desc: "Stand behind the person, wrap arms around waist, make a fist and press hard into the abdomen with quick, upward thrusts." },
    { title: "Severe Burn Wounds", desc: "Cool the burn immediately using clean running water for 10-15 minutes. Do not apply ice, butter, or ointments. Cover loosely with sterile dressing." },
    { title: "Fractures & Bone Injuries", desc: "Do not attempt to realign the bone. Immobilize the limb using a splint or sling and apply cold compress to reduce swelling." },
    { title: "Chemical / Poison Exposure", desc: "Identify the substance. Rinse eyes or skin with lukewarm water for 20 minutes. Call poison control hotlines immediately." }
  ];

  return (
    <div className="space-y-16 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-red-500/10 text-red-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase animate-pulse">
          <ShieldAlert className="w-4 h-4" />
          <span>24/7 Rapid Response Unit</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Emergency Trauma & Ambulance Logistics
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          St. Marina operates Springfield's most advanced emergency trauma division. Call our hotline or submit the rapid ambulance dispatcher request below.
        </p>
      </section>

      {/* Hotline card & Request Form */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        {/* Urgent Contacts */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-red-500 text-white p-8 rounded-3xl space-y-6 shadow-xl shadow-red-500/25">
            <div className="flex items-center space-x-3">
              <PhoneCall className="w-7 h-7 animate-bounce" />
              <h3 className="font-heading font-extrabold text-2xl">Trauma Hotline</h3>
            </div>
            <p className="text-red-50 text-xs md:text-sm">
              Speak directly with an emergency triage coordinator in seconds. Available 24/7.
            </p>
            <div className="font-heading font-black text-3xl md:text-4xl tracking-wider">
              +1 (555) 911-3000
            </div>
            <div className="border-t border-red-400 pt-4 text-xs space-y-2">
              <p>✔ Average pick-up speed: Under 3 seconds</p>
              <p>✔ Direct link to air transport and helicopters</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-4">
            <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center space-x-2">
              <Heart className="w-5 h-5 text-emerald-500" />
              <span>Emergency Blood Registry</span>
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              We maintain a critical registry for rare blood types (O-, AB-, A-). Sign up or contact our blood bank directly at +1 (555) 911-3088 to help save lives today.
            </p>
          </div>
        </div>

        {/* Ambulance Dispatch Form */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xs space-y-6">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 flex items-center space-x-2">
              <Truck className="w-6 h-6 text-primary" />
              <span>Request Rapid Ambulance Dispatch</span>
            </h3>

            {activeEmergency ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 p-6 rounded-2xl space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  <span className="font-heading font-bold">Ambulance Confirmed & Dispatched!</span>
                </div>
                <div className="text-slate-600 text-xs md:text-sm space-y-2 pl-9">
                  <p><strong>Patient Name:</strong> {activeEmergency.patientName}</p>
                  <p><strong>Dispatch Location:</strong> {activeEmergency.location}</p>
                  <p><strong>Estimated Arrival Time:</strong> {activeEmergency.estimatedArrival}</p>
                  <p className="flex items-center space-x-1.5 text-primary font-bold">
                    <Clock className="w-4 h-4 animate-spin" />
                    <span>Status: En Route</span>
                  </p>
                </div>
                <button
                  onClick={dismissEmergency}
                  className="mt-2 text-slate-500 hover:text-slate-800 text-xs font-bold underline pl-9"
                >
                  Dismiss / Cancel Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase">Patient Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter patient name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase">Contact Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (555) 012-3456"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Current Pickup Address / Details</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter streets, coordinates, or building markers"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Primary Critical Symptom / Condition</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden font-semibold"
                  >
                    <option value="cardiac">Cardiac Distress / Chest Pain</option>
                    <option value="trauma">Trauma / Severe Bleeding / Car Accident</option>
                    <option value="respiratory">Respiratory Failure / Choking</option>
                    <option value="stroke">Neurological Stroke symptoms</option>
                    <option value="burn">Severe Thermal Burns</option>
                    <option value="other">Other Acute Illness</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold text-sm py-4 rounded-2xl transition-all shadow-md shadow-red-500/10 hover:scale-101"
                >
                  Confirm and Dispatch Ambulance Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* First Aid Instructions */}
      <section className="space-y-8 text-left bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200/50">
        <h3 className="font-heading font-extrabold text-2xl text-slate-900 flex items-center space-x-2">
          <HelpCircle className="w-6 h-6 text-primary" />
          <span>Critical First Aid Guides (While Waiting for Help)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {firstAidTips.map((tip, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-2">
              <h4 className="font-heading font-bold text-slate-900 text-base flex items-center space-x-2">
                <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">{idx + 1}</span>
                <span>{tip.title}</span>
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed pl-8">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
