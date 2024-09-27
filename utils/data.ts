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
  text: 'Devpost has been posted!', // announcement banner will be displayed if text is not an empty string
  link: 'https://devpost/...', // link is optional
};

/* ================================ END EDIT ANNOUNCEMENT BANNER ================================ */

import { Column } from '@/utils/types';

export const scheduleCols: Array<Column> = [
  {
    name: 'Start Time',
    proportion: 0.15,
  },
  {
    name: 'End Time',
    proportion: 0.1,
  },
  {
    name: 'Event',
    proportion: 0.25,
  },
  {
    name: 'Description',
    proportion: 0.35,
  },
  {
    name: 'Location',
    proportion: 0.15,
  },
];

/* ================================ EDIT SCHEDULE ================================ */
// TIMES IN 24-HOUR FORMAT

export const schedule = [
  {
    'Start Time': new Date('Sep 28, 2024 09:30:00'),
    'End Time': new Date('Sep 28, 2024 10:30:00'),
    Event: 'Breakfast',
    Description: '',
    Location: 'CCCB Lobby',
  },
  {
    'Start Time': new Date('Sep 28, 2024 09:30:00'),
    'End Time': new Date('Sep 28, 2024 11:00:00'),
    Event: 'Opening Ceremony',
    Description: '',
    Location: 'CCCB 1420',
  },
  {
    'Start Time': new Date('Sep 28, 2024 11:00:00'),
    'End Time': new Date('Sep 28, 2024 12:30:00'),
    Event: 'Hacker Check-In',
    Description: '',
    Location: 'Pierpont Commons',
  },
  {
    'Start Time': new Date('Sep 28, 2024 11:30:00'),
    'End Time': new Date('Sep 28, 2024 11:30:00'),
    Event: 'Hacking Begins',
    Description: '',
    Location: 'Duderstadt',
  },
  {
    'Start Time': new Date('Sep 28, 2024 11:30:00'),
    'End Time': new Date('Sep 28, 2024 18:00:00'),
    Event: 'Sponsor Exposition',
    Description: '',
    Location: 'Pierpont Attrium',
  },
  {
    'Start Time': new Date('Sep 28, 2024 12:30:00'),
    'End Time': new Date('Sep 28, 2024 14:00:00'),
    Event: 'Lunch',
    Description: '',
    Location: 'Bob and Betty Beyster Building Atrium',
  },
  {
    'Start Time': new Date('Sep 28, 2024 19:00:00'),
    'End Time': new Date('Sep 28, 2024 20:30:00'),
    Event: 'Dinner',
    Description: '',
    Location: 'Bob and Betty Beyster Building Atrium',
  },
  {
    'Start Time': new Date('Nov 19, 2023 11:00:00'),
    'End Time': new Date('Nov 19, 2023 13:00:00'),
    Event: 'Brunch',
    Decription: '',
    Location: 'Bob and Better Beyster Building Atrium',
  },
  {
    'Start Time': new Date('Nov 19, 2023 12:00:00'),
    'End Time': new Date('Nov 19, 2023 12:00:00'),
    Event: 'Hacking Ends',
    Description: '',
    Location: 'Duderstadt Basement',
  },
  {
    'Start Time': new Date('Nov 19, 2023 12:30:00'),
    'End Time': new Date('Nov 18, 2023 14:30:00'),
    Event: 'Judging',
    Description: 'Remain at your hacking table.',
    Location: 'Duderstadt Center',
  },
  {
    'Start Time': new Date('Nov 19, 2023 16:30:00'),
    'End Time': new Date('Nov 18, 2023 18:00:00'),
    Event: 'Closing Ceremony',
    Description: '',
    Location: 'CCCB 1420',
  },
];

/* ================================ END EDIT SCHEDULE ================================ */

type Map = {
  src: string;
};

/* ================================ EDIT MAPS ================================ */

export const maps: Array<Map> = [
  {
    src: '/images/maps/cccb.png',
  },
  {
    src: '/images/maps/north.png',
  },
  {
    src: '/images/maps/pierpont.png',
  },
  {
    src: '/images/maps/dude1.png',
  },
  {
    src: '/images/maps/dude0.png',
  },
  {
    src: '/images/maps/bbb.png',
  },
  {
    src: '/images/maps/parking.png',
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
    company: 'Google Cloud',
    logoPath: '/images/companies/googlecloud.png',
    href: '/resources/Google_Cloud.pdf',
  },
  {
    company: 'Roboflow',
    logoPath: '/images/companies/roboflow.png',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfxpB8odH94M-7A4mI1LEaO3TQukVAVZ81KqMLW_stJD5ZG7Q/viewform',
  },
  {
    company: 'optiMize',
    logoPath: '/images/companies/optimize.png',
    href: '/resources/optiMize.pdf',
  },
  {
    company: 'Michigan ITS',
    logoPath: '/images/companies/umich_its.png',
    href: '/resources/UMichITS.pdf',
  },

  {
    company: 'GitHub',
    logoPath: '/images/companies/GitHub-logo.png',
    href: '/resources/Github.pdf',
  },
  {
    company: 'MongoDB Atlas',
    logoPath: '/images/companies/MongoDB.png',
    href: '/resources/MongoDB Atlas.pdf',
  },
  {
    company: 'Streamlit',
    logoPath: '/images/companies/streamlit.png',
    href: '/resources/Streamlit.pdf',
  },
  {
    company: 'Kintone',
    logoPath: '/images/companies/kintone.png',
    href: '/resources/Kintone.pdf',
  },
  {
    company: 'MLH',
    logoPath: '/images/companies/MLH.png',
    href: '/resources/Most Innovative Startup Idea.pdf',
  },
  {
    company: 'Flow',
    logoPath: '/images/companies/flow.png',
    href: '/resources/Flow.pdf',
  },
  {
    company: 'Hedera',
    logoPath: '/images/companies/hedera.png',
    href: '/resources/Hedera.pdf',
  },
];

/* ================================ END EDIT RESOURCES ================================ */

export const prizeCols: Array<Column> = [
  {
    name: 'Category',
    proportion: 0.3,
  },
  {
    name: 'Prize',
    proportion: 0.4,
  },
  {
    name: 'Awarded By',
    proportion: 0.3,
  },
];

/* ================================ EDIT PRIZES ================================ */

export const prizes = [
  {
    Category: 'Grand Prize',
    Prize: '$3,000',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Runner Up Prize',
    Prize: '$1,500',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Education',
    Prize: 'Bose SoundLink Flex Bluetooth Speaker',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Interactive Media & Gaming',
    Prize: 'Dell Gaming Monitor',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Health',
    Prize: 'Whoop wearable fitness tracker',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Sustainability',
    Prize: 'iPad (10th Generation)',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Accessibility',
    Prize: 'Insta360 Link 2 gimbal webcam',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Optimization',
    Prize: 'RayBan Meta  Wayfarer Smart Glasses',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Best Use of Intel AI',
    Prize:
      '$2500 Intel Developer Cloud credits + Lenovo Thinkpad X1 Carbon each',
    'Awarded By': 'Intel',
  },
  {
    Category: '2st Place Best Use of Intel AI',
    Prize:
      '$1000 Intel Developer Cloud credit for each member + Sparkle Intel Arc A770 Titan OC Edition',
    'Awarded By': 'Intel',
  },
  {
    Category: '3st Place Best Use of Intel AI',
    Prize:
      '$500 Intel Developer Cloud credit for each member + Sparkle Intel Arc A750 ORC OC Edition',
    'Awarded By': 'Intel',
  },
  {
    Category: '1st Place Best Google AI Breadboard Application',
    Prize: '$1000',
    'Awarded By': 'Google',
  },
  {
    Category: '2st Place Best Google AI Breadboard Application',
    Prize: '$700',
    'Awarded By': 'Google',
  },
  {
    Category: '1st Place Best Google AI Breadboard Application',
    Prize: '$300',
    'Awarded By': 'Google',
  },
  {
    Category: 'Best Developer Tool',
    Prize: 'Coming soon',
    'Awarded By': 'Warp',
  },
  {
    Category: 'Best Cloud Implementation',
    Prize: 'Wireless earbuds, Magport tri-fold charger',
    'Awarded By': 'CAT Digital',
  },
  {
    Category: 'Best use of LLM Agents',
    Prize: '$500',
    'Awarded By': 'BoundaryML',
  },
  {
    Category: 'The Best Hack with an AI-Driven, Dynamically Rendered, UI',
    Prize: '$500',
    'Awarded By': 'MagicLoops',
  },
  {
    Category: 'Best Use of Sonic',
    Prize: 'Coming soon',
    'Awarded By': 'Cartesia',
  },
  {
    Category: 'Best App Built on Groq',
    Prize: '$500 in credit to our Groq Swag Store',
    'Awarded By': 'Groq',
  },
  {
    Category: 'Best Use of Roboflow Workflows',
    Prize: 'Raspberry Pi 5 Dev Kit for each team member (up to 4)',
    'Awarded By': 'Roboflow',
  },
  {
    Category: 'Best use of MongoDB Atlas',
    Prize: 'M5GO IoT Starter Kit',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of MATLAB',
    Prize: 'Wireless YoYo Speaker',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best DEI Hack sponsored by Fidelity',
    Prize: 'Fidelity Branded Wireless Charger',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of Streamlit',
    Prize: 'Arduino Tiny ML Kit',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of Midnight',
    Prize: 'JBL Tune 510BT Wireless Headphones',
    'Awarded By': 'MLH',
  },
];

/* ================================ END EDIT PRIZES ================================ */
