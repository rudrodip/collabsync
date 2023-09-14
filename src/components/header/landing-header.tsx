"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const LandingHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 lg:mt-16">
      <div className="flex flex-col text-center items-center justify-center">
        <div>
          <div className="underline_animation">try CollabSync for free</div>
          <span role="img" aria-label="Wave" className="wave-emoji mx-2">
            🤩
          </span>
        </div>
        <h1 className="head_text">
          Collaborate Openly{" "}
          <div>
            <p className="inline-block sweep-hover-animation">
              Create Exceptionally
            </p>
          </div>
        </h1>
        <p className="text-center text-lg my-4 gray_gradient max-w-3xl">
          CollabSync is the go-to platform for connecting creators and editors,
          streamlining content creation and fostering collaboration in the
          digital world
        </p>
      </div>
      <div className="text-2xl">
        <div className="flex justify-center space-x-4 align-middle flex-wrap my-3">
          <Button variant="outline">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center space-x-5 my-10 w-full">
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
      </div>
    </div>
  );
};
