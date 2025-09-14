import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, CSSProperties } from "react";
import Smiley, { SmileyColor, SmileyDirection } from "./Smiley";

import styles from "./Hero.module.scss";

const popOutDuration = 0.4;
const popInDuration = 0.4;
const cycleDelay = 0.3;

const minScale = 0.75;
const maxScale = 1.25;

export default function SmileyButton({
  onClick = () => {},
  className = "",
  style = {},
}: {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}) {
  const [visible, setVisible] = useState(true);
  const [hover, setHover] = useState(false);
  const [params] = useState({
    color: SmileyColor[Math.floor(Math.random() * SmileyColor.length)],
    direction:
      SmileyDirection[Math.floor(Math.random() * SmileyDirection.length)],
    right: Math.random() < 0.5,
    scale: Math.random() * (maxScale - minScale) + minScale,
  });

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setVisible(true);
      }, (popOutDuration + cycleDelay) * 1000);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: {
              duration: visible ? popInDuration : popOutDuration,
              ease: "easeInOut",
            },
            opacity: {
              duration: visible ? popInDuration : popOutDuration,
              ease: "easeInOut",
            },
          }}
          className={className}
          style={style}
          onClick={() => {
            setVisible(false);
            onClick();
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Smiley
            color={params.color}
            direction={params.direction}
            right={params.right}
            className={styles.smiley}
            style={{ scale: hover ? params.scale * 1.1 : params.scale }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
