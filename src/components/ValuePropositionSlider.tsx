import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalReach from './GlobalReach';
import WhyChooseUs from './WhyChooseUs';

export default function ValuePropositionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesCount = 2;
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && currentIndex < slidesCount - 1) {
        e.preventDefault();
        setCurrentIndex(prev => prev + 1);
        isTransitioning.current = true;
        setTimeout(() => { isTransitioning.current = false; }, 1200);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex(prev => prev - 1);
        isTransitioning.current = true;
        setTimeout(() => { isTransitioning.current = false; }, 1200);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning.current) {
        if (
          (touchStartY - e.touches[0].clientY > 0 && currentIndex < slidesCount - 1) ||
          (touchStartY - e.touches[0].clientY < 0 && currentIndex > 0)
        ) {
           e.preventDefault();
        }
        return;
      }

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 30) {
        if (deltaY > 0 && currentIndex < slidesCount - 1) {
          e.preventDefault();
          setCurrentIndex(prev => prev + 1);
          isTransitioning.current = true;
          setTimeout(() => { isTransitioning.current = false; }, 1200);
        } else if (deltaY < 0 && currentIndex > 0) {
          e.preventDefault();
          setCurrentIndex(prev => prev - 1);
          isTransitioning.current = true;
          setTimeout(() => { isTransitioning.current = false; }, 1200);
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentIndex, slidesCount]);

  return (
    <div ref={containerRef} className="grid grid-cols-1 grid-rows-1 overflow-hidden relative group">
      <AnimatePresence>
        {currentIndex === 0 && (
          <motion.div
            key="global-reach"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, zIndex: 10 }}
            exit={{ opacity: 0, y: 50, zIndex: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="col-start-1 row-start-1 w-full"
          >
            <GlobalReach />
          </motion.div>
        )}
        
        {currentIndex === 1 && (
          <motion.div
            key="why-choose-us"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, zIndex: 10 }}
            exit={{ opacity: 0, y: 50, zIndex: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="col-start-1 row-start-1 w-full"
          >
            <WhyChooseUs />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vertical Pagination Dots */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {Array.from({ length: slidesCount }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
              currentIndex === idx 
                ? 'bg-[#4672A4] border-[#4672A4] scale-110' 
                : 'bg-transparent border-slate-300 dark:border-slate-600 hover:border-[#4672A4]'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
