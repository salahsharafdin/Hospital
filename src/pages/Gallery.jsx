import React, { useState, useMemo } from 'react';
import { Eye, Shield } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "facility", label: "Infrastructure" },
    { id: "doctors", label: "Medical Panel" },
    { id: "equipment", label: "Advanced Equipment" },
    { id: "laboratory", label: "Laboratories" },
    { id: "rooms", label: "Patient Wards" },
    { id: "operation", label: "Operation Theater" },
    { id: "ambulances", label: "Ambulance Units" }
  ];

  const items = [
    {
      id: "gal-1",
      category: "facility",
      title: "Main Lobby & Reception",
      desc: "Luxury waiting area featuring natural light and digital receptionist panels.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "gal-2",
      category: "doctors",
      title: "Cardiology Specialist Consultation",
      desc: "Dr. Jenkins reviewing telemetry records with a patient.",
      image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "gal-3",
      category: "equipment",
      title: "High-Field 3T Silent MRI",
      desc: "Ultra-sharp brain scan scanner minimizing noise and anxiety.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "gal-4",
      category: "laboratory",
      title: "Molecular Genetics Lab",
      desc: "Automated scanners analyzing tissue samples for precision oncology.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "gal-5",
      category: "rooms",
      title: "Luxury Patient Suite",
      desc: "Private inpatient room with panoramic window and companion sofa bed.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "gal-6",
      category: "operation",
      title: "Robotic Assisted Surgery Suite",
      desc: "Hybrid theater integrating computer-guided robotic arms and 3D displays.",
      image: "https://images.unsplash.com/photo-1526253038957-bce54e05968e?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "gal-7",
      category: "ambulances",
      title: "Advanced Life Support Ambulance",
      desc: "Mobile ICU unit equipped with ventilators and real-time hospital telemetry link.",
      image: "https://images.unsplash.com/photo-1587815073078-f636169821e3?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "gal-8",
      category: "facility",
      title: "Modern Outer Building",
      desc: "Glass structure designed for energy efficiency and easy access.",
      image: "https://images.unsplash.com/photo-1586773860418-d3b3de97e663?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "gal-9",
      category: "doctors",
      title: "Clinical Surgery Team",
      desc: "Dr. Patel consulting with fellows before a laparoscopic surgery.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-12 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Intro Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs text-primary font-bold tracking-wider uppercase">Visual Walkthrough</span>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
          St. Marina Hospital Photo Gallery
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Take a look at our luxury facilities, expert clinical panels, diagnostics laboratories, and advanced robotic surgical suites.
        </p>
      </section>

      {/* Tabs list */}
      <section className="flex flex-wrap items-center justify-center gap-2.5 pb-4">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs md:text-sm transition-all duration-200 ${
              activeCategory === c.id
                ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {c.label}
          </button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all group text-left"
          >
            <div className="relative h-64 bg-slate-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/95 text-slate-900 p-3.5 rounded-2xl shadow-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] text-primary font-bold tracking-widest uppercase">{item.category}</span>
              <h3 className="font-heading font-bold text-lg text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
