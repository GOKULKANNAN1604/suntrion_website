import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  CheckCircle,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Setup scroll-linked parallax for the video background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.06]);

  // Lazy load video background after page mount to optimize FCP/LCP and SEO metrics
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc('/suntrion_intro_video.mp4');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay was prevented or video loading interrupted:", err);
      });
    }
  }, [videoSrc]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };



  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center font-['Outfit'] select-none py-20 bg-[#070B13]" 
      aria-label="Suntrion Group Corporate Showcase"
    >
      
      {/* Background Video & Fallback Poster (Lazy Loaded for SEO & Performance) */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[115%] -top-[7.5%] z-0 bg-[#070B13] overflow-hidden"
      >
        {/* Fallback Poster Image */}
        <img 
          src="/suntrion_wallpaper.png" 
          alt="Suntrion Showcase Fallback Backdrop" 
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 0 : 1 }}
        />

        {videoSrc && (
          <video 
            ref={videoRef}
            onLoadedData={() => setVideoLoaded(true)}
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms]"
            style={{ opacity: videoLoaded ? 0.82 : 0 }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        
        {/* Dark translucent overlay mask with radial gradient and backdrop blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B13]/40 via-black/30 to-[#070B13]/45 backdrop-blur-[0.5px] z-10" />
        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(7,11,19,0.10)_0%,rgba(7,11,19,0.55)_100%) z-10" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)] pointer-events-none z-10" />

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-20 w-full flex flex-col items-center justify-center text-center">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center space-y-8 max-w-4xl"
        >
          {/* Animated Badge Tag */}
          <motion.div variants={itemVariants} className="inline-flex">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-[#4672A4]/15 text-cyan-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-cyan-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Smart Medical & Industrial Solutions
            </span>
          </motion.div>

          {/* Headline Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-sm md:text-base lg:text-lg font-black uppercase tracking-[0.4em] text-slate-300">
              Welcome To
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-[1000] tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-sky-100 to-white font-sans animate-clinical-glow select-none">
              SUNTRION
            </h1>
            <p className="text-lg md:text-2xl font-bold uppercase tracking-widest text-slate-200 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-cyan-400 font-mono">
              Precision Hardware. Intelligent Software.
            </p>
          </motion.div>

          {/* Detailed Paragraph Description */}
          <motion.div variants={itemVariants}>
            <p className="text-slate-300 font-medium text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Developing next-generation diagnostic teleradiology platforms, 3D DICOM volume reconstruction, and clinical workspaces paired with world-class industrial instrumentation, process control valves, and turnkey medical gas pipelines.
            </p>
          </motion.div>

          {/* Key ISO & Spec Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[
              { text: "ISO 13485 Medical Cert", icon: <ShieldCheck size={12} /> },
              { text: "FDA-Compliant PACS", icon: <CheckCircle size={12} /> },
              { text: "Smart Flow Control", icon: <TrendingUp size={12} /> }
            ].map((tag, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-slate-200 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
              >
                <span className="text-cyan-400">{tag.icon}</span>
                {tag.text}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link 
              to="/book-demo" 
              className="px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-white transition-all shadow-[0_0_35px_rgba(70,114,164,0.35)] hover:shadow-[0_0_50px_rgba(70,114,164,0.55)] hover:-translate-y-0.5 bg-gradient-to-r from-[#4672A4] to-cyan-600 flex items-center gap-2 group cursor-pointer"
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
              className="px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
            >
              Explore Solutions
            </a>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
