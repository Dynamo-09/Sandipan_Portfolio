import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

// Map domain names to icons
const getIconForDomain = (domain: string) => {
  const lower = domain.toLowerCase();
  if (lower.includes('risk')) return 'monitoring';
  if (lower.includes('fraud') || lower.includes('compliance')) return 'policy';
  if (lower.includes('operation')) return 'account_balance';
  if (lower.includes('leader')) return 'groups';
  return 'stars';
};

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-white/20 dark:bg-slate-900/30 glass-card border-y border-white/20 dark:border-white/5 -z-10"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="font-display text-[56px] text-on-surface dark:text-slate-100 tracking-tight leading-none">Core Competencies</h2>
          <p className="font-body-lg text-[22px] text-on-surface-variant dark:text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            Specialized expertise refined over a decade in tier-one financial institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 rounded-[2rem] glass-card bg-white/40 dark:bg-slate-800/40 border-white/40 dark:border-white/10 shadow-premium dark:shadow-premium-dark hover:shadow-premium-hover dark:hover:shadow-premium-dark-hover hover:-translate-y-3 hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all duration-500 group ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-slate-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[32px] text-primary dark:text-slate-100" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                  {getIconForDomain(category.domain)}
                </span>
              </div>
              <h3 className="font-display text-[28px] text-on-surface dark:text-slate-100 mb-6">{category.domain}</h3>
              <ul className="space-y-4 font-body-md text-[16px] text-on-surface-variant dark:text-slate-400">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-start gap-3">
                    <span className="text-primary/70 dark:text-slate-500 mt-1 text-sm">•</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
