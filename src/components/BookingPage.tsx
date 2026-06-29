import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import CapabilitiesBreakdown from './CapabilitiesBreakdown';

import {
  ChevronLeft, ChevronRight,
  Database, Sparkles, Cloud,
  Globe,
  FileText,
  Menu, 
  FolderOpen, 
  LayoutGrid, 
  MousePointer2, 
  Brush, 
  ZoomIn, 
  Move, 
  Sun, 
  Contrast, 
  Ruler, 
  User,
  ChevronDown,
  Star, Zap, Cpu,
  ArchiveRestore
} from 'lucide-react';

const MPRViewerReplica = () => {
  const [simPhase, setSimPhase] = useState(0);

  // Phases:
  // 0: idle / zooming images
  // 1: cursor moving to Report icon
  // 2: clicking Report icon / Report editor opens
  // 3: cursor moving to AI Engine button
  // 4: clicking AI Engine / AI Panel opens
  // 5: Typing "Hemo"
  // 6: Selected keywords "Hemorrhage", "Hematoma"
  // 7: clicking Apply / Report generation
  // 8: Read report delay
  // 9: Reset
  
  useEffect(() => {
    const timings = [
      4000, // Phase 0 -> 1
      1500, // Phase 1 -> 2
      1000, // Phase 2 -> 3
      1500, // Phase 3 -> 4
      1000, // Phase 4 -> 5
      2000, // Phase 5 -> 6
      2000, // Phase 6 -> 7
      2000, // Phase 7 -> 8
      6000, // Phase 8 -> 9
      500   // Phase 9 -> 0
    ];
    const timer = setTimeout(() => {
      setSimPhase(p => (p + 1) % 10);
    }, timings[simPhase]);
    return () => clearTimeout(timer);
  }, [simPhase]);

  const isReportOpen = simPhase >= 2 && simPhase <= 8;
  const isAIPanelOpen = simPhase >= 4 && simPhase <= 6;
  const isTyping = simPhase >= 5;
  const keywordsSelected = simPhase >= 6;
  const reportGenerated = simPhase >= 7 && simPhase <= 8;

  // Cursor Animation Variants
  const cursorVariants = {
    phase0: { opacity: 0, x: "50%", y: "80%", scale: 1 },
    phase1: { opacity: 1, x: "12%", y: "4%", scale: 1 }, // move to report icon
    phase2: { opacity: 1, x: "12%", y: "4%", scale: 0.8 }, // click report icon
    phase3: { opacity: 1, x: "42%", y: "15%", scale: 1 }, // move to AI Engine
    phase4: { opacity: 1, x: "42%", y: "15%", scale: 0.8 }, // click AI Engine
    phase5: { opacity: 1, x: "36%", y: "45%", scale: 1 }, // move to input
    phase6: { opacity: 1, x: "36%", y: "55%", scale: 0.8 }, // click suggestion
    phase7: { opacity: 0, x: "36%", y: "55%", scale: 1 }, // disappear
    phase8: { opacity: 0, x: "36%", y: "55%", scale: 1 },
    phase9: { opacity: 0, x: "50%", y: "80%", scale: 1 },
  };

  return (
    <div className="w-full aspect-[4/3] bg-black flex flex-col font-sans select-none overflow-hidden relative">
      
      {/* Animated Cursor */}
      <motion.div 
        className="absolute z-[100] drop-shadow-lg pointer-events-none"
        variants={cursorVariants}
        initial="phase0"
        animate={`phase${simPhase}`}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <MousePointer2 size={24} className="text-white fill-slate-800 -translate-x-1.5 -translate-y-1.5" />
      </motion.div>

      {/* 1. TOP TOOLBAR (Mustard Yellow) */}
      <div className="h-8 min-h-[32px] bg-[#D4A32A] flex items-center justify-between px-2 w-full text-black">
        {/* Left Action Icons */}
        <div className="flex items-center h-full">
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><Menu size={16} strokeWidth={2.5} /></button>
          <div className="w-px h-4 bg-black/20 mx-1" />
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><FolderOpen size={16} strokeWidth={2.5} /></button>
          <button className={`h-full px-2 hover:bg-black/10 flex items-center transition-colors ${simPhase === 2 ? 'bg-black/20' : ''}`}><FileText size={16} strokeWidth={2.5} /></button>
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><LayoutGrid size={16} strokeWidth={2.5} /></button>
          <div className="w-px h-4 bg-black/20 mx-1" />
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><MousePointer2 size={16} strokeWidth={2.5} /></button>
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><Brush size={16} strokeWidth={2.5} /></button>
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><ZoomIn size={16} strokeWidth={2.5} /></button>
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><Move size={16} strokeWidth={2.5} /></button>
          <div className="w-px h-4 bg-black/20 mx-1" />
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><Sun size={16} strokeWidth={2.5} /></button>
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><Contrast size={16} strokeWidth={2.5} /></button>
          <div className="w-px h-4 bg-black/20 mx-1" />
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><Ruler size={16} strokeWidth={2.5} /></button>
          <button className="h-full px-2 hover:bg-black/10 flex items-center"><User size={16} strokeWidth={2.5} /></button>
        </div>

        {/* Right Tools & View Toggles */}
        <div className="flex items-center h-full gap-2 text-[10px] font-bold">
          <button className="px-2.5 py-0.5 border-2 border-white rounded-full bg-[#B8860B] text-white">MaxIP</button>
          <button className="px-1 text-black/70 hover:text-black">MinIP</button>
          
          {/* Slab Thickness Slider Mockup */}
          <div className="flex items-center gap-2 ml-2">
            <span className="text-[8px] text-black/70 font-medium">Slab thickness</span>
            <div className="w-20 h-2 bg-black/20 flex relative">
              <div className="w-1/3 h-full bg-[#A0522D]" />
              <div className="absolute top-1/2 left-1/3 w-1 h-3 -translate-y-1/2 bg-black" />
            </div>
            <span className="text-[9px]">184.0mm</span>
          </div>

          <div className="w-px h-4 bg-black/20 mx-1" />
          <span className="cursor-pointer hover:text-black/70">3D MPR</span>
          <div className="w-px h-4 bg-black/20 mx-1" />

          {/* EN Dropdown Pill */}
          <button className="flex items-center gap-1 bg-[#3A3F47] text-white px-2 py-0.5 rounded-full hover:bg-[#4A4F57] ml-2">
            <Globe size={10} />
            <span className="text-[9px]">EN</span>
            <ChevronDown size={10} />
          </button>
        </div>
      </div>

      {/* 2. PATIENT INFO BAR (Dark Grey) */}
      <div className="h-5 min-h-[20px] bg-[#1E1E1E] border-b border-black flex items-center px-2 text-[9px] text-white/80 font-mono tracking-wide relative z-10">
        <span className="text-white font-bold mr-1">[Anonymized]</span> | ** Y | * | XXXXXXXXXXXX | 11 May 2007
      </div>

      {/* 3. MAIN VIEWPORT (2-Column Grid) */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* LEFT PANE: Report Editor OR Coronal View */}
        <AnimatePresence initial={false} mode="wait">
          {isReportOpen ? (
            <motion.div 
              key="report-editor"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-1/2 h-full bg-white relative flex flex-col font-sans text-black z-20 border-r border-[#D4A32A]"
            >
              {/* Report Toolbar */}
              <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 justify-between relative z-30">
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-slate-200 rounded-sm" />
                    <div className="w-4 h-4 bg-slate-200 rounded-sm" />
                    <div className="w-4 h-4 bg-slate-200 rounded-sm" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-2">Report Editor Page</span>
                </div>
                <motion.button 
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md shadow-sm relative overflow-hidden transition-colors ${simPhase === 4 ? 'bg-blue-700 text-white' : 'bg-[#2563EB] text-white hover:bg-blue-600'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <Sparkles size={12} className="animate-pulse" />
                  <span className="text-[10px] font-bold tracking-wide">AI Engine</span>
                </motion.button>
              </div>

              {/* AI Engine Panel Overlay */}
              <AnimatePresence>
                {isAIPanelOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-12 right-4 w-56 bg-white border border-slate-200 shadow-2xl rounded-xl p-3 z-40 flex flex-col"
                  >
                    <div className="flex flex-col gap-2.5">
                      <span className="text-[9px] font-bold text-slate-800 tracking-wide">Case Type</span>
                      <div className="flex items-center gap-2 px-1">
                        <div className="w-2.5 h-2.5 rounded-full border border-blue-600 flex items-center justify-center">
                          <div className="w-1 h-1 bg-blue-600 rounded-full" />
                        </div>
                        <span className="text-[9px] text-slate-700 font-medium">Abnormal Case</span>
                      </div>
                      <div className="h-px bg-slate-100 my-0.5" />
                      
                      <span className="text-[9px] font-bold text-slate-800 tracking-wide">Abnormal Keywords</span>
                      <div className="border border-blue-300 ring-1 ring-blue-100 rounded p-1.5 flex items-center bg-white">
                        <span className="text-[10px] text-slate-800 font-medium h-3 flex items-center">
                          {isTyping ? "Hemo" : ""}
                          {isTyping && !keywordsSelected && <span className="w-[1.5px] h-3 bg-blue-500 inline-block animate-pulse ml-0.5" />}
                        </span>
                      </div>
                      
                      {/* Suggestions */}
                      {isTyping && (
                        <div className="bg-slate-50 border border-slate-100 rounded p-1.5 flex flex-col gap-0.5 shadow-inner">
                          <span className="text-[7px] text-slate-400 uppercase font-black mb-1 px-1">Suggestions</span>
                          <div className={`text-[9px] p-1 rounded font-medium transition-colors ${keywordsSelected ? 'bg-blue-100 text-blue-800 font-bold' : 'text-slate-700 hover:bg-slate-200'}`}>Hemorrhage</div>
                          <div className={`text-[9px] p-1 rounded font-medium transition-colors ${keywordsSelected ? 'bg-blue-100 text-blue-800 font-bold' : 'text-slate-700 hover:bg-slate-200'}`}>Hematoma</div>
                          <div className="text-[9px] p-1 rounded font-medium text-slate-600">Hemothorax</div>
                          <div className="text-[9px] p-1 rounded font-medium text-slate-600">Hemoperitoneum</div>
                        </div>
                      )}
                      
                      {keywordsSelected && (
                        <div className="flex flex-col gap-1 mt-1">
                          <span className="text-[7px] text-slate-400 uppercase font-black px-1">Selected Keywords</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="bg-emerald-50 text-emerald-700 text-[8px] font-bold px-1.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1">Hemorrhage <span>×</span></span>
                            <span className="bg-emerald-50 text-emerald-700 text-[8px] font-bold px-1.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1">Hematoma <span>×</span></span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Report Content */}
              <div className="p-5 flex-1 overflow-y-auto relative bg-[#FAFAFA]">
                <div className="border border-slate-200 bg-white p-3 mb-4 flex items-center justify-center shadow-sm">
                  <div className="flex flex-col items-center text-center px-2">
                    <span className="text-[10px] font-black text-[#A01A1A] uppercase tracking-wider">Clinique Saint Luc De Bukavu</span>
                    <span className="text-[7px] text-slate-500 uppercase font-bold mt-0.5 tracking-widest">Ministere De La Sante</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8px] mb-5 border-b border-slate-200 pb-3 bg-white p-2 rounded border shadow-sm">
                  <div><strong className="text-slate-500">Patient ID:</strong> <span className="font-medium text-slate-800">P-10293</span></div>
                  <div><strong className="text-slate-500">Date:</strong> <span className="font-medium text-slate-800">11 Jun 2026</span></div>
                  <div><strong className="text-slate-500">Name:</strong> <span className="font-medium text-slate-800">John Doe</span></div>
                  <div><strong className="text-slate-500">Ref By:</strong> <span className="font-medium text-slate-800">DR. VIJAYAKUMAR</span></div>
                </div>

                <div className="space-y-4 px-1">
                  <div>
                    <h4 className="text-[10px] font-black text-[#4672A4] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">Findings</h4>
                    <div className="text-[9px] text-slate-700 leading-relaxed font-serif min-h-[60px]">
                      {reportGenerated ? (
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                          Non-contrast CT of the head demonstrates an acute intraparenchymal <strong className="text-slate-900 bg-yellow-100 px-0.5">hemorrhage</strong> in the right basal ganglia measuring approximately 3.2 x 2.1 cm. 
                          There is surrounding vasogenic edema and mild mass effect with partial effacement of the right lateral ventricle. 
                          A small subdural <strong className="text-slate-900 bg-yellow-100 px-0.5">hematoma</strong> is also noted along the right cerebral convexity measuring up to 4 mm in thickness. 
                          No midline shift is identified.
                        </motion.span>
                      ) : (
                        <span className="text-slate-300 italic">Click AI Engine to generate findings based on keywords...</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black text-[#4672A4] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">Impression</h4>
                    <div className="text-[9px] text-slate-700 leading-relaxed font-serif min-h-[40px]">
                      {reportGenerated && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.8 }} className="space-y-1">
                          <p>1. Acute right basal ganglia hemorrhage with mild mass effect.</p>
                          <p>2. Small right convexity subdural hematoma.</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="coronal-view"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex-1 border-r border-[#D4A32A] relative overflow-hidden flex items-center justify-center bg-black"
            >
              <motion.img 
                src="/mpr_original.png" 
                alt="Coronal" 
                animate={simPhase === 0 ? { scale: [1.1, 1.15, 1.1], y: ["4%", "2%", "4%"] } : { scale: 1.1, y: "4%" }}
                transition={{ duration: 4, ease: "easeInOut" }}
                className="absolute w-[205%] h-[120%] max-w-none left-0 object-cover object-left opacity-90 origin-center" 
              />
              
              <div className="absolute top-2 left-2 text-[#D4A32A] text-[9px] font-mono leading-tight">
                4/4<br/>11:59:58 AM<br/><span className="text-white/80">W: 488</span><br/><span className="text-white/80">L: 42</span><br/>Study: COR ABD
              </div>
              <div className="absolute top-2 right-2 text-white/80 text-[9px] font-mono leading-tight text-right">
                313 mA<br/>N/A kV<br/>ST: 4 mm<br/>SL: 150
              </div>
              
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white/90 text-[10px] font-bold">S</span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/90 text-[10px] font-bold">I</span>
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white/90 text-[10px] font-bold">R</span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 text-[10px] font-bold">L</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* RIGHT PANE: Axial View */}
        <div className="w-1/2 relative overflow-hidden flex items-center justify-center bg-black">
          <motion.img 
            src="/mpr_original.png" 
            alt="Axial" 
            animate={simPhase === 0 ? { scale: [1.1, 1.2, 1.1], x: ["0%", "2%", "0%"] } : { scale: 1.1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
            className="absolute w-[205%] h-[120%] max-w-none right-0 object-cover object-right opacity-90 origin-center" 
            style={{ y: "4%" }}
          />
          
          <div className="absolute top-2 left-2 text-[#D4A32A] text-[9px] font-mono leading-tight z-10">
            1/3<br/>11:58:46 AM<br/><span className="text-white/80">W: 450</span><br/><span className="text-white/80">L: 50</span><br/>Study: COM ABD
          </div>
          <div className="absolute top-2 right-2 text-white/80 text-[9px] font-mono leading-tight text-right z-10">
            313 mA<br/>N/A kV<br/>ST: 4 mm<br/>SL: -201
          </div>
          
          <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white/90 text-[10px] font-bold z-10">A</span>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/90 text-[10px] font-bold z-10">P</span>
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white/90 text-[10px] font-bold z-10">R</span>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 text-[10px] font-bold z-10">L</span>
        </div>

      </div>

      {/* 4. BOTTOM THUMBNAILS (Dark Grey) */}
      <div className="h-14 min-h-[56px] bg-[#2A2A2A] border-t border-[#D4A32A] flex items-center px-2 gap-1 overflow-x-hidden relative z-10">
        {[
          { label: 'Report', border: false },
          { label: 'Report', border: false },
          { label: 'Report', border: false },
          { label: 'Report', border: false },
          { label: 'Report', border: false },
          { label: 'KeyImages', border: true },
          { label: 'COM ABD', border: false },
          { label: 'COR ABD', border: false },
          { label: 'COR ABD', border: false }
        ].map((thumb, idx) => (
          <div key={idx} className={`h-[44px] w-[44px] bg-black flex flex-col relative shrink-0 cursor-pointer transition-colors ${thumb.border ? 'border-[1.5px] border-[#D4A32A]' : 'border-[1px] border-white/20'}`}>
            <span className="absolute top-0.5 right-1 text-[6px] text-white/80">{idx + 1}</span>
            <div className="flex-1 flex items-center justify-center p-1">
              <img src="/mpr_original.png" className="w-full h-full object-cover rounded-[1px] opacity-70 blur-[0.5px]" />
              {thumb.label === 'Report' && <FileText size={12} className="absolute text-red-500 bg-white rounded-sm drop-shadow-md" />}
            </div>
            <div className="h-3 w-full bg-[#1A1A1A] text-[6px] font-bold text-[#D4A32A] flex items-center justify-center border-t border-white/10 uppercase tracking-wider">{thumb.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};



const sunVistaTestimonials = [

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



  const [testiIndex, setTestiIndex] = useState(0);

  const nextTesti = () => setTestiIndex((prev) => (prev + 1) % sunVistaTestimonials.length);

  const prevTesti = () => setTestiIndex((prev) => (prev - 1 + sunVistaTestimonials.length) % sunVistaTestimonials.length);

  return (

    <main className="font-['Outfit'] min-h-screen overflow-hidden bg-[#F8FAFC] dark:bg-[#070B13]" aria-label="SunVista Product Configuration and Demo Intake Portal">

      {/* ── HERO ── */}
      <section className="relative bg-[#030614] overflow-hidden pt-28 lg:pt-24 pb-8">
        {/* Deep Space Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(70,114,164,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          
          {/* Animated Stars */}
          {[...Array(50)].map((_, i) => {
            const top = `${(i * 17.3) % 100}%`;
            const left = `${(i * 23.7) % 100}%`;
            const duration = 2 + ((i * 1.3) % 3);
            const delay = (i * 0.75) % 2;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ top, left }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay
                }}
              />
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            
            {/* Left Column: Hero Text */}
            <div className="max-w-2xl text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white mb-6 transition-colors">
                  <ChevronLeft size={14} /> Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-1">
                  <Cloud size={20} className="text-white opacity-60" />
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Zero-Latency Teleradiology</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-4">
                  Sun<span className="text-[#4672A4]">Vista</span>
                </h1>
                <Link to="/schedule-demo?product=sunvista" className="inline-block mt-2 px-6 py-3 bg-[#4672A4] hover:bg-[#3b608c] text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Schedule a Demo
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Animated Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="hidden lg:flex lg:w-1/2 justify-end"
            >
              <div className="relative w-full max-w-[360px] perspective-[1000px] mt-2 group">
                  <motion.div
                  animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2], y: [-8, 8, -8] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full"
                >
                  {/* Floating Network Nodes */}
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="absolute -top-4 left-6 z-30 w-14 h-14 bg-[#0A101D]/80 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(70,114,164,0.15)] backdrop-blur-xl"
                  >
                    <Cloud size={24} className="text-blue-400" />
                  </motion.div>

                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute top-1/3 -right-4 z-30 w-14 h-14 bg-[#0A101D]/80 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(70,114,164,0.15)] backdrop-blur-xl"
                  >
                    <Database size={24} className="text-[#4672A4]" />
                  </motion.div>

                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute -bottom-4 left-10 z-30 w-14 h-14 bg-[#0A101D]/80 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(70,114,164,0.15)] backdrop-blur-xl"
                  >
                    <Globe size={24} className="text-blue-300" />
                  </motion.div>

                  {/* Main Background Medical Scan */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#4672A4]/30 shadow-[0_0_50px_rgba(70,114,164,0.3)] bg-[#0A101D] backdrop-blur-md p-1.5">
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 pointer-events-none" />
                    <img 
                      src="/cervical_spine.png" 
                      alt="SunVista PACS MRI Scan"
                      className="w-full h-auto object-cover opacity-90 rounded-xl"
                    />
                    {/* Scanning Line */}
                    <motion.div
                      animate={{ top: ['-10%', '110%', '-10%'] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 w-full h-[2px] bg-[#4672A4]/80 shadow-[0_0_15px_rgba(70,114,164,0.8)] z-20 pointer-events-none"
                    />
                  </div>

                  {/* Floating Report Cloud Animation */}
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -right-8 w-44 h-44 rounded-3xl border border-[#4672A4]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0A101D]/95 backdrop-blur-xl z-20 flex items-center justify-center overflow-hidden"
                  >
                    {/* Document Sliding Up */}
                    <motion.div 
                       animate={{ y: ["60%", "-30%", "-30%", "60%"], opacity: [0, 1, 1, 0] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.8, 1] }}
                       className="absolute bg-white rounded-lg shadow-[0_0_15px_rgba(0,210,255,0.3)] w-20 h-28 flex flex-col items-center justify-start p-3 z-0"
                    >
                        <FileText size={24} strokeWidth={2} className="text-[#2563EB] mb-3 mt-1" />
                        <div className="w-10 h-1 bg-blue-100 rounded-full mb-1.5"></div>
                        <div className="w-6 h-1 bg-slate-100 rounded-full"></div>
                    </motion.div>
                    
                    {/* Dark mask overlay to hide the bottom of the document so it looks like it's coming OUT of the box */}
                    <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[#0A101D] z-10" />

                    {/* Cyan Box/Upload Icon */}
                    <div className="relative z-20 w-full flex items-center justify-center translate-y-2">
                       <ArchiveRestore size={44} strokeWidth={1.5} className="text-[#00d2ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.5)]" />
                    </div>
                  </motion.div>
                  
                </motion.div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* --- 2. BOOKING FORM --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* --- DESCRIPTIVE SECTION (Matched with ImageVision) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 mt-4">
          
          {/* LEFT SIDE: TEXT PARAGRAPH */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white tracking-tight break-words hyphens-auto">
              Dynamic Teleradiology Platform
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base lg:text-lg font-medium leading-relaxed mb-8">
              Experience zero-latency, secure diagnostic imaging from anywhere. SunVista delivers instant access to complex imaging studies and patient records directly through your browser, empowering radiology teams with uncompromised speed, enterprise-grade security, and robust teleradiology capabilities.
            </p>
            
            {/* Feature Boxes */}
            <div className="flex flex-wrap gap-3 mt-4">
              {['HIPAA Compliant', 'Zero Downtime', '24/7 Support', 'Highly Affordable', 'Zero Data-Loss'].map((feature, idx) => (
                <div key={idx} className="px-4 py-2 bg-white dark:bg-[#0C121D] border border-slate-200 dark:border-white/10 rounded-xl shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4672A4]" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: SIMULATOR */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0A101D] dark:bg-slate-950/40 rounded-2xl border border-blue-500/20 dark:border-white/5 shadow-2xl p-6 md:p-8 relative overflow-hidden text-white group">
              {/* Blue Light Background Glow */}
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#4672A4] blur-[100px] rounded-full pointer-events-none"
              />

              {/* Workspace Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/5 pb-4 mb-6 gap-3 relative z-10">
                <div>
                  <p className="text-sm text-slate-300 font-medium">Advanced Cloud PACS & AI Diagnostic Engine (Simulated Workflow)</p>
                </div>
                <div className="shrink-0">
                  <a
                    href="https://imagevieweruat.suntrion.com/3cd0b210-5826-4c1a-be0d-ba42471a8299?lng=en"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-5 py-2 bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider rounded-full transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Try Demo
                  </a>
                </div>
              </div>

              <div className="relative w-full mx-auto rounded-xl overflow-hidden shadow-[0_0_50px_rgba(70,114,164,0.4)] border border-[#4672A4]/30 z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <MPRViewerReplica />
              </div>
            </div>
          </motion.div>
        </div>







        {/* --- 4. COMPREHENSIVE CAPABILITIES BREAKDOWN --- */}
        <CapabilitiesBreakdown />



        {/* --- 5. FIXED SINGLE CAROUSEL CARD TESTIMONIAL --- */}

        <section className="max-w-6xl mx-auto py-4 mb-8" aria-label="Global Radiology Testimonials Slider">

          <AnimatePresence mode="wait">

            <motion.article

              key={testiIndex}

              initial={{ opacity: 0, x: 20 }}

              animate={{ opacity: 1, x: 0 }}

              exit={{ opacity: 0, x: -20 }}

              transition={{ duration: 0.35 }}

              className="bg-white dark:bg-[#0C121D] p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.015)] flex flex-col relative min-h-[340px] justify-between"

            >

              {/* TOP HEADER ROW: Icon + Stars (Left) & Controls (Right) */}

              <div className="flex items-center justify-between w-full mb-10 relative">



                {/* Left Side: Icon Ring + 5 Star Rating System */}

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



                {/* Right Side: Navigation Controls Only */}

                <div className="flex gap-1.5 relative z-10 pr-2">

                  <button onClick={prevTesti} className="p-2 rounded-full border border-slate-100 dark:border-white/5 bg-white dark:bg-[#0C121D] shadow-sm text-slate-400 hover:text-[#4672A4] transition-all">

                    <ChevronLeft size={16} />

                  </button>

                  <button onClick={nextTesti} className="p-2 rounded-full border border-slate-100 dark:border-white/5 bg-white dark:bg-[#0C121D] shadow-sm text-slate-400 hover:text-[#4672A4] transition-all">

                    <ChevronRight size={16} />

                  </button>

                </div>

              </div>



              {/* MIDDLE ROW: Testimonial Quote String */}

              <p className="text-slate-600 dark:text-slate-300 font-medium text-lg md:text-xl leading-relaxed md:max-w-[85%] mb-12 italic">

                "{sunVistaTestimonials[testiIndex].text}"

              </p>



              {/* BOTTOM ROW */}

              <div className="flex items-end justify-between w-full">

                <div className="space-y-1.5">

                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0A1128] dark:text-white">

                    {sunVistaTestimonials[testiIndex].client}

                  </h4>

                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">

                    {sunVistaTestimonials[testiIndex].location}

                  </p>

                </div>



                {/* Progress Indicators */}

                <div className="flex gap-1.5 pb-2">

                  {sunVistaTestimonials.map((_, i) => (

                    <div

                      key={i}

                      className={`h-1.5 rounded-full transition-all duration-300 ${i === testiIndex ? 'w-8 bg-[#4672A4]' : 'w-2 bg-slate-200'}`}

                    />

                  ))}

                </div>

              </div>



            </motion.article>

          </AnimatePresence>

        </section>



      </div>

    </main>

  );

}

