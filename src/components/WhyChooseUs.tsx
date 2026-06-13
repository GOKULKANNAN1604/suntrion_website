import { motion } from 'framer-motion';
import { Layers, Award, Zap, Globe, Headphones, Lightbulb, Smile, Plane, Calendar } from 'lucide-react';

const reasons = [
  {
    title: "Complete Solutions",
    description: "Integrated ecosystem covering healthcare, diagnostics, and industrial sectors under one trusted partner.",
    icon: <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    title: "Trusted Expertise",
    description: "20+ years of industry experience delivering mission-critical solutions to hospitals and diagnostic centers.",
    icon: <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    title: "Fast Deployment",
    description: "Rapid implementation with minimal disruption. Most systems operational within weeks, not months.",
    icon: <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    title: "Global Reach",
    description: "Operating across India, UAE, GCC, and expanding globally with local support in every region.",
    icon: <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20"
  },
  {
    title: "Reliable Support",
    description: "24/7 technical support, regular training, and proactive maintenance ensuring zero downtime.",
    icon: <Headphones className="w-6 h-6 text-green-600 dark:text-green-400" />,
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    title: "Future Ready",
    description: "Continuous innovation with AI integration, cloud readiness, and upcoming advanced analytics capabilities.",
    icon: <Lightbulb className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  }
];

export default function WhyChooseUs() {
  const brandBlue = "#4672A4";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="font-['Outfit'] overflow-hidden transition-colors duration-300">
      
      {/* ── STATISTICS BANNER ── */}
      <div className="bg-[#4672A4] text-white py-16 relative overflow-hidden shadow-inner">
        {/* Subtle pattern/overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b608c] to-[#4672A4] opacity-80 mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <Smile size={36} strokeWidth={1.5} className="mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 tracking-tight">50+</div>
              <div className="text-[11px] font-black tracking-widest uppercase">Happy Customers</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <Plane size={36} strokeWidth={1.5} className="mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 tracking-tight">100+</div>
              <div className="text-[11px] font-black tracking-widest uppercase">Our Services</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <Calendar size={36} strokeWidth={1.5} className="mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 tracking-tight">12</div>
              <div className="text-[11px] font-black tracking-widest uppercase">Years in Business</div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <Globe size={36} strokeWidth={1.5} className="mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 tracking-tight">6+</div>
              <div className="text-[11px] font-black tracking-widest uppercase">Operating Countries</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-white dark:bg-[#070B13]">
        <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-[900] mb-4 tracking-tight leading-tight uppercase" style={{ color: brandBlue }}>
            Why Clients Choose Suntrion
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium px-2">
            Trusted expertise combined with cutting-edge innovation
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-12"
        >
          {reasons.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container with preserved card colors */}
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 md:w-16 md:h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 transition-shadow duration-300 group-hover:shadow-lg shadow-sm cursor-pointer`}
              >
                {item.icon}
              </motion.div>
              
              <motion.h3 
                whileHover={{ color: brandBlue }}
                className="text-lg md:text-xl font-black text-[#0A1128] dark:text-white mb-3 uppercase tracking-tight transition-colors"
              >
                {item.title}
              </motion.h3>
              
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-sm md:text-base max-w-xs px-4 md:px-0">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        </div>
      </div>
    </section>
  );
}