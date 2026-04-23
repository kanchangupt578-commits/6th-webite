'use client'

import { motion } from 'motion/react';
import { 
  Zap, 
  Smile, 
  ShieldCheck, 
  HeartPulse, 
  Stethoscope, 
  Sparkles 
} from 'lucide-react';

const services = [
  {
    title: "General Dentistry",
    description: "Routine checkups, cleanings, and preventative care to keep your smile healthy and bright.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Cosmetic Procedures",
    description: "Whitening, veneers, and bonding to help you achieve the perfect, confident smile you've always wanted.",
    icon: Sparkles,
    color: "bg-sky-50 text-sky-600"
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth using the latest implant technology.",
    icon: ShieldCheck,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Orthodontics",
    description: "Invisalign and traditional braces tailored to your needs for a perfectly aligned smile.",
    icon: Smile,
    color: "bg-sky-50 text-sky-600"
  },
  {
    title: "Emergency Care",
    description: "Same-day appointments for dental emergencies to provide immediate relief and care.",
    icon: Zap,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Kids' Dentistry",
    description: "Specialized, gentle care for our younger patients in a fun and welcoming environment.",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-600 font-bold uppercase tracking-widest text-xs"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 uppercase tracking-tighter"
          >
            Comprehensive Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-sky-50 text-sky-600 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  Details
                </span>
                <Sparkles className="w-4 h-4 text-sky-200 group-hover:text-sky-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
