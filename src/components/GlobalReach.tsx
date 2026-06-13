import { motion } from 'framer-motion';
import { MapPin, Globe, TrendingUp, ArrowUpRight, Compass } from 'lucide-react';

const regions = [
  {
    title: "India",
    subtitle: "Headquarters & Innovation Hub",
    description: "Manufacturing excellence and R&D center based in Chennai, serving domestic and international markets with high-technology solutions.",
    icon: <MapPin size={42} />,
    accent: "text-[#F59E0B]", // Amber Orange
    accentBg: "bg-[#F59E0B]",
    glow: "hover:border-[#F59E0B]/30"
  },
  {
    title: "UAE & GCC",
    subtitle: "Middle East Operations",
    description: "Strategic presence across the Gulf region, delivering specialized diagnostic and industrial infrastructure to the healthcare sector.",
    icon: <Globe size={42} />,
    accent: "text-[#4672A4]", // Slate Blue
    accentBg: "bg-[#4672A4]",
    glow: "hover:border-[#4672A4]/30"
  },
  {
    title: "Africa",
    subtitle: "Sub-Saharan Presence",
    description: "Extending technical excellence to our key clients in Lusaka & Kitwe (Zambia) and the DRC through robust clinical and industrial support.",
    icon: <Compass size={42} />,
    accent: "text-[#E11D48]", // Rose Red
    accentBg: "bg-[#E11D48]",
    glow: "hover:border-[#E11D48]/30"
  },
  {
    title: "Global Expansion",
    subtitle: "Worldwide Growth",
    description: "Rapidly expanding footprint across Asia and beyond through strategic international partnerships and local technical support.",
    icon: <TrendingUp size={42} />,
    accent: "text-[#10B981]", // Growth Green
    accentBg: "bg-[#10B981]",
    glow: "hover:border-[#10B981]/30"
  }
];

export default function GlobalReach() {
  const brandBlue = "#4672A4";

  return (
    <section id="global" className="py-20 lg:py-32 bg-slate-50 dark:bg-[#070B13] font-['Outfit'] scroll-mt-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 mb-6 lg:mb-8 shadow-sm">
            <Globe size={14} style={{ color: brandBlue }} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: brandBlue }}>International Presence</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 lg:mb-8 tracking-tighter uppercase leading-none" style={{ color: brandBlue }}>
            Built in India. Serving the World.
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
            Global technology solutions backed by local expertise and world-class manufacturing excellence across three continents.
          </p>
        </motion.div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {regions.map((region, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-white dark:bg-[#0C121D]/60 p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 dark:border-white/5 
                          cursor-default flex flex-col items-center text-center
                          hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]
                          ${region.glow} group transition-all duration-300`}
            >
              {/* Floating Action Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                 <ArrowUpRight size={20} className="text-slate-300 dark:text-slate-600" />
              </div>

              {/* Icon Pop */}
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                className={`${region.accent} mb-8 transition-transform duration-500`}
              >
                {region.icon}
              </motion.div>

              <div className="flex flex-col items-center flex-grow">
                <h3 className="text-xl lg:text-2xl font-black text-[#0A1128] dark:text-white mb-2 uppercase tracking-tighter">
                  {region.title}
                </h3>
                <p className={`${region.accent} text-[10px] font-black uppercase tracking-[0.3em] mb-6`}>
                  {region.subtitle}
                </p>
                
                <div className="pt-6 border-t border-slate-100 dark:border-white/5 w-full mt-auto">
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-xs lg:text-sm">
                    {region.description}
                  </p>
                </div>
              </div>

              {/* Bottom Glow Bar */}
              <motion.div 
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-t-full ${region.accentBg}`}
                initial={{ width: 0 }}
                whileHover={{ width: "33%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}