import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const WHATSAPP_NUMBER_1 = "919597959894";
  const WHATSAPP_NUMBER_2 = "918148145563";
  const currentYear = new Date().getFullYear();

  const brandBlue = "#4672A4"; 
  const brandOrange = "#F59E0B"; 
  const pitchBlack = "#05070A"; 

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

  // Animation variants for columns
  const footerColumn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <footer 
      id="footer" /* Attached the ID matching your Header targeting setup */
      className="pt-20 md:pt-24 pb-12 text-white font-['Outfit'] border-t border-white/5 overflow-hidden" 
      style={{ backgroundColor: pitchBlack }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Top Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24"
        >
          
          {/* Solutions Column */}
          <motion.div variants={footerColumn} className="space-y-6 md:space-y-8">
            <h4 className="text-sm font-black tracking-[0.2em] uppercase" style={{ color: brandBlue }}>Solutions</h4>
            <ul className="space-y-4 md:space-y-5 text-slate-400 font-medium text-sm">
              <li className="hover:text-white transition-colors flex items-center gap-2 group">
                <Link to="/book-demo">SunVista Radiology</Link>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" style={{ color: brandOrange }} />
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2 group">
                <Link to="/imagevision-demo">ImageVision</Link>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" style={{ color: brandOrange }} />
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2 group">
                <Link to="/sonovista">SonoVista</Link>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" style={{ color: brandOrange }} />
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/solutions-catalog">Clinical Engineering</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/solutions-catalog">Industrial Automation</Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources & Contact Column */}
          <motion.div variants={footerColumn} className="space-y-6 md:space-y-8">
            <h4 className="text-sm font-black tracking-[0.2em] uppercase" style={{ color: brandBlue }}>Resources & Contact</h4>
            <ul className="space-y-5 text-slate-400 font-medium text-sm">
              <li className="text-slate-500 italic cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandOrange }} /> 
                24/7 Technical Helpdesk
              </li>

              {/* Software Division */}
              <li className="space-y-1.5">
                <span className="block text-[9px] font-black tracking-widest text-slate-500 uppercase">Software Suite Support</span>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={16} style={{ color: brandBlue }} /> 
                  <a href="mailto:customercare@suntrion.com" className="break-all">customercare@suntrion.com</a>
                </div>
              </li>

              {/* Instrumentation & Engineering Division */}
              <li className="space-y-2">
                <span className="block text-[9px] font-black tracking-widest text-slate-500 uppercase">Instrumentation & Engineering</span>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail size={16} style={{ color: brandBlue }} /> 
                    <a href="mailto:sales@suntrion.com" className="break-all">sales@suntrion.com</a>
                  </div>
                  <div className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail size={16} style={{ color: brandBlue }} /> 
                    <a href="mailto:info@suntrion.com" className="break-all">info@suntrion.com</a>
                  </div>
                </div>
              </li>

              {/* Central Direct Lines */}
              <li className="pt-2 border-t border-white/5 flex flex-col gap-2">
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={16} style={{ color: brandBlue }} /> 
                  <a href={getDynamicPhoneLink(WHATSAPP_NUMBER_1)} target="_top" rel="noopener noreferrer">
                    +{WHATSAPP_NUMBER_1}
                  </a>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={16} style={{ color: brandBlue }} /> 
                  <a href={getDynamicPhoneLink(WHATSAPP_NUMBER_2)} target="_top" rel="noopener noreferrer">
                    +{WHATSAPP_NUMBER_2}
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Locations Column */}
          <motion.div variants={footerColumn} className="space-y-6 md:space-y-8">
            <h4 className="text-sm font-black tracking-[0.2em] uppercase" style={{ color: brandBlue }}>Locations</h4>
            <div className="space-y-6">
              
              {/* India Head Office */}
              <div className="flex gap-4 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-2.5 bg-white/5 rounded-xl transition-colors h-fit mt-1">
                  <MapPin style={{ color: brandOrange }} size={16} />
                </motion.div>
                <div>
                  <h5 className="font-bold text-white text-sm uppercase tracking-tight italic">India (HQ)</h5>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-medium">
                    Suntrion Technosol Pvt Ltd,<br />Chennai India
                  </p>
                </div>
              </div>

              {/* UAE Hub */}
              <div className="flex gap-4 group">
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="p-2.5 bg-white/5 rounded-xl transition-colors h-fit mt-1">
                  <Globe style={{ color: brandOrange }} size={16} />
                </motion.div>
                <div>
                  <h5 className="font-bold text-white text-sm uppercase tracking-tight italic">UAE & GCC</h5>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-medium">
                    Suntrion Wholesale Trading LLC<br />Dubai UAE.
                  </p>
                </div>
              </div>

              {/* Africa Division */}
              <div className="flex gap-4 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-2.5 bg-white/5 rounded-xl transition-colors h-fit mt-1">
                  <Globe style={{ color: brandOrange }} size={16} />
                </motion.div>
                <div>
                  <h5 className="font-bold text-white text-sm uppercase tracking-tight italic">Africa</h5>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-medium">
                    Suntrion Healthcare Services Ltd,<br />Lusaka, Zambia.
                  </p>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed font-medium">
                    Sunsol Imaging Services Ltd,<br />Kitwe, Zambia.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" 
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          <motion.div whileHover={{ y: -3 }} className="group">
            <Link to="/" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
              <div className="flex flex-col">
                {/* Fixed branding text to corporate blue */}
                <span className="text-xl md:text-2xl font-[900] tracking-tighter uppercase leading-none transition-all group-hover:opacity-80" style={{ color: brandBlue }}>
                  SUNTRION GROUP
                </span>
                <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase mt-1" style={{ color: brandOrange }}>
                  Smart Technology
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <div className="text-slate-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-right">
              © {currentYear} Suntrion Group. <br className="sm:hidden" /> Trusted Partners. Global Impact.
            </div>
            <div className="flex gap-8 text-slate-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">
              <motion.a whileHover={{ color: "#fff" }} href="#" className="transition-colors">Privacy</motion.a>
              <motion.a whileHover={{ color: "#fff" }} href="#" className="transition-colors">Terms</motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}