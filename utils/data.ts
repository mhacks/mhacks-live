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
    proportion: 0.55,
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
    Location: 'Pierpont Commons',
  },
  {
    Time: new Date('Nov 18, 2023 10:00:00'),
    Event: 'Opening Ceremony',
    Location: 'Location TBD',
  },
  {
    Time: new Date('Nov 18, 2023 11:00:00'),
    Event: 'Team Formation',
    Location: 'Location TBD',
  },
  {
    Time: new Date('Nov 18, 2023 12:00:00'),
    Event: 'Hacking Begins',
    Location: 'Duderstadt Library',
  },
  {
    Time: new Date('Nov 19, 2023 12:00:00'),
    Event: 'Hacking Ends',
    Location: 'Duderstadt Library',
  },
  {
    Time: new Date('Nov 19, 2023 15:00:00'),
    Event: 'Closing Ceremony',
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
