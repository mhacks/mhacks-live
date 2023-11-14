import Image from 'next/image';
import Link from 'next/link';
import styles from './Nav.module.scss';

const links = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Maps',
    href: '/maps'
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
      <Link href='/'>
        <Image className={styles.logo} width={118} height={36} src='/logo.svg' alt="logo" />
        <Image className={styles.logoMobile} width={36} height={36} src='/logoMobile.svg' alt="logo" />
      </Link>
      <div className={styles.links}>
        {links.map((link) =>
          <Link key={link.text} href={link.href}>{link.text}</Link>
        )}
      </div>
    </nav>
  );
}
