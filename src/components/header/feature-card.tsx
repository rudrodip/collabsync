"use client";

import { featureConfig } from "@/config/feature";
import { Card } from "@nextui-org/react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const features = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

type FeatureCardProps = {
  Icon: LucideIcon;
  name: string;
  desc: string;
};

export const FeatureOverview = () => {
  return (
    <Card className="max-w-7xl flex flex-col items-center mx-auto my-10 lg:my-16 bg-secondary">
      <div className="text-center p-5">
        <p className="text-sm my-10 lg:my-10">connecting creators to editors</p>
        <h1 className="font-heading text-5xl my-3">
          Collaborate Quicky & Safely
        </h1>
        <p className="gray_gradient text-lg max-w-3xl">
          CollabSync is the go-to platform for connecting creators and editors,
          streamlining content creation and fostering collaboration in the
          digital world
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        id="feature"
      >
        {featureConfig.features.map((feature, index) => {
          return (
            <FeatureCard
              key={index}
              Icon={feature.icon}
              name={feature.name}
              desc={feature.desc}
            />
          );
        })}
      </motion.div>
    </Card>
  );
};

const FeatureCard = ({ Icon, name, desc }: FeatureCardProps) => {
  return (
    <motion.div
      className="grid grid-cols-5 p-3 m-5 justify-center rounded-lg"
      variants={features}
    >
      <div className="col-span-1 flex justify-center items-center">
        <Icon
          className="hover:scale-105 transition-all ease-in-out w-10 h-10"
          strokeWidth={1.25}
        />
      </div>
      <div className="col-span-4">
        <h1 className="font-heading text-lg">{name}</h1>
        <p className="text-md">{desc}</p>
      </div>
    </motion.div>
  );
};
