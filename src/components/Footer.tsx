import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ArrowUpRight, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const WHATSAPP_NUMBER_1 = "919597959894";
  const WHATSAPP_NUMBER_2 = "918148145563";
  const currentYear = new Date().getFullYear();

  const brandBlue = "#4672A4";
  const brandOrange = "#F59E0B";

  // Dynamic environment targeting detection for phone link
  const getDynamicPhoneLink = (phone: string) => {
    if (typeof window !== "undefined" && navigator) {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      if (isMobileDevice) {
        return `tel:+${phone}`;
      }
    }
    return `https://web.whatsapp.com/send?phone=${phone}&text=Hi%20Suntrion,%20I'd%20like%20to%20get%20in%20touch%20regarding%20your%20solutions.`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants for sections
  const itemVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <footer
      id="footer"
      className="relative pt-24 pb-12 text-white font-['Outfit'] border-t border-white/5 overflow-hidden bg-gradient-to-b from-[#070B13] via-[#05070D] to-[#020306]"
    >
      {/* Decorative Radial Lighting */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">

        {/* Main Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20"
        >

          {/* Column 1: Brand Info & Live Helpdesk Status Dashboard */}
          <motion.div variants={itemVariant} className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <Link to="/" className="inline-block group">
                <div className="flex flex-col">
                  <span className="text-2xl font-[900] tracking-tighter uppercase leading-none transition-all group-hover:opacity-80" style={{ color: brandBlue }}>
                    SUNTRION GROUP
                  </span>
                  <span className="text-[9px] font-black tracking-[0.4em] uppercase mt-1.5" style={{ color: brandOrange }}>
                    Smart Technology
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Leading provider of medical and industrial solutions. Delivering end-to-end turnkey engineering and software projects worldwide.
              </p>
            </div>

            {/* Premium Helpdesk Status Widget */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden backdrop-blur-md group hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 mt-0.5">
                  <ShieldCheck size={20} className="animate-pulse" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-200">24/7 Technical Helpdesk</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Continuous monitoring, remote clinical diagnostic support, and priority dispatch services.
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    <span>Status: <span className="text-emerald-400">Online</span></span>
                    <span>•</span>
                    <span>Response Time: <span className="text-blue-400">&lt;15m</span></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariant} className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-black tracking-[0.2em] uppercase" style={{ color: brandBlue }}>Contact Us</h4>
            <div className="space-y-5">
              {/* Software Suite Support */}
              <div className="space-y-2">
                <span className="block text-[9px] font-black tracking-widest text-slate-500 uppercase">Software Suite Support</span>
                <a
                  href="mailto:customercare@suntrion.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm w-fit"
                >
                  <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                    <Mail size={14} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </span>
                  <span className="break-all font-medium">customercare@suntrion.com</span>
                </a>
              </div>

              {/* Instrumentation & Engineering */}
              <div className="space-y-2">
                <span className="block text-[9px] font-black tracking-widest text-slate-500 uppercase">Instrumentation & Engineering</span>
                <div className="space-y-2.5">
                  <a
                    href="mailto:sales@suntrion.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm w-fit"
                  >
                    <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                      <Mail size={14} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </span>
                    <span className="break-all font-medium">sales@suntrion.com</span>
                  </a>
                  <a
                    href="mailto:info@suntrion.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm w-fit"
                  >
                    <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                      <Mail size={14} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </span>
                    <span className="break-all font-medium">info@suntrion.com</span>
                  </a>
                </div>
              </div>

              {/* Central Direct Lines */}
              <div className="pt-3 border-t border-white/5 space-y-2.5">
                <span className="block text-[9px] font-black tracking-widest text-slate-500 uppercase">Direct Call & WhatsApp</span>
                <div className="space-y-2">
                  {[WHATSAPP_NUMBER_1, WHATSAPP_NUMBER_2].map((num, idx) => (
                    <a
                      key={idx}
                      href={getDynamicPhoneLink(num)}
                      target="_top"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm w-fit"
                    >
                      <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-amber-500/10 transition-colors">
                        <Phone size={14} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
                      </span>
                      <span className="font-semibold text-slate-200">+{num}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          {/* Column 2: Solutions Navigation */}
          <motion.div variants={itemVariant} className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-black tracking-[0.2em] uppercase" style={{ color: brandBlue }}>Solutions</h4>
            <ul className="space-y-3.5 text-slate-400 font-medium text-sm">
              {[
                { label: "SunVista Radiology", path: "/book-demo", hasArrow: true },
                { label: "ImageVision", path: "/imagevision-demo", hasArrow: true },
                { label: "SonoVista", path: "/sonovista", hasArrow: true },
                { label: "Clinical Engineering", path: "/solutions-catalog" },
                { label: "Industrial Automation", path: "/solutions-catalog" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-all flex items-center gap-1.5 group w-fit"
                  >
                    <span>{link.label}</span>
                    {link.hasArrow && (
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:translate-y-0 transition-all"
                        style={{ color: brandOrange }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact & Channels */}


          {/* Column 4: Locations */}
          <motion.div variants={itemVariant} className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-black tracking-[0.2em] uppercase" style={{ color: brandBlue }}>Locations</h4>
            <div className="space-y-4">

              {/* India HQ */}
              <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all group">
                <div className="flex gap-3">
                  <MapPin style={{ color: brandOrange }} size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider">India (HQ)</h5>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed font-medium">
                      Suntrion Technosol Pvt Ltd,<br />Chennai India
                    </p>
                  </div>
                </div>
              </div>

              {/* UAE & GCC */}
              <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all group">
                <div className="flex gap-3">
                  <Globe style={{ color: brandOrange }} size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider">UAE & GCC</h5>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed font-medium">
                      Suntrion Wholesale Trading LLC<br />Dubai UAE.
                    </p>
                  </div>
                </div>
              </div>

              {/* Africa */}
              <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all group">
                <div className="flex gap-3">
                  <Globe style={{ color: brandOrange }} size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider">Africa</h5>
                    <div className="space-y-2 mt-1 text-slate-400 text-xs font-medium leading-relaxed">
                      <p>
                        Suntrion Healthcare Services Ltd,<br />Lusaka, Zambia.
                      </p>
                      <p className="pt-1.5 border-t border-white/5">
                        Sunsol Imaging Services Ltd,<br />Kitwe, Zambia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Singapore */}
              <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all group">
                <div className="flex gap-3">
                  <Globe style={{ color: brandOrange }} size={16} className="mt-0.5 shrink-0" />
                  <div className="space-y-2.5 flex-1">
                    <div>
                      <h5 className="font-bold text-white text-xs uppercase tracking-wider">Singapore</h5>
                      <div className="text-slate-400 text-xs mt-1 leading-relaxed font-medium">
                        <p className="font-bold text-slate-300">TSR PTE. LTD.</p>
                        <p>Blk 227 Yishun,</p>
                        <p>Street 21 #10-512,</p>
                        <p>Singapore - 760227.</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>

        {/* Divider & Back to Top */}
        <div className="relative py-8 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="relative z-10">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-[#090D1A] border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all cursor-pointer group animate-none"
              title="Back to Top"
            >
              <ArrowUp size={16} className="group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left leading-relaxed">
            © {currentYear} Suntrion Group. <br className="sm:hidden" /> Trusted Partners. Global Impact.
          </div>
          <div className="flex gap-8 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
