import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  RotateCw, 
  Sun, 
  Search, 
  Activity, 
  Layers, 
  Sliders, 
  CheckCircle,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export default function Hero() {
  const brandBlue = "#4672A4";
  const [scanMode, setScanMode] = useState<'vr' | 'brain' | 'spine'>('vr');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [isInverted, setIsInverted] = useState<boolean>(false);
  const [isMeasuring, setIsMeasuring] = useState<boolean>(false);

  // Scan settings dictionary mapping modes to images and descriptions
  const scanData = {
    vr: {
      image: "/ct_3dvr.png",
      title: "3D CT Volume Render",
      modality: "CT Scanner",
      thickness: "0.625 mm",
      fps: "60 FPS"
    },
    brain: {
      image: "/brain_mpr.png",
      title: "Axial Brain MPR",
      modality: "MRI 3.0T",
      thickness: "1.0 mm",
      fps: "30 FPS"
    },
    spine: {
      image: "/whole_spine.png",
      title: "Whole Spine Stitch",
      modality: "Digital X-Ray",
      thickness: "Stitched View",
      fps: "Static View"
    }
  };

  const handleReset = () => {
    setZoomLevel(1);
    setBrightness(100);
    setContrast(100);
    setIsInverted(false);
    setIsMeasuring(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070B13] via-[#0D1527] to-[#070B13] min-h-screen flex items-center pt-24 pb-16 lg:py-0" aria-label="Suntrion Corporate Showcase">
      
      {/* Background glowing rings / grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4672A4]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: BRAND PROMISE */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            {/* Tag Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-[#4672A4]/10 text-cyan-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Smart Medical & Industrial Systems
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7.5xl font-black tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-[#7199c9]">
                SUNTRION
              </h1>
              <p className="text-xl md:text-2xl font-bold uppercase tracking-wider text-slate-300 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-cyan-400">
                Precision Crafted. Intellectually Coded.
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-400 font-medium text-sm md:text-base leading-relaxed max-w-xl">
                Developing next-generation diagnostic teleradiology platforms, 3D DICOM volume reconstruction, and structured clinical workspaces paired with world-class industrial instrumentation and turnkey engineering solutions.
              </p>
            </motion.div>

            {/* Micro Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
              {[
                { text: "ISO 13485 Medical Cert", icon: <ShieldCheck size={12} /> },
                { text: "FDA-Compliant PACS", icon: <CheckCircle size={12} /> },
                { text: "Smart Flow Control", icon: <TrendingUp size={12} /> }
              ].map((tag, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors cursor-default"
                >
                  <span className="text-cyan-400">{tag.icon}</span>
                  {tag.text}
                </div>
              ))}
            </motion.div>

            {/* Actions CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/book-demo" 
                className="px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white hover:opacity-95 transition-all shadow-[0_0_30px_rgba(70,114,164,0.35)] hover:shadow-[0_0_45px_rgba(70,114,164,0.55)] hover:-translate-y-0.5 bg-gradient-to-r from-[#4672A4] to-cyan-600 flex items-center gap-2 group"
              >
                <span>Schedule Demo</span>
                <Play size={10} className="fill-current transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="#solutions" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all hover:-translate-y-0.5 flex items-center justify-center"
              >
                Explore Solutions
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE CLINICAL WORKSPACE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            {/* Monitor Shell */}
            <div className="relative w-full max-w-[560px] bg-[#0A0F1D] border border-slate-800 rounded-2xl shadow-[0_0_60px_rgba(70,114,164,0.25)] overflow-hidden">
              
              {/* Top Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#070B13] border-b border-slate-900">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <Activity size={10} className="text-cyan-400 animate-pulse" />
                  ImageVision Workstation v4.2
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* Workstation Desktop Grid */}
              <div className="grid grid-cols-12 h-[340px] md:h-[400px]">
                
                {/* Modality Viewport (Left 9 columns) */}
                <div className="col-span-9 relative bg-black flex items-center justify-center overflow-hidden group">
                  
                  {/* Glowing mask/layer */}
                  <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.6)_100%) pointer-events-none z-10" />

                  {/* Active Laser Scan Line */}
                  <motion.div 
                    animate={{ top: ['-2%', '102%', '-2%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[1.5px] bg-cyan-400/90 shadow-[0_0_12px_rgba(34,211,238,0.9)] z-20 pointer-events-none"
                  />

                  {/* Simulated Image Box */}
                  <div 
                    className="relative w-full h-full flex items-center justify-center overflow-hidden transition-all duration-300"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      filter: `brightness(${brightness}%) contrast(${contrast}%) ${isInverted ? 'invert(1)' : 'invert(0)'}`
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={scanMode}
                        src={scanData[scanMode].image} 
                        alt={scanData[scanMode].title} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-[92%] max-h-[92%] object-contain select-none pointer-events-none"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Overlay Labels */}
                  <div className="absolute top-3 left-3 text-[10px] text-cyan-400 font-mono tracking-tight bg-slate-950/60 px-2 py-1 rounded backdrop-blur-sm z-10">
                    <div>{scanData[scanMode].title}</div>
                    <div className="text-slate-400 text-[8px] mt-0.5">{scanData[scanMode].modality}</div>
                  </div>

                  <div className="absolute bottom-3 left-3 text-[8px] text-slate-400 font-mono tracking-tight bg-slate-950/60 px-2 py-1 rounded backdrop-blur-sm z-10">
                    <div>Slice Thick: {scanData[scanMode].thickness}</div>
                    <div>FPS: {scanData[scanMode].fps}</div>
                  </div>

                  <div className="absolute top-3 right-3 text-[8px] text-slate-400 font-mono tracking-tight bg-slate-950/60 px-2 py-1 rounded backdrop-blur-sm z-10">
                    <div>Zoom: {zoomLevel.toFixed(1)}x</div>
                    <div>Level: {brightness}%</div>
                  </div>

                  {/* Distance Measurement Annotation */}
                  {isMeasuring && (
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <svg className="w-full h-full">
                        <line x1="120" y1="160" x2="260" y2="210" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
                        <circle cx="120" cy="160" r="4" fill="#f59e0b" />
                        <circle cx="260" cy="210" r="4" fill="#f59e0b" />
                        <text x="200" y="175" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">D: 4.82 cm</text>
                      </svg>
                    </div>
                  )}

                  {/* Clinical watermark overlay grid */}
                  <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:16px_16px]" />
                </div>

                {/* Control Panel (Right 3 columns) */}
                <div className="col-span-3 bg-[#070B13] border-l border-slate-900 px-3 py-4 flex flex-col justify-between font-mono">
                  
                  {/* Selection Tab Buttons */}
                  <div className="space-y-2">
                    <div className="text-[8px] uppercase tracking-wider text-slate-500 font-bold mb-1">Modes</div>
                    {(['vr', 'brain', 'spine'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setScanMode(mode)}
                        className={`w-full text-[9px] text-left py-2 px-2.5 rounded transition-all cursor-pointer ${
                          scanMode === mode 
                            ? 'bg-[#4672A4] text-white font-bold' 
                            : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {mode === 'vr' ? '3D Render' : mode === 'brain' ? 'Brain axial' : 'Spine stitch'}
                      </button>
                    ))}
                  </div>

                  {/* Sliders Area */}
                  <div className="space-y-4 my-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[7px] text-slate-400">
                        <span className="flex items-center gap-1"><Sun size={8} /> Level</span>
                        <span>{brightness}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="50" 
                        max="160" 
                        value={brightness}
                        onChange={(e) => setBrightness(Number(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#4672A4]"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[7px] text-slate-400">
                        <span className="flex items-center gap-1"><Search size={8} /> Zoom</span>
                        <span>{zoomLevel.toFixed(1)}x</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="2.5" 
                        step="0.1"
                        value={zoomLevel}
                        onChange={(e) => setZoomLevel(Number(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#4672A4]"
                      />
                    </div>
                  </div>

                  {/* Toggles and resets */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsInverted(!isInverted)}
                      className={`w-full flex items-center justify-between text-[8px] py-1.5 px-2 rounded cursor-pointer ${
                        isInverted ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <span>Invert view</span>
                      <Sliders size={8} />
                    </button>

                    <button
                      onClick={() => setIsMeasuring(!isMeasuring)}
                      className={`w-full flex items-center justify-between text-[8px] py-1.5 px-2 rounded cursor-pointer ${
                        isMeasuring ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <span>Measure tool</span>
                      <Layers size={8} />
                    </button>

                    <button
                      onClick={handleReset}
                      className="w-full flex items-center justify-center gap-1 text-[8px] py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded border border-white/5 transition-colors cursor-pointer"
                    >
                      <RotateCw size={8} />
                      Reset Workspace
                    </button>
                  </div>

                </div>

              </div>

              {/* Bottom Workstation Bar */}
              <div className="bg-[#070B13] border-t border-slate-900 px-4 py-2 flex items-center justify-between text-[8px] text-slate-500 font-mono">
                <span className="flex items-center gap-1"><Play size={8} className="text-emerald-500" /> Active Diagnostic session</span>
                <span>Latency: 12ms</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

