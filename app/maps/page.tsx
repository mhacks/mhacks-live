import styles from './page.module.scss';

const maps = [
  {
    src: 'a'
  },
  {
    src: 'b'
  },
  {
    src: 'c'
  },
  {
    src: 'd'
  },
];

export default function Page() {
  return <main className={styles.page}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {maps.map(map => <img key={map.src} className={styles.map} src={map.src} alt="map" />)}
  </main>;
};
