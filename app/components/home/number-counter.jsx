'use client';

import { useEffect } from "react";
import { motion, useAnimate, useInView, useMotionValue, useTransform } from "framer-motion";
import Section2Img from "@/app/assets/home/section2-1.webp";

export default function NumberCounter({ }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true })

  const counter1 = useMotionValue(10);
  const counter1Formatted = useTransform(counter1, (x) => `${Math.round(x)}+` );

  const counter2 = useMotionValue(10);
  const counter2Formatted = useTransform(counter2, (x) => `${Math.round(x)}+` );

  const counter3 = useMotionValue(10);
  const counter3Formatted = useTransform(counter3, (x) => `${Math.round(x)}+` );

  const counter4 = useMotionValue(10);
  const counter4Formatted = useTransform(counter4, (x) => `${Math.round(x)}k+` );

  useEffect(() => {
    if (isInView) {
      const animation = animate([
        [counter1, 5, { at: "<" }],
        [counter2, 400, { at: "<" }],
        [counter3, 20, { at: "<" }],
        [counter4, 20, { at: "<" }],
      ], { duration: 3 });

      return animation.stop;
    }
  }, [isInView]);

  return (
    <div ref={scope} className="bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `linear-gradient(to right, #000000a0, #000000a0), url(${Section2Img.src})` }}>
      <ul className="grid grid-cols-2 gap-6 justify-center items-center h-full max-w-screen-md py-28 pl-28 pr-4 max-lg:px-6 max-lg:justify-items-center max-lg:mx-auto">
        <li>
          <motion.div className="text-3xl font-semibold">{counter1Formatted}</motion.div>
          <div className="text-sm font-medium mt-2">Years of experience</div>
        </li>
        <li>
          <motion.div className="text-3xl font-semibold">{counter2Formatted}</motion.div>
          <div className="text-sm font-medium mt-2">Satisfied clients</div>
        </li>
        <li>
          <motion.div className="text-3xl font-semibold">{counter3Formatted}</motion.div>
          <div className="text-sm font-medium mt-2">Development staff</div>
        </li>
        <li>
          <motion.div className="text-3xl font-semibold">{counter4Formatted}</motion.div>
          <div className="text-sm font-medium mt-2">Hours of effort</div>
        </li>
      </ul>
    </div>
  );
}
