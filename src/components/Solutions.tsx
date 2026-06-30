import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Monitor,
  FileText,
  Stethoscope,
  Factory,
  FlaskConical,
  ArrowRight,
  Activity,
  Laptop,
  Wrench
} from 'lucide-react';

export default function Solutions() {
  const brandBlue = "#4672A4";
  const brandOrange = "#F59E0B";

  // --- CATEGORY STATE ---
  const [activeCategory, setActiveCategory] = useState<'software' | 'instrumentation'>('software');

  const handleCategoryChange = (category: 'software' | 'instrumentation') => {
    setActiveCategory(category);
  };

  // Software Solutions Grid Config
  const softwareSolutions = [
    {
      id: 'pacs',
      title: 'SunVista PACS',
      subtitle: 'Cloud-native Picture Archiving & PACS suite',
      category: 'Tele-Radiology',
      description: 'Picture Archiving and Communication System designed for zero-latency medical diagnostic streaming and robust teleradiology workflows.',
      ctaText: 'Explore Workflows',
      ctaLink: '/book-demo',
      image: '/ct_3dvr.png',
      icon: Cloud
    },
    {
      id: 'imagevision',
      title: 'ImageVision',
      subtitle: 'Advanced 3D Volume Workstation',
      category: '3D Workstation',
      description: 'Advanced diagnostic workstation supporting 3D volume reconstruction, MIP (Maximum Intensity Projection) overlays, and interactive measurement tools.',
      ctaText: 'Explore Workstation',
      ctaLink: '/imagevision-demo',
      image: '/imagevision_render.png',
      icon: Monitor
    },
    {
      id: 'sonovista',
      title: 'SonoVista',
      subtitle: 'Ultrasound Workspace & Reporting',
      category: 'Ultrasound Workspace',
      description: 'Structured clinical reporting and image management workspace designed to optimize clinical ultrasound reporting workflows.',
      ctaText: 'Explore Workspace',
      ctaLink: '/sonovista',
      image: '/sonovista_dashboard.png',
      icon: FileText
    }
  ];

  // Instrumentation modules config (Static with neat images)
  const instrumentationModules = [
    {
      id: 'medical',
      title: 'Medical Systems',
      subtitle: 'Turnkey Clinical Infrastructure & Pipelines',
      category: 'Instrumentation',
      description: 'End-to-end turnkey medical projects, hospital gas pipelines, and the design and construction of pharmaceutical production cleanrooms.',
      ctaText: 'Inquire Project',
      ctaLink: '/solutions-catalog#imaging-systems',
      image: '/medical_dashboard.png',
      icon: Stethoscope
    },
    {
      id: 'valves',
      title: 'Industrial Valves',
      subtitle: 'Somas, Tomoe, and Tecofi Systems',
      category: 'Flow Control',
      description: 'Specialized industrial valves and engineering support representing global leaders Somas, Tomoe, and Tecofi for high-pressure control lines.',
      ctaText: 'Explore Catalog',
      ctaLink: '/solutions-catalog#industrial-valves',
      image: '/industrial_precision.png',
      icon: Factory
    },
    {
      id: 'density',
      title: 'Liquid Density Analysers',
      subtitle: 'Fuji Density Meters & Process Controls',
      category: 'Analytical Systems',
      description: 'Authorized partners of FUJI Ultrasonic density meters for real-time measurements in dye manufacturing and process control. Perfect for chemicals, textiles, and heavy industrial fluids.',
      ctaText: 'Inquire Specifications',
      ctaLink: '/solutions-catalog#analytical-solutions',
      image: '/industrial_dashboard.png',
      icon: FlaskConical
    }
  ];

  // Dynamic Theme Styling Constants
  const isSoftware = activeCategory === 'software';
  const activeGradient = isSoftware 
    ? 'from-[#4672A4] via-blue-500 to-cyan-400' 
    : 'from-[#F59E0B] via-amber-500 to-orange-500';

  return (
    <section id="solutions" className="py-24 bg-slate-100/70 dark:bg-[#0C121D] font-['Outfit'] scroll-mt-24 transition-colors duration-300 relative overflow-hidden">
      {/* Visual background lights */}
      <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-all duration-500 ${
        isSoftware ? 'bg-blue-500/5' : 'bg-amber-500/5'
      }`} />
      <div className={`absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-all duration-500 ${
        isSoftware ? 'bg-cyan-500/5' : 'bg-orange-500/5'
      }`} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">

        {/* --- SECTION HEADER --- */}
        <div className="mb-12 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4672A4]/10 border border-[#4672A4]/25 mb-6"
          >
            <Activity size={14} style={{ color: brandBlue }} />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: brandBlue }}>Enterprise Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none text-slate-900 dark:text-white uppercase max-w-4xl"
          >
            One Integrated Ecosystem.<br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${activeGradient} transition-all duration-500`}>
              Multiple Powerful Solutions.
            </span>
          </motion.h2>

          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base lg:text-lg max-w-2xl mt-5">
            Select a solution suite to view customized clinical software consoles and industrial equipment configurations.
          </p>
        </div>

        {/* --- SEGMENTED SWITCH SELECTOR --- */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-200/60 dark:bg-[#0C121D]/80 border border-slate-300/40 dark:border-white/5 rounded-full p-1.5 flex gap-2 w-full max-w-[520px] shadow-inner relative z-20">
            
            {/* Toggle Software Solutions */}
            <button
              onClick={() => handleCategoryChange('software')}
              className={`flex-1 py-3 px-5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer relative z-10 ${
                isSoftware 
                  ? 'text-white' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {isSoftware && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4672A4] to-blue-600 shadow-lg shadow-blue-500/20 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Laptop size={14} />
              <span>Software Suite</span>
            </button>

            {/* Toggle Instrumentation Solutions */}
            <button
              onClick={() => handleCategoryChange('instrumentation')}
              className={`flex-1 py-3 px-5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer relative z-10 ${
                !isSoftware 
                  ? 'text-white' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {!isSoftware && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F59E0B] to-orange-600 shadow-lg shadow-amber-500/20 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Wrench size={14} />
              <span>Instrumentation</span>
            </button>

          </div>
        </div>

        {/* --- DYNAMIC GRID WORKSPACE --- */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {isSoftware ? (
              
              /* --- SOFTWARE GRID VIEW --- */
              <motion.div
                key="software-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
              >
                {softwareSolutions.map((module, index) => {
                  const ModuleIcon = module.icon;
                  return (
                    <motion.div
                      key={module.id}
                      initial={index === 0 ? { opacity: 0, x: -60 } : index === 1 ? { opacity: 0, y: 60 } : { opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.1 }}
                      className="bg-white dark:bg-[#0C121D]/60 rounded-3xl border border-slate-200/60 dark:border-white/5 overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(70,114,164,0.05)] hover:border-[#4672A4]/30 transition-all duration-300"
                    >
                      {/* Visual Card Image Cover */}
                      <div className="h-52 overflow-hidden relative bg-slate-900 border-b border-slate-200/50 dark:border-white/5 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                        <img 
                          src={module.image} 
                          alt={module.title}
                          className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" 
                        />
                        
                        {/* floating category icon & tag */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
                          <ModuleIcon size={14} style={{ color: brandBlue }} />
                          <span className="text-[9px] font-black uppercase tracking-wider text-slate-300">
                            {module.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Block */}
                      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between items-start text-left gap-6">
                        
                        <div className="space-y-2.5">
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[#4672A4] transition-colors">
                            {module.title}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                            {module.subtitle}
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                            {module.description}
                          </p>
                        </div>

                        {/* Card CTA direct navigation */}
                        {module.ctaLink.startsWith('http') ? (
                          <a
                            href={module.ctaLink}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white shadow-md hover:shadow-lg transition-all text-center"
                            style={{ 
                              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                              backgroundColor: brandBlue
                            }}
                          >
                            <span>{module.ctaText}</span>
                            <ArrowRight size={14} />
                          </a>
                        ) : (
                          <Link 
                            to={module.ctaLink} 
                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
                            style={{ 
                              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                              backgroundColor: brandBlue
                            }}
                          >
                            <span>{module.ctaText}</span>
                            <ArrowRight size={14} />
                          </Link>
                        )}

                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              
              /* --- INSTRUMENTATION GRID VIEW --- */
              <motion.div
                key="instrumentation-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
              >
                {instrumentationModules.map((module, index) => {
                  const ModuleIcon = module.icon;
                  return (
                    <motion.div
                      key={module.id}
                      initial={index === 0 ? { opacity: 0, x: -60 } : index === 1 ? { opacity: 0, y: 60 } : { opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.1 }}
                      className="bg-white dark:bg-[#0C121D]/60 rounded-3xl border border-slate-200/60 dark:border-white/5 overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(245,158,11,0.05)] hover:border-[#F59E0B]/30 transition-all duration-300"
                    >
                      {/* Visual Card Image Cover */}
                      <div className="h-52 overflow-hidden relative bg-slate-900 border-b border-slate-200/50 dark:border-white/5 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                        <img 
                          src={module.image} 
                          alt={module.title}
                          className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" 
                        />
                        
                        {/* floating category icon & tag */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
                          <ModuleIcon size={14} style={{ color: brandOrange }} />
                          <span className="text-[9px] font-black uppercase tracking-wider text-slate-300">
                            {module.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Block */}
                      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between items-start text-left gap-6">
                        
                        <div className="space-y-2.5">
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[#F59E0B] transition-colors">
                            {module.title}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                            {module.subtitle}
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                            {module.description}
                          </p>
                        </div>

                        {/* Card CTA direct navigation */}
                        <Link 
                          to={module.ctaLink} 
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
                          style={{ 
                            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                            backgroundColor: brandOrange
                          }}
                        >
                          <span>{module.ctaText}</span>
                          <ArrowRight size={14} />
                        </Link>

                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
