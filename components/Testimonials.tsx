'use client'

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Emily Watson",
    location: "Nob Hill, SF",
    text: "I've always been anxious about dental visits, but the team at BrightSmile completely changed that. They explained everything and made sure I was comfortable the whole time. My smile looks incredible!",
    image: "https://picsum.photos/seed/patient1/100/100"
  },
  {
    name: "Michael Chen",
    location: "SoMa, SF",
    text: "The technology here is top-notch. I had a crown done in one visit, and it feels perfect. Very efficient and professional. Best dental experience I've had in 15 years.",
    image: "https://picsum.photos/seed/patient2/100/100"
  },
  {
    name: "David Miller",
    location: "Marina District, SF",
    text: "BrightSmile Dental Care is the gold standard. The clinic is spotless, the front desk is friendly, and the doctors are masters of their craft. Highly recommend!",
    image: "https://picsum.photos/seed/patient3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <span className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-4 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
              Patient <br /> Outcomes.
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              We take pride in the smiles we've helped create. Join thousands of satisfied 
              San Franciscans who trust us.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-sky-100">SF</div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">San Francisco <span className="font-normal text-slate-400 ml-1 italic">• Verified</span></div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${index === 2 ? 'md:col-span-2' : ''} bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm relative overflow-hidden`}
              >
                <div className="relative mb-6">
                  <span className="absolute -top-4 -left-2 text-sky-100 text-7xl font-serif leading-none italic opacity-80 select-none">“</span>
                  <p className="text-slate-600 italic text-sm relative z-10 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-slate-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 uppercase tracking-tight">{item.name}</h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{item.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-3 h-3 text-sky-500 fill-sky-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
