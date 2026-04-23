'use client'

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "Advanced Digital X-Rays",
    "Painless sedation dentistry",
    "Same-day emergencies",
    "Flexible financing plans",
    "Certified mercury-free",
    "Eco-friendly practices"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-5"
          >
            <span className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-4 block">About Our Practice</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
              Modern Care <br /> Personal <span className="text-sky-500">Touch</span>.
            </h2>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              At BrightSmile Dental Care, we believe that a visit to the dentist should 
              be a comfortable, positive experience. Founded in 1999, our clinic has 
              been a staple of the San Francisco community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-sky-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white rounded-[2rem] font-bold text-lg hover:bg-slate-800 transition-all"
              >
                Meet Our Principal Dentist
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7 grid grid-cols-2 gap-6"
          >
            <div className="bg-slate-100 rounded-[3rem] aspect-square relative overflow-hidden shadow-sm">
              <Image
                src="https://picsum.photos/seed/clinic-1/800/800"
                alt="Clinic"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-sky-500 rounded-[3rem] p-10 flex flex-col justify-center text-white">
                <div className="text-6xl font-extrabold leading-none mb-2">25+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Excellence</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm">
                <div className="text-2xl font-bold text-slate-900 uppercase tracking-tighter mb-2">Our Goal</div>
                <p className="text-slate-500 text-sm leading-relaxed">Painless solutions that restore your confidence and oral health instantly.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
