import styles from './Resource.module.scss';

type ResourceProps = {
  company: string;
  logoPath: string;
  href: string;
};

export default function Resource({ company, logoPath, href }: ResourceProps) {
  return <a className={styles.container} href={href}>
    {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
    <img src={logoPath} alt="logo" />
    <h3>{company}</h3>
  </a >;
}
