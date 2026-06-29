import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  MonitorPlay, Layers, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight,
  Database, Sparkles, MessageCircle, Calendar,
  Star, Globe, Zap, MailCheck, Loader2, Cpu
} from 'lucide-react';
import { countryCodes } from '../data/countryCodes';

interface Testimonial {
  client: string;
  location: string;
  text: string;
  icon: React.ReactNode;
}

interface FormDataState {
  fullName: string;
  role: string;
  countryCode: string;
  phone: string;
  email: string;
}

const sunVistaTestimonials: Testimonial[] = [
  {
    client: "SANKET SUNSOL IMAGING",
    location: "KITWE, ZAMBIA",
    text: "Suntrion set up our full-fledged diagnostic centre with CT, MRI, and Ultrasound. ImageVision’s advanced analysis tools ensure our diagnostic reporting is world-class. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Cpu size={16} />
  },
  {
    client: "MARY BEGG HEALTH SERVICES",
    location: "ZAMBIA",
    text: "SunVista is a next-generation, web-native PACS platform that has redefined our diagnostic workflow. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Globe size={16} />
  },
  {
    client: "BAPATLA SCANS",
    location: "INDIA",
    text: "The web-native architecture of SunVista allows our radiologists to report from anywhere. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Zap size={16} />
  }
];

export default function BookingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [step, setStep] = useState<number>(1);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [testiIndex, setTestiIndex] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  const [formData, setFormData] = useState<FormDataState>({ 
    fullName: '', 
    role: '', 
    countryCode: '+91',
    phone: '', 
    email: '' 
  });

  const sunBlue = "#4672A4"; 
  const brandYellow = "#F59E0B";
  const pitchBlack = "#05070A";

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.role.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in all mandatory fields marked with *");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    const trimmedPhone = formData.phone.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 12) {
      setErrorMsg("Please enter a valid phone number (7 to 12 digits)");
      return;
    }

    setIsSending(true);

    const fullFormattedPhone = `${formData.countryCode} ${formData.phone}`;
    const formattedDate = `${selectedDate} ${viewDate.toLocaleString('default', { month: 'long' })} ${viewDate.getFullYear()}`;

    const templateParams = {
      to_email: "customercare@suntrion.com",
      fullName: formData.fullName,
      role: formData.role,
      countryCode: formData.countryCode,
      country_code: formData.countryCode,
      contactNumber: formData.phone,
      contact_number: formData.phone,
      phone: fullFormattedPhone,
      email: formData.email,
      product: "SunVista Cloud PACS",
      date: formattedDate,
      time: selectedTime,
      message: `
NEW TECHNICAL WALKTHROUGH REQUEST (CLOUD PACS)
==============================================
Product             : SunVista Cloud PACS
Client Name         : ${formData.fullName}
Role / Designation  : ${formData.role}
Work Email Address  : ${formData.email}
Contact Number      : ${fullFormattedPhone}
Appointment Slot    : ${formattedDate} at ${selectedTime}
----------------------------------------------
Sent automatically via Suntrion Web Portal.
      `,
      message_html: `
        <div style="font-family: 'Inter', system-ui, -apple-system, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #0f172a; max-width: 600px; margin: 0 auto; border-radius: 24px;">
          <!-- Branded Header -->
          <div style="background: linear-gradient(135deg, #4672A4 0%, #2b4c7e 100%); padding: 32px 24px; border-radius: 20px 20px 0 0; text-align: center; color: #ffffff;">
            <span style="font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; opacity: 0.85; display: block; margin-bottom: 8px;">Suntrion Portal</span>
            <h1 style="margin: 0; font-size: 22px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.5px;">New Walkthrough Request</h1>
            <p style="margin: 8px 0 0 0; font-size: 13px; opacity: 0.9; font-weight: 500;">Schedule Request details are listed below</p>
          </div>

          <!-- Main Content Card -->
          <div style="background-color: #ffffff; padding: 36px 32px; border-radius: 0 0 20px 20px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04); border: 1px solid #e2e8f0; border-top: none;">
            
            <!-- Calendar Badge -->
            <div style="background-color: #f0f7ff; border-left: 4px solid #4672A4; padding: 18px; border-radius: 12px; margin-bottom: 28px; display: flex; align-items: center; gap: 15px;">
              <div style="font-size: 24px; line-height: 1;">📅</div>
              <div>
                <span style="font-size: 10px; font-weight: 800; color: #4672A4; text-transform: uppercase; display: block; margin-bottom: 2px;">Proposed Time Slot</span>
                <strong style="font-size: 16px; color: #1e3a8a;">${formattedDate}</strong>
                <span style="font-size: 13px; color: #475569; display: block; margin-top: 1px;">at <strong>${selectedTime}</strong></span>
              </div>
            </div>

            <!-- Product Interest -->
            <div style="margin-bottom: 28px;">
              <span style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 6px;">Product of Interest</span>
              <span style="background-color: #f1f5f9; color: #334155; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 8px; border: 1px solid #e2e8f0; display: inline-block;">
                SunVista Cloud PACS
              </span>
            </div>

            <!-- Profile Fields -->
            <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">Client Profile</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b; width: 150px;">Full Name</td>
                <td style="padding: 12px 0; font-size: 13px; font-weight: 700; color: #0f172a;">${formData.fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b;">Designation / Role</td>
                <td style="padding: 12px 0; font-size: 13px; font-weight: 600; color: #334155;">${formData.role}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b;">Work Email</td>
                <td style="padding: 12px 0; font-size: 13px; font-weight: 600; color: #334155;">
                  <a href="mailto:${formData.email}" style="color: #4672A4; text-decoration: none; font-weight: 700;">${formData.email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; font-size: 12px; font-weight: 600; color: #64748b;">Contact Number</td>
                <td style="padding: 12px 0; font-weight: 700; color: #0f172a;">${fullFormattedPhone}</td>
              </tr>
            </table>

            <!-- Quick Actions -->
            <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">Quick Actions</h3>
            
            <div style="margin-top: 16px;">
              <a href="https://wa.me/${phoneDigits}" target="_blank" style="background-color: #25D366; color: white; padding: 12px 20px; border-radius: 12px; text-decoration: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-right: 8px; margin-bottom: 8px; box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.15);">
                💬 Chat on WhatsApp
              </a>
              <a href="mailto:${formData.email}?subject=Suntrion walkthrough schedule confirmation" style="background-color: #4672A4; color: white; padding: 12px 20px; border-radius: 12px; text-decoration: none; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-bottom: 8px; box-shadow: 0 4px 6px -1px rgba(70, 114, 164, 0.15);">
                ✉️ Email Client
              </a>
            </div>

          </div>

          <!-- Branded Footer -->
          <div style="text-align: center; margin-top: 24px; font-size: 10px; color: #64748b; line-height: 1.5;">
            This is an automated notification from your Suntrion Website Portal.<br />
            Do not reply directly to this email.
          </div>
        </div>
      `
    };

    emailjs.send(
      'customercare@suntrion', 
      'template_2zjauik',      
      templateParams, 
      'aeKQX-wirJVxw4Za2'      
    )
    .then(() => {
      setStep(3); 
      setIsSending(false);
    })
    .catch((error: any) => {
      console.error('EmailJS Error:', error);
      alert("Error sending request. Please contact customercare@suntrion.com");
      setIsSending(false);
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handlePrevMonth = (): void => { setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)); setSelectedDate(null); };
  const handleNextMonth = (): void => { setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)); setSelectedDate(null); };

  const nextTesti = (): void => setTestiIndex((prev) => (prev + 1) % sunVistaTestimonials.length);
  const prevTesti = (): void => setTestiIndex((prev) => (prev - 1 + sunVistaTestimonials.length) % sunVistaTestimonials.length);

  const isDateInPast = (day: number) => {
    const today = new Date();
    const todayZero = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const checkDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    return checkDate < todayZero;
  };

  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-[#F8FAFC] dark:bg-[#070B13] font-['Outfit'] min-h-screen overflow-hidden" aria-label="SunVista Product Configuration and Demo Intake Portal">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- 1. HERO & INFO GRID --- */}
        <motion.header initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 space-y-6">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <span className="w-2 h-2 rounded-full animate-pulse bg-[#4672A4]" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4672A4]">Enterprise Med-Tech</h2>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-1">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase text-[#4672A4]">SUNVISTA</h1>
            <p className="text-2xl lg:text-4xl font-bold text-slate-400">Diagnostic Excellence.</p>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
            SunVista is an enterprise-grade, cloud-integrated teleradiology and PACS platform. Engineered with a zero-footprint architecture, it allows secure, multi-modality diagnostic viewing and reporting from any browser, anywhere in the world.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl mt-4">
             {[
               { l: "MODALITY", v: "Multi-Modality" }, 
               { l: "SECURITY", v: "Role-Based Access" }, 
               { l: "ARCHITECTURE", v: "Zero-Footprint" }, 
               { l: "COMPLIANCE", v: "HL7 / DICOM Ready" }
             ].map((item, i) => (
               <article key={i} className="bg-white dark:bg-[#0C121D] p-4 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm text-left">
                 <h3 className="text-[10px] font-black text-[#4672A4] uppercase tracking-widest mb-1">{item.l}</h3>
                 <p className="text-[11px] font-bold text-slate-900 dark:text-white">{item.v}</p>
               </article>
             ))}
          </motion.div>
        </motion.header>

        {/* --- 2. DARK DEMO CTA --- */}
        <section className="mb-24 rounded-[3rem] overflow-hidden relative shadow-2xl flex items-center border border-white/5" style={{ backgroundColor: pitchBlack }} aria-label="Cloud PACS System Framework Core">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-[#4672A4] opacity-10" />
          <div className="flex flex-col lg:flex-row items-center w-full relative z-10 p-8 lg:p-20">
            <div className="lg:w-5/12 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Sparkles size={12} style={{ color: brandYellow }} />
                <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Live Environment</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black uppercase text-white leading-tight">
                Cloud PACS & Teleradiology Frameworks for <span style={{ color: sunBlue }}>Intelligent Radiology.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a href="https://imagevieweruat.suntrion.com/3cd0b210-5826-4c1a-be0d-ba42471a8299?lng=en" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-black px-10 py-5 rounded-2xl font-black uppercase text-[10px] hover:scale-105 transition-transform" style={{ backgroundColor: brandYellow }}>
                  <MessageCircle size={14} /> Try Live Demo
                </a>
                <button onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] transition-colors hover:bg-white/10">
                  <Calendar size={14} style={{ color: sunBlue }} /> Book Guidance
                </button>
              </div>
            </div>
            
            {/* INTERFACE PREVIEW CONTAINER: Clean, highly-stable CSS hover tilt execution */}
            <div className="lg:w-7/12 flex justify-end mt-12 lg:mt-0 w-full group/image">
               <div className="relative w-full lg:w-[120%] bg-[#010203] rounded-3xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 transform origin-center group-hover/image:scale-[1.01]">
                 <div className="bg-[#05070A] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/10"/>
                      <div className="w-2 h-2 rounded-full bg-white/10"/>
                    </div>
                    <div className="bg-white/5 px-3 py-1 rounded-md text-[8px] text-white/40 font-black uppercase tracking-widest">sunvista.live</div>
                 </div>
                 <img src="/report.png" alt="SunVista Workspace" className="w-full opacity-60 object-cover select-none pointer-events-none" />
               </div>
            </div>
          </div>
        </section>

        {/* --- 3. BOOKING SECTION --- */}
        <section id="booking-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 scroll-mt-32" aria-label="Schedule Technical Presentation Walkthrough">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-4xl font-black uppercase" style={{ color: "#0A1128" }}>Schedule <span style={{ color: sunBlue }}>Walkthrough</span></h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">Select a preferred slot to get started.</p>
          </div>
          <div className="lg:col-span-7 bg-white dark:bg-[#0C121D] p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-white/5 min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col">
                  <h3 className="text-lg lg:text-xl font-black text-[#0A1128] dark:text-white uppercase tracking-wide text-center mb-8">Select Date & Time</h3>
                    <div className="bg-slate-50 dark:bg-[#0C121D] p-6 rounded-2xl mb-6">
                        <div className="flex items-center justify-between mb-6">
                            <button type="button" onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-white/50 text-slate-400 hover:text-[#4672A4] transition-all" aria-label="Previous Month"><ChevronLeft/></button>
                            <p className="text-[11px] font-black text-[#4672A4] uppercase tracking-[0.3em]">{viewDate.toLocaleString('default',{month:'long'})} {viewDate.getFullYear()}</p>
                            <button type="button" onClick={handleNextMonth} className="p-2 rounded-full hover:bg-white/50 text-slate-400 hover:text-[#4672A4] transition-all" aria-label="Next Month"><ChevronRight/></button>
                        </div>
                        <div className="grid grid-cols-7 gap-y-3">
                          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (<span key={day} className="text-[10px] font-black text-[#4672A4] uppercase text-center">{day}</span>))}
                          {[...Array(new Date(viewDate.getFullYear(), viewDate.getMonth()+1, 0).getDate())].map((_, i) => {
                            const dayNum = i + 1;
                            const isPast = isDateInPast(dayNum);
                            return (
                              <button 
                                type="button"
                                key={i} 
                                disabled={isPast}
                                onClick={() => { setSelectedDate(dayNum); setSelectedTime(''); }} 
                                className={`h-10 rounded-lg text-xs font-bold transition-all
                                ${selectedDate === dayNum 
                                  ? 'bg-[#4672A4] text-white shadow-lg scale-110' 
                                  : isPast 
                                  ? 'text-slate-200 cursor-not-allowed hover:bg-transparent' 
                                  : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-[#0C121D]'}`}
                              >
                                {dayNum}
                              </button>
                            );
                          })}
                        </div>
                    </div>
                    {selectedDate && (
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {['10:00 AM', '02:00 PM', '04:30 PM'].map(t => (
                          <button type="button" key={t} onClick={() => setSelectedTime(t)} className={`py-3 rounded-xl text-[10px] font-black border transition-all ${selectedTime === t ? 'bg-[#4672A4] text-white' : 'bg-white dark:bg-[#0C121D]'}`}>{t}</button>
                        ))}
                      </div>
                    )}
                  {selectedDate && (
                    <motion.button 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(2)}
                      disabled={!selectedTime}
                      className={`mt-auto w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 transition-all
                      ${selectedTime ? 'text-white shadow-xl hover:opacity-90' : 'bg-slate-100 dark:bg-white/5 text-slate-300 cursor-not-allowed'}`}
                      style={selectedTime ? { backgroundColor: sunBlue } : {}}>
                      Continue <ArrowRight size={18} />
                    </motion.button>
                  )}
                </motion.div>
              ) : step === 2 ? (
                <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }}>
                    <button type="button" onClick={() => setStep(1)} className="text-[10px] font-black uppercase mb-6 flex items-center gap-2"><ArrowLeft size={14}/> Back</button>
                    <h3 className="text-xl lg:text-2xl font-[900] text-[#0A1128] dark:text-white uppercase tracking-tighter mb-8">Confirm Your Details</h3>
                    <form onSubmit={handleEmailSubmit} className="space-y-4" noValidate>
                      <input type="text" placeholder="Full Name *" required className="w-full p-4 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none text-slate-900 dark:text-white" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
                      <input type="email" placeholder="Work Email Address *" required className="w-full p-4 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none text-slate-900 dark:text-white" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      <input type="text" placeholder="Your Role *" required className="w-full p-4 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none text-slate-900 dark:text-white" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                      <div className="flex gap-2 w-full">
                        <select 
                          value={formData.countryCode} 
                          onChange={e => setFormData({ ...formData, countryCode: e.target.value })}
                          className="w-[120px] p-4 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none text-slate-700 dark:text-slate-200 cursor-pointer"
                        >
                          {countryCodes.map(c => (
                            <option key={c.code} value={c.code}>{c.code} ({c.country})</option>
                          ))}
                        </select>
                        <input 
                          type="tel" 
                          placeholder="Contact Number *" 
                          required 
                          value={formData.phone}
                          className="flex-1 p-4 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none text-slate-900 dark:text-white" 
                          onChange={e => setFormData({ ...formData, phone: e.target.value })} 
                        />
                      </div>
                      {errorMsg && (
                        <p className="text-xs font-bold text-red-500 text-center mb-2 animate-pulse">{errorMsg}</p>
                      )}
                      <button type="submit" disabled={isSending} className="w-full py-5 bg-[#4672A4] text-white rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2">
                        {isSending ? <Loader2 className="animate-spin" size={16}/> : "Confirm Appointment"}
                      </button>
                    </form>
                </motion.div>
              ) : (
                <motion.div key="step3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><MailCheck size={32} /></div>
                  <h3 className="text-xl font-black uppercase">Request Sent!</h3>
                  <p className="text-slate-400 text-xs font-medium">
                    Our team will review your request and reach out within 12 to 48 hours.<br />
                    For any urgent inquiries, please feel free to email us at <strong>customercare@suntrion.com</strong>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* --- 4. POPPING CAPABILITIES --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24" aria-label="SunVista Core Infrastructure Capabilities">
          {[
            { icon: <MonitorPlay />, title: "Zero-Footprint Power", tags: ["Web-Native"] },
            { icon: <Database />, title: "Secure Cloud Archive", tags: ["Role-Based Access"] },
            { icon: <Layers />, title: "Intelligent Workflow", tags: ["HL7 / DICOM"] }
          ].map((card, i) => (
            <motion.div key={i} whileHover={{ y: -12, scale: 1.03 }} className="p-10 rounded-[2.5rem] bg-[#4672A4] text-white shadow-xl flex flex-col justify-between min-h-[300px] cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white dark:hover:bg-[#0C121D] group-hover:text-[#4672A4] transition-all">{card.icon}</div>
              <h4 className="text-xl font-black uppercase leading-tight">{card.title}</h4>
              <div className="flex gap-2">
                {card.tags.map(t => <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-[8px] font-black uppercase">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </section>

        {/* --- 5. TESTIMONIAL CAROUSEL CARD --- */}
        <section className="max-w-6xl mx-auto py-4 mb-8" aria-label="Global Radiology Testimonials Slider">
          <AnimatePresence mode="wait">
            <motion.div 
              key={testiIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white dark:bg-[#0C121D] p-8 md:p-14 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.015)] flex flex-col relative min-h-[340px] justify-between"
            >
              <div className="flex items-center justify-between w-full mb-10 relative">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F4F8FA] text-[#4672A4] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                    {sunVistaTestimonials[testiIndex].icon}
                  </div>
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#4672A4" className="text-[#4672A4]" />
                    ))}
                  </div>
                </div>

                <div className="flex gap-1.5 relative z-10 pr-2">
                  <button type="button" onClick={prevTesti} className="p-2 rounded-full border border-slate-100 dark:border-white/5 bg-white dark:bg-[#0C121D] shadow-sm text-slate-400 hover:text-[#4672A4] transition-all">
                    <ChevronLeft size={16} />
                  </button>
                  <button type="button" onClick={nextTesti} className="p-2 rounded-full border border-slate-100 dark:border-white/5 bg-white dark:bg-[#0C121D] shadow-sm text-slate-400 hover:text-[#4672A4] transition-all">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 font-medium text-lg md:text-xl leading-relaxed md:max-w-[85%] mb-12">
                "{sunVistaTestimonials[testiIndex].text}"
              </p>

              <div className="flex items-end justify-between w-full">
                <div className="space-y-1.5">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0A1128] dark:text-white">
                    {sunVistaTestimonials[testiIndex].client}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    {sunVistaTestimonials[testiIndex].location}
                  </p>
                </div>

                <div className="flex gap-1.5 pb-2">
                  {sunVistaTestimonials.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === testiIndex ? 'w-8 bg-[#4672A4]' : 'w-2 bg-slate-200'}`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div> 
          </AnimatePresence>
        </section>

      </div>
    </main>
  );
}
