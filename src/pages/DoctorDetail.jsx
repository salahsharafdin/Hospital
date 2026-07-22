import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { Star, Mail, Phone, MapPin, Calendar, BookOpen, Award, CheckCircle, ChevronLeft } from 'lucide-react';

export default function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-heading font-bold text-3xl text-slate-900">Doctor Profile Not Found</h2>
        <p className="text-slate-500">The specialist ID you are requesting is not registered in our clinic database.</p>
        <Link to="/doctors" className="text-primary font-bold hover:underline inline-flex items-center space-x-1">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to doctors list</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Back button */}
      <div className="text-left">
        <Link
          to="/doctors"
          className="text-slate-500 hover:text-primary font-semibold text-sm inline-flex items-center space-x-1"
        >
          <ChevronLeft className="w-4.5 h-4.5" />
          <span>Back to Specialists</span>
        </Link>
      </div>

      {/* Profile Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        {/* Left Card: Photo, Fee, CTA */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs space-y-6 text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
              <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-2xl text-slate-900">{doctor.name}</h1>
              <p className="text-sm text-primary font-bold mt-1">{doctor.specialty}</p>
              <p className="text-xs text-slate-400 mt-1">{doctor.department} Department</p>
            </div>

            <div className="border-t border-slate-100 pt-6 flex justify-around text-center">
              <div>
                <span className="text-xs text-slate-400 font-bold block uppercase">Rating</span>
                <span className="text-slate-900 font-extrabold text-lg flex items-center justify-center space-x-1 mt-0.5">
                  <Star className="w-4 h-4 text-emerald-500 fill-current" />
                  <span>{doctor.rating}</span>
                </span>
              </div>
              <div className="border-r border-slate-100" />
              <div>
                <span className="text-xs text-slate-400 font-bold block uppercase">Fee</span>
                <span className="text-slate-900 font-extrabold text-lg mt-0.5">${doctor.consultationFee}</span>
              </div>
            </div>

            <Link
              to={`/appointment?doctor=${encodeURIComponent(doctor.name)}&dept=${encodeURIComponent(doctor.department)}`}
              className="block w-full bg-gradient-primary text-white py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-primary/20 hover:scale-102 transition-all text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Right Info: Bio, Stats, Education */}
        <div className="lg:col-span-2 space-y-8">
          {/* Biography */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xs space-y-4">
            <h3 className="font-heading font-bold text-xl text-slate-900">Professional Biography</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{doctor.biography}</p>
          </div>

          {/* Quick Stats list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex items-start space-x-4">
              <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-800 text-sm">Education & Credentials</h4>
                <p className="text-slate-600 text-xs mt-1">{doctor.education}</p>
                <p className="text-slate-500 text-[11px] mt-0.5">{doctor.university}</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex items-start space-x-4">
              <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-800 text-sm">Consultation Hours</h4>
                <p className="text-slate-600 text-xs mt-1">{doctor.availability}</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Office: {doctor.officeNumber}</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex items-start space-x-4">
              <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-800 text-sm">Clinical Experience</h4>
                <p className="text-slate-600 text-xs mt-1">{doctor.experience} Years of Active Practice</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Board-certified specialist</p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex items-start space-x-4">
              <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-800 text-sm">Direct Contacts</h4>
                <p className="text-slate-600 text-xs mt-1">{doctor.email}</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Languages: {doctor.languages.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Skills / Expertise areas */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xs space-y-4">
            <h3 className="font-heading font-bold text-xl text-slate-900">Clinical Focus & Skills</h3>
            <div className="flex flex-wrap gap-2.5">
              {doctor.skills.map((skill, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200/50 rounded-xl px-4 py-2 text-xs md:text-sm font-semibold text-slate-700 flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200/50 text-left space-y-8">
        <h3 className="font-heading font-extrabold text-2xl text-slate-900">Patient Feedbacks & Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctor.reviews.map((rev, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-slate-900 text-sm">{rev.patientName}</h4>
                <div className="flex text-emerald-500">
                  {Array.from({ length: Math.round(rev.rating) }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-xs md:text-sm italic">"{rev.comment}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
