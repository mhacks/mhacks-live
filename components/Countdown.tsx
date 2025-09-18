"use client";

import { useState, useEffect } from "react";
import differenceInSeconds from "date-fns/differenceInSeconds";
import format from "format-duration";
import HeroText from "./HeroText";

export default function Countdown() {
  const [duration, setDuration] = useState<string>("");
  const [diffInSec, setDiffInSec] = useState<number | null>(null);

  const hackingStarts = new Date("Sep 27, 2025 10:00:00");
  const hackingEnds = new Date("Sep 28, 2025 10:00:00");
  const untilText =
    new Date().getTime() > hackingEnds.getTime()
      ? "Hacking has ended."
      : new Date().getTime() > hackingStarts.getTime()
      ? "Until hacking ends!"
      : "Until hacking begins!";

  const updateDuration = () => {
    const destinationTime =
      new Date().getTime() > hackingEnds.getTime()
        ? new Date()
        : new Date().getTime() > hackingStarts.getTime()
        ? hackingEnds
        : hackingStarts;

    const diff = differenceInSeconds(destinationTime, Date.now()); // diff in seconds
    setDiffInSec(diff);
    setDuration(format(diff * 1000)); // expects milliseconds
  };

  useEffect(() => {
    updateDuration();
    const interval = setInterval(() => {
      updateDuration();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lessThanHour = (sec: number): boolean => {
    return sec < 60 * 60 && sec > 0;
  };

  return (
    <HeroText
      title={duration}
      subtitle={untilText}
      shouldPulseTitle={diffInSec !== null && lessThanHour(diffInSec)}
    />
  );
}
