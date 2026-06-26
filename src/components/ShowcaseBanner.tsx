import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Cpu } from 'lucide-react';

export default function ShowcaseBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax translation and zoom mapping
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[380px] md:h-[480px] overflow-hidden flex items-center justify-start bg-slate-900 font-['Outfit'] select-none"
    >
      
      {/* Background Wallpaper Image with scroll scale/y parallax effect */}
      <motion.div 
        style={{ scale, y }}
        className="absolute inset-0 w-full h-[124%] -top-[12%]"
      >
        <img 
          src="/suntrion_wallpaper.png" 
          alt="Suntrion High-Tech Clinical Control & Industrial Pipeline Showcase Wallpaper" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Cinematic dark color grid overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070B13] via-[#070B13]/75 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070B13]/30 via-transparent to-transparent z-10" />

      {/* Grid Pattern overlay matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-8 relative z-20 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-5"
        >
          {/* Capsule Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4672A4]/25 border border-[#4672A4]/40 backdrop-blur-md">
            <Cpu size={12} className="text-blue-300 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-blue-200">
              Digital Intelligence & Industrial Flow Control
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase leading-tight">
            Pioneering Precision.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Engineered for Impact.
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 font-medium text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
            From zero-latency Cloud PACS diagnostic networks to Somas and Tomoe high-pressure process control pipelines. Certified under ISO 13485 standards for clinical accuracy and industrial durability.
          </p>

          {/* Core ISO highlight */}
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-cyan-300 pt-2">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>ISO 13485 Certified Medical Devices & Industrial Assemblies</span>
          </div>

        </motion.div>
      </div>

    </section>
  );
}

