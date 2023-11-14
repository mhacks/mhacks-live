import styles from './page.module.scss';
import { maps } from '@/utils/data';

export const metadata = {
  title: "Maps - MHacks Live"
}

export default function Page() {
  return <main className={styles.page}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {maps.map(map => <img key={map.src} className={styles.map} src={map.src} alt="map" />)}
  </main>;
};
