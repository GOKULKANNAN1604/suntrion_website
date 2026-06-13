import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Stethoscope, Image, BarChart3, Heart, Activity,
  Zap, FileText, ShieldCheck, Monitor, ChevronLeft
} from 'lucide-react';

const brandBlue = "#4672A4";

const features = [
  {
    icon: <Image size={22} />,
    title: "Integrated Image Management",
    desc: "Capture, annotate, and process diagnostic media using a checklist-driven method for rapid classification and retrieval."
  },
  {
    icon: <Zap size={22} />,
    title: "Operational Efficiency",
    desc: "Specifically architected to shorten task duration and minimize clerical mistakes, maximizing equipment availability for diagnostic focus."
  },
  {
    icon: <FileText size={22} />,
    title: "Automated Data Capture",
    desc: "Utilize built-in character recognition to instantly transcribe biometric findings into formalized documentation templates."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "In-Depth Diagnostic Analytics",
    desc: "Gain immediate access to critical screening metrics, including growth trends, biometry, SGA, and Doppler evaluations."
  },
  {
    icon: <Stethoscope size={22} />,
    title: "Advanced Clinical Protocols",
    desc: "Pre-loaded support for specialized skeletal, CVR, and various international diagnostic standards."
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Operational Security & Availability",
    desc: "Maintains strict privacy standards with persistent system uptime and around-the-clock technical assistance."
  }
];

export default function SonoVista() {

  const [metrics, setMetrics] = useState({
    fhr: 142,
    bpd: 84.2,
    fl: 62.1,
    hc: 301.4
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setInterval(() => {
      setMetrics(() => ({
        fhr: Math.floor(138 + Math.random() * 8),
        bpd: parseFloat((83.9 + Math.random() * 0.6).toFixed(1)),
        fl: parseFloat((61.8 + Math.random() * 0.6).toFixed(1)),
        hc: parseFloat((300.5 + Math.random() * 1.5).toFixed(1))
      }));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070B13] font-['Outfit']">

      {/* ── HERO ── */}
      <section className="relative bg-[#030614] overflow-hidden pt-28 lg:pt-24 pb-8">
        {/* Deep Space Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(70,114,164,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          
          {/* Animated Stars */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            
            {/* Left Column: Hero Text */}
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white mb-6 transition-colors">
                  <ChevronLeft size={14} /> Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-1">
                  <Monitor size={20} className="text-white opacity-60" />
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">High Fidelity Ultrasound Workspace</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-4">
                  Sono<span className="text-[#4672A4]">Vista</span>
                </h1>
                <Link to="/schedule-demo?product=sonovista" className="inline-block mt-2 px-6 py-3 bg-[#4672A4] hover:bg-[#3b608c] text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Schedule a Demo
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Animated Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 flex justify-end"
            >
              <div className="relative w-full max-w-[360px] perspective-[1000px] mt-2">
                <motion.div
                  animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img 
                    src="/sonovista-hero.png" 
                    alt="SonoVista Interface Visualization"
                    className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(70,114,164,0.4)] opacity-95 filter brightness-110 contrast-105"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS SONOVISTA ── */}
      <section className="pt-10 pb-24 bg-white dark:bg-[#070B13] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Descriptive info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-[900] text-[#0A1128] dark:text-white tracking-tighter uppercase leading-tight mb-6">
                INTELLIGENT ULTRASOUND WORKSPACE
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base lg:text-lg font-medium leading-relaxed">
                Elevate maternal fetal medicine with next-generation reporting.<br/>
                SonoVista eliminates transcription errors and frees up machine<br/>
                time by seamlessly integrating with modern DICOM modalities.<br/>
                Powered by built-in OCR, it extracts and populates critical<br/>
                diagnostic data instantly, allowing practitioners to finalize<br/>
                high-precision clinical reports in minutes.
              </p>

              {/* Feature Boxes */}
              <div className="flex flex-wrap gap-3 mt-6">
                {['HIPAA Compliant', 'Zero Downtime', '24/7 Support', 'Highly Affordable', 'Zero Data-Loss'].map((feature, idx) => (
                  <div key={idx} className="px-4 py-2 bg-white dark:bg-[#0C121D] border border-slate-200 dark:border-white/10 rounded-xl shadow-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4672A4]" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: High-tech Ultrasound Simulator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative flex justify-center"
            >
              {/* Glassmorphic Bezel Frame */}
              <div className="w-full max-w-[500px] bg-slate-900 dark:bg-slate-950/40 rounded-[36px] border border-slate-800 dark:border-white/5 shadow-2xl p-5 relative overflow-hidden">
                
                {/* Console header */}
                <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4672A4] animate-ping" />
                    <span className="text-[9px] font-mono text-slate-400 tracking-wider">MODALITY: ULTRASOUND_C5</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-1 bg-[#4672A4] rounded-sm" />
                    <span className="text-[8px] font-mono text-[#4672A4] font-bold">LIVE FEED</span>
                  </div>
                </div>

                {/* Viewport Screen */}
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3] border border-white/10 flex items-center justify-center">
                  <img 
                    src="/sonovista_dashboard.png" 
                    alt="SonoVista Live Ultrasound Workspace View"
                    className="w-full h-full object-cover opacity-85"
                  />

                  {/* Horizontal Laser Scanning Line */}
                  <motion.div 
                    animate={{ y: ["0%", "350%", "0%"] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-0.5 bg-cyan-400/80 shadow-[0_0_12px_#22d3ee] pointer-events-none"
                    style={{ top: 0 }}
                  />

                  {/* Doppler Overlay Indicator (Top Left) */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 border border-white/10 px-2 py-1 rounded-lg">
                    <Heart size={12} className="text-red-500 animate-pulse" />
                    <span className="text-[8px] font-mono text-white tracking-widest uppercase">Doppler Stream</span>
                  </div>

                  {/* Focal grid lines overlay */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
                </div>

                {/* Live Biometric Telemetry HUD Panel */}
                <div className="mt-4 bg-slate-950/80 border border-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Activity size={12} style={{ color: brandBlue }} /> Auto-Populated Biometrics
                    </span>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">SYNC_OK</span>
                  </div>

                  {/* Grid of changing telemetry readouts */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex justify-between items-center border-r border-white/5 pr-2">
                      <span className="text-[10px] font-medium text-slate-400">Fetal Heart Rate (FHR)</span>
                      <span className="text-xs font-mono font-bold text-white flex items-center gap-1">
                        <span className="text-red-500 animate-ping inline-block w-1.5 h-1.5 rounded-full mr-0.5" />
                        {metrics.fhr} <span className="text-[8px] text-slate-500">bpm</span>
                      </span>
                    </div>

                    <div className="flex justify-between items-center pl-2">
                      <span className="text-[10px] font-medium text-slate-400">Bi-parietal Diam (BPD)</span>
                      <span className="text-xs font-mono font-bold text-white">{metrics.bpd} <span className="text-[8px] text-slate-500">mm</span></span>
                    </div>

                    <div className="flex justify-between items-center border-r border-white/5 pr-2 pt-1 border-t border-white/5">
                      <span className="text-[10px] font-medium text-slate-400">Femur Length (FL)</span>
                      <span className="text-xs font-mono font-bold text-white">{metrics.fl} <span className="text-[8px] text-slate-500">mm</span></span>
                    </div>

                    <div className="flex justify-between items-center pl-2 pt-1 border-t border-white/5">
                      <span className="text-[10px] font-medium text-slate-400">Head Circum (HC)</span>
                      <span className="text-xs font-mono font-bold text-white">{metrics.hc} <span className="text-[8px] text-slate-500">mm</span></span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#0C121D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A1128] dark:text-white tracking-tight">Core Capabilities</h2>
            <p className="text-slate-400 text-sm mt-2 font-medium">Everything you need for an intelligent, high-efficiency reporting workflow.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-[#111827]/50 rounded-[28px] p-7 shadow-sm border border-slate-100 dark:border-white/5 flex flex-col gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: brandBlue }}
                >
                  {f.icon}
                </div>
                <h3 className="text-base font-black text-[#0A1128] dark:text-white">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
