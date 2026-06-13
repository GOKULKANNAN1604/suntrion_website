import { motion } from 'framer-motion';
import { Scissors, Layers, Sliders, ZoomIn } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

// Standard OS Cursor SVG
const CursorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))' }}>
    <path d="M5.5 3.5L16.5 14.5H11.5L8.5 20.5L5.5 3.5Z" fill="white" stroke="black" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

export default function ImagingTools() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24 mb-24 text-center">
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#4672A4] mb-12">
        IMAGING TOOLS
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Image Manipulation */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-slate-100 transition-transform hover:-translate-y-1 duration-300"
        >
          <div className="p-4 h-56">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#0e1117] flex items-center justify-center">
              
              {/* Slice Scanning effect */}
              <motion.div 
                animate={{ scale: [1.05, 1.07, 1.05], filter: ['contrast(1)', 'contrast(1.1)', 'contrast(1)'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img src="/lumbar_spine.png" alt="Lumbar Spine MRI" className="h-full w-auto object-cover opacity-90 mx-auto" />
              </motion.div>
              
              {/* Measurement Tool Animation */}
              <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                {/* Positioned directly over a lumbar vertebra */}
                <div className="relative w-[50px] h-[2px] ml-12 mt-16">
                  {/* Left Circle (static base) */}
                  <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full border-[2px] border-[#eab308]" />
                  
                  {/* The expanding line */}
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 bg-[#eab308]"
                    initial={{ width: '0%' }}
                    animate={{ width: ['0%', '100%', '100%', '0%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Right Circle (moves with the line) */}
                    <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full border-[2px] border-[#eab308]" />
                  </motion.div>

                  {/* Text Tooltip (fades in) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: [0, 1, 1, 0], y: [5, 0, 0, 5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-24px] left-1/2 -translate-x-1/2 bg-black/90 border border-[#eab308] px-1.5 py-0.5 rounded text-[#eab308] text-[9px] font-bold tracking-wide whitespace-nowrap"
                  >
                    42.5 mm
                  </motion.div>
                </div>

                {/* Auto-detected Vertebra Labels L2, L3, L4, L5 */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-[34px] -mt-16 mr-12"
                >
                  <div className="text-[10px] text-yellow-400/90 font-bold ml-12 drop-shadow-md">L2</div>
                  <div className="text-[10px] text-yellow-400/90 font-bold ml-12 drop-shadow-md">L3</div>
                  <div className="text-[10px] text-yellow-400/90 font-bold ml-12 drop-shadow-md">L4</div>
                  <div className="text-[10px] text-yellow-400/90 font-bold ml-12 drop-shadow-md">L5</div>
                </motion.div>

              </div>

              {/* Overlay HTML Buttons on the right edge */}
              <div className="absolute right-3 top-4 flex flex-col gap-2 z-20">
                <div className="w-[34px] h-[34px] bg-black/80 rounded-lg border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <ZoomIn size={16} className="text-white" />
                </div>
                <div className="w-[34px] h-[34px] bg-[#0891b2] rounded-lg border-[1.5px] border-[#22d3ee] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                  <Sliders size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 pb-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Sliders size={18} className="text-[#4672A4]" />
            </div>
            <h4 className="text-[#0A1128] font-black text-[13px] uppercase tracking-wider mb-4">Image Manipulation</h4>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
              Comprehensive viewing control including PAN, Contrast, Zoom, and Inversion, alongside precise measurement tools: Line, Arrow, Angle Volume, and HU readouts.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Anatomical Stitching Module */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-slate-100 transition-transform hover:-translate-y-1 duration-300 relative group"
        >
          <div className="p-4 h-56">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#121212]">
              
              {/* Base background (Left panels only) */}
              <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 33% 0, 33% 100%, 0 100%)' }}>
                <img src="/stitching_spine.png" alt="MPR Base" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              
              {/* Animated Top-Right panel (sliding down) */}
              <motion.div
                className="absolute inset-0"
                style={{ clipPath: 'inset(0 0 50% 33%)' }}
                animate={{ y: ['-8%', '0%', '0%', '-8%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="/stitching_spine.png" alt="MPR Top Right Sliding" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>

              {/* Animated Bottom-Right panel (sliding up) */}
              <motion.div
                className="absolute inset-0"
                style={{ clipPath: 'inset(50% 0 0 33%)' }}
                animate={{ y: ['8%', '0%', '0%', '8%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="/stitching_spine.png" alt="MPR Bottom Right Sliding" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>



            </div>
          </div>
          <div className="px-8 pb-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Scissors size={18} className="text-[#4672A4]" />
            </div>
            <h4 className="text-[#0A1128] font-black text-[13px] uppercase tracking-wider mb-4">Anatomical Stitching Module</h4>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
              Merge separate dataset captures (such as Cervical and Lumbar spine structures) into a single, seamless high-resolution medical map for streamlined systemic reviews.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Visualization Tools (Advanced 3D Tools) */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-slate-100 transition-transform hover:-translate-y-1 duration-300"
        >
          <div className="p-4 h-56">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-black flex items-center justify-center">
              <img src="/ct_lung_3dvr.png" alt="Lung 3DVR" className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Animated ROI Loop and Mouse Pointer */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Drawing a closed loop in the center-left lung */}
                  <motion.path 
                    d="M 35 55 Q 30 35, 50 35 T 60 50 Q 55 65, 35 55 Z"
                    strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0, stroke: "#fbbf24" }}
                    animate={{ 
                      pathLength: [0, 1, 1, 1, 0],
                      stroke: ["#fbbf24", "#fbbf24", "#22c55e", "#22c55e", "#fbbf24"],
                      fill: ["rgba(34, 197, 94, 0)", "rgba(34, 197, 94, 0)", "rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0)"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>

                {/* The 134.20 ml Green Label */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[35%] left-[55%] bg-[#14532d]/90 border border-[#22c55e] px-2 py-0.5 rounded shadow-[0_0_10px_rgba(34,197,94,0.4)] text-[#4ade80] text-[10px] font-bold tracking-wide whitespace-nowrap"
                >
                  134.20 ml
                </motion.div>

                {/* Fake Cursor tracking the path */}
                <motion.div
                  animate={{ 
                    x: ['35%', '40%', '50%', '60%', '55%', '35%', '35%'], 
                    y: ['55%', '35%', '35%', '50%', '65%', '55%', '55%'],
                    opacity: [1, 1, 1, 1, 1, 0, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 z-20 pointer-events-none"
                >
                  <div className="-translate-x-[20%] -translate-y-[10%]"><CursorIcon /></div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="px-8 pb-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Layers size={18} className="text-[#4672A4]" />
            </div>
            <h4 className="text-[#0A1128] font-black text-[13px] uppercase tracking-wider mb-4">Advanced 3D Tools</h4>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
              3D Multiplanar reconstruction (MPR), Max Intensity Projection (MIP), volume rendering (VR), Scalpel, 3D Volume measurement.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
