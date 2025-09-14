import { type ReactNode } from "react";
import styles from "./HeroText.module.scss";
import styleBuilder from "@/utils/styleBuilder";

type HeroTextProps = {
  title: ReactNode;
  subtitle: ReactNode;
  shouldPulseTitle?: boolean;
};

export default function HeroText({
  shouldPulseTitle = false,
  title,
  subtitle,
}: HeroTextProps) {
  return (
    <div className={styles.herotext}>
      <p
        className={styleBuilder([
          styles.title,
          [styles.pulse, shouldPulseTitle],
        ])}
      >
        {title}
      </p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
