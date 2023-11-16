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
    proportion: 0.2,
  },
  {
    name: 'Description',
    proportion: 0.35,
  },
  {
    name: 'Location',
    proportion: 0.25,
  },
]

/* ================================ EDIT SCHEDULE ================================ */
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
    Time: new Date('Nov 18, 2023 11:00:00'),
    Event: 'Team Formation',
    Description:
      "Description. Details about the event! This desscription is really long because it's about a workshop",
    Location: 'Location TBD',
  },
  {
    Time: new Date('Nov 18, 2023 12:00:00'),
    Event: 'Hacking Begins',
    Description: '',
    Location: 'Duderstadt Library',
  },
  {
    Time: new Date('Nov 19, 2023 12:00:00'),
    Event: 'Hacking Ends',
    Description: '',
    Location: 'Duderstadt Library',
  },
  {
    Time: new Date('Nov 19, 2023 15:00:00'),
    Event: 'Closing Ceremony',
    Description: 'Description. Details about the event!',
    Location: 'STAMPS Auditorium',
  },
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
    Time: new Date('Nov 18, 2023 11:00:00'),
    Event: 'Team Formation',
    Description:
      "Description. Details about the event! This desscription is really long because it's about a workshop",
    Location: 'Location TBD',
  },
  {
    Time: new Date('Nov 18, 2023 12:00:00'),
    Event: 'Hacking Begins',
    Description: '',
    Location: 'Duderstadt Library',
  },
  {
    Time: new Date('Nov 19, 2023 12:00:00'),
    Event: 'Hacking Ends',
    Description: '',
    Location: 'Duderstadt Library',
  },
  {
    Time: new Date('Nov 19, 2023 15:00:00'),
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
    src: 'a',
  },
  {
    src: 'b',
  },
  {
    src: 'c',
  },
  {
    src: 'd',
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
    company: 'Company Name',
    logoPath: '/images/companies/mhacks.png',
    href: 'https://mhacks.org',
  },
  {
    company: 'Company Name',
    logoPath: '/images/companies/mhacks.png',
    href: 'https://mhacks.org',
  },
  {
    company: 'Company Name',
    logoPath: '/images/companies/mhacks.png',
    href: 'https://mhacks.org',
  },
  {
    company: 'Company Name',
    logoPath: '/images/companies/mhacks.png',
    href: 'https://mhacks.org',
  },
  {
    company: 'Company Name',
    logoPath: '/images/companies/mhacks.png',
    href: 'https://mhacks.org',
  },
  {
    company: 'Company Name',
    logoPath: '/images/companies/mhacks.png',
    href: 'https://mhacks.org',
  },
  {
    company: 'Company Name',
    logoPath: '/images/companies/mhacks.png',
    href: 'https://mhacks.org',
  },
  {
    company: 'Company Name',
    logoPath: '/images/companies/mhacks.png',
    href: 'https://mhacks.org',
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
    'Awarded By': 'BNY Mellon & MHacks',
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
    Prize: '1st Place Award and Guaranteed Interview',
    'Awarded By': 'Caterpillar',
  },
  {
    Category: 'Best Demonstrated Business Value',
    Prize: '1st Place Award and Guaranteed Interview',
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
  }
  
]

/* ================================ END EDIT PRIZES ================================ */
