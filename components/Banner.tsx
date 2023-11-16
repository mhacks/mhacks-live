import Link from 'next/link';
import styles from './Banner.module.scss';

type BannerProps = {
  text: string;
  link: string;
};

export default function Banner({ text, link }: BannerProps) {
  return <div className={styles.banner}>
    <p>{text}</p>
    {link && <Link href={link}>{link}</Link>}
  </div>;
}
