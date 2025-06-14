import { motion, Variants } from 'framer-motion';
import React, { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const getVariants = (direction: RevealProps['direction']): Variants => {
  switch (direction) {
    case 'left':
      return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
    case 'right':
      return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
    case 'down':
      return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
    default: // up
      return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
  }
};

const Reveal = ({ children, direction = 'up', delay = 0 }: RevealProps) => (
  <motion.div
    variants={getVariants(direction)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default Reveal; 