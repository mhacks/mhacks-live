/**
 * README
 *
 * This file contains all data displayed by live.mhacks.org.
 *
 * There are delineating comments throughout this file which indicate which
 * lines to modify when editing data.
 */

import { Column } from '@/utils/types'

export const scheduleCols: Array<Column> = [
  {
    name: 'Time',
    proportion: 0.2,
  },
  {
    name: 'Event',
    proportion: 0.3,
  },
  {
    name: 'Description',
    proportion: 0.3,
  },
  {
    name: 'Location',
    proportion: 0.2,
  },
]

/* ================================ EDIT SCHEDULE ================================ */
// TIMES IN 24-HOUR FORMAT

export const schedule = [
  {
    Time: new Date('Nov 18, 2023 09:00:00'),
    Event: 'Check-In',
    Description: 'Description. Details about the event!',
    Location: 'Pierpont Commons',
  },
  {
    Time: new Date('Nov 18, 2023 10:00:00'),
    Event: 'Opening Ceremony',
    Description: 'Description. Details about the event!',
    Location: 'Location TBD',
  },
  {
    Time: new Date('Nov 18, 2023 11:30:00'),
    Event: 'Team Formation',
    Description:
      "Description. Details about the event! This desscription is really long because it's about a workshop",
    Location: 'Location TBD',
  },
  {
    Time: new Date('Nov 18, 2023 11:30:00'),
    Event: 'Hacking Begins',
    Description: '',
    Location: 'Duderstadt Library',
  },
  {
    Time: new Date('Nov 18, 2023 12:30:00'),
    Event: 'Lunch',
    Description: '',
    Location: 'Bob and Betty Beyster Building Atrium',
  },
  {
    Time: new Date('Nov 18, 2023 14:00:00'),
    Event: 'Workshop: Organization with Notion',
    Description: 'With Notion',
    Location: 'Design Lab 2',
  },
  {
    Time: new Date('Nov 18, 2023 15:00:00'),
    Event: 'Workshop: How to Start a Startup',
    Description: 'With Telora',
    Location: 'Design Lab 2',
  },
  {
    Time: new Date('Nov 18, 2023 16:00:00'),
    Event:
      'Workshop: How to Overcome Imposter Syndrome in the Recruitment Process',
    Description: 'With Uber',
    Location: 'Design Lab 2',
  },
  {
    Time: new Date('Nov 18, 2023 17:00:00'),
    Event: 'Workshop: How to Become a 10x Developer Using the Terminal',
    Description: 'With Warp',
    Location: 'Design Lab 2',
  },
  {
    Time: new Date('Nov 18, 2023 18:00:00'),
    Event:
      'Workshop: How to Start a Company, Raise a Million Dollars and Get Your First 1000 Users',
    Description: 'Jam.dev',
    Location: 'Design Lab 2',
  },
  {
    Time: new Date('Nov 18, 2023 19:00:00'),
    Event: 'Dinner',
    Description: 'Cottage Inn',
    Location: 'Bob and Betty Beyster Building Atrium',
  },
  {
    Time: new Date('Nov 18, 2023 21:00:00'),
    Event: 'Workshop: Intro to Large Language Models',
    Description: 'Michigan Data Science Team',
    Location: 'Design Lab 2',
  },
  {
    Time: new Date('Nov 18, 2023 22:00:00'),
    Event: 'Workshop: Intro to Web Dev',
    Description: 'Michigan Hackers',
    Location: 'Design Lab 2',
  },
  {
    Time: new Date('Nov 18, 2023 23:00:00'),
    Event: 'Workshop: Intro to Blockchain and On-chain Data',
    Description: 'College Dao',
    Location: 'Design Lab 2',
  },

  {
    Time: new Date('Nov 19, 2023 00:00:00'),
    Event: 'Workshop: 0 to 1 for Startups',
    Description: 'Tour.Video(YC S21)',
    Location: 'Design Lab 2',
  },
  {
    Time: new Date('Nov 19, 2023 03:00:00'),
    Event: 'Cricket World Cup Finals Watch Party',
    Description: '🏏🔥',
    Location: 'Design Studio',
  },
  {
    Time: new Date('Nov 19, 2023 10:00:00'),
    Event: 'Brunch',
    Decription: 'Panera and Sams Club',
    Location: 'Bob and Better Beyster Building Atrium',
  },
  {
    Time: new Date('Nov 19, 2023 11:30:00'),
    Event: 'Hacking Ends',
    Description: '',
    Location: 'Duderstadt Library',
  },
  {
    Time: new Date('Nov 19, 2023 12:30:00'),
    Event: 'Judging',
    Description: '',
    Location: 'Duderstadt Center',
  },
  {
    Time: new Date('Nov 19, 2023 14:30:00'),
    Event: 'Closing Ceremony',
    Description: 'Description. Details about the event!',
    Location: 'STAMPS Auditorium',
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
    company: 'GitHub',
    logoPath: '/images/companies/GitHub-logo.png',
    href: '/resources/Github.pdf',
  },
  {
    company: 'MondoDB Atlas',
    logoPath: '/images/companies/MondoDB.png',
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
    Category: '1st Place Hack',
    Prize: 'Meta Quest 2 VR Headset',
    'Awarded By': 'MHacks',
  },
  {
    Category: '2nd Place Hack',
    Prize: 'Sony WH-CH720N Bluetooth Headphones',
    'Awarded By': 'BNY Mellon',
  },
  {
    Category: '3rd Place Hack',
    Prize: 'Keychron V3 Wired Custom Mechanical Keyboard',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Best Cybersecurity Hack',
    Prize: 'Flipper Zeros',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Best Machine Learning/Artificial Intelligence Hack',
    Prize: 'Sonos Speakers, Beanies, and Ford Cooler Bags',
    'Awarded By': 'Ford Motor Company',
  },
  {
    Category: 'Best Education Hack',
    Prize: 'Acer Gaming Monitors',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Best Game Development Hack',
    Prize: 'Dell Gaming Monitors',
    'Awarded By': 'MHacks',
  },
  {
    Category: 'Best Financial Hack',
    Prize: '$250 Amazon Gift Card',
    'Awarded By': 'Capital One',
  },
  {
    Category: 'Best Developer Tool',
    Prize: 'Eddie Bauer Warp Duffle Bags and Google Nests',
    'Awarded By': 'Warp',
  },
  {
    Category: '1st Place Social Impact Hack',
    Prize: '$1000',
    'Awarded By': 'optiMize',
  },
  {
    Category: '2nd Place Social Impact Hack',
    Prize: '$300',
    'Awarded By': 'optiMize',
  },
  {
    Category: '3rd Place Social Impact Hack',
    Prize: '$200',
    'Awarded By': 'optiMize',
  },
  {
    Category: 'Best Cloud Implementation',
    Prize: 'Caterpillar Speakers and Guaranteed Interview',
    'Awarded By': 'Caterpillar',
  },
  {
    Category: 'Best Demonstrated Business Value',
    Prize: 'Caterpillar Speakers and Guaranteed Interview',
    'Awarded By': 'Caterpillar',
  },
  {
    Category: 'Most Innovative Use of Data',
    Prize: '$125 Visa Gift Card Per Teammate',
    'Awarded By': 'Grainger',
  },
  {
    Category: 'Best use of Google Cloud',
    Prize: 'Google Cloud Backpack',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Hardware Lab - Presented by Digi-Key',
    Prize: 'GitHub Swag',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Most Creative use of Github',
    Prize: 'Free .tech Domain Name For Life',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of MongoDB Atlas',
    Prize: 'M5GO Starter Kit',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of Streamlit',
    Prize: 'Surprise!',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of Kintone',
    Prize: 'Breadboard IoT Kit',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Most Innovative Startup Idea',
    Prize: 'MLH-Exclusive Google Backpack',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of Hedera',
    Prize: 'Mechanical Keyboard',
    'Awarded By': 'MLH',
  },
  {
    Category: 'Best use of Flow',
    Prize: '$200 FLOW Token',
    'Awarded By': 'MLH',
  },
]

/* ================================ END EDIT PRIZES ================================ */
