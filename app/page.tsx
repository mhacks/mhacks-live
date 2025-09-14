import QuickLink from "@/components/QuickLink";
import Table from "@/components/Table";
import { scheduleCols, schedule } from "@/utils/data";
import styles from "./page.module.scss";
import Countdown from "@/components/Countdown";
import DownChevron from "@/public/icons/downChevron.svg";
import Hero from "@/components/hero/Hero";

const quickLinks = [
  {
    iconPath: "/images/discord.svg",
    text: "MHacks Discord",
    href: "https://discord.mhacks.org/",
  },
  {
    iconPath: "/images/mhacks2025.svg",
    text: "Hacker Handbook",
    href: "https://handbook.mhacks.org/",
  },
  {
    iconPath: "/images/devpost.svg",
    text: "Devpost Submission",
    href: "https://devpost.mhacks.org/",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBG}>
          <Hero />
        </div>
        <Countdown />
        <div className={styles.quickLinks}>
          {quickLinks.map((quickLink) => (
            <QuickLink
              key={quickLink.text}
              iconPath={quickLink.iconPath}
              text={quickLink.text}
              href={quickLink.href}
              color={"purple"}
            />
          ))}
        </div>
        <DownChevron className={styles.downChevron} />
      </section>
      <div className={styles.scheduleContainer}>
        <h1 className={styles.heading}>Schedule</h1>
        <Table columns={scheduleCols} data={schedule} />
        <div className={styles.buttonContainer}>
          <a
            className={styles.fullScheduleButton}
            href="https://docs.google.com/spreadsheets/d/1Ox3Ds9ueZtc5poCj9OJAsQ0-khowg-Gv8PCmhYyh1yA/edit?usp=sharing"
          >
            See full schedule
          </a>
        </div>
      </div>
    </main>
  );
}
