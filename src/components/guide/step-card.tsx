"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FloatingCardProps } from "./floating-cards/floating-card";

type StepCardProps = {
  index: number;
  title: string;
  desc: string;
  FloatingCard: ({ scrollYProgress, index }: FloatingCardProps) => JSX.Element;
};

export const StepCard = ({
  index,
  title,
  desc,
  FloatingCard,
}: StepCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div
      className={`relative flex ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      } min-h-[70vh] p-3 m-5 justify-between items-center rounded-lg space-x-10`}
    >
      <FloatingCard scrollYProgress={scrollYProgress} index={index} />
      <div
        className={`${index % 2 === 0 ? "triangle-right" : "triangle-left"}`}
      ></div>

      <motion.div className={`${index % 2 === 0 ? "text-left" : "text-right"}`} >
        <p>Step {index}</p>
        <h1 className="font-heading text-lg">{title}</h1>
        <p className="text-md max-w-xl">{desc}</p>
      </motion.div>
    </motion.div>
  );
};
