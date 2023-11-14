'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import format from 'format-duration';
import QuickLink from '@/components/QuickLink';
import Table from '@/components/Table'
import { scheduleCols, schedule} from '@/utils/data'
import styles from './page.module.scss';
import DownChevron from '@/public/icons/DownChevron.svg'

const quickLinks = [
  {
    iconPath: '/images/slack.png',
    text: 'MHacks Slack',
    href: ''
  },
  {
    iconPath: '/images/devpost.png',
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
        <DownChevron className={styles.downChevron} />
      </section>
      <div className={styles.scheduleContainer}>
        <h1 className={styles.heading}>Schedule</h1>
        <Table columns={scheduleCols} data={schedule} />
      </div>
    </main>
  );
}
