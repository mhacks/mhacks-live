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
  text: '', // announcement banner will be displayed if text is not an empty string
  link: '', // link is optional
}

/* ================================ END EDIT ANNOUNCEMENT BANNER ================================ */

import { Column } from '@/utils/types'

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
]

/* ================================ EDIT SCHEDULE ================================ */
// TIMES IN 24-HOUR FORMAT

export const schedule = [
  {
    'Start Time': new Date('Sep 28, 2024 08:30:00'),
    'End Time': new Date('Sep 28, 2024 09:30:00'),
    Event: 'Check-In',
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
    'Start Time': new Date('Sep 28, 2024 09:30:00'),
    'End Time': new Date('Sep 28, 2024 10:30:00'),
    Event: 'Breakfast',
    Description: '',
    Location: 'CCCB Lobby',
  },
  {
    'Start Time': new Date('Sep 28, 2024 11:30:00'),
    'End Time': new Date('Sep 28, 2024 11:30:00'),
    Event: 'Hacking Begins',
    Description: '',
    Location: 'Duderstadt Basement',
  },
  // {
  //   'Start Time': new Date('Nov 18, 2023 11:30:00'),
  //   'End Time': new Date('Nov 18, 12:30:00'),
  //   Event: 'Team Formation',
  //   Description:
  //     "Don't have a team yet? Join the team formation event to discuss ideas you'd like to hack on, and meet other hackers!",
  //   Location: 'Design Lab 2',
  // },
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
  // {
  //   'Start Time': new Date('Nov 18, 2023 14:00:00'),
  //   'End Time': new Date('Nov 18, 2023 14:45:00'),
  //   Event: 'Workshop: Organization with Notion',
  //   Description: 'With Notion',
  //   Location: 'Design Lab 2',
  // },
  // {
  //   'Start Time': new Date('Nov 18, 2023 16:00:00'),
  //   'End Time': new Date('Nov 18, 2023 16:45:00'),
  //   Event:
  //     'Workshop: How to Overcome Imposter Syndrome in the Recruitment Process',
  //   Description: 'With Uber',
  //   Location: 'Design Lab 2',
  // },
  // {
  //   'Start Time': new Date('Nov 18, 2023 17:00:00'),
  //   'End Time': new Date('Nov 18, 2023 17:45:00'),
  //   Event: 'Workshop: How to Become a 10x Developer Using the Terminal',
  //   Description: 'With Warp',
  //   Location: 'Design Lab 2',
  // },
  // {
  //   'Start Time': new Date('Nov 18, 2023 18:00:00'),
  //   'End Time': new Date('Nov 18, 2023 18:45:00'),
  //   Event:
  //     'Workshop: How to Start a Company, Raise a Million Dollars, and Get Your First 1000 Users',
  //   Description: 'With Jam.dev',
  //   Location: 'Design Lab 2',
  // },
  {
    'Start Time': new Date('Sep 28, 2024 19:00:00'),
    'End Time': new Date('Sep 28, 2024 20:00:00'),
    Event: 'Dinner',
    Description: '',
    Location: 'Bob and Betty Beyster Building Atrium',
  },
  {
    'Start Time': new Date('Sep 28, 2024 20:00:00'),
    'End Time': new Date('Sep 28, 2024 20:15:00'),
    Event: 'MLH Event',
    Description:
      '',
    Location: 'Duderstadt Atrium',
  },
  // {
  //   'Start Time': new Date('Nov 18, 2023 21:00:00'),
  //   'End Time': new Date('Nov 18, 2023 21:45:00'),
  //   Event: 'Workshop: Intro to Large Language Models',
  //   Description: 'With Michigan Data Science Team',
  //   Location: 'Design Lab 2',
  // },
  // {
  //   'Start Time': new Date('Nov 18, 2023 22:00:00'),
  //   'End Time': new Date('Nov 18, 2023 22:45:00'),
  //   Event: 'Workshop: Intro to React',
  //   Description:
  //     'Learn the basics of building frontend web apps in React with Michigan Hackers',
  //   Location: 'Design Lab 2',
  // },
  // {
  //   'Start Time': new Date('Nov 18, 2023 23:00:00'),
  //   'End Time': new Date('Nov 18, 2023 23:45:00'),
  //   Event: 'Workshop: Intro to Blockchain and On-chain Data',
  //   Description: 'With College Dao',
  //   Location: 'Design Lab 2',
  // },

  // {
  //   'Start Time': new Date('Nov 19, 2023 00:00:00'),
  //   'End Time': new Date('Nov 19, 2023 00:45:00'),
  //   Event: 'Workshop: 0 to 1 for Startups',
  //   Description: 'With Tour.Video (YC S21)',
  //   Location: 'Design Lab 2',
  // },
  // {
  //   'Start Time': new Date('Nov 19, 2023 03:30:00'),
  //   'End Time': new Date('Nov 19, 2023 05:00:00'),
  //   Event: 'Cricket World Cup Finals Watch Party',
  //   Description: '🏏🔥',
  //   Location: 'Design Studio',
  // },
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
    'Start Time': new Date('Nov 19, 2023 12:00:00'),
    'End Time': new Date('Nov 18, 2023 15:30:00'),
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
]

/* ================================ END EDIT SCHEDULE ================================ */

type Map = {
  src: string
}

/* ================================ EDIT MAPS ================================ */

export const maps: Array<Map> = [
  {
    src: '/images/maps/grove.png',
  },
  {
    src: '/images/maps/dude.png',
  },
  {
    src: '/images/maps/parking.png',
  },
]

/* ================================ END EDIT MAPS ================================ */

type Resource = {
  company: string
  logoPath: string
  href: string
}

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
]

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
]

/* ================================ EDIT PRIZES ================================ */

export const prizes = [
  {
    Category: 'Education',
    Prize: 'TBD',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Interactive Media & Gaming',
    Prize: 'TBD',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Health',
    Prize: 'TBD',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Sustainability',
    Prize: 'TBD',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Accessibility',
    Prize: 'TBD',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Optimization',
    Prize: 'TBD',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Best Use of Intel AI',
    Prize: 'AI PC Lenovo Laptop',
    'Awarded By': 'Intel',
  },
  {
    Category: '2st Place Best Use of Intel AI',
    Prize: 'TBD',
    'Awarded By': 'Intel',
  },
  {
    Category: '3st Place Best Use of Intel AI',
    Prize: 'TBD',
    'Awarded By': 'Intel',
  },
  {
    Category: 'Best Developer Tool',
    Prize: 'TBD',
    'Awarded By': 'Warp',
  },
  {
    Category: 'Best Cloud Implementation',
    Prize: 'TBD',
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
    Prize: 'TBD',
    'Awarded By': 'Cartesia',
  },
  {
    Category: 'Best Google AI Breadboard App',
    Prize: 'TBD',
    'Awarded By': 'Google',
  },
  {
    Category: 'Best App Built on Groq',
    Prize: 'TBD',
    'Awarded By': 'Groq',
  },
  {
    Category: 'Best use of MongoDB Atlas',
    Prize: 'TBD',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of MATLAB',
    Prize: 'TBD',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best DEI Hack sponsored by Fidelity',
    Prize: 'TBD',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of Streamlit',
    Prize: 'TBD',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of Midnight',
    Prize: 'TBD',
    'Awarded By': 'MLH',
  },
  
]

/* ================================ END EDIT PRIZES ================================ */
