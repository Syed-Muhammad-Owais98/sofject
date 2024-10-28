'use client';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const VIDEO_DURATION = 5;
const layoutTransition = { duration: 1, easings: ['easeOut'] };
const opacityTransition = { duration: 1, delay: VIDEO_DURATION , easings: ['easeOut'] };
const backgroundTransition  = { duration: 2, delay: 0.3, easings: ['easeOut'] };

export default function AnimatedLogo() {
  const [expand, setExpand] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isInitialPageLoad, setIsInitialPageLoad] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setExpand(false);
      setIsVisible(false);
      sessionStorage.setItem('initialLoad', true);
    }, VIDEO_DURATION * 1000);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    let initialLoad = !sessionStorage.getItem('initialLoad');
    setIsInitialPageLoad(initialLoad);
  }, []);

  if (isInitialPageLoad === null) return <div className="fixed inset-0 z-[10000] h-screen w-screen bg-black" />;

  return (
    <Link href="/" className="relative block w-32 h-12">
      {isInitialPageLoad ?
        <>
          <AnimatePresence>
            {isVisible &&
              <motion.div
                layout
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: backgroundTransition }}
                className="flex fixed inset-0 z-[1000] h-screen w-screen items-center justify-center rounded bg-black"
              />
            }
          </AnimatePresence>

          <motion.div
            layout
            data-expand={expand}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: opacityTransition }}
            transition={layoutTransition}
            className="absolute top-0 left-0 mx-auto w-32 h-auto z-[1001] data-[expand=true]:fixed data-[expand=true]:inset-0 data-[expand=true]:h-screen data-[expand=true]:w-screen flex items-center justify-center"
          >
            <motion.video
              layout
              transition={layoutTransition}
              src="/logo.webm"
              width="128"
              height="48"
              autoPlay
              muted
              className="w-full h-auto object-contain object-center"
            />
          </motion.div>

          <motion.div
            layout
            data-expand={expand}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: opacityTransition }}
            transition={layoutTransition}
            className="absolute top-0 left-0 mx-auto w-32 h-auto z-[1001] data-[expand=true]:fixed data-[expand=true]:inset-0 data-[expand=true]:h-screen data-[expand=true]:w-1/2 flex items-center justify-center"
          >
            <motion.img
              layout
              transition={layoutTransition}
              src="/logo.webp"
              alt="Sofject logo"
              width="128"
              height="48"
              className="w-full h-auto object-contain object-center"
            />
          </motion.div>
        </>
        :
        <img src="/logo.webp" width="128" height="48" alt="Sofject logo" className="w-32" />
      }
    </Link>
  );
}
