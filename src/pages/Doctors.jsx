import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { departments } from '../data/departments';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { Star, Award, MapPin, DollarSign, Calendar, ChevronRight } from 'lucide-react';

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [sortBy, setSortBy] = useState("rating"); // rating, experience, name, fee
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // unique department names from doctors list
  const deptList = useMemo(() => {
    return departments.map(d => d.name);
  }, []);

  const filteredDoctors = useMemo(() => {
    let result = [...doctors];

    // search query filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        d =>
          d.name.toLowerCase().includes(q) ||
          d.specialty.toLowerCase().includes(q) ||
          d.department.toLowerCase().includes(q)
      );
    }

    // department filter
    if (selectedDepartment !== "") {
      result = result.filter(d => d.department === selectedDepartment);
    }

    // gender filter
    if (selectedGender !== "") {
      result = result.filter(d => d.gender === selectedGender);
    }

    // sorting
    result.sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      if (sortBy === "experience") {
        return b.experience - a.experience;
      }
      if (sortBy === "fee") {
        return a.consultationFee - b.consultationFee;
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedDepartment, selectedGender, sortBy]);

  // reset page on filter change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedDepartment, selectedGender, sortBy]);

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
  const paginatedDoctors = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredDoctors.slice(start, start + itemsPerPage);
  }, [filteredDoctors, currentPage]);

  return (
    <div className="space-y-12 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Intro */}
      <section className="text-left space-y-4 max-w-3xl">
        <span className="text-xs text-primary font-bold tracking-wider uppercase">Our Clinical Staff</span>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          Consult With Board-Certified Specialists
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Find and schedule consultations with our panel of 20 expert clinicians. Filter by department or sort by experience to select the best doctor for your needs.
        </p>
      </section>

      {/* Search and Filters */}
      <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search doctors by name, specialty, or department..."
          />
          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            {/* Department Filter */}
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary text-xs md:text-sm font-semibold flex-grow lg:flex-grow-0"
            >
              <option value="">All Departments</option>
              {deptList.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            {/* Gender Filter */}
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary text-xs md:text-sm font-semibold flex-grow lg:flex-grow-0"
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary text-xs md:text-sm font-semibold flex-grow lg:flex-grow-0"
            >
              <option value="rating">Sort by Rating</option>
              <option value="experience">Sort by Experience</option>
              <option value="fee">Sort by Consultation Fee</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid List */}
      {paginatedDoctors.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginatedDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white font-bold text-xs px-2.5 py-1 rounded-lg flex items-center space-x-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{doc.rating}</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[10px] text-primary font-bold tracking-widest uppercase">{doc.department}</span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 mt-0.5">{doc.name}</h3>
                    <p className="text-xs text-slate-500">{doc.specialty}</p>
                  </div>
                  <div className="space-y-2 text-slate-600 text-xs md:text-sm pt-2">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{doc.experience} Years of Clinical Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">{doc.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-100/50 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Consultation Fee</span>
                  <span className="text-slate-900 font-extrabold text-base">${doc.consultationFee}</span>
                </div>
                <Link
                  to={`/doctor/${doc.id}`}
                  className="bg-slate-950 hover:bg-primary text-white p-3 rounded-xl transition-all flex items-center justify-center shadow-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="text-center py-20 bg-white border border-slate-100 rounded-3xl">
          <p className="text-slate-500 font-heading font-medium text-lg">No specialists match your search criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDepartment("");
              setSelectedGender("");
              setSortBy("rating");
            }}
            className="mt-4 text-primary font-bold hover:underline"
          >
            Clear Filters
          </button>
        </section>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
