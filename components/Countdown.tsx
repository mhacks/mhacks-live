'use client';

import { useState, useEffect } from 'react';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import format from 'format-duration';
import styles from './Countdown.module.scss';

export default function Countdown() {
  const [duration, setDuration] = useState<string>('');

  const updateDuration = () => {
    const diff = differenceInSeconds(new Date(2023, 10, 19, 12), Date.now()); // diff in seconds
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
      <p className={styles.until}>Until Hacking Begins!</p>
    </div>
  );
}
