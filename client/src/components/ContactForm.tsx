import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || 'Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-40">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto glass-card bg-white/50 dark:bg-slate-900/60 p-10 md:p-20 rounded-[3rem] border-white/40 dark:border-white/10 shadow-premium dark:shadow-premium-dark relative overflow-hidden"
      >
        {/* Decorative element */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-fixed/40 dark:bg-slate-800/40 rounded-full blur-3xl -z-10"></div>
        
        <div className="mb-16 text-center">
          <h2 className="font-display text-[56px] text-on-surface dark:text-slate-100 tracking-tight leading-none">Get in Touch</h2>
          <p className="font-body-lg text-[20px] text-on-surface-variant dark:text-slate-400 mt-6 leading-relaxed font-light">
            Reach out for consultations, board advisory, or career opportunities.
          </p>
        </div>
        
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-12 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 dark:bg-slate-800 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[40px] text-primary dark:text-slate-100">check_circle</span>
            </div>
            <h3 className="font-display text-[32px] text-on-surface dark:text-slate-100 mb-4">Message Sent</h3>
            <p className="font-body-lg text-[18px] text-on-surface-variant dark:text-slate-400 max-w-md mx-auto">
              Your inquiry has been securely transmitted. I will respond to you promptly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="font-label-md text-[14px] font-semibold text-on-surface dark:text-slate-200 tracking-wide uppercase">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-2xl border-white/50 focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 bg-white/60 dark:bg-slate-950/60 dark:text-slate-100 p-5 transition-all duration-300 shadow-sm glass-card outline-none" 
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-label-md text-[14px] font-semibold text-on-surface dark:text-slate-200 tracking-wide uppercase">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-2xl border-white/50 focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 bg-white/60 dark:bg-slate-950/60 dark:text-slate-100 p-5 transition-all duration-300 shadow-sm glass-card outline-none" 
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-label-md text-[14px] font-semibold text-on-surface dark:text-slate-200 tracking-wide uppercase">Message</label>
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="rounded-2xl border-white/50 focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 bg-white/60 dark:bg-slate-950/60 dark:text-slate-100 p-5 h-48 resize-y transition-all duration-300 shadow-sm glass-card outline-none" 
                placeholder="How can we collaborate?"
              ></textarea>
            </div>
            
            {status === 'error' && (
              <div className="text-error font-body-md text-center">{errorMessage}</div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="mt-8 h-16 px-12 rounded-2xl bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 font-label-md text-[16px] font-bold uppercase tracking-wider hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-premium hover:shadow-premium-hover w-full md:w-auto self-center hover:-translate-y-1 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};
