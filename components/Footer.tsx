import Link from "next/link";
import styles from "./Footer.module.scss";
import QuickLink from "./QuickLink";

export default function Footer() {
  const footerLinks = [
    {
      iconPath: "/images/instagram.svg",
      text: "",
      href: "https://www.instagram.com/mhacks_/",
    },
    {
      iconPath: "/images/x.svg",
      text: "",
      href: "https://twitter.com/mhacks",
    },
  ];

  return (
    <div className={styles.Footer}>
      <div className={styles.linkContainer}>
        {footerLinks.map((quickLink) => (
          <QuickLink
            key={quickLink.text}
            iconPath={quickLink.iconPath}
            text={quickLink.text}
            href={quickLink.href}
            color={"white"}
          />
        ))}
      </div>
      <Link
        className={styles.link}
        href="https://www.mhacks.org/"
        target="_blank"
      >
        MHacks 2025
      </Link>
    </div>
  );
}
