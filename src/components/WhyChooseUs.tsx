import { motion } from 'framer-motion';
import { 
  Layers, 
  Award, 
  Zap, 
  Globe, 
  Headphones, 
  Lightbulb, 
  Smile, 
  Plane, 
  Calendar,
  Activity
} from 'lucide-react';

const reasons = [
  {
    title: "Complete Ecosystem Solutions",
    description: "An integrated lifecycle of software and engineering services covering healthcare pipelines, DICOM PACS imaging, and industrial fluid density sensors under a unified medical brand.",
    icon: <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    title: "20+ Years of Trusted Expertise",
    description: "Extensive background in setting up hospitals, radiology workstations, MRI/CT diagnostics, and industrial flow networks across government and private sectors.",
    icon: <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    title: "Fast Deployment & Low Latency",
    description: "Rapid integration schedules with minimal clinic disruption. Cloud infrastructure achieves real-time diagnostic stream access in under 20 milliseconds.",
    icon: <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    title: "Multi-Continental Compliance",
    description: "Operating with certified healthcare setups across India, UAE, and Sub-Saharan territories, validating medical devices under ISO 13485 structures.",
    icon: <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20"
  },
  {
    title: "24/7 Clinical Support SLA",
    description: "Continuous proactive support infrastructure, clinical calibration reviews, and hardware lifecycle support to guarantee zero hospital diagnostic downtime.",
    icon: <Headphones className="w-5 h-5 text-green-600 dark:text-green-400" />,
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    title: "Digital Intelligence Core",
    description: "Built-in 3D volume reconstruction engines, structural report calculators, and upcoming AI clinical analytics mapping patient records dynamically.",
    icon: <Lightbulb className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  }
];

const stats = [
  { label: "Happy Customers", value: "50+", desc: "Government & Private hospitals", pct: 90, icon: <Smile size={14} /> },
  { label: "Services Deployed", value: "100+", desc: "Device installations to gas grids", pct: 95, icon: <Plane size={14} /> },
  { label: "Years in Business", value: "12", desc: "Long-standing engineering trust", pct: 80, icon: <Calendar size={14} /> },
  { label: "Operating Countries", value: "6+", desc: "Active clinical setups", pct: 60, icon: <Globe size={14} /> }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50/50 dark:bg-[#0C121D]/60 font-['Outfit'] border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/5 mb-4">
            <Activity size={12} className="text-[#4672A4] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#4672A4]">Track Record</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 dark:text-white leading-none">
            Why Partners Choose Suntrion
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mt-4">
            Delivering precision engineering and high-fidelity teleradiology solutions with proven global standards.
          </p>
        </div>

        {/* --- METRIC SUMMARY RIBBON --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((st, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white dark:bg-[#0C121D]/60 p-6 rounded-2xl border border-slate-200/60 dark:border-white/5 flex flex-col items-start text-left gap-3 shadow-sm hover:shadow-md hover:border-[#4672A4]/35 transition-all duration-300"
            >
              <div className="text-cyan-500 dark:text-cyan-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-2">
                {st.icon}
                {st.label}
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{st.value}</div>
              <div className="text-slate-400 dark:text-slate-500 text-[10.5px] font-semibold uppercase tracking-wider leading-tight">{st.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* --- ASYMMETRIC BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Complete Ecosystem (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 bg-white dark:bg-[#0C121D]/60 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 flex flex-col justify-start text-left group hover:shadow-[0_20px_40px_rgba(70,114,164,0.04)] hover:border-[#4672A4]/40 transition-all duration-300 min-h-[190px]"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#4672A4] transition-colors">
                  {reasons[0].title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-xs md:text-sm">
                  {reasons[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: 20+ Years (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 bg-white dark:bg-[#0C121D]/60 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 flex flex-col justify-start text-left group hover:shadow-[0_20px_40px_rgba(70,114,164,0.04)] hover:border-amber-500/40 transition-all duration-300 min-h-[190px]"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-amber-500 transition-colors">
                  {reasons[1].title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-xs md:text-sm">
                  {reasons[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Fast Deployment & Latency (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 bg-white dark:bg-[#0C121D]/60 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 flex flex-col justify-start text-left group hover:shadow-[0_20px_40px_rgba(70,114,164,0.04)] hover:border-[#4672A4]/40 transition-all duration-300 min-h-[190px]"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#4672A4] transition-colors">
                  {reasons[2].title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-xs md:text-sm">
                  {reasons[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Multi-Continental Compliance (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 bg-white dark:bg-[#0C121D]/60 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 flex flex-col justify-start text-left group hover:shadow-[0_20px_40px_rgba(70,114,164,0.04)] hover:border-[#4672A4]/40 transition-all duration-300 min-h-[190px]"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#4672A4] transition-colors">
                  {reasons[3].title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-xs md:text-sm">
                  {reasons[3].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 5: 24/7 SLA Support (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 bg-white dark:bg-[#0C121D]/60 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 flex flex-col justify-start text-left group hover:shadow-[0_20px_40px_rgba(70,114,164,0.04)] hover:border-[#4672A4]/40 transition-all duration-300 min-h-[190px]"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Headphones className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#4672A4] transition-colors">
                  {reasons[4].title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-xs md:text-sm">
                  {reasons[4].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Digital Intelligence Core (Spans 3 columns - Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-1 md:col-span-3 bg-white dark:bg-[#0C121D]/60 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 flex flex-col justify-start text-left group hover:shadow-[0_20px_40px_rgba(70,114,164,0.04)] hover:border-[#4672A4]/40 transition-all duration-300 min-h-[140px]"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Lightbulb className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#4672A4] transition-colors">
                  {reasons[5].title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-xs md:text-sm">
                  {reasons[5].description}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
