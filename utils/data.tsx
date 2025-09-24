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
    "Start Time": new Date("Sep 25, 2025 14:00:00"),
    "End Time": null,
    Event: (
      <>
        Pre-MHacks Workshop with Base44
      </>
    ),
    Description: (
      <>
        <Link
          href="https://wix.zoom.us/meeting/register/uP9fCH56TkK5EFx0faDCBg#/registration"
          target="_blank"
        >
          Register
        </Link>
      </>
    ),
    Location: "Online",
    highlight: true,
  },
  {
    "Start Time": new Date("Sep 26, 2025 16:00:00"),
    "End Time": null,
    Event: (
      <>
        How to Build AI Agents with Fetch.ai
      </>
    ),
    Description: (
      <>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSf0QRDDTk_9ZdBpFEEg8wK5obJII6lQQVTBtKrLwd9XPnhejg/viewform?usp=dialog"
          target="_blank"
        >
          Register
        </Link>
      </>
    ),
    Location: "Online",
    highlight: true,
  },
  {
    "Start Time": new Date("Sep 26, 2025 18:00:00"),
    "End Time": null,
    Event: (
      <>
        Head Start into AI+AR Journey with Snapchat Spectacles with Snap AR
      </>
    ),
    Description: (
      <>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfyk-gjueFLKbsxMTFDMoqk_ZmYUJ_PSmqN6MzHYkF8czr3Kw/viewform?usp=send_form"
          target="_blank"
        >
          Register
        </Link>
      </>
    ),
    Location: "CHRYS 220",
    highlight: true,
  },
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
  {
    "Start Time": new Date("Sep 28, 2025 16:30:00"),
    "End Time": null,
    Event: (
      <>
        🔥 Tech Roast Show @ MHacks 🔥
      </>
    ),
    Description: (
      <>
        <Link href="https://sociallyinept.io/" target="_blank">Details</Link>
      </>
    ),
    Location: "CCCB 1420",
    highlight: true,
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

export const resources: Array<Resource> = [
  {
    company: "MemryX",
    logoPath: "images/companies/memryx.svg",
    href: "https://safe-banon-80d.notion.site/MemryX-27224ca0c81b80f7b474ce7b7e8ecf39",
  },
  {
    company: "fetch.ai",
    logoPath: "images/companies/fetchai.png",
    href: "https://safe-banon-80d.notion.site/Fetch-ai-27224ca0c81b802e824ee16b8d1b7aa0",
  },
  {
    company: "AgentMail",
    logoPath: "images/companies/agentmail.svg",
    href: "https://safe-banon-80d.notion.site/AgentMail-27224ca0c81b806f96bed79d431b9649?pvs=25",
  },
  {
    company: "Ford",
    logoPath: "images/companies/ford.svg",
    href: "https://safe-banon-80d.notion.site/Ford-Motor-Company-27224ca0c81b80c99f90d5c2836f210f",
  },
  {
    company: "Snap",
    logoPath: "images/companies/snap.png",
    href: "https://safe-banon-80d.notion.site/Snap-27224ca0c81b80cd93a1c2e77d4c1196",
  },
  {
    company: "Method Financial",
    logoPath: "images/companies/methodfinancial.svg",
    href: "https://safe-banon-80d.notion.site/Method-Financial-27424ca0c81b805fbf38e9d6d874fd85",
  },
  {
    company: "FREE-WiLi",
    logoPath: "images/companies/free-wili.svg",
    href: "https://safe-banon-80d.notion.site/FREE-WiLi-27224ca0c81b8095afbacb6048908962?pvs=25",
  },
  {
    company: "Embedder",
    logoPath: "images/companies/embedder.webp",
    href: "https://safe-banon-80d.notion.site/Embedder-dev-27424ca0c81b800183e3ea52920d456b",
  },
  {
    company: "Solana",
    logoPath: "images/companies/solana.svg",
    href: "https://safe-banon-80d.notion.site/Solana-Foundation-27224ca0c81b809b9f51ecb1152b7bd7",
  },
  {
    company: "Grainger",
    logoPath: "images/companies/grainger.svg",
    href: "https://safe-banon-80d.notion.site/Grainger-27224ca0c81b805c875cf37e91711886?pvs=25",
  },
  {
    company: "Base44",
    logoPath: "images/companies/base44.svg",
    href: "https://safe-banon-80d.notion.site/Base44-27224ca0c81b80429931f02e6eb04b3c?pvs=25",
  },
  {
    company: "Telora",
    logoPath: "images/companies/telora.jpeg",
    href: "https://safe-banon-80d.notion.site/Telora-27224ca0c81b80fc8635d855b6a79897?pvs=25",
  },
  {
    company: "Sierra",
    logoPath: "images/companies/sierra.svg",
    href: "https://safe-banon-80d.notion.site/Sierra-27424ca0c81b800dbbe1ed67565cb775?pvs=25",
  },
  {
    company: "Broccoli AI",
    logoPath: "images/companies/broccoliai.svg",
    href: "https://safe-banon-80d.notion.site/Broccoli-AI-27224ca0c81b808ba7dbe31f47a4a821",
  },
  {
    company: "Sandia National Laboratories",
    logoPath: "images/companies/sandianationallaboratories.svg",
    href: "https://safe-banon-80d.notion.site/Sandia-National-Labs-27424ca0c81b80cdab8be77311f0eb58?pvs=25",
  },
  {
    company: "Mastra AI",
    logoPath: "images/companies/mastraai.svg",
    href: "https://safe-banon-80d.notion.site/Mastra-AI-27224ca0c81b805abe33d6fcbcc21345?pvs=25",
  },
  {
    company: "Google",
    logoPath: "images/companies/google.svg",
    href: "https://safe-banon-80d.notion.site/Google-27424ca0c81b80398181c2152d3f9c1d?pvs=25",
  },
  {
    company: "Vercel",
    logoPath: "images/companies/vercel.svg",
    href: "https://safe-banon-80d.notion.site/Vercel-27424ca0c81b80e9948efd7b88702d49?pvs=25",
  },
  {
    company: "D.E. Shaw",
    logoPath: "images/companies/deshaw.png",
    href: "https://safe-banon-80d.notion.site/D-E-Shaw-27424ca0c81b8065a8c4f16bef0464e8?pvs=25",
  },
  {
    company: "Stevens Capital Management",
    logoPath: "images/companies/scm.svg",
    href: "https://safe-banon-80d.notion.site/Stevens-Capital-27424ca0c81b80748290c22e480e8772?pvs=25",
  },
];

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
    Prize: "$4,000",
    "Awarded By": "MHacks",
  },
  {
    Category: "🌱 Greenprint (Sustainability)",
    Prize: "LEGO Bonsai Tree & Nothing Headphones",
    "Awarded By": "MHacks",
  },
  {
    Category: "💓 Lifeline (Healthcare)",
    Prize: "Apple Watch Series 10",
    "Awarded By": "MHacks",
  },
  {
    Category: "⚡ Overdrive (Optimization)",
    Prize: "NVIDIA Jetson Orin Nano Super Developer Kit",
    "Awarded By": "MHacks",
  },
  {
    Category: "🚪 Portal (Frontier Interfaces)",
    Prize: "Meta x Oakly Glasses",
    "Awarded By": "MHacks",
  },
  {
    Category: "MHacks Brainrot Prize",
    Prize: "Pop Mart Labubu",
    "Awarded By": "MHacks",
  },
  {
    Category: "MHacks Keyboard Competition Winner",
    Prize: "Keychron Q2 Pro Full Metal RGB Keyboard",
    "Awarded By": "MHacks",
  },
  {
    Category: "MHacks Scavenger Hunt Winner",
    Prize: "AirPods Pro",
    "Awarded By": "MHacks",
  },
  {
    Category: "Best Use of MemryX Edge AI Accelerator",
    Prize: (
      <>
        $1,000 <br /> Top 3 Projects win MemryX M.2 accelerator modules
      </>
    ),
    "Awarded By": "MemryX",
  },
  {
    Category: "Build AI Agents with Fetch.ai Tech Stack Winner",
    Prize: "$2,500",
    "Awarded By": "Fetch.ai",
  },
  {
    Category: "Best use of Snap AR - 1st Place",
    Prize: "Snap Spectacles",
    "Awarded By": "Snap AR",
  },
  {
    Category: "Best use of Snap AR - 2nd Place",
    Prize: "Nintendo Switch",
    "Awarded By": "Snap AR",
  },
  {
    Category: "Best use of Snap AR - 3rd Place",
    Prize: "Soundview Speakers",
    "Awarded By": "Snap AR",
  },
  {
    Category: "Best use of FREE-WiLi",
    Prize: "FREE-WiLi kit for each member of the team",
    "Awarded By": "FREE-WiLi",
  },
  {
    Category: "Best use of AgentMail API",
    Prize: "$3,500 in cash and $10,000 in free credits",
    "Awarded By": "AgentMail",
  },
  {
    Category: "Best Hardware Hack presented by Embedder",
    Prize: "$1,000",
    "Awarded By": "Embedder",
  },
  {
    Category: "Most Creative Solana MCP",
    Prize: "$5,000",
    "Awarded By": "Solana",
  },
  {
    Category: "Smart Task Accelerator presented by Grainger - 1st Place",
    Prize: "$125 Visa Gift Card per team member + Grainger swag",
    "Awarded By": "Grainger",
  },
  {
    Category: "Smart Task Accelerator presented by Grainger - 2nd Place",
    Prize: "$25 Visa Gift Card per team member + Grainger swag",
    "Awarded By": "Grainger",
  },
  {
    Category: "Best integration with Base44",
    Prize: "$1,000 + 3 months of Builder plan",
    "Awarded By": "Base44",
  },
];

/* ================================ END EDIT PRIZES ================================ */
