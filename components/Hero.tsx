'use client'

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[3rem] border border-slate-200 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-50 rounded-full blur-3xl" />
            
            <span className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-6">San Francisco, CA</span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 mb-8">
              Crafting <span className="text-sky-500">Confident</span> Smiles.
            </h1>
            
            <p className="text-slate-500 text-xl leading-relaxed mb-10 max-w-xl">
              Modern dental care focused on your comfort and long-term health. BrightSmile combines cutting-edge technology with a gentle, patient-first approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-sky-600 text-white rounded-full font-bold text-lg shadow-lg shadow-sky-100 hover:bg-sky-700 transition-all"
              >
                Book Your Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center justify-center px-10 py-4 bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-100 transition-all"
              >
                Explore Services
              </motion.a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" fill />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-slate-600">+1,200 Happy Patients</span>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative flex-1 rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl shadow-slate-100"
            >
              <Image
                src="https://picsum.photos/seed/smile-geometric/800/1000"
                alt="Patient smiling"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-sky-600 p-8 rounded-[2.5rem] text-white shadow-lg shadow-sky-100"
            >
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Our Mission</h3>
              <p className="text-sky-50 opacity-90 leading-relaxed font-medium">
                To provide high-quality, painless dental solutions that restore confidence and enhance the lives of the San Francisco community.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
