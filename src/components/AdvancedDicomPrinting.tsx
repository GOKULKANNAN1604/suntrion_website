import { motion } from 'framer-motion';
import { Printer, Settings, Layers, Image as ImageIcon, LayoutTemplate } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function AdvancedDicomPrinting() {
  const brandBlue = '#4672A4';

  return (
    <motion.div variants={fadeInUp} className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10 mt-12 mb-12">
      <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2 text-center">Export & Presentation</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0C121D] p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl">
        
        {/* Left Side: Content & Features */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-white/5 shadow-sm flex items-center justify-center mb-6 border border-blue-100 dark:border-white/10">
              <Printer className="text-[#4672A4]" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-[900] text-[#0A1128] dark:text-white tracking-tighter uppercase mb-4 leading-tight">
              Advanced DICOM Film Printing
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium leading-relaxed">
              Design, customize, and execute high-resolution multi-page print layouts directly from your clinical datasets. Standardize your hospital's reporting presentation with uncompromising visual quality.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: <LayoutTemplate size={18} />, title: "Customized Layout Configuration", desc: "Design completely custom grid structures and variable-sized viewport arrangements." },
              { icon: <Layers size={18} />, title: "Multiple Page Print Planning", desc: "Sequence extensive case studies across multiple high-resolution pages flawlessly." },
              { icon: <Settings size={18} />, title: "Header & Footer Customization", desc: "Embed hospital logos, patient demographics, and automated timestamping." },
              { icon: <ImageIcon size={18} />, title: "True Image Preview", desc: "WYSIWYG print preview explicitly designed for CT and MRI modalities." }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-white/5">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-white/5 shrink-0" style={{ color: brandBlue }}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0A1128] dark:text-white uppercase tracking-wider mb-1">{feature.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Print Layout Animation */}
        <div className="lg:col-span-7 w-full h-[500px] lg:h-[600px] rounded-[2rem] bg-[#0A1128] border border-slate-200 dark:border-white/10 shadow-inner relative overflow-hidden flex items-center justify-center p-6">
          
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Central Container to hold animating pages */}
          <div className="relative w-full max-w-lg aspect-[3/4] perspective-1000">
            
            {/* Page 1 (Background/Next Page) */}
            <motion.div
              animate={{ 
                y: [20, 0, 0, -400, 20], 
                scale: [0.95, 1, 1, 0.9, 0.95],
                opacity: [0.5, 1, 1, 0, 0.5],
                rotateX: [5, 0, 0, 10, 5]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.6, 0.85, 1] }}
              className="absolute inset-0 bg-black rounded-xl border border-white/20 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="h-10 border-b border-white/20 px-4 flex items-center justify-between shrink-0 bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#4672A4]" />
                  <span className="text-[8px] font-black uppercase text-white tracking-widest">General Hospital</span>
                </div>
                <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Patient: J. Doe | DOB: 1980</span>
              </div>
              
              {/* CT Images Grid */}
              <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-1 p-1 bg-black">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-slate-900 rounded overflow-hidden relative border border-white/5">
                    <img src="/mpr_original.png" alt="CT Scan" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>
              
              {/* Footer */}
              <div className="h-8 border-t border-white/20 px-4 flex items-center justify-between shrink-0 bg-slate-900/50">
                <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Page 2 of 4</span>
                <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Generated by ImageVision</span>
              </div>
            </motion.div>

            {/* Page 2 (Foreground/Current Page) */}
            <motion.div
              animate={{ 
                y: [400, 20, 20, 0, 400], 
                scale: [0.9, 0.95, 0.95, 1, 0.9],
                opacity: [0, 0.5, 0.5, 1, 0],
                rotateX: [10, 5, 5, 0, 10]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.6, 0.85, 1] }}
              className="absolute inset-0 bg-black rounded-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col z-10"
            >
              {/* Header */}
              <div className="h-10 border-b border-white/20 px-4 flex items-center justify-between shrink-0 bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#4672A4]" />
                  <span className="text-[8px] font-black uppercase text-white tracking-widest">General Hospital</span>
                </div>
                <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Patient: J. Doe | DOB: 1980</span>
              </div>
              
              {/* High-Res 3D VR Print Layout */}
              <div className="flex-1 p-2 bg-black flex flex-col gap-2">
                <div className="flex-1 rounded-lg overflow-hidden relative border border-white/10">
                  <img src="/ct_3dvr.png" alt="3D Volume Render" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-[6px] font-bold text-white tracking-widest uppercase">
                    3D Volumetric
                  </div>
                </div>
                <div className="h-1/3 grid grid-cols-3 gap-2">
                  <div className="bg-slate-900 rounded-lg overflow-hidden relative border border-white/10">
                     <img src="/mpr_lung.png" alt="Axial" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="bg-slate-900 rounded-lg overflow-hidden relative border border-white/10">
                     <img src="/brain_mpr.png" alt="Sagittal" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="bg-slate-900 rounded-lg overflow-hidden relative border border-white/10">
                     <img src="/mpr_original.png" alt="Coronal" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="h-8 border-t border-white/20 px-4 flex items-center justify-between shrink-0 bg-slate-900/50">
                <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Page 3 of 4</span>
                <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Generated by ImageVision</span>
              </div>
            </motion.div>

            {/* Print scanning laser effect overlay */}
            <motion.div
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20 pointer-events-none mix-blend-screen"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}
