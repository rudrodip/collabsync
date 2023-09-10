"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Card, Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";

const motionProps = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "spring", damping: 10, stiffness: 200, duration: 0.4 },
};

export const LandingHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 lg:mt-16">
      <div className="flex flex-col text-center">
        <div>
          <motion.div className="text-sm flex justify-center" {...motionProps}>
            <motion.div className="underline_animation">
              try CollabSync for free
            </motion.div>
            <span role="img" aria-label="Wave" className="wave-emoji mx-2">
              🤩
            </span>
          </motion.div>
          <motion.h1
            className="head_text"
            {...motionProps}
            transition={{ delay: 0.1 }}
          >
            Collaborate Openly{" "}
            <motion.div>
              <motion.p className="inline-block sweep-hover-animation">
                Create Exceptionally
              </motion.p>
            </motion.div>
          </motion.h1>
          <motion.p
            className="text-center text-lg my-4 gray_gradient"
            {...motionProps}
            transition={{ delay: 0.2 }}
          >
            CollabSync is the go-to platform for connecting creators and
            editors, streamlining content creation and fostering collaboration
            in the digital world
          </motion.p>
        </div>
        <div className="text-2xl">
          <motion.div
            className="flex justify-center space-x-4 align-middle flex-wrap my-3"
            {...motionProps}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="bordered"
              className="hidden lg:inline-block sweep-hover-animation"
            >
              <Link href="/login">Get Started</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div className="flex justify-center space-x-5 my-10 w-full" {...motionProps}>
          <Card className="w-2/3">
            <Skeleton className="rounded-lg">
              <div className="h-96 rounded-lg bg-default-300"></div>
            </Skeleton>
          </Card>
          <Card className="w-1/3">
            <Skeleton className="rounded-lg">
              <div className="h-96 rounded-lg bg-default-300"></div>
            </Skeleton>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
