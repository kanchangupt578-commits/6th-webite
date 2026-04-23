import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'BrightSmile Dental Care | Crafting Confident Smiles',
  description: 'Professional dental clinic in San Francisco, CA. Quality dental care for the whole family.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-800 bg-slate-50 selection:bg-sky-100 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
