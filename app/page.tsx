import Image from 'next/image';
import Link from 'next/link';
import QuickLink from '@/components/QuickLink';
import Table from '@/components/Table';
import { scheduleCols, schedule } from '@/utils/data';
import styles from './page.module.scss';
import Countdown from '@/components/Countdown';
import DownChevron from '@/public/icons/downChevron.svg';

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
  console.log('testing');
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBGImg}></div>
        <Countdown />
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
