import { motion } from 'framer-motion';
import { Quote, Star, ShieldCheck, Zap, Activity, Globe } from 'lucide-react';

import biltLogo from '../assets/biltLogo.webp';
import itcLogo from '../assets/ITCLogo.jpg';
import jkPaperLogo from '../assets/JKPaperLogo.jpg';
import mcfLogo from '../assets/MCFLogo.webp';
import renaultNissanLogo from '../assets/renaultNissanLogo.webp';
import tnplLogo from '../assets/TNPLLogo.webp';
import torrentPowerLogo from '../assets/TorrentPowerLogo.webp';
import toyotaLogo from '../assets/ToyatoLogo.webp';
import westCoastLogo from '../assets/WestCostPaperLogo.webp';

const testimonials = [
  {
    category: "Industrial & Turnkey",
    client: "Government of Health",
    location: "Republic of Chad",
    text: "Suntrion provided complete turnkey solutions to achieve clinical integration. Their expertise encouraged us to start and manage our hospital infrastructure successfully. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    impact: "Clinical Integration",
    icon: <Globe size={20} className="stroke-[2]" />
  },
  {
    category: "Industrial & Turnkey",
    client: "GMS Hospital",
    location: "Cameroon",
    text: "A comprehensive partner for hospital construction. From electrical and HVAC to firefighting and laboratory installation, Suntrion handled the entire project planning with excellence. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    impact: "Full-Scale Infrastructure",
    icon: <Zap size={20} className="stroke-[2]" />
  },
  {
    category: "SunVista PACS",
    client: "Mary Begg Health Services",
    location: "Zambia",
    text: "SunVista is a next-generation, web-native PACS platform that has redefined our diagnostic workflow. Having precision imaging accessible from any browser with zero-latency is a major leap forward. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    impact: "Web-Native Diagnostics",
    icon: <ShieldCheck size={20} className="stroke-[2]" />
  },
  {
    category: "ImageVision",
    client: "Sanket Sunsol Imaging",
    location: "Zambia",
    text: "Suntrion set up our full-fledged diagnostic centre including CT, MRI, and X-Ray. ImageVision’s advanced analysis tools ensure our diagnostic reporting is world-class. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    impact: "Diagnostic Excellence",
    icon: <Activity size={20} className="stroke-[2]" />
  }
];

const clientLogos = [
  { name: "JK Paper Ltd.", src: jkPaperLogo },
  { name: "ITC Limited", src: itcLogo },
  { name: "Mangalore Chemicals & Fertilizers", src: mcfLogo },
  { name: "The West Coast Paper Mills Ltd", src: westCoastLogo },
  { name: "TNPL", src: tnplLogo },
  { name: "Toyota", src: toyotaLogo },
  { name: "Renault Nissan", src: renaultNissanLogo },
  { name: "Bilt", src: biltLogo },
  { name: "Torrent Power", src: torrentPowerLogo },
];

// Duplicate logos for seamless loop
const allLogos = [...clientLogos, ...clientLogos];

function LogoStrip() {
  return (
    <div className="relative overflow-hidden w-full py-2">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-[#070B13] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-[#070B13] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      >
        {allLogos.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-slate-50/90 dark:bg-white/95 border border-slate-100 dark:border-white/10 rounded-2xl px-6 py-4 flex flex-col items-center justify-center gap-2 min-w-[140px] shadow-sm hover:shadow-md hover:border-[#4672A4]/30 transition-all duration-300 group/logo cursor-default"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-w-[85px] max-h-[36px] object-contain mix-blend-multiply opacity-75 group-hover/logo:opacity-100 transition-opacity duration-300"
            />
            <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 group-hover/logo:text-[#4672A4] transition-colors duration-300 text-center">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


export default function Testimonials() {
  const brandBlue = "#4672A4";
  const brandOrange = "#F59E0B";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 70, 
      scale: 0.95, 
      rotateX: 8,
      transformPerspective: 1000 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 55,
        damping: 12,
        mass: 0.9
      } 
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#070B13] font-['Outfit'] overflow-hidden transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#EBF2FA] dark:bg-[#0E1B30] border border-[#4672A4]/35 rounded-full shadow-[0_2px_10px_rgba(70,114,164,0.06)] mb-6 transition-all hover:border-[#4672A4]/50 select-none">
            <Activity size={14} className="text-[#4672A4] dark:text-[#5B92D1] stroke-[2.5] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4672A4] dark:text-[#5B92D1] font-['Outfit']">
              Enterprise Validation
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-6 text-[#0A1128] dark:text-white leading-none">
            Global Trust. <span className="text-[#4672A4] dark:text-[#5B92D1]">Proven Impact.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A decade of delivering precision engineering and digital intelligence across government and private sectors.
          </p>
        </motion.div>

        {/* Testimonial Grid Matrix */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(70,114,164,0.08)" }}
              className="p-10 rounded-[3rem] bg-[#F8FAFC] dark:bg-[#0C121D]/60 border border-slate-100 dark:border-white/5 flex flex-col relative group transition-all cursor-pointer"
            >
              <Quote className="absolute top-8 right-10 opacity-10 dark:opacity-[0.03]" size={60} style={{ color: brandBlue }} />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-white dark:bg-[#070B13] border border-transparent dark:border-white/5 shadow-sm transition-all duration-300 flex items-center justify-center group-hover:bg-[#4672A4] text-[#4672A4] group-hover:text-white">
                  {t.icon}
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {t.category}
                  </span>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={brandOrange} color={brandOrange} />)}
                  </div>
                </div>
              </div>

              <p className="text-lg font-medium leading-relaxed text-[#0A1128] dark:text-slate-300 mb-8">
                "{t.text}"
              </p>

              <div className="mt-auto pt-8 border-t border-slate-200 dark:border-white/5 flex justify-between items-center">
                <div>
                  <h4 className="font-black uppercase tracking-tight text-[#0A1128] dark:text-white">{t.client}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase">{t.location}</p>
                </div>
                <div className="px-4 py-2 bg-white dark:bg-[#070B13] rounded-full border border-slate-100 dark:border-white/5 shadow-sm">
                  <span className="text-[10px] font-black uppercase tracking-tighter" style={{ color: brandBlue }}>
                    {t.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- GRID SHOWCASE --- */}
        <div className="mt-28 border-t border-slate-100 dark:border-white/5 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#EBF2FA] dark:bg-[#0E1B30] border border-[#4672A4]/35 rounded-full shadow-[0_2px_10px_rgba(70,114,164,0.06)] mb-5 select-none">
              <Globe size={14} className="text-[#4672A4] dark:text-[#5B92D1] stroke-[2.5]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4672A4] dark:text-[#5B92D1] font-['Outfit']">
                Trusted Partnerships
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0A1128] dark:text-white mt-2">
              Our Elite Corporate Clientele
            </h3>
          </motion.div>

          {/* Infinite Marquee */}
          <LogoStrip />
        </div>
      </div>
    </section>
  );
}
