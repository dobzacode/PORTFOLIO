'use client';

import { LottieOptions, useLottie } from 'lottie-react';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

const NamePortal = forwardRef(
  (
    {
      className,
      text,
      currentIndex
    }: { className?: string; text: string | null; currentIndex: number },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const animationData = require(`@/assets/lottie/portal/${text}.json`);

    const options: LottieOptions = {
      animationData: animationData,
      loop: false,
      reversed: currentIndex % 2 === 0
    };

    const [trigger, setTrigger] = useState<number>(0);

    console.log(currentIndex % 2 === 0);

    const animation = useLottie(options);

    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setTrigger(trigger + Math.random());
      }, 6000);
      return () => clearTimeout(timeout);
    });

    useEffect(() => {
      if (animationRef.current) {
        animationRef.current.style.top = `${Math.random() * 500}px`;
      }
    }, [animationRef, text]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 1],
          transition: {
            times: [0, 0.99, 1],
            duration: 0
          }
        }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className={className}
        ref={ref}
      >
        <div
          className="absolute top-0 [&>div>svg>g>g>g>g>g>g>path]:dark:fill-white [&>div>svg>g>g>g>g>g>path]:dark:fill-white"
          ref={animationRef}
        >
          {animation.View}
        </div>
      </motion.div>
    );
  }
);

NamePortal.displayName = 'NamePortal';

export default NamePortal;
