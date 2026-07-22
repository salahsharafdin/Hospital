import React, { createContext, useState, useContext } from 'react';

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [newsletterEmails, setNewsletterEmails] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [activeEmergency, setActiveEmergency] = useState(null);

  const bookAppointment = (appointmentData) => {
    const newAppointment = {
      id: `apt-${Date.now()}`,
      ...appointmentData,
      createdAt: new Date().toISOString()
    };
    setAppointments((prev) => [newAppointment, ...prev]);
    return newAppointment;
  };

  const subscribeNewsletter = (email) => {
    if (!newsletterEmails.includes(email)) {
      setNewsletterEmails((prev) => [email, ...prev]);
      return { success: true, message: "Thank you for subscribing to our newsletter!" };
    }
    return { success: false, message: "This email is already subscribed." };
  };

  const submitJobApplication = (applicationData) => {
    const newApplication = {
      id: `job-app-${Date.now()}`,
      ...applicationData,
      createdAt: new Date().toISOString()
    };
    setJobApplications((prev) => [newApplication, ...prev]);
    return newApplication;
  };

  const requestAmbulance = (ambulanceDetails) => {
    const activeAlert = {
      id: `alert-${Date.now()}`,
      ...ambulanceDetails,
      status: "Dispatched",
      estimatedArrival: "10-15 mins"
    };
    setActiveEmergency(activeAlert);
    return activeAlert;
  };

  const dismissEmergency = () => {
    setActiveEmergency(null);
  };

  return (
    <HospitalContext.Provider
      value={{
        appointments,
        bookAppointment,
        newsletterEmails,
        subscribeNewsletter,
        jobApplications,
        submitJobApplication,
        activeEmergency,
        requestAmbulance,
        dismissEmergency
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => {
  const context = useContext(HospitalContext);
  if (!context) {
    throw new Error("useHospital must be used within a HospitalProvider");
  }
  return context;
};
