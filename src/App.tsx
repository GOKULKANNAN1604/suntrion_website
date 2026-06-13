import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions'; 
import GlobalReach from './components/GlobalReach';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ImageVisionDemo from './components/ImageVisionDemo';
import ProductsCatalog from './components/ProductsCatalog';
import SonoVista from './components/SonoVista';
import ScheduleDemo from './components/ScheduleDemo';
import AboutUs from './components/AboutUs';

function ScrollHandler() {
  const { hash, pathname } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
  
  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollHandler />
      
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#070B13] text-slate-900 dark:text-slate-100 font-['Outfit'] antialiased selection:bg-[#4672A4]/10 overflow-x-hidden transition-colors duration-300">
        
        <Header />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div 
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Hero />
                  <Solutions />
                  <GlobalReach />
                  <WhyChooseUs />
                  <Testimonials />
                </motion.div>
              } />

              <Route path="/book-demo" element={
                <motion.div 
                  key="book" 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }}
                >
                  <BookingPage />
                </motion.div>
              } />
              
              <Route path="/imagevision-demo" element={
                <motion.div 
                  key="iv-demo" 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ type: "spring", damping: 25, stiffness: 120 }}
                >
                  <ImageVisionDemo />
                </motion.div>
              } />
              
              <Route path="/solutions-catalog" element={
                <motion.div 
                  key="catalog" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductsCatalog />
                </motion.div>
              } />

              <Route path="/sonovista" element={
                <motion.div 
                  key="sonovista" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <SonoVista />
                </motion.div>
              } />

              <Route path="/schedule-demo" element={
                <motion.div 
                  key="schedule-demo" 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ScheduleDemo />
                </motion.div>
              } />

              <Route path="/about-us" element={
                <motion.div 
                  key="about-us" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <AboutUs />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        {pathname !== '/about-us' && <Footer />}
      </div>
    </>
  );
}