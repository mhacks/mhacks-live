import Image from 'next/image';
import Link from 'next/link';
import styles from './nav.module.scss';

const links = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Map',
    href: '/'
  },
  {
    text: 'Resources',
    href: '/'
  },
  // {
  //   text: 'Prizes',
  //   href: '/'
  // },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Image width={118} height={35} src='/logo.svg' alt="logo" />
      <div className={styles.links}>
        {links.map((link) =>
          <Link key={link.text} href={link.href}>{link.text}</Link>
        )}
      </div>
    </nav>
  );
}
