'use client';

import { useState, useEffect } from 'react';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import format from 'format-duration';
import styleBuidler from '@/utils/styleBuilder';
import styles from './Countdown.module.scss';

export default function Countdown() {
  const [duration, setDuration] = useState<string>('');
  const [diffInSec, setDiffInSec] = useState<number | null>(null);

  const hackingStarts = new Date(2024, 8, 28, 11, 30);
  const hackingEnds = new Date(2024, 8, 29, 12, 0);
  const untilText = new Date().getTime() > hackingEnds.getTime() ? 'Hacking has ended.' : new Date().getTime() > hackingStarts.getTime() ? 'Until hacking ends!' : 'Until hacking starts!';

  const updateDuration = () => {
    const destinationTime = new Date().getTime() > hackingEnds.getTime() ? new Date() : new Date().getTime() > hackingStarts.getTime() ? hackingEnds : hackingStarts;

    const diff = differenceInSeconds(destinationTime, Date.now()); // diff in seconds
    setDiffInSec(diff);
    setDuration(format(diff * 1000)); // expects milliseconds
  };

  useEffect(() => {
    updateDuration();
    const interval = setInterval(() => { updateDuration(); }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const lessThanHour = (sec: number): boolean => {
    return sec < 60 * 60 && sec > 0;
  };

  return (
    <div className={styles.countdown}>
      <p className={styleBuidler([styles.numerials, [styles.pulse, diffInSec ? lessThanHour(diffInSec) : false]])}>{duration}</p>
      <p className={styles.until}>{untilText}</p>
    </div>
  );
}
