'use client'

import { motion } from 'motion/react';
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: "Dr. Jonathan Bright",
    role: "Founder & Lead Dentist",
    image: "https://picsum.photos/seed/dentist1/400/500",
    description: "Specializing in implantology and complex restorative cases with over 20 years in practice."
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Pediatric Specialist",
    image: "https://picsum.photos/seed/dentist2/400/500",
    description: "Creating a fun, fear-free environment for our youngest patients to build lifelong healthy habits."
  },
  {
    name: "Dr. Kevin Chen",
    role: "Cosmetic Dentist",
    image: "https://picsum.photos/seed/dentist3/400/500",
    description: "Expert in smile makeovers, porcelain veneers, and advanced whitening techniques."
  },
  {
    name: "Sarah Miller, RDH",
    role: "Lead Dental Hygienist",
    image: "https://picsum.photos/seed/dentist4/400/500",
    description: "Passionate about preventative care and educating patients on optimal oral health maintenance."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-600 font-bold uppercase tracking-widest text-xs"
          >
            Meet the Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 uppercase tracking-tighter"
          >
            Skilled Professionals
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200 group hover:bg-white transition-all shadow-sm hover:shadow-md"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-square mb-6 border-4 border-white shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-tight">{member.name}</h3>
                <div className="text-xs text-sky-600 font-bold uppercase tracking-widest mb-4">{member.role}</div>
                <p className="text-slate-500 text-xs leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
