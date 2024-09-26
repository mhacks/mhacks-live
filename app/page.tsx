import QuickLink from '@/components/QuickLink';
import Table from '@/components/Table';
import { scheduleCols, schedule } from '@/utils/data';
import styles from './page.module.scss';
import Countdown from '@/components/Countdown';
import DownChevron from '@/public/icons/downChevron.svg';

const quickLinks = [
  {
    iconPath: '/images/slack.svg',
    text: 'MHacks Slack',
    href: 'https://join.slack.com/t/mhacks2024/shared_invite/zt-2r84sb8np-nYm8kil1V8sRcyxJoOqc3g'
  },
  {
    iconPath: '/images/mhacks.svg',
    text: 'Hacker Handbook',
    href: 'https://docs.google.com/document/d/1Bctq8S86erXi0o5zn7lTpXfpZrO4tAS7Vq2S-ZhpFNk/edit?usp=sharing'
  },
  {
    iconPath: '/images/devpost.svg',
    text: 'Devpost Submission',
    href: 'https://mhacks-2024.devpost.com/'
  }
];

export default function Home() {
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
        <div className={styles.buttonContainer}>
            <a className={styles.fullScheduleButton} href="https://docs.google.com/spreadsheets/d/1uPnhST3AS0vcgfrPEJKlkNTkEcdTShoUUnA_M1s7lsw/edit?gid=877663356#gid=877663356">See full schedule</a>
        </div>
      </div>
    </main>
  );
}
