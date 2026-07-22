import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HospitalProvider } from './context/HospitalContext';
import RootLayout from './layouts/RootLayout';
import Loader from './components/Loader';

// Lazy loading pages for optimized performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Doctors = lazy(() => import('./pages/Doctors'));
const DoctorDetail = lazy(() => import('./pages/DoctorDetail'));
const Departments = lazy(() => import('./pages/Departments'));
const DepartmentDetail = lazy(() => import('./pages/DepartmentDetail'));
const Services = lazy(() => import('./pages/Services'));
const Emergency = lazy(() => import('./pages/Emergency'));
const Appointment = lazy(() => import('./pages/Appointment'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Careers = lazy(() => import('./pages/Careers'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HospitalProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="doctor/:id" element={<DoctorDetail />} />
              <Route path="departments" element={<Departments />} />
              <Route path="department/:id" element={<DepartmentDetail />} />
              <Route path="services" element={<Services />} />
              <Route path="emergency" element={<Emergency />} />
              <Route path="appointment" element={<Appointment />} />
              <Route path="contact" element={<Contact />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="careers" element={<Careers />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<BlogDetail />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-conditions" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HospitalProvider>
  );
}

export default App;
