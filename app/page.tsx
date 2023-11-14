'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import format from 'format-duration';
import QuickLink from '@/components/QuickLink';
import styles from './page.module.scss';

const quickLinks = [
  {
    iconPath: '/slack.png',
    text: 'MHacks Slack',
    href: ''
  },
  {
    iconPath: '/devpost.png',
    text: 'Devpost Submission',
    href: ''
  }
];

export default function Home() {

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
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBGImg}></div>
        <div className={styles.countdown}>
          <p className={styles.numerials}>{duration}</p>
          <p className={styles.until}>Until Hacking Begins!</p>
        </div>
        <div className={styles.quickLinks}>
          {quickLinks.map(quickLink => (
            <QuickLink key={quickLink.text} iconPath={quickLink.iconPath} text={quickLink.text} href={quickLink.href} color={'purple'} />
          ))}
        </div>
      </section>
      <section className={styles.scheduleContainer}></section>
    </main>
  );
}
