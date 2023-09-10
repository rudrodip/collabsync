"use client";

import { StepCard } from "@/components/guide/step-card";
import { guideConfig } from '@/config/guide';

export const Guide = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 lg:my-16 rounded-2xl">
      <div className="text-center p-5 max-w-7xl mx-auto">
        <p className="text-sm my-10 lg:my-16">connecting creators to editors</p>
        <h1 className="font-heading text-5xl my-3">
          Collaborate Quicky & Safely
        </h1>
        <p className="gray_gradient text-lg">
          CollabSync is the go-to platform for connecting creators and editors,
          streamlining content creation and fostering collaboration in the
          digital world
        </p>
      </div>
      <div className="my-10 mx-auto">
        {guideConfig.steps.map((step, index) => {
          return (
            <StepCard 
              key={step.id}
              index={index + 1}
              title={step.title}
              desc={step.desc}
              FloatingCard={step.floating_card}
            />
          )
        })}
      </div>
    </div>
  );
};