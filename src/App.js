import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Pages
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import OurTeam from './components/pages/OurTeam';
import OurMission from './components/pages/OurMission';
import WhyChooseUs from './components/pages/WhyChooseUs';
import Careers from './components/pages/Careers';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import LocalDelivery from './components/pages/LocalDelivery';
import LongHaulTransportation from './components/pages/LongHaulTransportation';
import CrossCountryShipping from './components/pages/CrossCountryShipping';
import DedicatedRoutes from './components/pages/DedicatedRoutes';
import Warehousing from './components/pages/Warehousing';
import CustomerSupport from './components/pages/CustomerSupport';
import DriverApplication from './components/pages/DriverApplication';
import LogbookService from './components/pages/LogbookService';
import Feedback from './components/pages/Feedback';
import Tracking from './components/pages/Tracking';
import Claims from './components/pages/Claims';
import OurStory from './components/pages/OurStory';
import Team from './components/pages/Team';
import Values from './components/pages/Values';
import Achievements from './components/pages/Achievements';
import About from './components/pages/About';
import OfficeLocation from './components/pages/OfficeLocation';
import ContactForm from './components/pages/ContactForm';
import SupportHours from './components/pages/SupportHours';
import GetQuote from './components/pages/GetQuote';

// Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import LiveChat from './components/LiveChat';
import Login from './components/Login';
import AIAssistant from './components/AIAssistant';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [colorMode, setColorMode] = useState(() => {
    const savedMode = localStorage.getItem('colorMode');
    return savedMode || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode);
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  const toggleColorMode = () => {
    setColorMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<OurTeam />} />
              <Route path="/mission" element={<OurMission />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/office-location" element={<OfficeLocation />} />
              <Route path="/contact/form" element={<ContactForm />} />
              <Route path="/contact/support-hours" element={<SupportHours />} />
              <Route path="/contact/get-quote" element={<GetQuote />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/local-delivery" element={<LocalDelivery />} />
              <Route path="/services/long-haul" element={<LongHaulTransportation />} />
              <Route path="/services/cross-country" element={<CrossCountryShipping />} />
              <Route path="/services/dedicated-routes" element={<DedicatedRoutes />} />
              <Route path="/services/warehousing" element={<Warehousing />} />
              <Route path="/support/customer-service" element={<CustomerSupport />} />
              <Route path="/support/feedback" element={<Feedback />} />
              <Route path="/support/tracking" element={<Tracking />} />
              <Route path="/support/claims" element={<Claims />} />
              <Route path="/about/our-story" element={<OurStory />} />
              <Route path="/login" element={<Login />} />
              <Route path="/driver-management" element={<LogbookService />} />
              <Route path="/driver-application" element={<DriverApplication />} />
              <Route path="/team" element={<Team />} />
              <Route path="/values" element={<Values />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
          </main>
          <LiveChat />
          <AIAssistant />
          <Footer />
          <button 
            className="theme-toggle"
            onClick={toggleColorMode}
            aria-label="Toggle dark mode"
          >
            {colorMode === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


