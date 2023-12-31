import Image from 'next/image';
import Link from 'next/link';
import styles from './QuickLink.module.scss';

type QuickLinkProps = {
  iconPath: string;
  text: string;
  href: string;
  color: string;
};

export default function QuickLink({ iconPath, text, href, color }: QuickLinkProps) {
  return (
    <Link className={styles.container} href={href} target="_blank">
      <Image priority src={iconPath} width={48} height={48} alt="icon"></Image>
      <h3 className={styles[color]}>{text}</h3>
    </Link>
  );
}
