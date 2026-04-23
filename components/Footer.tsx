'use client'

import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">BrightSmile</span>
            </div>
            <p className="text-slate-500 mb-8 max-w-xs text-sm leading-relaxed">
              Crafting confident smiles in San Francisco since 1999. Our mission is 
              to provide high-quality, gentle dental care for the whole family.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Meet the Team', 'Patient Stories'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-sky-600 text-sm font-medium transition-colors uppercase tracking-tight">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              {['General Dentistry', 'Cosmetic Dentistry', 'Dental Implants', 'Orthodontics'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-sky-600 text-sm font-medium transition-colors uppercase tracking-tight">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Office</h4>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed font-medium">
              123 Market Street, Suite 450<br />
              San Francisco, CA 94105
            </p>
            <div className="bg-sky-100/50 p-4 rounded-2xl border border-sky-100">
              <p className="text-sky-800 font-bold text-[10px] uppercase tracking-widest mb-1">Clinic Manager</p>
              <p className="text-sky-600 text-xs font-bold uppercase tracking-tighter">BrightSmile Group LLC</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            © {currentYear} BrightSmile Dental Care. Licensed Professionals.
          </p>
          <div className="flex items-center gap-1 text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            San Francisco <span className="text-rose-500">♥</span> Dental Care
          </div>
        </div>
      </div>
    </footer>
  );
}
