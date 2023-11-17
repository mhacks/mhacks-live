import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import styleBuilder from '@/utils/styleBuilder';
import './globals.scss';
import Banner from '@/components/Banner';
import ConsolePrint from '@/components/ConsolePrint';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from './layout.module.scss';
import { announcement } from '@/utils/data';

const outfit = localFont({ src: '../public/fonts/Outfit-VariableFont_wght.ttf' });

export const metadata: Metadata = {
  title: 'MHacks Live',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styleBuilder([outfit.className])}>
        <div className={styles.stickyTop}>
          {announcement.text && <Banner text={announcement.text} link={announcement.link} />}
          <Nav />
        </div>
        {children}
        <Footer />
        <ConsolePrint />
      </body>
    </html>
  );
}
