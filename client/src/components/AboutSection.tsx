import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-[56px] text-on-surface dark:text-slate-100 tracking-tight leading-none">About Me</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mx-auto relative z-10"
        >
          <div className="glass-card bg-white/50 dark:bg-slate-900/50 p-10 md:p-14 rounded-[2.5rem] shadow-premium dark:shadow-premium-dark border-white/40 dark:border-white/10 relative overflow-hidden text-center md:text-left">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-surface-container-high/50 dark:bg-slate-800/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/80 dark:bg-slate-800/80 glass-card border border-white/40 dark:border-white/10 shadow-sm shrink-0">
                <span className="material-symbols-outlined text-[40px] text-primary dark:text-slate-100" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>shield_person</span>
              </div>
              <h2 className="font-display text-[40px] md:text-[56px] text-on-surface dark:text-slate-100 leading-tight self-center">Steadfast Under Pressure</h2>
            </div>
            
            <div className="font-body-lg text-[18px] md:text-body-lg text-on-surface-variant dark:text-slate-300 leading-relaxed space-y-6">
              <p>
                I am a seasoned banking professional with extensive experience leading branches, managing risk at a zonal level, and driving operational compliance. My background spans across credit appraisal, fraud prevention, and comprehensive risk management frameworks including Basel III and RBI regulations.
              </p>
              <p>
                Over the course of my career, I have navigated high-stakes environments where split-second decisions dictate institutional stability. By architecting resilient auditing strategies and reinforcing early warning signals (EWS), I have consistently mitigated financial vulnerabilities while maintaining aggressive growth targets.
              </p>
              <p>
                My approach blends rigorous analytical skills with strong, empathetic leadership. I believe that sustainable compliance is achieved not just through policy, but by cultivating a culture of integrity and precision within the team. Ultimately, my goal is to ensure long-term financial stability, regulatory adherence, and unmatched operational excellence.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
