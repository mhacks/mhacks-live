import Link from 'next/link';
import styles from './page.module.scss';
import { maps } from '@/utils/data';

export const metadata = {
  title: "Maps - MHacks Live"
};

export default function Page() {
  return <main className={styles.page}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {maps.map(map => <Link key={map.src} href={map.src} target="_blank"><img className={styles.map} src={map.src} alt="map" /></Link>)}
  </main>;
};
