import React from 'react';
import { motion } from 'framer-motion';
import { qualificationsData, educationData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  // Combine both arrays to form a comprehensive list for the grid, as in code.html
  const allCerts = [...qualificationsData, ...educationData];

  return (
    <section id="certifications" className="py-32">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-24 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[56px] text-on-surface dark:text-slate-100 tracking-tight leading-none">Certifications & Trainings</h2>
            <p className="font-body-lg text-[22px] text-on-surface-variant dark:text-slate-400 mt-6 max-w-2xl leading-relaxed font-light">
              Continuous professional development validating deep domain knowledge.
            </p>
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="material-symbols-outlined text-[80px] text-primary/10 dark:text-slate-100/10 hidden lg:block" 
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
          >
            school
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCerts.map((cert, index) => {
            const CardComponent = cert.link ? motion.a : motion.div;
            const linkProps = cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};
            
            return (
            <CardComponent
              key={index}
              {...linkProps}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`cert-card p-8 rounded-3xl glass-card bg-white/40 dark:bg-slate-900/40 border-white/40 dark:border-white/10 flex flex-col gap-6 shadow-premium dark:shadow-premium-dark hover:shadow-premium-hover dark:hover:shadow-premium-dark-hover hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 ${cert.link ? 'cursor-pointer' : ''}`}
            >
              <div className="flex justify-between items-center relative z-10">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 dark:bg-slate-800 font-label-sm text-[12px] font-bold text-primary dark:text-slate-300 tracking-widest uppercase">
                  {cert.year || '20XX'}
                </span>
                <span className="material-symbols-outlined text-primary/40 dark:text-slate-500" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                  {'degree' in cert ? 'timeline' : 'verified'}
                </span>
              </div>
              <h3 className="font-headline-md text-[24px] text-on-surface dark:text-slate-100 leading-snug relative z-10">
                {'title' in cert ? cert.title : ('degree' in cert ? cert.degree : '')} 
                {cert.institution ? ` - ${cert.institution}` : ''}
              </h3>
            </CardComponent>
          )})}
        </div>
      </div>
    </section>
  );
};
