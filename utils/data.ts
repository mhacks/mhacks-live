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
    proportion: 0.2,
  },
  {
    name: 'Prize',
    proportion: 0.6,
  },
  {
    name: 'Awarded By',
    proportion: 0.2,
  },
]

/* ================================ EDIT PRIZES ================================ */

export const prizes = [
  {
    Category: '1st Place Hack',
    Prize: 'A Pat on the Back',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Hack',
    Prize: 'A Pat on the Back',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Hack',
    Prize: 'A Pat on the Back',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Hack',
    Prize: 'A Pat on the Back',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Hack',
    Prize: 'A Pat on the Back',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Hack',
    Prize: 'A Pat on the Back',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Hack',
    Prize: 'A Pat on the Back',
    'Awarded By': 'MHacks',
  },
  {
    Category: '1st Place Hack',
    Prize: 'A Pat on the Back',
    'Awarded By': 'MHacks',
  },
]

/* ================================ END EDIT PRIZES ================================ */
