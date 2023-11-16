'use client';

import { useState, useEffect } from 'react';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import format from 'format-duration';
import styles from './Countdown.module.scss';

export default function Countdown() {
  const [duration, setDuration] = useState<string>('');

  const hackingStarts = new Date(2023, 10, 18, 11, 30);
  const hackingEnds = new Date(2023, 10, 19, 11, 30);
  const untilText = new Date().getTime() > hackingEnds.getTime() ? 'Hacking has ended.' : new Date().getTime() > hackingStarts.getTime() ? 'Until hacking ends!' : 'Until hacking starts!';

  const updateDuration = () => {
    const destinationTime = new Date().getTime() > hackingEnds.getTime() ? new Date() : new Date().getTime() > hackingStarts.getTime() ? hackingEnds : hackingStarts;

    const diff = differenceInSeconds(destinationTime, Date.now()); // diff in seconds
    setDuration(format(diff * 1000)); // expects milliseconds
  };

  useEffect(() => {
    updateDuration();
    const interval = setInterval(() => { updateDuration(); }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.countdown}>
      <p className={styles.numerials}>{duration}</p>
      <p className={styles.until}>{untilText}</p>
    </div>
  );
}
