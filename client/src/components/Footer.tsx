import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 border-t border-white/20 dark:border-white/5 glass-card bg-white/30 dark:bg-slate-900/30 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
        <div className="font-headline-md text-title-lg font-bold text-on-surface dark:text-slate-100 tracking-tight italic">
        Sandipan Bhattacharya
        </div>
        <div className="font-label-sm text-[13px] text-on-surface-variant dark:text-slate-400/80 text-center">
          © {new Date().getFullYear()} Strategic Banking Portfolio. All rights reserved. Precision &amp; Integrity.
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="font-label-md text-[14px] text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</a>
          <a href="#" className="font-label-md text-[14px] text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-slate-200 transition-colors cursor-pointer">Terms of Service</a>
          <a href="https://www.linkedin.com/in/sandipan-bhattacharya-30a95b425?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="font-label-md text-[14px] text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-slate-200 transition-colors cursor-pointer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
