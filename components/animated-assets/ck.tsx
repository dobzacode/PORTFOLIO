'use client';

import nameDarkAnimation from '@/assets/lottie/ck-dark.json';
import nameAnimation from '@/assets/lottie/ck.json';
import { LottieOptions, useLottie } from 'lottie-react';

export default function CK({
  className,
  isDark,
  extraDelay,
  splashDelay
}: {
  className?: string;
  isDark?: boolean;
  extraDelay: number;
  splashDelay: number;
}) {
  const options: LottieOptions = {
    animationData: !isDark ? nameAnimation : nameDarkAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  if (extraDelay === 2) return <div className={className}>{myAnimation.View}</div>;

  myAnimation.pause();

  setTimeout(
    () => {
      myAnimation.play();
    },
    4500 + splashDelay * 1000
  );

  return <div className={className}>{myAnimation.View}</div>;
}
