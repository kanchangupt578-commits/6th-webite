'use client'

import { motion } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">BrightSmile</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-500 hover:text-sky-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-sky-100 hover:bg-sky-700 transition-all"
              >
                Book Appointment
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-sky-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-xl"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-sky-600 block px-3 py-4 text-base font-medium border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 px-3">
              <a 
                href="#contact"
                className="w-full bg-sky-600 text-white text-center py-3 rounded-xl font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
