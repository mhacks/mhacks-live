/**
 * README
 *
 * This file contains all data displayed by live.mhacks.org.
 *
 * There are delineating comments throughout this file which indicate which
 * lines to modify when editing data.
 */

/* ================================ EDIT ANNOUNCEMENT BANNER ================================ */

export const announcement = {
  text: "", // announcement banner will be displayed if text is not an empty string
  link: "https://devpost.mhacks.org", // link is optional
};

/* ================================ END EDIT ANNOUNCEMENT BANNER ================================ */

import { Column } from "@/utils/types";
import Link from "next/link";

export const scheduleCols: Array<Column> = [
  {
    name: "Start Time",
    proportion: 0.15,
  },
  {
    name: "End Time",
    proportion: 0.1,
  },
  {
    name: "Event",
    proportion: 0.25,
  },
  {
    name: "Description",
    proportion: 0.35,
  },
  {
    name: "Location",
    proportion: 0.15,
  },
];

/* ================================ EDIT SCHEDULE ================================ */
// TIMES IN 24-HOUR FORMAT

export const schedule = [
  {
    "Start Time": new Date("Sep 27, 2025 09:00:00"),
    "End Time": new Date("Sep 27, 2025 09:30:00"),
    Event: (
      <>
        Breakfast <br />
        Hacker Check-In
      </>
    ),
    Description: "",
    Location: "CCCB Lobby",
  },
  {
    "Start Time": new Date("Sep 27, 2025 09:30:00"),
    "End Time": new Date("Sep 27, 2025 11:00:00"),
    Event: "Opening Ceremony",
    Description: "",
    Location: "CCCB 1420",
  },
  {
    "Start Time": new Date("Sep 27, 2025 11:00:00"),
    "End Time": new Date("Sep 27, 2025 12:30:00"),
    Event: "Late Hacker Check-In",
    Description: "",
    Location: "Pierpont Commons",
  },
  {
    "Start Time": new Date("Sep 27, 2025 11:00:00"),
    "End Time": null,
    Event: "Hacking Begins",
    Description: "",
    Location: "Duderstadt Center",
  },
  {
    "Start Time": new Date("Sep 27, 2025 11:30:00"),
    "End Time": new Date("Sep 27, 2025 18:00:00"),
    Event: "Sponsor Exposition",
    Description: "",
    Location: "Duderstadt/Pierpont Connector",
  },
  {
    "Start Time": new Date("Sep 27, 2025 12:30:00"),
    "End Time": new Date("Sep 27, 2025 14:00:00"),
    Event: "Lunch",
    Description: "",
    Location: "Bob and Betty Beyster Building Atrium",
  },
  {
    "Start Time": new Date("Sep 27, 2025 13:00:00"),
    "End Time": null,
    Event: "Workshops Begin",
    Description: (
      <>
        <Link
          href="https://www.notion.so/Workshop-Schedules-25a24ca0c81b804aa427cb253533af35?source=copy_link"
          target="_blank"
        >
          Workshop schedule
        </Link>
      </>
    ),
    Location: "Duderstadt Center",
  },
  {
    "Start Time": new Date("Sep 27, 2025 19:00:00"),
    "End Time": new Date("Sep 27, 2025 21:00:00"),
    Event: "Dinner",
    Description: "",
    Location: "The Grove",
  },
  {
    "Start Time": new Date("Sep 28, 2025 11:00:00"),
    "End Time": new Date("Sep 28, 2025 13:00:00"),
    Event: "Brunch",
    Decription: "",
    Location: "Bob and Better Beyster Building Atrium",
  },
  {
    "Start Time": new Date("Sep 28, 2025 12:00:00"),
    "End Time": null,
    Event: "Hacking Ends",
    Description: "",
    Location: "Duderstadt Basement",
  },
  {
    "Start Time": new Date("Sep 28, 2025 13:00:00"),
    "End Time": new Date("Sep 28, 2025 15:00:00"),
    Event: "Judging",
    Description: "Remain at your hacking table.",
    Location: "Duderstadt Center",
  },
  {
    "Start Time": new Date("Sep 28, 2025 16:30:00"),
    "End Time": new Date("Sep 28, 2025 18:00:00"),
    Event: "Closing Ceremony",
    Description: "",
    Location: "CCCB 1420",
  },
];

/* ================================ END EDIT SCHEDULE ================================ */

type Map = {
  src: string;
};

/* ================================ EDIT MAPS ================================ */

export const maps: Array<Map> = [
  {
    src: "/images/maps/cccb.png",
  },
  {
    src: "/images/maps/north.png",
  },
  {
    src: "/images/maps/pierpont.png",
  },
  {
    src: "/images/maps/dude1.png",
  },
  {
    src: "/images/maps/dude0.png",
  },
  {
    src: "/images/maps/dude3.png",
  },
  {
    src: "/images/maps/bbb.png",
  },
];

/* ================================ END EDIT MAPS ================================ */

type Resource = {
  company: string;
  logoPath: string;
  href: string;
};

/* ================================ EDIT RESOURCES ================================ */

export const resources: Array<Resource> = [];

/* ================================ END EDIT RESOURCES ================================ */

export const prizeCols: Array<Column> = [
  {
    name: "Category",
    proportion: 0.3,
  },
  {
    name: "Prize",
    proportion: 0.4,
  },
  {
    name: "Awarded By",
    proportion: 0.3,
  },
];

/* ================================ EDIT PRIZES ================================ */

export const prizes = [
  {
    Category: "Grand Prize",
    Prize: "TBA",
    "Awarded By": "MHacks",
  },
  {
    Category: "Runner Up Prize",
    Prize: "TBA",
    "Awarded By": "MHacks",
  },
  {
    Category: "🌱 Greenprint (Sustainability)",
    Prize: "TBA",
    "Awarded By": "MHacks",
  },
  {
    Category: "💓 Lifeline (Healthcare)",
    Prize: "TBA",
    "Awarded By": "MHacks",
  },
  {
    Category: "⚡ Overdrive (Optimization)",
    Prize: "TBA",
    "Awarded By": "MHacks",
  },
  {
    Category: "🚪 Portal (Frontier Interfaces)",
    Prize: "TBA",
    "Awarded By": "MHacks",
  },
  {
    Category: "Sponsor Prizes",
    Prize: "TBA",
    "Awarded By": "Sponsors",
  },
  // {
  //   Category: "Best use of FREE-WiLi",
  //   Prize: "FREE-WiLi kits",
  //   "Awarded By": "FREE-WiLi",
  // },
  // {
  //   Category: "Best use of AgentMail API",
  //   Prize: "TBA",
  //   "Awarded By": "AgentMail",
  // },
  // {
  //   Category: "Most impactful AI agent",
  //   Prize: "TBA",
  //   "Awarded By": "AgentMail",
  // },
  // {
  //   Category: "Best use of MemryX Edge AI Accelerator",
  //   Prize: "TBA",
  //   "Awarded By": "MemryX",
  // },
  // {
  //   Category:
  //     "Bridge Intent and Action: Build AI Agents That Think, Plan, and Deliver",
  //   Prize: "$2,500",
  //   "Awarded By": "Fetch.ai",
  // },
  // {
  //   Category: "Most Creative Solana MCP",
  //   Prize: "$5,000",
  //   "Awarded By": "Solana",
  // },
];

/* ================================ END EDIT PRIZES ================================ */
