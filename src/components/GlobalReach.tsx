import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, TrendingUp, Compass, ShieldCheck, Check } from 'lucide-react';
import mapData from '../data/worldMapPaths.json';

interface Region {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  dotColor: string;
  lonLat: [number, number];
  geo: string;
  kpis: { label: string; value: string }[];
}

const regions: Region[] = [
  {
    title: "India",
    subtitle: "R&D & Manufacturing HQ",
    description: "Our primary manufacturing excellence and engineering center in Chennai, delivering domestic high-precision industrial systems and medical software modules.",
    icon: <MapPin size={20} />,
    accent: "text-amber-500",
    dotColor: "#f59e0b",
    lonLat: [80.27, 13.08],
    geo: "13.08° N, 80.27° E",
    kpis: [
      { label: "R&D Engineers", value: "45+" },
      { label: "Installations", value: "600+" },
      { label: "State Networks", value: "18" }
    ]
  },
  {
    title: "UAE & GCC",
    subtitle: "Middle East Operations",
    description: "Strategic healthcare logistics and technical validation hub based in Dubai, powering specialized medical gas pipelines and clinical PACS deployments across the Gulf.",
    icon: <Globe size={20} />,
    accent: "text-[#4672A4]",
    dotColor: "#4672A4",
    lonLat: [55.27, 25.20],
    geo: "25.20° N, 55.27° E",
    kpis: [
      { label: "Hospitals", value: "30+" },
      { label: "Support Nodes", value: "2" },
      { label: "Uptime SLA", value: "99.9%" }
    ]
  },
  {
    title: "Africa",
    subtitle: "Sub-Saharan Clinical Support",
    description: "Providing direct localized field support, diagnostic maintenance, and radiological workstation systems from offices in Lusaka and Kitwe (Zambia).",
    icon: <Compass size={20} />,
    accent: "text-rose-500",
    dotColor: "#f43f5e",
    lonLat: [28.32, -15.38],
    geo: "15.38° S, 28.32° E",
    kpis: [
      { label: "Centers", value: "Zambia/DRC" },
      { label: "Response", value: "< 4 Hrs" },
      { label: "Clinicians", value: "150+" }
    ]
  },
  {
    title: "Global Expansion",
    subtitle: "Strategic Alliances",
    description: "Exporting medical software standards and valve packages globally through technical partnerships in Europe, ASEAN, and upcoming markets.",
    icon: <TrendingUp size={20} />,
    accent: "text-emerald-500",
    dotColor: "#10b981",
    lonLat: [-0.12, 51.50],
    geo: "51.50° N, 0.12° W",
    kpis: [
      { label: "Brands", value: "Somas/Tomoe" },
      { label: "Export Ports", value: "5" },
      { label: "Clearance", value: "CE Ready" }
    ]
  }
];

const connections: [number, number][] = [[0, 1], [0, 2], [1, 2], [0, 3], [1, 3]];

const W = 760;
const H = 420;

export default function GlobalReach() {
  const brandBlue = "#4672A4";
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeRegion = regions[activeIndex];

  return (
    <section id="global" className="py-24 bg-white dark:bg-[#070B13] font-['Outfit'] scroll-mt-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4672A4]/10 border border-[#4672A4]/25 mb-6">
            <Globe size={14} style={{ color: brandBlue }} />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: brandBlue }}>Worldwide Distribution Network</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight uppercase leading-none text-slate-900 dark:text-white">
            Built in India. <span className="text-[#4672A4]">Serving the World.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Scalable engineering standards deployed across three continents with dedicated local logistics support and regulatory clearances.
          </p>
        </div>

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Selector Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Select Operations Territory</div>
            <div className="flex flex-col gap-3">
              {regions.map((region, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? 'bg-slate-50 dark:bg-[#0C121D]/75 border-slate-300 dark:border-white/15 shadow-md shadow-blue-500/5'
                        : 'bg-white dark:bg-[#070B13]/30 border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: region.dotColor }} />
                    )}
                    <div
                      className="p-2.5 rounded-xl border transition-all"
                      style={{
                        backgroundColor: isActive ? 'rgba(70,114,164,0.1)' : 'transparent',
                        borderColor: isActive ? 'rgba(70,114,164,0.15)' : 'rgba(255,255,255,0.05)',
                        color: isActive ? '#4672A4' : '#94a3b8'
                      }}
                    >
                      {region.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">{region.title}</h4>
                        {isActive && <Check size={14} style={{ color: brandBlue }} />}
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-slate-400 block mt-0.5">{region.subtitle}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: World Map Panel */}
          <div className="lg:col-span-7">
            <div
              className="relative w-full bg-slate-50 dark:bg-[#0C121D]/60 border border-slate-200/50 dark:border-white/5 rounded-3xl overflow-hidden shadow-xl flex flex-col"
              style={{ aspectRatio: '16/9' }}
            >
              {/* KPI Glassmorphic Panel */}
              <div className="absolute top-4 left-4 z-20 w-[calc(100%-32px)] sm:max-w-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="p-4 rounded-2xl bg-white/93 dark:bg-[#070B13]/93 backdrop-blur-md border border-slate-200/60 dark:border-white/10 shadow-lg text-left relative"
                  >
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[8px] font-mono text-slate-400">
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      <span>PING: 24ms</span>
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${activeRegion.accent} bg-white/20 dark:bg-white/5 border border-white/5 px-2.5 py-0.5 rounded`}>
                      {activeRegion.title} Operations Hub
                    </span>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed mt-3 mb-4">
                      {activeRegion.description}
                    </p>
                    <div className="grid grid-cols-3 gap-3 border-t border-slate-200/60 dark:border-white/10 pt-4">
                      {activeRegion.kpis.map((kpi, kIdx) => (
                        <div key={kIdx} className="text-left space-y-1">
                          <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block leading-tight">{kpi.label}</span>
                          <span className={`text-sm font-black ${activeRegion.accent} tracking-tight block`}>{kpi.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* D3 World Map SVG */}
              <div className="flex-1 w-full h-full">
                <svg
                  viewBox={`0 0 ${W} ${H}`}
                  className="w-full h-full"
                  style={{ display: 'block' }}
                >
                  {/* Country paths */}
                  <g>
                    {mapData.paths.map((d, i) => (
                      <path
                        key={i}
                        d={d}
                        fill="rgba(70,114,164,0.10)"
                        stroke="rgba(70,114,164,0.28)"
                        strokeWidth="0.4"
                      />
                    ))}
                  </g>

                  {/* Connection lines */}
                  {connections.map(([fi, ti], i) => {
                    const [x1, y1] = mapData.projectedRegions[fi];
                    const [x2, y2] = mapData.projectedRegions[ti];
                    return (
                      <line
                        key={i}
                        x1={x1} y1={y1}
                        x2={x2} y2={y2}
                        stroke="rgba(70,114,164,0.40)"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                        strokeLinecap="round"
                      />
                    );
                  })}

                  {/* Location markers */}
                  {regions.map((region, idx) => {
                    const isActive = idx === activeIndex;
                    const [cx, cy] = mapData.projectedRegions[idx];
                    return (
                      <g key={idx} onClick={() => setActiveIndex(idx)} style={{ cursor: 'pointer' }}>
                        {/* Pulse ring */}
                        {isActive && (
                          <motion.circle
                            cx={cx} cy={cy} r={14}
                            fill="none"
                            stroke={region.dotColor}
                            strokeWidth="1"
                            animate={{ scale: [0.6, 2.2, 0.6], opacity: [0.8, 0.0, 0.8] }}
                            transition={{ duration: 2.2, repeat: Infinity }}
                          />
                        )}
                        {/* Halo */}
                        <circle
                          cx={cx} cy={cy}
                          r={isActive ? 9 : 5}
                          fill={region.dotColor}
                          fillOpacity={isActive ? 0.22 : 0.10}
                          stroke={region.dotColor}
                          strokeWidth="1.2"
                          strokeOpacity={isActive ? 0.60 : 0.25}
                        />
                        {/* Core dot */}
                        <circle
                          cx={cx} cy={cy}
                          r={isActive ? 5 : 3}
                          fill={region.dotColor}
                          filter={isActive ? `drop-shadow(0 0 4px ${region.dotColor})` : undefined}
                        />
                        {/* Label above */}
                        <text
                          x={cx} y={cy - 14}
                          textAnchor="middle"
                          fontSize="7"
                          fontWeight="700"
                          fontFamily="Outfit, sans-serif"
                          fill={isActive ? region.dotColor : '#94a3b8'}
                        >
                          {region.title}
                        </text>
                        {/* Geo coord below */}
                        {isActive && (
                          <text
                            x={cx} y={cy + 18}
                            textAnchor="middle"
                            fontSize="5"
                            fontFamily="monospace"
                            fill="#94a3b8"
                          >
                            {region.geo}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Bottom telemetry bar */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-1.5 text-[8px] font-mono text-slate-400 border-t border-slate-200/50 dark:border-white/5 px-5 py-2.5 bg-white/70 dark:bg-[#0C121D]/70 backdrop-blur-sm">
                <span className="uppercase">Integrated Teleradiology Coordinate Nodes</span>
                <span className="ml-auto flex items-center gap-1 font-bold text-emerald-500 tracking-wider">
                  <ShieldCheck size={10} /> SECURE CRYPTO-TUNNEL ACTIVE
                </span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
