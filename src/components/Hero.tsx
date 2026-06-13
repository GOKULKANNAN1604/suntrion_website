import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
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
    <section className="relative font-['Outfit'] overflow-hidden min-h-screen flex items-center justify-center" aria-label="Suntrion Group Corporate Introduction">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/suntrion_intro_video.mp4" type="video/mp4" />
        </video>
        {/* Translucent overlay */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center space-y-4"
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm md:text-base lg:text-lg font-black uppercase tracking-[0.4em] text-white/90 mb-2">
              Welcome To
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-[1000] tracking-tighter leading-none text-white drop-shadow-xl mb-4">
              SUNTRION
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-sm md:text-lg lg:text-2xl font-bold uppercase tracking-[0.2em] text-white/90 drop-shadow-md max-w-4xl mx-auto">
              Crafted for Precision. Coded for Intelligence. Delivering Reliability.
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8">
            <Link 
              to="/about-us" 
              className="group inline-flex items-center gap-2 text-sm md:text-base font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300"
            >
              Know more about us
              <span className="block transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}