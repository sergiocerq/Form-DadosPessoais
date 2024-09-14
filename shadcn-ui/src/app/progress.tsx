"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) setProgress((prevProgress) => prevProgress + 10);
      else clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, [progress]);

  return <Progress value={progress} className=" w-80" />;
}
