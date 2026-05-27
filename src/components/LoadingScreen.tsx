import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="relative w-10 h-10">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: '1px solid #E5E5E5',
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: '1px solid transparent',
                borderTopColor: '#1A1A1A',
                animation: 'spin 1s linear infinite',
              }}
            />
          </div>
          <span
            className="mt-4 font-mono text-[11px] tracking-[0.15em]"
            style={{ color: '#9A9A9A' }}
          >
            HUZKIY
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
