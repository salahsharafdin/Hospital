import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useHospital } from '../context/HospitalContext';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';
import Modal from '../components/Modal';
import { Calendar, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

export default function Appointment() {
  const { bookAppointment } = useHospital();
  const [searchParams] = useSearchParams();

  // state fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedDoc, setSelectedDoc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  // error state
  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successDetails, setSuccessDetails] = useState(null);

  // read url queries
  useEffect(() => {
    const urlDept = searchParams.get("dept");
    const urlDoc = searchParams.get("doctor");
    if (urlDept) setSelectedDept(urlDept);
    if (urlDoc) setSelectedDoc(urlDoc);
  }, [searchParams]);

  // dynamically filter doctor list based on selected department
  const filteredDocs = React.useMemo(() => {
    if (!selectedDept) return doctors;
    return doctors.filter(
      (d) => d.department.toLowerCase() === selectedDept.toLowerCase()
    );
  }, [selectedDept]);

  // reset selected doctor if not in filtered list
  useEffect(() => {
    if (selectedDoc) {
      const match = filteredDocs.find(d => d.name === selectedDoc);
      if (!match) setSelectedDoc("");
    }
  }, [selectedDept, filteredDocs]);

  const validate = () => {
    const tempErrors = {};
    if (!name.trim()) tempErrors.name = "Full name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Valid email is required";
    if (!phone.trim() || phone.length < 7) tempErrors.phone = "Valid phone is required";
    if (!gender) tempErrors.gender = "Gender is required";
    if (!age || parseInt(age, 10) <= 0) tempErrors.age = "Valid age (> 0) is required";
    if (!selectedDept) tempErrors.department = "Please select a department";
    if (!selectedDoc) tempErrors.doctor = "Please select a specialist";
    if (!date) tempErrors.date = "Please select an appointment date";
    if (!time) tempErrors.time = "Please select a time slot";

    // prevent picking past dates
    if (date) {
      const chosen = new Date(date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (chosen < today) {
        tempErrors.date = "Appointment date cannot be in the past";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const details = {
      patientName: name,
      email,
      phone,
      gender,
      age: parseInt(age, 10),
      department: selectedDept,
      doctor: selectedDoc,
      date,
      time,
      message
    };

    const receipt = bookAppointment(details);
    setSuccessDetails(receipt);
    setIsSuccessModalOpen(true);

    // clear fields
    setName("");
    setEmail("");
    setPhone("");
    setGender("");
    setAge("");
    setSelectedDept("");
    setSelectedDoc("");
    setDate("");
    setTime("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="space-y-12 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <section className="text-center space-y-4">
        <span className="text-xs text-primary font-bold tracking-wider uppercase font-heading">Online Registry</span>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Book Your Appointment
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Please fill out the patient registry form below to book a consultation. Our clinical coordinators will contact you to verify details.
        </p>
      </section>

      {/* Booking Form card */}
      <section className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xs text-left">
        <form onSubmit={handleBooking} className="space-y-6">
          {/* Section 1: Patient details */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-slate-950 border-b border-slate-100 pb-2">
              1. Patient Demographics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Patient Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={`w-full bg-slate-50 border rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden ${
                    errors.name ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="e.g. 35"
                  className={`w-full bg-slate-50 border rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden ${
                    errors.age ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
                  }`}
                />
                {errors.age && <p className="text-xs text-red-500">{errors.age}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase block">Gender</label>
                <div className="flex space-x-4 mt-2">
                  {["Male", "Female", "Other"].map((g) => (
                    <label key={g} className="flex items-center space-x-2 text-sm text-slate-700 font-semibold cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
                {errors.gender && <p className="text-xs text-red-500">{errors.gender}</p>}
              </div>
            </div>
          </div>

          {/* Section 2: Contacts */}
          <div className="space-y-4 pt-4">
            <h3 className="font-heading font-bold text-lg text-slate-950 border-b border-slate-100 pb-2">
              2. Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@example.com"
                  className={`w-full bg-slate-50 border rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden ${
                    errors.email ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +1 (555) 012-3456"
                  className={`w-full bg-slate-50 border rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden ${
                    errors.phone ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Section 3: Clinical Routing */}
          <div className="space-y-4 pt-4">
            <h3 className="font-heading font-bold text-lg text-slate-950 border-b border-slate-100 pb-2">
              3. Clinical Assignment & Time
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Clinical Department</label>
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden font-semibold ${
                    errors.department ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
                  }`}
                >
                  <option value="">-- Select Department --</option>
                  {departments.map((d) => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
                {errors.department && <p className="text-xs text-red-500">{errors.department}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Medical Specialist</label>
                <select
                  value={selectedDoc}
                  onChange={(e) => setSelectedDoc(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden font-semibold ${
                    errors.doctor ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
                  }`}
                >
                  <option value="">-- Select Specialist --</option>
                  {filteredDocs.map((d) => (
                    <option key={d.id} value={d.name}>{d.name} ({d.specialty})</option>
                  ))}
                </select>
                {errors.doctor && <p className="text-xs text-red-500">{errors.doctor}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden ${
                    errors.date ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
                  }`}
                />
                {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Time Slot</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden font-semibold ${
                    errors.time ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-200"
                  }`}
                >
                  <option value="">-- Select Time Slot --</option>
                  <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                  <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                  <option value="01:00 PM">01:00 PM - 02:00 PM</option>
                  <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="03:00 PM">03:00 PM - 04:00 PM</option>
                </select>
                {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
              </div>
            </div>
          </div>

          {/* Section 4: Message */}
          <div className="space-y-2 pt-4">
            <label className="text-xs font-bold text-slate-700 uppercase">Additional Clinical Notes / Symptoms (Optional)</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. chronic knee pain since 2 weeks, seeking primary scan..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-hidden"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-primary hover:shadow-lg hover:shadow-primary/30 text-white font-bold text-sm py-4 rounded-2xl transition-all shadow-md shadow-primary/20 text-center"
          >
            Submit Registry Booking Request
          </button>
        </form>
      </section>

      {/* Success Modal Popup */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Appointment Registered Successfully"
      >
        {successDetails && (
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 p-3.5 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="font-heading font-bold text-sm">Registry Request Confirmed!</span>
            </div>
            <div className="text-slate-600 text-xs md:text-sm space-y-2 pt-2">
              <p><strong>Appointment ID:</strong> {successDetails.id}</p>
              <p><strong>Patient Full Name:</strong> {successDetails.patientName}</p>
              <p><strong>Clinical Assignment:</strong> {successDetails.department} ({successDetails.doctor})</p>
              <p><strong>Preferred Consultation:</strong> {successDetails.date} at {successDetails.time}</p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <p className="text-slate-400 text-[11px] leading-relaxed">
                * Note: A SMS verification alert has been sent to {successDetails.phone}. Our registration desk will call you to finalize within 2 hours.
              </p>
            </div>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-slate-950 text-white font-bold text-xs py-3 rounded-xl hover:bg-slate-800 transition-colors text-center"
            >
              Close Confirmation
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
