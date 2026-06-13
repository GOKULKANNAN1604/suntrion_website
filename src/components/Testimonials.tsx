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
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 75,
        damping: 15,
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6" style={{ color: brandBlue }}>
            Global Trust. <span className="text-slate-300 dark:text-slate-700">Proven Impact.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
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

        {/* --- INFINITE MARQUEE --- */}
        <div className="mt-20 border-t border-slate-100 dark:border-white/5 pt-16">
          <h3 className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-12">
            Our Elite Corporate Clientele
          </h3>
          
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-white dark:before:from-[#070B13] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-white dark:after:from-[#070B13] after:to-transparent">
            
            <motion.div 
              className="flex gap-12 items-center w-max py-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 25, 
                repeat: Infinity,
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div 
                  key={index} 
                  className="w-40 h-20 bg-white dark:bg-white/95 border border-slate-100 dark:border-white/10 rounded-2xl p-4 flex items-center justify-center transition-transform duration-300 hover:scale-105 select-none shadow-sm"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const sibling = target.parentElement?.querySelector('span');
                      if (sibling) {
                        sibling.style.display = 'block';
                      }
                    }}
                  />
                  <span className="hidden text-xs font-bold text-slate-400 text-center uppercase tracking-tight">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}