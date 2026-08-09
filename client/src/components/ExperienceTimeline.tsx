import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="career" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 text-center lg:text-left"
      >
        <h2 className="font-display text-[56px] text-on-surface dark:text-slate-100 tracking-tight leading-none">Career Trajectory</h2>
        <p className="font-body-lg text-[22px] text-on-surface-variant dark:text-slate-400 mt-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
          A progressive journey through key operational and risk domains, demonstrating consistent growth and expanding institutional impact.
        </p>
      </motion.div>

      <div className="relative ml-4 md:ml-12 space-y-24">
        {/* Timeline Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent dark:from-slate-100 dark:via-slate-500/30 origin-top"
        ></motion.div>

        {experienceData.map((exp, index) => {
          const isLatest = index === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12 md:pl-24 group"
            >
              {/* Node Point */}
              {isLatest ? (
                <div className="absolute w-6 h-6 rounded-full bg-primary dark:bg-slate-100 left-0 top-2 border-[4px] border-background dark:border-slate-950 glowing-node z-10 animate-[pulseGlow_2s_infinite]"></div>
              ) : (
                <div className="absolute w-5 h-5 rounded-full bg-surface-tint/60 dark:bg-slate-700 left-[2px] top-3 border-[4px] border-background dark:border-slate-950 transition-all duration-300 group-hover:bg-primary dark:group-hover:bg-slate-300 group-hover:glowing-node z-10"></div>
              )}

              {isLatest ? (
                <div className="glass-card bg-white/40 dark:bg-slate-900/40 p-8 rounded-3xl border-white/30 dark:border-white/5 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h3 className="font-headline-md text-[28px] text-on-surface dark:text-slate-100 group-hover:text-primary dark:group-hover:text-slate-200 transition-colors">
                      {exp.role} {exp.company ? `- ${exp.company}` : ''}
                    </h3>
                    <div className="flex items-center gap-4 self-start md:self-auto">
                      {isLatest && (
                        <motion.span
                          animate={{ x: [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          className="inline-block text-primary dark:text-slate-100 mt-1"
                        >
                          <span className="material-symbols-outlined align-middle text-[32px]">arrow_right_alt</span>
                        </motion.span>
                      )}
                      <span className="inline-flex font-label-sm text-[14px] font-bold text-primary dark:text-slate-900 bg-primary/10 dark:bg-slate-100 px-5 py-2.5 rounded-full border border-primary/20 dark:border-slate-200 glass-card uppercase tracking-widest shadow-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="font-body-lg text-[18px] text-on-surface-variant dark:text-slate-300 max-w-4xl leading-relaxed">
                    {exp.description || 'Directing regional credit portfolios, ensuring robust asset quality, and driving strategic growth within acceptable risk parameters.'}
                  </p>
                </div>
              ) : (
                <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="font-title-lg text-[24px] text-on-surface dark:text-slate-100 group-hover:text-primary dark:group-hover:text-slate-200 transition-colors">
                      {exp.role} {exp.company ? `- ${exp.company}` : ''}
                    </h3>
                    <span className="inline-flex font-label-sm text-[13px] text-on-surface-variant dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-white/20 dark:border-white/5 glass-card tracking-wider whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-body-md text-[17px] text-on-surface-variant dark:text-slate-400 max-w-3xl leading-relaxed">
                    {exp.description || 'Managed comprehensive operations, balancing targets with strict adherence to compliance and regulatory frameworks.'}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
