import Image from 'next/image';
import Link from 'next/link';
import QuickLink from '@/components/QuickLink';
import styles from './page.module.css';

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
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.countdown}>
          <p className={styles.numerials}>00:00:00</p>
          <p className={styles.until}>Until Hacking Begins!</p>
        </div>
        <div className={styles.quickLinks}>
          {quickLinks.map(quickLink => (
            <QuickLink key={quickLink.text} iconPath={quickLink.iconPath} text={quickLink.text} href={quickLink.href} />
          ))}
        </div>
      </div>
    </main>
  );
}
