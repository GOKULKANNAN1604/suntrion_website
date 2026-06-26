import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArchiveRestore,
  MonitorPlay, Contrast, ZoomIn,
  Ruler, DownloadCloud, Check,
  FileText, PieChart, TrendingUp,
  ChevronLeft, ChevronRight, Layers, Activity
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const CapabilitiesBreakdown = () => {
  const [currentAdvSlide, setCurrentAdvSlide] = useState(0);
  const [currentDiagSlide, setCurrentDiagSlide] = useState(0);
  const [currentOpsSlide, setCurrentOpsSlide] = useState(0);

  useEffect(() => {
    const advTimer = setInterval(() => {
      setCurrentAdvSlide((prev) => (prev + 1) % 4);
    }, 10000);
    const diagTimer = setInterval(() => {
      setCurrentDiagSlide((prev) => (prev + 1) % 5);
    }, 10000);
    const opsTimer = setInterval(() => {
      setCurrentOpsSlide((prev) => (prev + 1) % 4);
    }, 10000);
    return () => {
      clearInterval(advTimer);
      clearInterval(diagTimer);
      clearInterval(opsTimer);
    };
  }, []);

  const handleDragEndAdv = (_e: any, info: any) => {
    if (info.offset.x < -50) setCurrentAdvSlide((prev) => (prev + 1) % 4);
    else if (info.offset.x > 50) setCurrentAdvSlide((prev) => (prev - 1 + 4) % 4);
  };

  const handleDragEndDiag = (_e: any, info: any) => {
    if (info.offset.x < -50) setCurrentDiagSlide((prev) => (prev + 1) % 5);
    else if (info.offset.x > 50) setCurrentDiagSlide((prev) => (prev - 1 + 5) % 5);
  };

  const handleDragEndOps = (_e: any, info: any) => {
    if (info.offset.x < -50) setCurrentOpsSlide((prev) => (prev + 1) % 4);
    else if (info.offset.x > 50) setCurrentOpsSlide((prev) => (prev - 1 + 4) % 4);
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-16 pt-16 border-t border-slate-200 dark:border-white/10">

        {/* SECTION: ADVANCED VISUALIZATION */}
        <div className="space-y-6">
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest text-center">Advanced Visualization</p>
          
          <div className="relative w-full overflow-hidden pt-2">
            <div className="w-full relative h-[600px] md:h-[400px]">
              <AnimatePresence mode="wait">
                
                {/* Slide 0: 3D MPR */}
                {currentAdvSlide === 0 && (
                  <motion.div key="adv-0" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndAdv} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-[#0A1128] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center p-6 group-hover:border-cyan-500/30 transition-colors duration-500">
                      <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 bg-black">
                        <video 
                          ref={(el) => { if (el) el.playbackRate = 2.0; }}
                          src="/3DMPR.mp4" 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          disablePictureInPicture
                          disableRemotePlayback
                          className="absolute inset-y-0 right-0 w-[125%] max-w-none h-full object-cover object-right" 
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-16 h-16 rounded-full bg-[#F3F6F8] dark:bg-[#F3F6F8]/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <Layers size={24} className="text-cyan-500" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">3D MPR</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Industry-leading 3D Multi-Planar Reconstruction with interactive crosshairs and dynamic slab thickness adjustments for precise clinical review.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 1: MaxIP */}
                {currentAdvSlide === 1 && (
                  <motion.div key="adv-1" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndAdv} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-[#0A1128] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center p-6 group-hover:border-cyan-500/30 transition-colors duration-500">
                      <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 bg-black">
                        <video 
                          ref={(el) => { if (el) el.playbackRate = 2.0; }}
                          src="/maxIP.mp4" 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          disablePictureInPicture
                          disableRemotePlayback
                          className="absolute inset-y-0 right-0 w-[125%] max-w-none h-full object-cover object-right" 
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-16 h-16 rounded-full bg-[#F3F6F8] dark:bg-[#F3F6F8]/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <Activity size={24} className="text-cyan-400" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white tracking-wider mb-2">MaxIP</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Maximum Intensity Projection allows you to accurately trace and visualize vascular structures and contrast-enhanced tissues by projecting the brightest voxels.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 2: MinIP */}
                {currentAdvSlide === 2 && (
                  <motion.div key="adv-2" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndAdv} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-[#0A1128] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center p-6 group-hover:border-cyan-500/30 transition-colors duration-500">
                      <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 bg-black">
                        <video 
                          ref={(el) => { if (el) el.playbackRate = 2.0; }}
                          src="/minIP.mp4" 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          disablePictureInPicture
                          disableRemotePlayback
                          className="absolute inset-y-0 right-0 w-[125%] max-w-none h-full object-cover object-right" 
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-16 h-16 rounded-full bg-[#F3F6F8] dark:bg-[#F3F6F8]/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <Layers size={24} className="text-emerald-400" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white tracking-wider mb-2">MinIP</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Minimum Intensity Projection enhances the visibility of air-filled spaces and low-density structures, ideal for detailed lung and airway analysis.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 3: Measurement Tool */}
                {currentAdvSlide === 3 && (
                  <motion.div key="adv-3" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndAdv} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-black border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex mb-6 md:mb-0">
                       <img src="/whole_spine.png" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                       <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                          {/* Top Region: HU Measurement */}
                          <motion.ellipse cx="50" cy="30" rx="15" ry="10" fill="rgba(250,204,21,0.2)" stroke="#facc15" strokeWidth="1" strokeDasharray="100" animate={{ strokeDashoffset: [100, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }} />
                          {/* Bottom Region: Line Measurement */}
                          <motion.path d="M 30 60 L 70 80" stroke="#22d3ee" strokeWidth="1" strokeDasharray="100" animate={{ strokeDashoffset: [100, 0] }} transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 2 }} />
                       </svg>
                       <motion.div animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[30%] left-[70%] bg-black/80 text-[8px] text-yellow-400 p-1 rounded font-mono transform -translate-x-1/2 -translate-y-1/2 border border-yellow-400/50">Mean HU: 142<br/>Area: 32mm²</motion.div>
                       <motion.div animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 4, delay: 1, repeat: Infinity }} className="absolute top-[75%] left-[50%] bg-black/80 text-[8px] text-cyan-400 p-1 rounded font-mono transform -translate-x-1/2 -translate-y-1/2 border border-cyan-400/50">Length: 45.2mm</motion.div>
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <Ruler size={20} className="text-yellow-500" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Measurement Tools</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Line & Angle, CobbAngle, HU density evaluation, and Ellipse Region-of-Interest statistics for comprehensive quantitative analysis.
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            
            {/* Slide Indicators & Navigation */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button 
                onClick={() => setCurrentAdvSlide((prev) => (prev - 1 + 4) % 4)}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#0C121D] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#4672A4] hover:border-[#4672A4]/50 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex justify-center gap-3">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAdvSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentAdvSlide === index ? 'bg-[#4672A4] w-8' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to advanced slide ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setCurrentAdvSlide((prev) => (prev + 1) % 4)}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#0C121D] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#4672A4] hover:border-[#4672A4]/50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION: INTELLIGENT DIAGNOSTIC WORKSPACE */}
        <div className="space-y-6 pt-10">
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest text-center">Intelligent Diagnostic Workspace</p>
          
          <div className="relative w-full overflow-hidden pt-2">
            <div className="w-full relative h-[600px] md:h-[400px]">
              <AnimatePresence mode="wait">
                
                {/* Slide 0: Orientation & Layout */}
                {currentDiagSlide === 0 && (
                  <motion.div key="diag-0" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndDiag} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-black border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex items-center justify-center p-4">
                      {/* Grid background reference */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                      
                      <motion.div 
                        animate={{ 
                          rotateZ: [0, 90, 90, 0, 0],
                          scaleX: [1, 1, -1, -1, 1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full relative"
                      >
                         <img src="/cervical_spine.png" className="w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl" />
                      </motion.div>
                      
                      {/* Grid overlay that fades in and out to show "layout" change */}
                      <motion.div 
                        animate={{ opacity: [0, 0, 1, 1, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4 pointer-events-none"
                      >
                         <div className="border border-cyan-400/60 rounded-lg shadow-[inset_0_0_20px_rgba(34,211,238,0.2)] bg-cyan-400/5" />
                         <div className="border border-cyan-400/60 rounded-lg shadow-[inset_0_0_20px_rgba(34,211,238,0.2)] bg-cyan-400/5" />
                         <div className="border border-cyan-400/60 rounded-lg shadow-[inset_0_0_20px_rgba(34,211,238,0.2)] bg-cyan-400/5" />
                         <div className="border border-cyan-400/60 rounded-lg shadow-[inset_0_0_20px_rgba(34,211,238,0.2)] bg-cyan-400/5" />
                      </motion.div>
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <MonitorPlay size={20} className="text-slate-400" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Orientation & Layout</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Seamlessly manage rotation, flipping, and customizable viewing grids spanning from a focused 1x1 to an expansive 4x4 layout, adapting instantly to your diagnostic needs.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 1: Contrast Adjustment */}
                {currentDiagSlide === 1 && (
                  <motion.div key="diag-1" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndDiag} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-black border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex mb-6 md:mb-0">
                      <motion.img 
                        src="/lumbar_spine.png" 
                        alt="Adjustment" 
                        animate={{ filter: ['brightness(1) contrast(1)', 'brightness(1.5) contrast(2)', 'invert(1)', 'brightness(1) contrast(1)'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover" 
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <Contrast size={20} className="text-slate-400" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Contrast Adjustment</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Precision controls for brightness, contrast inversion, targeted tissue presets, and area magnifiers to highlight obscure details with absolute clarity.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 2: Pan & Zoom */}
                {currentDiagSlide === 2 && (
                  <motion.div key="diag-2" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndDiag} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-black border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex mb-6 md:mb-0">
                      <motion.img 
                        src="/mpr_original.png" 
                        alt="Pan Zoom" 
                        animate={{ scale: [1, 2.5, 1], y: [0, 20, -20, 0], x: [0, 30, -30, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover opacity-80" 
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <ZoomIn size={20} className="text-slate-400" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Pan & Zoom</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Effortlessly navigate and magnify images without losing clarity. Pan and zoom actions synchronize instantly across multiple viewports for seamless comparative analysis.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 3: Export Tools */}
                {currentDiagSlide === 3 && (
                  <motion.div key="diag-3" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndDiag} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-black border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex justify-center items-center mb-6 md:mb-0">
                       <img src="/brain_mpr.png" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                       <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="z-20 flex items-center justify-center bg-black/50 backdrop-blur-md p-4 rounded-full border border-white/20 shadow-2xl">
                          <DownloadCloud size={32} className="text-white" />
                       </motion.div>
                       <motion.div animate={{ y: [0, -30], opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity }} className="absolute z-10 top-1/3 left-1/3 bg-blue-500 text-white text-[8px] px-2 py-1 rounded font-black tracking-wider shadow-lg">DICOM</motion.div>
                       <motion.div animate={{ y: [0, -40], opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} className="absolute z-10 top-1/3 right-1/3 bg-emerald-500 text-white text-[8px] px-2 py-1 rounded font-black tracking-wider shadow-lg">JPEG</motion.div>
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <DownloadCloud size={20} className="text-emerald-500" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Export Tools</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Mark key diagnostic areas, tag key images, and instantly extract visuals as universally compatible JPEGs.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 4: Reporting Tool */}
                {currentDiagSlide === 4 && (
                  <motion.div key="diag-4" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndDiag} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-black border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-row mb-6 md:mb-0">
                       {/* Left side: Report Editor */}
                       <div className="w-[45%] h-full bg-white dark:bg-slate-900 flex flex-col relative z-10 border-r border-slate-200 dark:border-white/10">
                          {/* Top Toolbar */}
                          <div className="h-6 w-full bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-white/5 flex items-center px-2 gap-1">
                             <div className="w-2 h-2 rounded-sm bg-slate-300 dark:bg-slate-600" />
                             <div className="w-2 h-2 rounded-sm bg-slate-300 dark:bg-slate-600" />
                             <div className="w-2 h-2 rounded-sm bg-slate-300 dark:bg-slate-600" />
                             <div className="w-8 h-2.5 rounded bg-[#4672A4] ml-auto" />
                          </div>
                          {/* Text Area */}
                          <div className="flex-1 p-3 flex flex-col gap-1.5 overflow-hidden">
                             <div className="w-16 h-2 bg-slate-800 dark:bg-slate-200 rounded mb-1" />
                             <div className="w-24 h-1.5 bg-slate-800 dark:bg-slate-200 rounded mb-2" />
                             
                             <div className="w-12 h-1.5 bg-slate-800 dark:bg-slate-200 rounded mb-0.5 mt-2" />
                             <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, repeat: Infinity }} className="h-1 bg-slate-400 dark:bg-slate-500 rounded" />
                             <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} className="h-1 bg-slate-400 dark:bg-slate-500 rounded" />
                             <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 2, delay: 1, repeat: Infinity }} className="h-1 bg-slate-400 dark:bg-slate-500 rounded" />
                             
                             <div className="w-14 h-1.5 bg-slate-800 dark:bg-slate-200 rounded mb-0.5 mt-2" />
                             <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, delay: 1.5, repeat: Infinity }} className="h-1 bg-slate-400 dark:bg-slate-500 rounded" />
                             <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} transition={{ duration: 2, delay: 2, repeat: Infinity }} className="h-1 bg-slate-400 dark:bg-slate-500 rounded" />
                          </div>
                       </div>
                       
                       {/* Right side: Image Viewer Split */}
                       <div className="w-[55%] h-full flex flex-row">
                          <div className="flex-1 h-full bg-black border-r border-white/10 relative">
                            <img src="/cervical_spine.png" className="absolute inset-0 w-full h-full object-cover" />
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                               <line x1="45" y1="10" x2="65" y2="90" stroke="#facc15" strokeWidth="0.5" strokeDasharray="2,2" />
                            </svg>
                          </div>
                          <div className="flex-1 h-full bg-black relative">
                            <img src="/mpr_original.png" className="absolute inset-0 w-full h-full object-cover" />
                          </div>
                       </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <FileText size={20} className="text-blue-500" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Reporting Tool</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                        Ease your workflow with SunVista. Add seamless signature attachments and design reports using your own custom watermark and header templates. Effortlessly share reports and receipts with patients and referring physicians.
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            
            {/* Slide Indicators & Navigation */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button 
                onClick={() => setCurrentDiagSlide((prev) => (prev - 1 + 5) % 5)}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#0C121D] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#4672A4] hover:border-[#4672A4]/50 transition-colors"
                aria-label="Previous diagnostic slide"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex justify-center gap-3">
                {[0, 1, 2, 3, 4].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDiagSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentDiagSlide === index ? 'bg-[#4672A4] w-8' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to diagnostic slide ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setCurrentDiagSlide((prev) => (prev + 1) % 5)}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#0C121D] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#4672A4] hover:border-[#4672A4]/50 transition-colors"
                aria-label="Next diagnostic slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION: Operations & Intelligence (Slideshow) */}
        <div className="space-y-6 pt-10">
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest text-center">Operations, Finance & Business Intelligence</p>
          
          <div className="relative w-full overflow-hidden pt-2">
            <div className="w-full relative h-[600px] md:h-[400px]">
              <AnimatePresence mode="wait">
                {/* Slide 0: Visit Management */}
                {currentOpsSlide === 0 && (
                  <motion.div key="ops-0" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndOps} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm relative overflow-hidden flex flex-col pt-6 group-hover:border-blue-500/30 transition-colors duration-500">
                      
                      {/* DICOM Worklist Skeleton */}
                      <div className="flex-1 px-4 space-y-3 relative overflow-hidden">
                         {[1, 2, 3, 4, 5].map((i) => (
                           <div key={i} className="flex items-center gap-3 w-full opacity-60">
                             <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                             <div className="w-24 h-2 bg-slate-200 rounded-full" />
                             <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                             <div className="w-12 h-2 bg-yellow-100 rounded-full" />
                           </div>
                         ))}
                         {/* Fade out bottom to simulate more rows */}
                         <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
                      </div>

                      {/* Action Bar */}
                      <div className="h-14 bg-[#475569] dark:bg-slate-800 w-full flex items-center px-3 gap-2 overflow-x-hidden rounded-b-[1.5rem]">
                        <div className="bg-white px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                          <Check size={12} className="text-black" />
                          <span className="text-[9px] font-black text-black">ASSIGN TO TELE RADIOLOGIST</span>
                        </div>
                        <div className="bg-[#B48429] px-2 py-1.5 rounded text-[8px] font-bold text-white whitespace-nowrap">SET EMERGENCY</div>
                        <div className="bg-[#B48429] px-2 py-1.5 rounded text-[8px] font-bold text-white whitespace-nowrap">SET MLC</div>
                        <div className="bg-[#B48429] px-2 py-1.5 rounded text-[8px] font-bold text-white whitespace-nowrap">ORDER NOTES</div>
                        <div className="bg-[#B48429] px-2 py-1.5 rounded text-[8px] font-bold text-white whitespace-nowrap">VIEW IMAGES</div>
                      </div>

                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <MonitorPlay size={20} className="text-amber-500" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Visit Management</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-4">
                        Efficiently manage the daily patient worklist. Seamlessly assign studies to tele-radiologists, prioritize emergency scans, and organize patient records directly from a unified interface.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 1: Referral Management */}
                {currentOpsSlide === 1 && (
                  <motion.div key="ops-1" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndOps} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm relative overflow-hidden flex flex-col justify-start pt-4 px-4 pb-0 group-hover:border-emerald-500/30 transition-colors duration-500">
                      
                      {/* Table Header */}
                      <div className="w-full bg-[#E2E8F0] dark:bg-slate-800 rounded-t-lg py-2 px-4 flex items-center justify-between">
                        <div className="text-[7px] font-bold text-slate-500 uppercase w-1/4 text-left">NAME</div>
                        <div className="text-[7px] font-bold text-slate-500 uppercase w-1/4 text-center">REFERRALS</div>
                        <div className="text-[7px] font-bold text-slate-500 uppercase w-1/4 text-center">REVENUE</div>
                        <div className="text-[7px] font-bold text-slate-500 uppercase w-1/4 text-center">MONTHLY CHARTS</div>
                      </div>

                      {/* Rows */}
                      <div className="w-full space-y-0 relative">
                        {[
                          { name: 'DR. VIJAYAKUMAR', refs: '3', rev: '₹45k', color: 'bg-blue-400' },
                          { name: 'DR. SMITH', refs: '12', rev: '₹120k', color: 'bg-emerald-400' },
                          { name: 'GENERAL HOSP', refs: '8', rev: '₹85k', color: 'bg-purple-400' }
                        ].map((row, i) => (
                          <div key={i} className="flex items-center justify-between py-3 px-4 border-b border-slate-50 dark:border-white/5">
                            <div className="text-[9px] font-black text-slate-800 dark:text-slate-200 w-1/4 text-left uppercase">{row.name}</div>
                            <div className="text-[9px] font-medium text-slate-600 dark:text-slate-400 w-1/4 text-center">{row.refs}</div>
                            <div className="text-[9px] font-medium text-slate-600 dark:text-slate-400 w-1/4 text-center">{row.rev}</div>
                            <div className="w-1/4 flex justify-center items-end gap-[2px] h-6">
                              {[0.4, 0.7, 0.5, 1.0].map((h, j) => (
                                <motion.div key={j} animate={{ height: [`${h * 50}%`, `${h * 100}%`, `${h * 50}%`] }} transition={{ duration: 2, delay: i * 0.2 + j * 0.1, repeat: Infinity, ease: "easeInOut" }} className={`w-1.5 rounded-t-sm ${row.color}`} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <TrendingUp size={20} className="text-emerald-500" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Referral Management</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-4">
                        Track and analyze your referral network with detailed metrics on total referrals, generated revenue, and monthly trends for individual physicians and institutions.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 2: Advanced Dashboard */}
                {currentOpsSlide === 2 && (
                  <motion.div key="ops-2" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndOps} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-blue-50/30 dark:bg-slate-900/50 border border-blue-200/50 dark:border-white/10 shadow-sm relative overflow-hidden flex flex-col p-4 group-hover:border-blue-500/30 transition-colors duration-500 gap-2">
                      
                      {/* Top KPI Cards */}
                      <div className="grid grid-cols-4 gap-2 w-full h-1/3">
                        {[
                          { title: 'Total Paid', val: '₹56,820.00', color: 'text-emerald-500' },
                          { title: 'Total Due', val: '₹4,43,760.00', color: 'text-red-500' },
                          { title: 'Total Refunds', val: '₹1,350.00', color: 'text-purple-500' },
                          { title: 'Total Revenue', val: '₹56,820.00', color: 'text-blue-500' }
                        ].map((kpi, i) => (
                           <div key={i} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-md p-2 flex flex-col justify-center shadow-sm">
                             <span className="text-[6px] font-bold text-slate-500">{kpi.title}</span>
                             <span className={`text-[9px] font-black mt-1 ${kpi.color}`}>{kpi.val}</span>
                           </div>
                        ))}
                      </div>

                      {/* Bottom Charts */}
                      <div className="grid grid-cols-2 gap-2 w-full h-2/3">
                         {/* Bar Chart Box */}
                         <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-md p-2 flex flex-col justify-end items-center relative overflow-hidden shadow-sm">
                            <div className="w-full flex items-end justify-center gap-2 h-3/4 pb-2">
                               <motion.div animate={{ height: ['40%', '80%', '40%'] }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} className="w-3 rounded-t-sm bg-red-500" />
                               <motion.div animate={{ height: ['20%', '50%', '20%'] }} transition={{ duration: 3, delay: 0.5, ease: "easeInOut", repeat: Infinity }} className="w-3 rounded-t-sm bg-red-500" />
                               <motion.div animate={{ height: ['60%', '40%', '60%'] }} transition={{ duration: 3, delay: 1, ease: "easeInOut", repeat: Infinity }} className="w-3 rounded-t-sm bg-emerald-500" />
                               <motion.div animate={{ height: ['80%', '60%', '80%'] }} transition={{ duration: 3, delay: 1.5, ease: "easeInOut", repeat: Infinity }} className="w-3 rounded-t-sm bg-red-500" />
                            </div>
                            <span className="text-[5px] text-slate-400 mb-1">Due vs Paid</span>
                         </div>
                         {/* Pie Chart Box */}
                         <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-md p-2 flex flex-col items-center justify-center relative shadow-sm">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="w-16 h-16 rounded-full bg-blue-500 relative overflow-hidden flex items-center justify-center">
                              {/* Green Slice via CSS clip-path */}
                              <div className="absolute inset-0 bg-emerald-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 50% 0)' }} />
                            </motion.div>
                            <span className="text-[5px] text-blue-500 font-bold absolute bottom-2">General vs <span className="text-emerald-500">Insurance</span></span>
                         </div>
                      </div>

                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <PieChart size={20} className="text-blue-500" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Advanced Dashboard</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-4">
                        High-level financial insights offering a comprehensive view of total paid, due, and refunds. Includes visual analytics for collection types and due vs. paid comparisons.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Slide 3: Initiate Retrieval */}
                {currentOpsSlide === 3 && (
                  <motion.div key="ops-3" variants={slideVariants} initial="initial" animate="animate" exit="exit" drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEndOps} className="absolute inset-0 p-6 md:p-8 bg-white dark:bg-[#0C121D]/50 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center text-center md:text-left group hover:border-[#4672A4]/30 transition-colors gap-8 cursor-grab active:cursor-grabbing">
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[1.5rem] bg-[#0A1128] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
                      <div className="w-full h-full relative flex items-center justify-center">
                        <div className="absolute inset-x-0 bottom-4 h-1/3 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center relative z-20">
                          <ArchiveRestore size={32} className="text-cyan-400" />
                          <motion.div animate={{ y: [20, -60, -60, 20], opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute w-12 h-16 bg-white rounded flex flex-col items-center justify-center shadow-lg border border-slate-200 z-30">
                            <FileText size={16} className="text-blue-600 mb-1" />
                            <div className="w-8 h-1 bg-slate-200 rounded-full mb-0.5" />
                            <div className="w-6 h-1 bg-slate-200 rounded-full" />
                          </motion.div>
                        </div>
                        <motion.div animate={{ height: ['0px', '100px', '0px'], opacity: [0, 0.8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/2 w-1 bg-cyan-400 blur-[2px] z-10" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                        <ArchiveRestore size={20} className="text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h4 className="text-lg font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-2">Initiate Retrieval</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-4">
                        Optimize radiology cloud costs with our customized tiered pricing. Maximize your subscription credits by managing STP and LTP tiers effectively; unused credits carry over monthly.
                      </p>
                      <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-lg bg-[#4672A4] text-white text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">Short Term</button>
                        <button className="px-4 py-2 rounded-lg border border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">Long Term</button>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            
            {/* Slide Indicators & Navigation */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button 
                onClick={() => setCurrentOpsSlide((prev) => (prev - 1 + 4) % 4)}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#0C121D] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#4672A4] hover:border-[#4672A4]/50 transition-colors"
                aria-label="Previous ops slide"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex justify-center gap-3">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentOpsSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentOpsSlide === index ? 'bg-[#4672A4] w-8' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to ops slide ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setCurrentOpsSlide((prev) => (prev + 1) % 4)}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#0C121D] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#4672A4] hover:border-[#4672A4]/50 transition-colors"
                aria-label="Next ops slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default CapabilitiesBreakdown;
