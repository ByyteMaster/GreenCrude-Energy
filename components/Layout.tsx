import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { NAVIGATION } from '../constants';
import { Menu, X, ChevronDown, ChevronRight, Leaf, Phone, Mail, MapPin } from 'lucide-react';

const { Link, useLocation } = ReactRouterDOM;

interface LayoutProps {
  children: React.ReactNode;
  onOpenChat: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onOpenChat }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location]);

  // Helper to check if a nav item is active (including children)
  const isItemActive = (itemPath?: string, children?: any[]) => {
    if (itemPath && location.pathname === itemPath) return true;
    if (children) {
      return children.some(child => location.pathname === child.path);
    }
    return false;
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
      {/* Top Bar */}
      <div className="bg-green-900 text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone size={12} className="mr-2" /> +1 (888) 555-0199</span>
            <span className="flex items-center"><Mail size={12} className="mr-2" /> info@greencrude.energy</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/investors" className="hover:text-green-300 transition">Investor Relations</Link>
            <Link to="/resources/news" className="hover:text-green-300 transition">News</Link>
            <Link to="/contact" className="hover:text-green-300 transition">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="bg-green-900 text-white p-2 rounded mr-3 group-hover:bg-green-800 transition">
                <Leaf size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-gray-900 tracking-tight leading-none">
                  GREEN<span className="text-green-800">CRUDE</span>
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Fueling the Future</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAVIGATION.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={item.path || '#'}
                    className={`px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors flex items-center ${
                      isItemActive(item.path, item.children) || activeDropdown === item.label ? 'text-green-800' : 'text-gray-600 hover:text-green-800'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="ml-1" />}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-[600px] bg-white shadow-xl border-t-4 border-green-800 p-6 grid grid-cols-2 gap-6 rounded-b-lg animate-fade-in-down transform -translate-x-1/4 z-50">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.path || '#'} className="group/item block p-3 rounded hover:bg-gray-50 transition">
                          <div className="flex items-center mb-1">
                            <span className="font-bold text-gray-800 group-hover/item:text-green-800 transition">{child.label}</span>
                            <ChevronRight size={14} className="ml-2 opacity-0 group-hover/item:opacity-100 transition-opacity text-green-600" />
                          </div>
                          {child.description && (
                            <p className="text-xs text-gray-500 leading-relaxed">{child.description}</p>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link to="/contact/quote" className="ml-4 bg-green-900 hover:bg-green-800 text-white px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wide transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Request Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col p-6 space-y-4">
              {NAVIGATION.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <Link to={item.path || '#'} className="text-lg font-bold text-gray-800">
                      {item.label}
                    </Link>
                  </div>
                  {item.children && (
                    <div className="pl-4 space-y-3 mt-2 border-l-2 border-green-100">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.path || '#'} className="block text-sm text-gray-600 py-1">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact/quote" className="block w-full text-center bg-green-900 text-white py-3 rounded font-bold uppercase">
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Leaf className="text-green-500 mr-2" />
                <h3 className="text-2xl font-display font-bold">GREEN<span className="text-green-500">CRUDE</span></h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pioneering the transition to a circular economy through advanced waste-to-energy technologies and sustainable fuel production systems.
              </p>
              <div className="text-gray-400 text-sm space-y-2">
                <p className="flex items-center"><MapPin size={14} className="mr-2" /> 100 Energy Way, Tech Park, CA</p>
                <p className="flex items-center"><Phone size={14} className="mr-2" /> +1 (888) 555-0199</p>
                <p className="flex items-center"><Mail size={14} className="mr-2" /> info@greencrude.energy</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Technologies</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/technologies/pyrolysis" className="hover:text-green-400 transition">Pyrolysis Systems</Link></li>
                <li><Link to="/technologies/gasification" className="hover:text-green-400 transition">Gasification</Link></li>
                <li><Link to="/technologies/biomass" className="hover:text-green-400 transition">Biomass Conversion</Link></li>
                <li><Link to="/technologies/efuel" className="hover:text-green-400 transition">Synthetic Fuels</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/company/about" className="hover:text-green-400 transition">About Us</Link></li>
                <li><Link to="/company/leadership" className="hover:text-green-400 transition">Leadership</Link></li>
                <li><Link to="/company/careers" className="hover:text-green-400 transition">Careers</Link></li>
                <li><Link to="/investors" className="hover:text-green-400 transition">Investors</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest in clean energy tech.</p>
              <form className="flex">
                <input type="email" placeholder="Email Address" className="bg-gray-800 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-green-500 text-sm" />
                <button className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-r text-white font-bold transition">GO</button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} GreenCrude Energy Inc. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Button */}
      <button 
        onClick={onOpenChat}
        className="fixed bottom-6 right-6 bg-green-900 text-white p-4 rounded-full shadow-2xl hover:bg-green-800 transition transform hover:scale-105 z-50 flex items-center gap-2"
      >
        <span className="text-xs font-bold uppercase hidden md:inline">Ask AI Assistant</span>
        <Leaf className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Layout;
