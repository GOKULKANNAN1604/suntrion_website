import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="relative font-['Outfit'] overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-16" aria-label="About Suntrion Group">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-[1.10]"
        >
          <source src="/suntrion_intro_video.mp4" type="video/mp4" />
        </video>
        {/* Darker translucent overlay */}
        <div className="absolute inset-0 bg-[#070B13]/85 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-10 text-white"
        >
          <motion.div variants={itemVariants}>
            <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white mb-6 transition-colors">
              <ChevronLeft size={14} /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-[1000] tracking-tighter uppercase text-white">
              About Us
            </h1>
            <div className="h-1 w-24 bg-[#4672A4] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-300 font-medium text-justify md:text-center">
            <p>
              Suntrion Group is a multi-disciplinary technology pioneer delivering high-precision hardware instrumentation, industrial automation, and advanced medical imaging software.
            </p>
            <p>
              We bridge the gap between engineering excellence and digital innovation. From executing turnkey medical setups, pharmaceutical units, and certified diagnostic laboratories globally to managing full device lifecycles, Suntrion delivers superior precision. Supported by international alliances with Somas, Tomoe, Tecofi, and Fuji, our industrial infrastructure powers 80% of Indian paper mills.
            </p>
            <p>
              Beyond our engineering and industrial solutions, Suntrion is also at the forefront of healthcare technology. Our flagship software platforms include <strong className="text-white font-bold tracking-wide">SonoVista</strong>, a comprehensive obstetrics and ultrasound reporting system, <strong className="text-white font-bold tracking-wide">SunVista</strong>, a secure cloud PACS and web-native teleradiology solution, and <strong className="text-white font-bold tracking-wide">ImageVision</strong>, an advanced diagnostic workstation featuring standalone offline 3D DICOM viewing with high-fidelity volume rendering.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
