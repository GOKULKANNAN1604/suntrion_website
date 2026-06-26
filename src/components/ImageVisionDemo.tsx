import { useState, useEffect } from 'react';
import { 
  Quote, Star, ChevronLeft, ChevronRight, Cpu, Zap, Monitor, Activity 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ImagingTools from './ImagingTools';
import PrintingTools from './PrintingTools';

const imageVisionTestimonials = [
  {
    client: "Sanket Sunsol Imaging",
    location: "Kitwe, Zambia",
    text: "Suntrion set up our full-fledged diagnostic centre with CT, MRI, and Ultrasound. ImageVision’s advanced analysis tools ensure our diagnostic reporting is world-class. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Cpu size={16} />
  },
  {
    client: "Bapatla CT & MRI Scan Centre",
    location: "India",
    text: "The precision of ImageVision's 3D rendering and MPR analysis has significantly enhanced our diagnostic accuracy for complex neurological and orthopedic cases. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Activity size={16} />
  },
  {
    client: "Mary Begg Health Services",
    location: "Zambia",
    text: "A highly reliable platform. The anatomical stitching feature is particularly impressive, allowing us to merge spinal studies seamlessly for a complete clinical view. The exceptional image quality and advanced reconstruction methods have significantly improved our diagnostic capabilities.",
    icon: <Zap size={16} />
  }
];

export default function ImageVisionDemo() {

  const [testiIndex, setTestiIndex] = useState<number>(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070B13] text-slate-900 dark:text-slate-100 font-['Outfit'] relative overflow-x-hidden transition-colors duration-300">
      
      {/* ── HERO ── */}
      <section className="relative bg-[#0A1128] overflow-hidden pt-28 lg:pt-24 pb-8 mb-8">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="max-w-2xl text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white mb-6 transition-colors">
                  <ChevronLeft size={14} /> Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-1">
                  <Monitor size={20} className="text-white opacity-60" />
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">High Fidelity DICOM Viewer</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-4">
                  Image<span style={{ color: '#4672A4' }}>Vision</span>
                </h1>
                <Link to="/schedule-demo?product=imagevision" className="inline-block mt-2 px-6 py-3 bg-[#4672A4] hover:bg-[#3b608c] text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Schedule a Demo
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:w-1/2 flex justify-end"
            >
              <div className="relative w-full max-w-[460px] group">
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#4672A4] blur-[40px] opacity-40 rounded-full"
                />
                <motion.div 
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-lg overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(70,114,164,0.3)] bg-slate-900"
                >
                  <img 
                    src="/imagevision_modern_ui.png" 
                    alt="ImageVision UI Interface Visualization"
                    className="w-full h-auto object-contain opacity-95 relative z-10"
                  />
                  <motion.div
                    animate={{ top: ['-10%', '110%', '-10%'] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20"
                  />
                  <div className="absolute inset-0 z-20 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:10px_10px]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 mb-24">

        {/* ── ADVANCED DICOM ENGINE SECTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-[900] text-[#0A1128] dark:text-white tracking-tighter uppercase leading-tight">
              ADVANCED DICOM ENGINE
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 dark:text-slate-400 text-base lg:text-lg font-medium leading-relaxed">
              Experience seamless, offline diagnostic imaging.<br/>
              ImageVision delivers instant multi-planar reconstruction<br/>
              and 3D volume rendering, allowing you to load and analyze<br/>
              local DICOM datasets with uncompromising speed and<br/>
              clinical precision.
            </motion.p>
            
            {/* Feature Boxes */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-6">
              {['HIPAA Compliant', 'Zero Downtime', '24/7 Support', 'Highly Affordable', 'Zero Data-Loss'].map((feature, idx) => (
                <div key={idx} className="px-4 py-2 bg-white dark:bg-[#070B13] border border-slate-200 dark:border-white/10 rounded-xl shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4672A4]" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1128] dark:bg-[#070B13] rounded-[32px] border border-white/5 shadow-2xl p-6 md:p-8 relative overflow-hidden text-white"
        >
          {/* Workspace Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/5 pb-4 mb-6 gap-3">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#4672A4] mb-1">IMAGEVISION ENGINE SIMULATOR</h3>
              <p className="text-sm text-slate-400 font-medium">3D Multi-Panel Diagnostic Viewing Platform (Simulated Demo)</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-stretch">
            {/* Viewport Display */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[16/10] select-none">
                {/* Custom Platform Image Graphic */}
                <img 
                  src="/imagevision-ui.png" 
                  alt="ImageVision 3D Platform Volume Render"
                  className="w-full h-full object-cover transition-all duration-300"
                />

                              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
    <ImagingTools />
    <PrintingTools />

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 mb-24 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">GLOBAL VALIDATION & SUCCESS STORIES</h3>
            <div className="flex-1 h-px bg-slate-200 dark:bg-white/5" />
          </div>

          <div className="bg-white dark:bg-[#0A1128] rounded-2xl border border-slate-100 dark:border-white/5 p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testiIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-400/10 rounded-full flex items-center justify-center text-[#4672A4]">
                      {imageVisionTestimonials[testiIndex].icon}
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="fill-[#4672A4] text-[#4672A4]" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote marks background */}
                  <Quote size={80} className="text-slate-50 dark:text-white/5 absolute top-0 right-0 -translate-y-4 translate-x-4 rotate-180 pointer-events-none" />
                  
                  <div className="flex gap-2 relative z-10">
                    <button 
                      onClick={() => setTestiIndex((prev) => (prev - 1 + imageVisionTestimonials.length) % imageVisionTestimonials.length)}
                      className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-[#4672A4] hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button 
                      onClick={() => setTestiIndex((prev) => (prev + 1) % imageVisionTestimonials.length)}
                      className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-[#4672A4] hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <p className="text-base md:text-lg text-[#4672A4] dark:text-slate-300 font-medium italic leading-relaxed mb-10 max-w-4xl relative z-10">
                  "{imageVisionTestimonials[testiIndex].text}"
                </p>

                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <h4 className="text-[#0A1128] dark:text-white font-black text-sm tracking-wider uppercase mb-1">
                      {imageVisionTestimonials[testiIndex].client}
                    </h4>
                    <p className="text-[10px] font-black tracking-widest uppercase text-slate-400">
                      {imageVisionTestimonials[testiIndex].location}
                    </p>
                  </div>
                  
                  <div className="flex gap-1.5 items-center">
                    {imageVisionTestimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTestiIndex(idx)}
                        className={`transition-all duration-300 rounded-full ${
                          idx === testiIndex 
                            ? 'w-4 h-1 bg-[#4672A4]' 
                            : 'w-1 h-1 bg-slate-300 dark:bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

    </div>
  );
}

