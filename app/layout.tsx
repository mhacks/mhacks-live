import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import styleBuilder from '@/utils/styleBuilder';
import './globals.scss';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], weight: 'variable' });

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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
