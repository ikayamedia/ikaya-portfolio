import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, ArrowUpRight, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SOCIALS = [
    { id: 'ig', label: 'INSTAGRAM', handle: '@IKAYAMEDIA', url: 'https://www.instagram.com/ikaya_media' },
    { id: 'tw', label: 'TWITTER / X', handle: '@IKAYAMEDIA', url: 'https://x.com/IkayaMedia' },
    //{ id: 'li', label: 'LINKEDIN', handle: 'IKAYA MEDIA', url: 'https://linkedin.com' },
    //{ id: 'be', label: 'BEHANCE', handle: 'IKAYA-STUDIO', url: 'https://behance.net' },
    //{ id: 'dr', label: 'DRIBBBLE', handle: 'IKAYA-MEDIA', url: 'https://dribbble.com' },
    { id: 'gh', label: 'GITHUB', handle: 'IKAYA-MEDIA', url: 'https://github.com/ikayamedia' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email) return;

  setIsSubmitting(true);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzlTsPDWS-Gx60t-x-RTfwebxWJIZuHNHC7-Ajb2Py2HSVKlhEiKZUtA9-fLuq5Vono9w/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
        body: JSON.stringify(formData),
      }
    );

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden select-none"
    >
      {/* Background grid helper lines */}
      <div className="absolute left-4 sm:left-6 md:left-12 top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900/30 pointer-events-none" />
      <div className="absolute right-4 sm:right-6 md:right-12 top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900/30 pointer-events-none" />

      <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pl-0 md:pl-6">
        
        {/* Left Column: Heading */}
        <div id="contact-left" className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <span className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] block mb-3">
              04 / INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-bold tracking-[-0.03em] uppercase text-neutral-900 dark:text-neutral-50 leading-[0.95]">
              LET'S CREATE <br />
              STANDARDS.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-900/60 dark:text-neutral-50/60 font-sans font-normal leading-relaxed max-w-md pt-2">
            Have a project in mind, a prospective brand system, or a creative partnership inquiry? Drop us a brief and we will get back to you promptly.
          </p>
        </div>

        {/* Right Column: Sleek Inquiry Form */}
        <div id="contact-right" className="lg:col-span-7">
          <form id="inquiry-form" onSubmit={handleFormSubmit} className="space-y-8 font-sans">
            
            {/* Input Name */}
            <div id="input-group-name" className="flex flex-col gap-2">
              <label htmlFor="name-input" className="font-sans text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] font-bold">
                YOUR NAME / BRAND
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Alex Mercer"
                className="w-full bg-transparent border-b border-neutral-100 dark:border-neutral-900 py-3 text-neutral-900 dark:text-neutral-50 placeholder-neutral-300 dark:placeholder-neutral-800 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-50 transition-colors text-sm sm:text-base font-normal rounded-none"
              />
            </div>

            {/* Input Email */}
            <div id="input-group-email" className="flex flex-col gap-2">
              <label htmlFor="email-input" className="font-sans text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] font-bold">
                YOUR EMAIL ADDRESS *
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="alex@mercer.design"
                className="w-full bg-transparent border-b border-neutral-100 dark:border-neutral-900 py-3 text-neutral-900 dark:text-neutral-50 placeholder-neutral-300 dark:placeholder-neutral-800 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-50 transition-colors text-sm sm:text-base font-normal rounded-none"
              />
            </div>

            {/* Input Message */}
            <div id="input-group-message" className="flex flex-col gap-2">
              <label htmlFor="message-input" className="font-sans text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] font-bold">
                MESSAGE
              </label>
              <textarea
                id="message-input"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Introduce your project guidelines, launch expectations, and creative targets..."
                className="w-full bg-transparent border-b border-neutral-100 dark:border-neutral-900 py-3 text-neutral-900 dark:text-neutral-50 placeholder-neutral-300 dark:placeholder-neutral-800 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-50 transition-colors text-sm sm:text-base font-normal resize-none rounded-none"
              />
            </div>

            {/* Form Submit Button Container */}
            <div className="pt-4 flex items-center justify-between">
              {/* Submission visual indicators */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    id="success-alert"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-sans text-[10px] text-emerald-600 dark:text-emerald-500 font-bold uppercase flex items-center gap-1.5"
                  >
                    <Check size={14} /> INQUIRY FILED SUCCESSFULLY. WE'LL BE IN TOUCH.
                  </motion.div>
                ) : (
                  <span className="font-sans text-[9px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.18em] font-bold leading-none">
                    * RESPONSES DELIVERED IN 24 HOURS
                  </span>
                )}
              </AnimatePresence>

              <button
                id="form-submit-btn"
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="flex items-center gap-2 px-6 py-3 border border-neutral-950 dark:border-neutral-50 bg-neutral-950 text-neutral-50 hover:bg-transparent hover:text-neutral-950 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-transparent dark:hover:text-neutral-50 font-sans text-[11px] uppercase tracking-[0.2em] font-bold cursor-pointer transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'TRANSMITTING...'
                ) : (
                  <>
                    SEND INQUIRY <Send size={11} />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Social Media Directory */}
      <div id="social-directory-section" className="border-t border-neutral-100 dark:border-neutral-900 mt-24 md:mt-32 pt-12 pl-0 md:pl-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
          <div>
            <span className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] block mb-2">
              04.1 / SOCIAL DIRECTORY
            </span>
            <h3 id="social-directory-title" className="text-xl sm:text-2xl font-sans font-bold uppercase text-neutral-900 dark:text-neutral-50 tracking-tight">
              CONNECT WITH OUR NETWORK
            </h3>
          </div>
          <span className="font-sans text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.15em] font-bold">
            DIRECT DIGITAL CHANNELS
          </span>
        </div>

        {/* Grid of Social Channels */}
        <div id="social-links-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SOCIALS.map((social, index) => (
            <a
              id={`social-link-${social.id}`}
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 border border-neutral-100 dark:border-neutral-900/80 hover:border-neutral-950 dark:hover:border-neutral-100 bg-transparent transition-all duration-300 flex flex-col justify-between h-28"
            >
              <div className="flex justify-between items-start font-sans text-[9px] font-bold text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors">
                <span>[ 0{index + 1} ]</span>
                <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="block font-sans text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-50 group-hover:underline">
                  {social.label}
                </span>
                <span className="block font-sans text-[10px] font-normal text-neutral-400 dark:text-neutral-500 uppercase mt-0.5">
                  {social.handle}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer copyright and Back To Top Row */}
      <div id="footer-row" className="border-t border-neutral-100 dark:border-neutral-900 mt-12 pt-12 flex flex-col md:flex-row justify-between items-start md:items-end pl-0 md:pl-6 gap-8">
        <div className="flex flex-col gap-2">
          <h3 id="footer-brand-title" className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-neutral-900 dark:text-neutral-50">
            IKAYA MEDIA
          </h3>
          <p id="footer-copyright" className="font-sans font-normal text-xs text-neutral-900/50 dark:text-neutral-50/50 tracking-wider">
            ©2026 IKAYA MEDIA • DIGITAL MARKETING & MORE. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Back To Top Button */}
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="flex items-center gap-2 group font-sans text-[11px] uppercase font-bold tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors cursor-pointer"
        >
          BACK TO APEX
          <span className="flex items-center justify-center w-7 h-7 rounded-none border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100 group-hover:text-neutral-50 dark:group-hover:text-neutral-950 transition-all">
            <ArrowUp size={11} />
          </span>
        </button>
      </div>
    </section>
  );
}
