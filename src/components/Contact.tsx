import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, Send, CheckCircle, Loader2, MessageSquare, MapPin, Globe, Phone } from "lucide-react";

export default function Contact({ isDarkMode }: { isDarkMode: boolean }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate secure backend transmittal sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 text-indigo-500" />,
      url: "https://linkedin.com/in/janakiramjami",
      handle: "/in/janakiramjami"
    },
    {
      name: "Professional Site",
      icon: <Globe className="w-5 h-5 text-teal-500" />,
      url: "https://mvgrvoices.onrender.com/",
      handle: "mvgrvoices.onrender.com"
    },
    {
      name: "Secure Communication",
      icon: <Mail className="w-5 h-5 text-pink-500" />,
      url: "mailto:jamijanakiram15@gmail.com",
      handle: "jamijanakiram15@gmail.com"
    },
    {
      name: "Operational Mobile",
      icon: <Phone className="w-5 h-5 text-indigo-400" />,
      url: "tel:9014853931",
      handle: "9014853931"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Backing */}
      <div className="absolute bottom-0 right-1/10 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold tracking-widest text-indigo-400 font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06 . COMMUNICATION CHANNEL</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white tracking-tight">
            Initiate Contact Vector
          </h2>
          
          <p className={`text-base max-w-xl ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`}>
            Submit your queries or collaborative prompts. Our simulated dispatcher will route your message instantly to Janaki's active digital inbox.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-505 to-purple-500" />
        </div>

        {/* Dual Layout: Contact Form + Social Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info & Actionable social cards (4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Direct Connect Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border text-left flex-grow flex flex-col justify-between ${
              isDarkMode
                ? "glass-card-dark bg-zinc-950/40 border-zinc-850"
                : "glass-card-light bg-white border-zinc-200"
            }`}>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-lg text-zinc-900 dark:text-white">Active Headquarters</h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 font-semibold uppercase mt-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Vizianagaram, Andhra Pradesh, India</span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                  I am available for AI integration consulting, product roadmap teardowns, SaaS workflow designs, or B2B project contract discussions. Let's build what is next.
                </p>
              </div>

              {/* Individual social listings */}
              <div className="space-y-4 pt-8 border-t border-zinc-205/50 dark:border-zinc-800/40 mt-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4.5 p-3 rounded-2xl border transition-all duration-300 group ${
                      isDarkMode
                        ? "bg-zinc-900/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/60"
                        : "bg-zinc-50 border-zinc-100 hover:border-zinc-200 hover:bg-zinc-100/50"
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-850 group-hover:scale-105 transition-transform shadow-sm">
                      {link.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="text-[10px] font-mono font-extrabold text-zinc-400 uppercase tracking-widest leading-none mb-1">
                        {link.name}
                      </h4>
                      <p className="text-xs font-bold text-zinc-900 dark:text-zinc-200 group-hover:text-indigo-400 transition-colors">
                        {link.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Rich Form layout (8 columns) */}
          <div className="lg:col-span-8">
            <div className={`p-6 sm:p-8 rounded-3xl border h-full flex flex-col justify-center relative overflow-hidden ${
              isDarkMode
                ? "glass-card-dark bg-zinc-950/40 border-zinc-850 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
                : "glass-card-light bg-white border-zinc-200 shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
            }`}>
              
              <AnimatePresence mode="wait">
                {submitStatus === "idle" ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                          Your Identity / Company
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4.5 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-300 outline-none ${
                            isDarkMode
                              ? "bg-zinc-900/60 border-zinc-850 text-white focus:border-indigo-500 focus:bg-zinc-900"
                              : "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-indigo-505 focus:bg-white"
                          }`}
                          placeholder="Janaki Ram Jami"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                          Response Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4.5 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-300 outline-none ${
                            isDarkMode
                              ? "bg-zinc-900/60 border-zinc-850 text-white focus:border-indigo-500 focus:bg-zinc-900"
                              : "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-indigo-505 focus:bg-white"
                          }`}
                          placeholder="client@growthlabs.io"
                        />
                      </div>

                    </div>

                    {/* Subject field */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-extrabold text-zinc-400 dark:text-zinc-505 uppercase tracking-widest">
                        Topic of Coordination
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4.5 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-300 outline-none ${
                          isDarkMode
                            ? "bg-zinc-900/60 border-zinc-850 text-white focus:border-indigo-500 focus:bg-zinc-900"
                            : "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-indigo-505 focus:bg-white"
                        }`}
                        placeholder="Project Partnership Teardown Inquiry"
                      />
                    </div>

                    {/* Message Body area */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-extrabold text-zinc-400 dark:text-zinc-505 uppercase tracking-widest">
                        Operational Message Prompts
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4.5 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-300 outline-none resize-none ${
                          isDarkMode
                            ? "bg-zinc-900/60 border-zinc-850 text-white focus:border-indigo-500 focus:bg-zinc-900"
                            : "bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-indigo-505 focus:bg-white"
                        }`}
                        placeholder="Detail your request objectives or product design opportunities..."
                      />
                    </div>

                    {/* Submission CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative px-6 py-4 rounded-xl text-sm font-bold text-white transition-all duration-300 transform active:scale-95 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4.5 h-4.5 animate-spin" />
                            <span>Transmitting Secure Dispatch...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4.5 h-4.5" />
                            <span>Securely Send Communication</span>
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6 max-w-sm mx-auto flex flex-col items-center justify-center"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-505/20 flex items-center justify-center text-emerald-500 border border-emerald-500/30 shadow-lg shadow-emerald-500/15">
                        <CheckCircle className="w-8 h-8 animate-pulse" />
                      </div>
                      <div className="absolute -inset-1 border-2 border-emerald-500/20 rounded-full animate-ping pointer-events-none" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-[9px] tracking-widest text-emerald-500 font-extrabold uppercase">
                        TRANSMITTAL ENCRYPTED
                      </span>
                      <h3 className="font-display font-black text-2xl text-zinc-900 dark:text-white leading-tight">
                        Message Routed!
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                        Your parameters have been logged and securely transmitted. Janaki Ram Jami will reply shortly via your provided address.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer border ${
                        isDarkMode
                          ? "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-white"
                          : "bg-zinc-100 border-zinc-200 hover:bg-zinc-205 text-zinc-800"
                      }`}
                    >
                      Draft New Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
