import type { Metadata } from "next";
import "./globals.scss";
import Banner from "@/components/Banner";
import ConsolePrint from "@/components/ConsolePrint";
import Footer from "@/components/Footer";
import styles from "./layout.module.scss";
import { announcement } from "@/utils/data";
import Nav from "@/components/nav";
import localFont from "next/font/local";
import Head from "next/head";

const myFont = localFont({
  src: "../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: "MHacks Live",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="any"
        href="/images/favicon.svg"
      />
      <link
        rel="icon"
        type="image/x-icon"
        sizes="any"
        href="/images/favicon.ico"
      />
      <body className={myFont.className}>
        <div className={styles.stickyTop}>
          {announcement.text && (
            <Banner text={announcement.text} link={announcement.link} />
          )}
          <Nav />
        </div>
        {children}
        <Footer />
        <ConsolePrint />
      </body>
    </html>
  );
}
