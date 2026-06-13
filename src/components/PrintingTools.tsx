import { motion } from 'framer-motion';
import { LayoutGrid, Layers, FileText } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function PrintingTools() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 text-center border-t border-slate-200 dark:border-white/10 pt-16 mt-16">
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#4672A4] mb-12">
        ADVANCED DICOM FILM PRINTING
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

        {/* Card 1: Header & Footer Branding */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-slate-100 transition-transform hover:-translate-y-1 duration-300"
        >
          <div className="h-56 w-full relative bg-black flex flex-col justify-between overflow-hidden">
            <img src="/lumbar_spine.png" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            
            {/* Header Overlay */}
            <motion.div 
              className="relative z-20 bg-black/70 backdrop-blur-md border-b border-white/10 p-3 flex justify-between items-center text-white text-[9px] shadow-lg"
              initial={{ y: "-100%" }} 
              animate={{ y: ["-100%", "0%", "0%", "-100%"] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                 <div className="w-7 h-7 bg-[#4672A4] rounded flex items-center justify-center font-bold text-white text-[10px] shadow-inner">✚</div>
                 <div className="text-left">
                   <div className="font-bold text-[10px] tracking-wide text-cyan-50">GENERAL HOSPITAL</div>
                   <div className="text-white/60 text-[8px] uppercase tracking-wider">Dept of Radiology</div>
                 </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-cyan-50">Patient: DOE, JOHN</div>
                <div className="text-white/60 text-[8px]">ID: 109348 • 12 May 2026</div>
              </div>
            </motion.div>
            
            {/* Footer Overlay */}
            <motion.div 
              className="relative z-20 bg-black/70 backdrop-blur-md border-t border-white/10 p-3 flex justify-between items-end text-white text-[9px] shadow-[0_-10px_15px_rgba(0,0,0,0.3)]"
              initial={{ y: "100%" }} 
              animate={{ y: ["100%", "0%", "0%", "100%"] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
               <div className="text-left">
                 <div className="text-white/50 uppercase tracking-[0.2em] mb-0.5 text-[7px]">Approved By</div>
                 <motion.div 
                    className="font-[cursive] text-[16px] text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.4)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 >Dr. Sarah Jenkins</motion.div>
               </div>
               <div className="flex gap-1.5">
                 <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center border border-white/20 text-[6px] font-bold text-white/50 uppercase">Logo</div>
                 <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center border border-white/20 text-[6px] font-bold text-white/50 uppercase">Partner</div>
               </div>
            </motion.div>
          </div>
          <div className="px-8 pb-10 pt-6 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <FileText size={18} className="text-[#3b9bb8]" />
            </div>
            <h4 className="text-[#0A1128] font-black text-[13px] uppercase tracking-wider mb-4 text-center">Header & Footer Branding</h4>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
              <strong>Customize your header:</strong> Inject institutional branding and patient demographics.<br/><br/>
              <strong>Footer with name/logos:</strong> Add physician signatures and secondary hospital logos.
            </p>
          </div>
        </motion.div>
        
        {/* Card 2: Customized Layout */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-slate-100 transition-transform hover:-translate-y-1 duration-300 group"
        >
          <div className="h-56 w-full p-4 bg-[#0e1117] flex items-center justify-center overflow-hidden">
             <motion.div
               className="w-full h-full relative grid gap-1.5"
               animate={{
                  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(1, 1fr)"],
                  gridTemplateRows: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(1, 1fr)"]
               }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             >
                <motion.div className="bg-black rounded-lg border border-white/10 overflow-hidden relative shadow-lg">
                   <img src="/cervical_spine.png" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                </motion.div>
                <motion.div 
                   className="bg-black rounded-lg border border-white/10 overflow-hidden relative shadow-lg"
                   animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                   <img src="/lumbar_spine.png" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                </motion.div>
                <motion.div 
                   className="bg-black rounded-lg border border-white/10 overflow-hidden relative shadow-lg"
                   animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                   <img src="/brain_mpr.png" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                </motion.div>
                <motion.div 
                   className="bg-black rounded-lg border border-white/10 overflow-hidden relative shadow-lg"
                   animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                   <img src="/mpr_original.png" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                </motion.div>
             </motion.div>
          </div>
          <div className="px-8 pb-10 pt-6 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <LayoutGrid size={18} className="text-[#3b9bb8]" />
            </div>
            <h4 className="text-[#0A1128] font-black text-[13px] uppercase tracking-wider mb-4">Customized Layout</h4>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
              Design any grid combination effortlessly. Transition from full-page hero images to dense 4x4 diagnostic grids with a single click.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Multi-Page & High-Res Printing */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-slate-100 transition-transform hover:-translate-y-1 duration-300"
        >
          <div className="h-56 w-full relative overflow-hidden bg-[#06080b] flex items-center justify-between px-8">
             
             {/* Left: Multi-Page Queue */}
             <div 
               className="w-[60px] h-[250px] overflow-hidden relative flex-shrink-0"
               style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}
             >
                <motion.div 
                  className="flex flex-col gap-3 absolute top-0 w-full"
                  animate={{ y: [0, -92] }} // 92 = height of one item (80) + gap (12)
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                   {/* Items height = 80px */}
                   <div className="w-[60px] h-[80px] flex-shrink-0 bg-slate-800 border border-slate-600 rounded-md overflow-hidden opacity-60"><img src="/cervical_spine.png" className="w-full h-full object-cover" /></div>
                   <div className="w-[60px] h-[80px] flex-shrink-0 bg-slate-800 border border-slate-600 rounded-md overflow-hidden opacity-60"><img src="/lumbar_spine.png" className="w-full h-full object-cover" /></div>
                   <div className="w-[60px] h-[80px] flex-shrink-0 bg-slate-800 border border-slate-600 rounded-md overflow-hidden opacity-60"><img src="/mpr_original.png" className="w-full h-full object-cover" /></div>
                   <div className="w-[60px] h-[80px] flex-shrink-0 bg-slate-800 border border-slate-600 rounded-md overflow-hidden opacity-60"><img src="/cervical_spine.png" className="w-full h-full object-cover" /></div>
                </motion.div>
             </div>

             {/* Center: Processing connection */}
             <div className="flex-1 px-4 relative flex items-center justify-center">
                 <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden rounded-full">
                     <motion.div 
                        className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent shadow-[0_0_10px_#06b6d4]"
                        animate={{ left: ['-100%', '200%', '200%', '-100%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     />
                 </div>
                 <motion.div 
                   className="absolute bg-[#06b6d4]/10 text-[#06b6d4] text-[8px] font-bold px-2 py-1 rounded border border-[#06b6d4]/30 backdrop-blur-sm -mt-8 tracking-widest"
                   animate={{ opacity: [0, 1, 1, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 >
                   PROCESSING
                 </motion.div>
             </div>

             {/* Right: High-Res Output */}
             <div className="w-[120px] h-[120px] flex-shrink-0 bg-black border-[2px] border-[#06b6d4] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.3)] relative">
                <motion.img 
                  src="/ct_lung_3dvr.png" 
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.4, 1.4, 1], filter: ['blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(4px)'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-2 right-2 bg-black/80 text-[#06b6d4] text-[8px] font-black tracking-wider px-1.5 py-0.5 rounded border border-[#06b6d4]/50"
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  HIGH-RES
                </motion.div>
             </div>
          </div>
          <div className="px-8 pb-10 pt-6 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Layers size={18} className="text-[#3b9bb8]" />
            </div>
            <h4 className="text-[#0A1128] font-black text-[13px] uppercase tracking-wider mb-4 text-center">Multi-Page & High-Res Printing</h4>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
              <strong>Multiple page print planning:</strong> Queue vast multi-page clinical reports seamlessly.<br/><br/>
              <strong>High resolution printing:</strong> Lossless scaling algorithms ensure diagnostic clarity is perfectly preserved.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
