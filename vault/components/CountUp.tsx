import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CountUpProps {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  decimals = 0, 
  duration = 1.5,
  prefix = '',
  suffix = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 60,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [motionValue, isInView, end]);

  const [displayValue, setDisplayValue] = useState(prefix + '0' + suffix);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
         const formatted = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
         }).format(latest);
         
         // Direct DOM manipulation for performance on high frequency updates
         ref.current.textContent = prefix + formatted + suffix;
      }
    });
    return () => springValue.clearListeners();
  }, [springValue, decimals, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

export default CountUp;