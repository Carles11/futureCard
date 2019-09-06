const NAVIGATION = [
  {
    key: 0,
    label: 'HOME',
    link: '/',
  },
  {
    key: 6,
    label: 'ABOUT',
    link: '/about-futurecard',
    child: [
      {
        key: 7,
        label: 'WHO_WE_ARE',
        link: '/about-futurecard/who-we-are',
      },
      {
        key: 8,
        label: 'OUR_FACILITY',
        link: '/about-futurecard/our-facility-and-capabilities',
      },
      {
        key: 9,
        label: 'CAREERS',
        link: '/about-futurecard/careers',
      },
    ],
  },
  {
    key: 1,
    label: 'SOLUTIONS',
    link: '/our-solutions',
    child: [
      {
        key: 16,
        label: 'END_TO_END',
        link: '/our-soultions/end-to-end-card-solutions',
      },
      {
        key: 17,
        label: 'CARD_MANAGEMENT',
        link: '/our-soultions/card-management-systems',
      },
      {
        key: 18,
        label: 'CUSTOMIZE',
        link: '/our-soultions/customize-your-card',
      },
    ],
  },
  {
    key: 2,
    label: 'SERVICES',
    link: '/our-services',
    child: [
      {
        key: 10,
        label: 'CARD_DESIGN',
        link: '/our-services/card-design',
      },
      {
        key: 11,
        label: 'CARD_PERSONALIZATION',
        link: '/our-services/card-personalization',
      },
      {
        key: 12,
        label: 'FULFILLMENT',
        link: '/our-services/fulfillment-packaging',
      },
    ],
  },
  {
    key: 3,
    label: 'CARDS',
    link: '/card-features',
    child: [
      {
        key: 13,
        label: 'TECHNOLOGY',
        link: '/card-features/technology-materials',
      },
      {
        key: 14,
        label: 'CARD_MATERIALS',
        link: '/card-features/card-materials',
      },
      {
        key: 15,
        label: 'DESIGN',
        link: '/card-features/design-and-security-features',
      },
    ],
  },
  {
    key: 4,
    label: 'NEWS',
    link: '/news',
  },
  {
    key: 5,
    label: 'CONTACT',
    link: '/contact-us',
  },
];

const LANGUAGE = [
  {
    id: 0,
    label: 'ENGLISH',
    value: 'en',
  },
  {
    id: 1,
    label: 'ESPAÑOL',
    value: 'es',
  },
  {
    id: 2,
    label: 'FRANÇAIS',
    value: 'fr',
  },
];

const ADDRESSES = [
  {
    id: 0,
    title: 'Head Office | Factory',
    subtitle: 'FutureCard Industries LLC',
    address: '420, University City Road Industrial Area 13, P.O.Box 150199',
    location: 'Sharjah, UAE',
    phone: 'Tel: +971 6 538 9488',
    fax: 'Fax: +971 6 558 3707​',
  },
  {
    id: 1,
    title: 'Middle East | CIS | APAC',
    subtitle: 'FutureCard - Dubai',
    address: '​​1004, Opal Tower, Burj Khalifa',
    subaddress: 'St. Business Bay, P.O.Box 9051',
    location: 'Dubai, UAE',
    phone: 'Tel: +971 4 361 5997',
    fax: 'Fax: +971 4 361 9255',
  },
  {
    id: 2,
    title: 'Europe | North America',
    subtitle: 'FutureCard - France',
    address: '​​13, rue Camille Desmoulins 92130',
    location: 'Issy-les-Moulineaux, France',
    phone: 'Tel: +33 1 58 04 26 92',
    fax: null,
  },
  {
    id: 3,
    title: 'Iberia | LATAM',
    subtitle: 'FutureCard - Spain',
    address: '​​c/ Alcalá 20 28014',
    location: 'Madrid, Spain',
    phone: 'Tel: +34 9 15 22 07 90',
    fax: 'Fax: +34 9 15 22 07 89',
  },
  {
    id: 4,
    title: 'Africa',
    subtitle: 'FutureCard | South Africa',
    address: 'Cresta 2118, P.O.Box 644',
    location: 'Johannesburg, South Africa',
    phone: 'Tel: +27 11 791 6675',
    fax: null,
  },
];

export { ADDRESSES, LANGUAGE, NAVIGATION };
