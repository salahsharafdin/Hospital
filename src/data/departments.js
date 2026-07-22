export const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "Heart",
    description: "State-of-the-art heart care, including diagnostics, interventional treatments, and cardiovascular rehabilitation.",
    details: "Our Cardiology department offers full-spectrum cardiac care led by world-renowned specialists. Equipped with cutting-edge catheterization labs, we handle complex coronary interventions, heart failure management, arrhythmia treatments, and preventative cardiology.",
    stats: { doctors: 12, patientsServed: "15,000+", successRate: "99.2%" },
    features: ["24/7 Cardiac Emergency Care", "Advanced Cardiac Catheterization", "Electrophysiology Studies", "Non-invasive Cardiac Imaging"]
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "Brain",
    description: "Expert treatment for brain, spinal cord, nerve, and muscle disorders with advanced neuro-diagnostic support.",
    details: "The Neurology and Neurosurgery center delivers advanced therapy for stroke, epilepsy, Parkinson's disease, Alzheimer's, and complex spinal disorders. We combine clinical expertise with state-of-the-art neuroimaging and minimally invasive surgical solutions.",
    stats: { doctors: 10, patientsServed: "10,000+", successRate: "97.8%" },
    features: ["Dedicated Stroke Unit", "Comprehensive Epilepsy Center", "Neuromuscular Disease Clinic", "Advanced Neuro-Intensive Care"]
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "Baby",
    description: "Compassionate healthcare dedicated to children, from newborns to adolescents, in a child-friendly environment.",
    details: "Our Pediatric Center is designed specifically to ensure children receive the highest quality of clinical care in a warm, welcoming space. We offer routine wellness checkups, immunizations, and specialized pediatric subspecialty clinics.",
    stats: { doctors: 15, patientsServed: "25,000+", successRate: "99.5%" },
    features: ["Child-friendly Environment", "Neonatal Intensive Care (NICU)", "Pediatric Emergency Services", "Developmental Assessments"]
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "Bone",
    description: "Advanced bone, joint, ligament, and muscle care, specializing in joint replacements and sports medicine.",
    details: "From complex joint reconstruction to sports injuries, our Orthopedic center utilizes modern surgical techniques and customized physical therapy programs to restore your mobility and get you back to an active lifestyle.",
    stats: { doctors: 14, patientsServed: "18,000+", successRate: "98.9%" },
    features: ["Robotic Joint Replacement", "Sports Medicine & Rehabilitation", "Spine Surgery", "Pediatric Orthopedics"]
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: "Activity",
    description: "Comprehensive cancer care using advanced radiation, immunotherapy, chemotherapy, and surgical oncology.",
    details: "We offer an integrated, multi-disciplinary approach to cancer treatment. Our team combines surgical expertise, advanced chemotherapy regimens, modern radiation therapy, and personalized immunotherapy with supportive patient care.",
    stats: { doctors: 11, patientsServed: "8,000+", successRate: "94.5%" },
    features: ["Precision Chemotherapy", "Stereotactic Radiosurgery", "Cancer Screening Programs", "Integrative Palliative Care"]
  },
  {
    id: "radiology",
    name: "Radiology",
    icon: "Eye",
    description: "High-definition diagnostic imaging, including 3T MRI, 128-slice CT scans, digital X-rays, and ultrasounds.",
    details: "Equipped with the latest imaging technologies, our Radiology department delivers quick and highly accurate diagnostic reports that form the foundation of successful medical treatments.",
    stats: { doctors: 8, patientsServed: "40,000+", successRate: "99.9%" },
    features: ["3T Silent MRI", "High-speed 128-slice CT", "Advanced 3D/4D Ultrasound", "Interventional Radiology Procedures"]
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "Sparkles",
    description: "Clinical and aesthetic skin care, treating chronic skin conditions and advanced laser therapies.",
    details: "Our board-certified dermatologists offer comprehensive consultations and advanced procedures for all skin, hair, and nail conditions, combining medical therapies with professional aesthetic procedures.",
    stats: { doctors: 6, patientsServed: "12,000+", successRate: "99.1%" },
    features: ["Skin Cancer Screening", "Laser Skin Resurfacing", "Chronic Eczema & Psoriasis Management", "Aesthetic Skin Consultations"]
  },
  {
    id: "dentistry",
    name: "Dentistry",
    icon: "Smile",
    description: "Premium dental care covering general dentistry, cosmetic enhancements, and complex oral surgeries.",
    details: "Our Dentistry clinic utilizes painless procedures to deliver healthy and beautiful smiles. We offer orthodontics, implants, crowns, and oral hygiene education in a comfortable, modern setting.",
    stats: { doctors: 8, patientsServed: "14,000+", successRate: "99.4%" },
    features: ["Advanced Dental Implants", "Cosmetic Smile Makeovers", "Painless Root Canal Therapy", "Pediatric Dentistry"]
  },
  {
    id: "emergency",
    name: "Emergency",
    icon: "ShieldAlert",
    description: "24/7 immediate trauma and acute medical care staffed by certified emergency medicine specialists.",
    details: "Our Emergency Medicine department is equipped with a rapid triage system, advanced resuscitation bays, and on-call specialists to manage acute illnesses, critical traumas, and life-threatening emergencies.",
    stats: { doctors: 18, patientsServed: "50,000+", successRate: "98.7%" },
    features: ["24/7 Trauma Specialists", "Advanced Life Support Ambulances", "Immediate Cardiac Care Setup", "Poison Control & Toxicology"]
  },
  {
    id: "icu",
    name: "ICU",
    icon: "Flame",
    description: "Intensive care units with round-the-clock monitoring and life-support systems for critical patients.",
    details: "Our multi-disciplinary Intensive Care Units (ICU) provide high-ratio nursing and continuous medical supervision for patients recovering from major surgeries, severe infections, or critical organ failures.",
    stats: { doctors: 10, patientsServed: "5,000+", successRate: "96.5%" },
    features: ["Advanced Mechanical Ventilation", "Continuous Hemodynamic Monitoring", "Dedicated ICU Pharmacy", "24/7 Critical Care Specialists"]
  },
  {
    id: "laboratory",
    name: "Laboratory",
    icon: "FlaskConical",
    description: "Accurate, rapid pathology and diagnostic laboratory testing using automated molecular scanners.",
    details: "Our laboratory operates 24/7 to process hematology, clinical biochemistry, microbiology, and molecular genetics testing, delivering reliable insights for personalized treatment plans.",
    stats: { doctors: 5, patientsServed: "80,000+", successRate: "99.9%" },
    features: ["Automated Bio-Analyzers", "Molecular & Genetic Testing", "Fast-track Urgent Lab Panels", "Rigorous Quality Assurance Standards"]
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    icon: "Pills",
    description: "24/7 hospital pharmacy offering authentic medications, counseling, and home delivery support.",
    details: "Staffed by clinical pharmacists, our pharmacy ensures safe medication dispensing, rigorous interaction screening, and patient counseling on dosage and potential side-effects.",
    stats: { doctors: 9, patientsServed: "90,000+", successRate: "100%" },
    features: ["24/7 Medication Dispensation", "Clinical Interaction Profiling", "Vaccine Distribution Center", "Home Delivery & Auto-Refills"]
  },
  {
    id: "surgery",
    name: "Surgery",
    icon: "Scissors",
    description: "Advanced general and specialized surgeries utilizing minimally invasive laparoscopic and robotic systems.",
    details: "Equipped with state-of-the-art operating suites, our surgical team carries out complex abdominal, thoracic, endocrine, and bariatric operations with a focus on quick recovery times and minimal scarring.",
    stats: { doctors: 16, patientsServed: "12,000+", successRate: "98.5%" },
    features: ["Robotic-assisted Surgery", "Daycare Surgical Unit", "Hybrid Operating Rooms", "Post-operative Care Unit"]
  },
  {
    id: "urology",
    name: "Urology",
    icon: "GlassWater",
    description: "Complete kidney, bladder, and male reproductive tract treatments, including laser kidney stone removal.",
    details: "Our Urology department treats conditions like kidney stones, prostate enlargement, urinary tract infections, and urological cancers using state-of-the-art laser lithotripsy and robotic urosurgery.",
    stats: { doctors: 7, patientsServed: "9,000+", successRate: "98.2%" },
    features: ["Laser Stone Lithotripsy", "Prostate Clinic & Advanced Diagnostics", "Male Fertility Center", "Uro-oncology Management"]
  },
  {
    id: "ent",
    name: "ENT",
    icon: "Music",
    description: "Diagnosis and treatments for ear, nose, throat, head, and neck conditions, including hearing rehabilitation.",
    details: "We treat chronic sinusitis, hearing loss, voice disorders, and head/neck tumors. Our clinic offers complete audiological tests, balance assessments, and advanced microsurgeries.",
    stats: { doctors: 8, patientsServed: "11,000+", successRate: "99.0%" },
    features: ["Hearing Aid Clinic", "Microsurgery of the Ear", "Endoscopic Sinus Surgery", "Speech & Swallow Rehabilitation"]
  },
  {
    id: "eye-care",
    name: "Eye Care",
    icon: "Eye",
    description: "Premium ophthalmology care, offering advanced LASIK, cataract surgeries, and glaucoma therapies.",
    details: "Our Eye Care center helps protect and restore vision. We provide advanced laser vision corrections, computer-guided cataract lens transplants, and comprehensive pediatric eye checkups.",
    stats: { doctors: 9, patientsServed: "20,000+", successRate: "99.7%" },
    features: ["Blade-free LASIK Surgery", "Premium Cataract Lenses", "Glaucoma Screening & Management", "Retinal Clinic"]
  },
  {
    id: "gynecology",
    name: "Gynecology",
    icon: "HeartHandshake",
    description: "Comprehensive women's healthcare, covering prenatal guidance, painless deliveries, and gynecological surgeries.",
    details: "We support women through every life stage, providing specialized care in pregnancy, labor, menopause, and gynecological wellness. Our birthing suites offer maximum comfort and safety.",
    stats: { doctors: 14, patientsServed: "22,000+", successRate: "99.4%" },
    features: ["Luxury LDRP Birthing Suites", "High-risk Pregnancy Clinic", "Minimally Invasive Hysterectomies", "Infertility Consultations"]
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: "Smile",
    description: "Empathetic, confidential psychiatric therapies and psychological counseling for mental wellness.",
    details: "Our psychologists and psychiatrists offer clinical support for anxiety, depression, bipolar disorder, PTSD, and stress management through tailored psychotherapy and medical care.",
    stats: { doctors: 8, patientsServed: "7,000+", successRate: "96.0%" },
    features: ["Individual & Family Therapy", "Cognitive Behavioral Therapy (CBT)", "Stress & Sleep Management", "Crisis Counseling Helpline"]
  }
];
