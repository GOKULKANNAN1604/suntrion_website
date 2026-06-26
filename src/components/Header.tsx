import { useState, useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, LogIn, ChevronDown, Menu, X, Home, ClipboardList, Code, Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';

const brandBlue = "#4672A4";

const instrumentalItems = [
  { name: 'Medical', href: '/solutions-catalog#imaging-systems' },
  { name: 'Industrial', href: '/solutions-catalog#industrial-valves' },
  { name: 'Analytical', href: '/solutions-catalog#analytical-solutions' },
];

const softwareItems = [
  { name: 'SunVista — Teleradiology', href: '/book-demo' },
  { name: 'ImageVision — DICOM Viewer', href: '/imagevision-demo' },
  { name: 'SonoVista — Ultrasound Reporting', href: '/sonovista' },
];

function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: { name: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        className="flex items-center gap-1 text-[13px] font-semibold text-slate-700 dark:text-slate-300 hover:text-[#4672A4] dark:hover:text-white transition-all py-2 group relative cursor-pointer"
      >
        {label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          style={{ color: brandBlue }}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all"
          style={{ backgroundColor: brandBlue }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={show}
            onMouseLeave={hide}
            className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#0C121D] rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 py-2 z-50 overflow-hidden"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-5 py-3.5 text-[12px] font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#4672A4] dark:hover:text-white transition-all"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: brandBlue }}
                />
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const LOGIN_URL = "https://teleradiology.suntrion.com/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [instrumentalOpen, setInstrumentalOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleScrollToFooter = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#070B13] h-20 lg:h-24 flex items-center border-b border-slate-100 dark:border-white/5 font-['Outfit'] shadow-sm"
      >
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* LOGO & HAMBURGER */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Hamburger Button on Mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 rounded-xl text-slate-600 hover:text-[#4672A4] hover:bg-slate-50 transition-colors focus:outline-none flex items-center justify-center w-10 h-10"
              aria-label="Open navigation menu"
            >
              <Menu size={22} style={{ color: brandBlue }} />
            </button>

            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Suntrion" className="h-11 lg:h-14 w-auto object-contain mix-blend-multiply dark:invert dark:hue-rotate-180 dark:mix-blend-screen transition-all duration-300" />
              <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
                <span className="text-base lg:text-lg font-black tracking-[0.35em] uppercase leading-none" style={{ color: brandBlue }}>SUNTRION</span>
                <span className="text-[7px] font-black tracking-[0.4em] uppercase" style={{ color: brandBlue }}>Smart Technology</span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV — dropdowns */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu label="Instrumentation Solutions" items={instrumentalItems} />
            <DropdownMenu label="Software Solutions" items={softwareItems} />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Mobile: Login icon */}
            <a href={LOGIN_URL} target="_blank" rel="noreferrer" className="lg:hidden p-2.5 rounded-xl border border-slate-100 bg-slate-50/50">
              <LogIn size={18} style={{ color: brandBlue }} />
            </a>

            {/* Desktop: SunVista Login */}
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-[#4672A4] text-[#4672A4] transition-all hover:bg-[#4672A4] hover:text-white shadow-sm"
            >
              SunVista Login <ExternalLink size={10} />
            </a>

            {/* Desktop: Contact Us */}
            <a
              href="#footer"
              onClick={handleScrollToFooter}
              className="hidden lg:flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:text-[#4672A4] transition-colors"
            >
              <Mail size={14} style={{ color: brandBlue }} /> Contact
            </a>

            {/* Mobile: Contact */}
            <a
              href="#footer"
              onClick={handleScrollToFooter}
              className="lg:hidden px-3 py-1.5 rounded-lg font-semibold text-xs border flex items-center gap-1.5 shadow-sm"
              style={{ borderColor: brandBlue, color: brandBlue }}
            >
              <Mail size={11} /> Contact
            </a>

            {/* Global Theme Switcher Action Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors flex items-center justify-center w-10 h-10"
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? <Sun size={18} style={{ color: brandBlue }} /> : <Moon size={18} style={{ color: brandBlue }} />}
            </button>

            {/* Desktop: Try Demo CTA */}
            <Link
              to="/book-demo"
              className="hidden lg:flex items-center px-5 py-2 rounded-lg font-semibold text-xs text-white transition-all hover:opacity-90 shadow-sm hover:shadow-md"
              style={{ backgroundColor: brandBlue }}
            >
              Try Demo
            </Link>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-[#0A1128]/50 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 left-0 z-[101] w-[290px] max-w-[85%] bg-white dark:bg-[#070B13] shadow-2xl flex flex-col lg:hidden border-r border-slate-100 dark:border-white/5 font-['Outfit']"
            >
              {/* Header inside drawer */}
              <div className="h-20 px-5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="Suntrion" className="h-10 w-auto object-contain mix-blend-multiply dark:invert dark:hue-rotate-180 dark:mix-blend-screen transition-all duration-300" />
                  <span className="text-sm font-black tracking-[0.25em] uppercase text-[#0A1128] dark:text-white">SUNTRION</span>
                </div>
                
                {/* Close Button inside drawer */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation list */}
              <div className="flex-grow overflow-y-auto px-4 py-6 space-y-6">
                <div className="space-y-1">
                  {/* Home Link */}
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] text-[#0A1128] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                  >
                    <Home size={16} style={{ color: brandBlue }} />
                    Home
                  </Link>

                  {/* Instrumental Accordion */}
                  <div>
                    <button
                      onClick={() => setInstrumentalOpen(!instrumentalOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] text-[#0A1128] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <ClipboardList size={16} style={{ color: brandBlue }} />
                        Instrumentation Solutions
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${instrumentalOpen ? 'rotate-180' : ''}`}
                        style={{ color: brandBlue }}
                      />
                    </button>
                    <AnimatePresence>
                      {instrumentalOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-11 pr-4 space-y-1"
                        >
                          {instrumentalItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0A1128]/80 dark:text-slate-300 hover:text-[#4672A4] dark:hover:text-white transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Software Accordion */}
                  <div>
                    <button
                      onClick={() => setSoftwareOpen(!softwareOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] text-[#0A1128] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <Code size={16} style={{ color: brandBlue }} />
                        Software Solutions
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${softwareOpen ? 'rotate-180' : ''}`}
                        style={{ color: brandBlue }}
                      />
                    </button>
                    <AnimatePresence>
                      {softwareOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-11 pr-4 space-y-1"
                        >
                          {softwareItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0A1128]/80 dark:text-slate-300 hover:text-[#4672A4] dark:hover:text-white transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact Us Link */}
                  <a
                    href="#footer"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleScrollToFooter(e);
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-[0.15em] text-[#0A1128] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                  >
                    <Mail size={16} style={{ color: brandBlue }} />
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Drawer Bottom CTAs */}
              <div className="p-4 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 space-y-2">
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] border-2 border-[#4672A4] text-[#4672A4] transition-all hover:bg-[#4672A4] hover:text-white dark:text-slate-300 dark:hover:text-white text-center"
                >
                  SunVista Login <ExternalLink size={10} />
                </a>

                <Link
                  to="/book-demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.15em] text-white transition-all hover:opacity-90 shadow-md hover:shadow-lg text-center"
                  style={{ backgroundColor: brandBlue }}
                >
                  Try Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
