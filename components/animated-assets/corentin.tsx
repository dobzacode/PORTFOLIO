'use client';

import nameAnimation from '@/assets/lottie/corentin-kittel.json';
import { LottieOptions, useLottie } from 'lottie-react';

export default function Corentin() {
  const options: LottieOptions = {
    animationData: nameAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  myAnimation.setSpeed(1.3);

  return <div className="absolute -top-medium">{myAnimation.View}</div>;
}
