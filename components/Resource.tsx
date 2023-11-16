import Link from 'next/link';
import styles from './Resource.module.scss';

type ResourceProps = {
  company: string;
  logoPath: string;
  href: string;
};

export default function Resource({ company, logoPath, href }: ResourceProps) {
  return <Link className={styles.container} href={href} target="_blank">
    {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
    <img className={styles.logo} src={logoPath} alt="logo" />
    <h3>{company}</h3>
  </Link>;
}
