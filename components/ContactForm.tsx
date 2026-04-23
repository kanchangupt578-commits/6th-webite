'use client'

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden border border-slate-200 shadow-sm">
          <div className="grid lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-10 md:p-16 flex flex-col justify-between">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="inline-block text-sky-600 font-bold uppercase tracking-widest text-xs mb-4"
                >
                  Get In Touch
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
                  Ready for a <br /> Brighter Smile?
                </h2>
                <p className="text-slate-500 text-lg mb-12 max-w-md">
                  Book your first visit today and join our family of patients in San Francisco.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0 border border-sky-100">
                      <MapPin className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight mb-1">Our Location</h4>
                      <p className="text-slate-500 text-sm">123 Market Street, Suite 450<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0 border border-sky-100">
                      <Phone className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight mb-1">Phone Number</h4>
                      <p className="text-slate-500 text-sm">(415) 555-0123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-10 md:p-16 bg-slate-900">
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 text-white"
                >
                  <div className="w-20 h-20 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-sky-500/20">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm text-sm">
                    Thank you. We'll contact you within 24 hours to confirm your appointment.
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-sky-400 font-bold uppercase tracking-widest text-xs hover:text-sky-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-white font-bold uppercase tracking-tighter text-lg mb-6">Send Inquiry</h4>
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name"
                    className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                  />
                  <textarea 
                    rows={3}
                    required
                    placeholder="Tell us about your dental needs..."
                    className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all resize-none"
                  ></textarea>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-colors shadow-lg shadow-sky-500/10"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                    ) : (
                      'Send Inquiry'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
