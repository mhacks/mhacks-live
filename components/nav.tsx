'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styleBuilder from '@/utils/styleBuilder';
import styles from './Nav.module.scss';
import Menu from '@/public/icons/menu.svg';

const links = [
  {
    text: 'Schedule',
    href: '/',
  },
  {
    text: 'Maps',
    href: '/maps',
  },
  {
    text: 'Resources',
    href: '/resources',
  },
  {
    text: 'Prizes',
    href: '/prizes'
  },
];

export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          className={styles.logo}
          priority
          width={118}
          height={36}
          src="/images/logo.svg"
          alt="logo"
        />
      </Link>
      <div className={styleBuilder([styles.links, [styles.hidden, !menuOpen]])}>
        {links.map((link) => (
          <Link key={link.text} className={styleBuilder([[styles.active, pathname === link.href]])} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.text}
          </Link>
        ))}
      </div>
      <button className={styles.menuBtn} onClick={() => setMenuOpen(prev => !prev)}>
        <Menu />
      </button>
    </nav>
  );
}
