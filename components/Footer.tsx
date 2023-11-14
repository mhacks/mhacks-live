import styles from './Footer.module.scss';
import QuickLink from './QuickLink';

export default function Footer() {

  const footerLinks = [
    {
      iconPath: '/images/instagram.svg',
      text: '',
      href: 'https://www.instagram.com/mhacks_/'
    },
    {
      iconPath: '/images/x.svg',
      text: '',
      href: 'https://twitter.com/mhacks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    }
  ];

  return <div className={styles.Footer}>
    <div className={styles.linkContainer}>
      {footerLinks.map((quickLink) => <QuickLink key={quickLink.text} iconPath={quickLink.iconPath} text={quickLink.text} href={quickLink.href} color={'white'} />)}
    </div>
    <p>MHacks 16</p>
  </div>;
}
