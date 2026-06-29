import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  ChevronLeft, ChevronRight, ArrowLeft, ArrowRight,
  MailCheck, Loader2
} from 'lucide-react';
import { countryCodes } from '../data/countryCodes';

interface FormDataState {
  fullName: string;
  role: string;
  countryCode: string;
  phone: string;
  email: string;
  product: string;
}

export default function ScheduleDemo() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [step, setStep] = useState<number>(1);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  const [searchParams] = useSearchParams();
  const productQuery = searchParams.get('product');
  
  let defaultProduct = 'SunVista Teleradiology';
  if (productQuery === 'imagevision') defaultProduct = 'ImageVision DICOM Viewer';
  if (productQuery === 'sonovista') defaultProduct = 'SonoVista Ultrasound Reporting';

  const [formData, setFormData] = useState<FormDataState>({ 
    fullName: '', 
    role: '', 
    countryCode: '+91',
    phone: '', 
    email: '', 
    product: defaultProduct 
  });

  const brandBlue = "#4672A4"; 

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
      product: formData.product,
      date: formattedDate,
      time: selectedTime,
      message: `
NEW TECHNICAL WALKTHROUGH REQUEST
=================================
Product             : ${formData.product}
Client Name         : ${formData.fullName}
Role / Designation  : ${formData.role}
Work Email Address  : ${formData.email}
Contact Number      : ${fullFormattedPhone}
Appointment Slot    : ${formattedDate} at ${selectedTime}
---------------------------------
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
                ${formData.product}
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
                <td style="padding: 12px 0; font-size: 13px; font-weight: 700; color: #0f172a;">${fullFormattedPhone}</td>
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

  const handlePrevMonth = () => { setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)); setSelectedDate(null); };
  const handleNextMonth = () => { setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)); setSelectedDate(null); };

  const isDateInPast = (day: number) => {
    const today = new Date();
    const todayZero = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const checkDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    return checkDate < todayZero;
  };

  return (
    <main className="pt-40 pb-32 bg-[#F8FAFC] dark:bg-[#070B13] font-['Outfit'] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-28 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:hover:text-white mb-2 transition-colors">
              <ChevronLeft size={14} /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-black uppercase text-[#0A1128] dark:text-white leading-tight">
              Schedule <br/><span style={{ color: brandBlue }}>Walkthrough</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">Select a preferred slot to get started.</p>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-[#0C121D] p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-white/5 min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div key="step1" exit={{ opacity: 0 }} className="h-full flex flex-col">
                  <h3 className="text-lg lg:text-xl font-black text-[#0A1128] dark:text-white uppercase tracking-wide text-center mb-8">Select Date & Time</h3>
                  <div className="bg-slate-50 dark:bg-[#0C121D] p-6 rounded-2xl mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <button type="button" onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-white/50 text-slate-400 hover:text-[#4672A4] transition-all" aria-label="Previous Month"><ChevronLeft /></button>
                      <p className="text-[11px] font-black text-[#4672A4] uppercase tracking-[0.3em]">{viewDate.toLocaleString('default', { month: 'long' })} {viewDate.getFullYear()}</p>
                      <button type="button" onClick={handleNextMonth} className="p-2 rounded-full hover:bg-white/50 text-slate-400 hover:text-[#4672A4] transition-all" aria-label="Next Month"><ChevronRight /></button>
                    </div>
                    <div className="grid grid-cols-7 gap-y-3">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (<span key={day} className="text-[10px] font-black text-[#4672A4] uppercase text-center">{day}</span>))}
                      {[...Array(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate())].map((_, i) => {
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
                                  ? 'text-slate-200 dark:text-slate-700 cursor-not-allowed hover:bg-transparent'
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
                        <button key={t} onClick={() => setSelectedTime(t)} className={`py-3 rounded-xl text-[10px] font-black border transition-all ${selectedTime === t ? 'bg-[#4672A4] text-white border-transparent' : 'bg-white dark:bg-[#0C121D] border-slate-200 dark:border-white/10'}`}>{t}</button>
                      ))}
                    </div>
                  )}

                  {selectedDate && (
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(2)}
                      disabled={!selectedTime}
                      className={`mt-auto w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 transition-all
                      ${selectedTime ? 'text-white shadow-xl hover:opacity-90 bg-[#4672A4]' : 'bg-slate-100 dark:bg-white/5 text-slate-300 dark:text-slate-600 cursor-not-allowed'}`}
                    >
                      Continue <ArrowRight size={18} />
                    </motion.button>
                  )}
                </motion.div>
              ) : step === 2 ? (
                <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <button onClick={() => setStep(1)} className="text-[10px] font-black uppercase mb-6 flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft size={14} /> Back</button>
                  <h3 className="text-xl lg:text-2xl font-[900] text-[#0A1128] dark:text-white uppercase tracking-tighter mb-8">Confirm Your Details</h3>
                  <form onSubmit={handleEmailSubmit} className="space-y-4" noValidate>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 pl-1">Product of Interest</label>
                      <select 
                        className="w-full p-4 bg-slate-50 dark:bg-[#0C121D] rounded-xl text-sm outline-none border border-slate-100 dark:border-white/5" 
                        value={formData.product} 
                        onChange={e => setFormData({ ...formData, product: e.target.value })}
                      >
                        <option value="SunVista Teleradiology">SunVista Teleradiology</option>
                        <option value="ImageVision DICOM Viewer">ImageVision DICOM Viewer</option>
                        <option value="SonoVista Ultrasound Reporting">SonoVista Ultrasound Reporting</option>
                      </select>
                    </div>

                    <input type="text" placeholder="Full Name *" required className="w-full p-4 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none text-slate-900 dark:text-white" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
                    <input type="email" placeholder="Work Email Address *" required className="w-full p-4 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none text-slate-900 dark:text-white" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    <input type="text" placeholder="Your Role *" required className="w-full p-4 bg-slate-50 dark:bg-[#0C121D] border border-slate-100 dark:border-white/5 rounded-xl text-sm outline-none text-slate-900 dark:text-white" value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} />
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

                    <button type="submit" disabled={isSending} className="w-full py-5 mt-2 bg-[#4672A4] text-white rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2 transition-all hover:opacity-90">
                      {isSending ? <Loader2 className="animate-spin" size={16} /> : "Confirm Appointment"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="step3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><MailCheck size={32} /></div>
                  <h3 className="text-xl font-black uppercase text-[#0A1128] dark:text-white mb-2">Request Sent!</h3>
                  <p className="text-slate-500 text-sm font-medium mb-8">
                    Our team will review your request and reach out within 12 to 48 hours.<br />
                    For any urgent inquiries, please feel free to email us at <strong>customercare@suntrion.com</strong>.
                  </p>
                  <Link to="/" className="px-8 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">Back to Home</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </div>
    </main>
  );
}
