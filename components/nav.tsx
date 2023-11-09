import Image from 'next/image';
import Link from 'next/link';
import styles from './Nav.module.scss';

const links = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Map',
    href: '/map'
  },
  {
    text: 'Resources',
    href: '/resources'
  },
  // {
  //   text: 'Prizes',
  //   href: '/prizes'
  // },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href='/' className={styles.logo}>
        <Image width={118} height={35} src='/logo.svg' alt="logo" />
      </Link>
      <div className={styles.links}>
        {links.map((link) =>
          <Link key={link.text} href={link.href}>{link.text}</Link>
        )}
      </div>
    </nav>
  );
}
