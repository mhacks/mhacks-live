import Image from 'next/image';
import Link from 'next/link';
import styles from './QuickLink.module.scss';

type QuickLinkProps = {
  iconPath: string;
  text: string;
  href: string;
};

export default function QuickLink({ iconPath, text, href }: QuickLinkProps) {
  return (
    <Link href={href} className={styles.container}>
      <Image src={iconPath} width={48} height={48} alt="icon"></Image>
      <h3>{text}</h3>
    </Link>
  );
}
