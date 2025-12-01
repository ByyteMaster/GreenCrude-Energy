import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import ContentPage from './pages/ContentPage';
import Operations from './pages/Operations';
import Contact from './pages/Contact';
import About from './pages/About';
import AnnualReport from './pages/AnnualReport';
import AIChatModal from './components/AIChatModal';

const { HashRouter: Router, Routes, Route, Navigate } = ReactRouterDOM;

// Placeholder components for pages not fully implemented to ensure routing doesn't break
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
    <h1 className="text-4xl font-display font-bold text-green-900 mb-4">{title}</h1>
    <p className="text-gray-500 max-w-md text-center">
      This page is currently under development as part of the GreenCrude corporate website demo.
    </p>
  </div>
);

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <Layout onOpenChat={() => setIsChatOpen(true)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          
          {/* Main Technologies Page */}
          <Route path="/technologies" element={<Technologies />} />
          {/* Dynamic Content Routes for individual Tech pages */}
          <Route path="/technologies/:id" element={<ContentPage />} />

          {/* Dynamic Content Routes for Solutions */}
          <Route path="/solutions/:id" element={<ContentPage />} />
          <Route path="/solutions" element={<Navigate to="/solutions/tires" replace />} /> {/* Default redirect */}

          {/* Dynamic Content Routes for Services */}
          <Route path="/services/:id" element={<ContentPage />} />
          <Route path="/services" element={<Navigate to="/services/engineering" replace />} /> {/* Default redirect */}

          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/quote" element={<Contact />} />
          
          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/mission" element={<About />} />
          <Route path="/company/leadership" element={<About />} />
          <Route path="/company/operations" element={<Operations />} />
          <Route path="/company/sustainability" element={<PlaceholderPage title="Sustainability" />} />
          <Route path="/company/careers" element={<PlaceholderPage title="Careers" />} />

          {/* Resources Routes */}
          <Route path="/resources/news" element={<PlaceholderPage title="News & Insights" />} />
          <Route path="/resources/cases" element={<PlaceholderPage title="Case Studies" />} />
          <Route path="/resources/whitepapers" element={<PlaceholderPage title="Technical Whitepapers" />} />
          <Route path="/resources/faq" element={<PlaceholderPage title="FAQ" />} />

          {/* Investors Routes */}
          <Route path="/investors" element={<AnnualReport />} />
          <Route path="/investors/reports" element={<AnnualReport />} />
          <Route path="/investors/overview" element={<AnnualReport />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <AIChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </Layout>
    </Router>
  );
};

export default App;
