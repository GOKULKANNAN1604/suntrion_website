import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ClipboardList, Cloud, Eye, Activity } from 'lucide-react';

const brandBlue = "#4672A4";

const navItems = [
  { name: 'Home',        href: '/',                 icon: Home },
  { name: 'Catalog',     href: '/solutions-catalog', icon: ClipboardList },
  { name: 'SunVista',   href: '/book-demo',          icon: Cloud },
  { name: 'ImageVision', href: '/imagevision-demo',  icon: Eye },
  { name: 'SonoVista',  href: '/sonovista',          icon: Activity },
];

export default function MobileDock() {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 w-full z-[200] font-['Outfit'] bg-white/95 dark:bg-[#070B13]/95 border-t border-slate-100 dark:border-white/5 shadow-[-4px_0_20px_rgba(0,0,0,0.06)] dark:shadow-[-4px_0_20px_rgba(0,0,0,0.4)] backdrop-blur-md transition-colors duration-300"
    >
      <div className="flex items-end justify-around px-1 pt-1 pb-1" style={{ height: 60 }}>
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className="relative flex flex-col items-center justify-center flex-1 h-full gap-0.5 select-none"
            >
              {/* Active pill background */}
              <AnimatePresence>
                {active && (
                  <motion.span
                    layoutId="dock-pill"
                    className="absolute inset-x-1 top-0.5 bottom-0.5 rounded-2xl bg-[#4672A4]/10 dark:bg-[#4672A4]/15"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                animate={{ scale: active ? 1.12 : 1, y: active ? -1 : 0 }}
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="relative z-10"
                style={{ color: active ? brandBlue : '#94a3b8' }}
              >
                <Icon
                  size={19}
                  strokeWidth={active ? 2.4 : 1.6}
                />
              </motion.div>

              {/* Label */}
              <span
                className="relative z-10 leading-none transition-colors duration-200 font-semibold"
                style={{
                  fontSize: 8.5,
                  letterSpacing: '0.03em',
                  color: active ? brandBlue : '#94a3b8',
                }}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Safe area spacer for modern mobile devices */}
      <div className="bg-white dark:bg-[#070B13] transition-colors duration-300" style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
    </nav>
  );
}
