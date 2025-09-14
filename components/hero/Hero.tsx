"use client";

import styles from "./Hero.module.scss";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import SmileyButton from "./SmileyButton";

const densityFactor = 95000;
const jitter = 0.6;

export default function Hero() {
  const [ref, size] = useComponentSize<HTMLDivElement>();
  const debouncedSize = useDebounce(size, 250);

  const { width, height } = debouncedSize;
  const numSmileys = Math.max(5, Math.floor((width * height) / densityFactor));

  const aspectRatio = width / height;
  const gridX = Math.floor(Math.sqrt(numSmileys * aspectRatio));
  const gridY = Math.ceil(numSmileys / gridX);

  // Generate smileys
  const smileys = useMemo(() => {
    const samples: { x: number; y: number }[] = [];
    for (let row = 0; row < gridY; row++) {
      for (let col = 0; col < gridX; col++) {
        const cellWidth = 1 / gridX;
        const cellHeight = 1 / gridY;

        const x = (col + 0.5 + (Math.random() - 0.5) * jitter) * cellWidth;
        const y = (row + 0.5 + (Math.random() - 0.5) * jitter) * cellHeight;

        samples.push({ x, y });
      }
    }

    return samples.map((sample) => {
      return {
        left: (sample.x * 100).toFixed(2) + "%",
        top: (sample.y * 100).toFixed(2) + "%",
      };
    });
  }, [gridX, gridY]);

  return (
    <div className={styles.hero} ref={ref}>
      {smileys.map(({ top, left }, i) => (
        <SmileyButton
          key={i}
          className={styles.smileyButton}
          style={{
            position: "absolute",
            left: left,
            top: top,
          }}
        />
      ))}
    </div>
  );
}

function useComponentSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const updateSize = useCallback(() => {
    if (ref.current) {
      const { offsetWidth: width, offsetHeight: height } = ref.current;
      setSize({ width, height });
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    updateSize();
    const observer = new ResizeObserver(() => updateSize());
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [updateSize]);

  return [ref, size] as const;
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
