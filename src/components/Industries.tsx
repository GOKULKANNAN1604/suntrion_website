import { motion } from 'framer-motion';
import { 
  Building2, 
  Microscope, 
  Stethoscope, 
  Beaker, 
  Factory, 
  Zap, 
  Droplets, 
  Boxes
} from 'lucide-react';

const industryList = [
  { name: "Hospitals", icon: <Building2 className="w-10 h-10 lg:w-12 lg:h-12" /> },
  { name: "Diagnostic Centers", icon: <Microscope className="w-10 h-10 lg:w-12 lg:h-12" /> },
  { name: "Clinics", icon: <Stethoscope className="w-10 h-10 lg:w-12 lg:h-12" /> },
  { name: "Laboratories", icon: <Beaker className="w-10 h-10 lg:w-12 lg:h-12" /> },
  { name: "Manufacturing", icon: <Factory className="w-10 h-10 lg:w-12 lg:h-12" /> },
  { name: "Utilities", icon: <Zap className="w-10 h-10 lg:w-12 lg:h-12" /> },
  { name: "Oil & Gas", icon: <Droplets className="w-10 h-10 lg:w-12 lg:h-12" /> },
  { name: "Logistics", icon: <Boxes className="w-10 h-10 lg:w-12 lg:h-12" /> },
];

export default function Industries() {
  const brandBlue = "#4672A4";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 80,
        damping: 14,
        mass: 0.8
      } 
    },
  };

  return (
    <section id="industries" className="py-16 md:py-24 bg-white dark:bg-[#070B13] font-['Outfit'] scroll-mt-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 mb-6">
            <Building2 size={14} style={{ color: brandBlue }} />
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: brandBlue }}>Market Verticals</span>
          </div>
          {/* Changed header text to brandBlue */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase" style={{ color: brandBlue }}>
            Industries We Serve
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Delivering specialized high-technology solutions across critical healthcare and industrial infrastructure.
          </p>
        </motion.div>

        {/* Centered Grid - Using motion.div for stagger effect */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {industryList.map((industry, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: `0 25px 50px -12px rgba(70, 114, 164, 0.15)` 
              }}
              onClick={() => {
                window.location.href = `mailto:sales@suntrion.com?subject=Inquiry regarding Suntrion solutions for ${industry.name}`;
              }}
              className="group p-8 md:p-12 bg-slate-50 dark:bg-white/5 hover:bg-white dark:hover:bg-slate-900/60 rounded-3xl border border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 md:gap-6 cursor-pointer min-h-[220px] md:min-h-[280px]"
            >
              {/* Icon Container */}
              <motion.div 
                style={{ color: brandBlue }}
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                {industry.icon}
              </motion.div>

              {/* Updated the link title text color handling */}
              <h3 
                className="text-lg md:text-xl font-bold tracking-tight uppercase transition-colors duration-300"
                style={{ color: brandBlue }}
              >
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}