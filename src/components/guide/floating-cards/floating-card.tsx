"use client";

import Image from "next/image";
import { MotionValue, motion, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export type FloatingCardProps = {
  scrollYProgress: MotionValue;
  index: number;
};

export const FloatingCard = ({
  scrollYProgress,
  index,
}: FloatingCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -350px 0px",
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  const even: boolean = index % 2 === 0;
  const motionProps = {
    initial: {
      x: even ? "-40%" : "40%",
      opacity: 0,
      rotate: "-4e-05deg",
      rotateY: even ? "-15deg" : "15deg",
      rotateX: "10deg",
    },
    transition: {
      type: "spring",
      damping: 1,
      stiffness: 2,
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  };

  return (
    <motion.div
      className="absolute w-[40vw] h-[50vh] block rounded-lg"
      ref={ref}
      {...motionProps}
      animate={
        isInView
          && {
              x: even ? "20%" : "-20%",
              opacity: 100,
              rotateY: even ? "15deg" : "-15deg",
            }
      }
      transition={{ delay: 0.1 }}
    >
      <Image
        src="/test.jpg"
        alt="image"
        fill
        sizes="100vw"
        className="rounded-lg shadow-lg"
      />
      <motion.div
        className="h-3/4 w-4/5 block rounded-lg"
        {...motionProps}
        initial={{ x: even ? "-10%" : "10%", opacity: 0 }}
        animate={
          isInView
            && { x: even ? "20%" : "-10%", y: "40%", opacity: 100 }
        }
        transition={{ delay: 0.1 }}
      >
        <Image
          src="/test.jpg"
          alt="image"
          fill
          sizes="100vw"
          className="rounded-lg shadow-xl"
        />
      </motion.div>
    </motion.div>
  );
};
