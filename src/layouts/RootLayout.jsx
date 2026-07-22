import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ScrollToTop from '../components/ScrollToTop';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll indicator behavior */}
      <ScrollToTop />

      {/* Primary header */}
      <Navbar />

      {/* Clickable route path indicator */}
      <Breadcrumb />

      {/* Dynamic page contents wrapper */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Main footer */}
      <Footer />
    </div>
  );
}
