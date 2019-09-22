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
        key: 8,
        label: 'FACILITY',
        link: '/about-futurecard/our-facility-and-capabilities',
        img: '',
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
        link: '/our-solutions/end-to-end-card-solutions',
        child: [
          {
            key: 19,
            label: 'PAYMENT',
            link: '/our-solutions/end-to-end-card-solutions/payment',
          },
          {
            key: 20,
            label: 'IDENTIFICATION',
            link: '/our-solutions/end-to-end-card-solutions/identification',
          },
          {
            key: 21,
            label: 'TRANSPORT_ACCESS',
            link:
              '/our-solutions/end-to-end-card-solutions/transport-and-access',
          },
          {
            key: 22,
            label: 'TELECOM',
            link: '/our-solutions/end-to-end-card-solutions/telecom',
          },
          {
            key: 23,
            label: 'RETAIL_LOYALTY',
            link: '/our-solutions/end-to-end-card-solutions/retail_loyalty',
          },
        ],
      },
      {
        key: 17,
        label: 'CARD_MANAGEMENT',
        link: '/our-solutions/card-management-systems',
        child: [
          {
            key: 24,
            label: 'CENTRAL_PERSONALIZATION',
            link:
              '/our-solutions/card-management-systems/central-personalization',
          },
          {
            key: 25,
            label: 'INSTANT_ISSUANCE',
            link: '/our-solutions/card-management-systems/instant-issuance',
          },
          {
            key: 26,
            label: 'CARD_HOLDERS',
            link:
              '/our-solutions/card-management-systems/card-holders-enrollment',
          },
          {
            key: 27,
            label: 'CARD_LIFECYCLE',
            link:
              '/our-solutions/card-management-systems/card-lifecycle-management',
          },
        ],
      },
      // {
      //   key: 18,
      //   label: 'CUSTOMIZE',
      //   link: '/our-solutions/customize-your-card',
      //   image: true,
      // },
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
        label: 'PERSONALIZATION',
        link: '/our-services/card-personalization',
      },
      {
        key: 12,
        label: 'FULFILLMENT',
        link: '/our-services/fulfillment-packaging',
      },
      {
        key: 13,
        label: 'CONSULTING',
        link: '/our-services/card-consulting',
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

const OPTIONS_PAYMENT = [
  {
    id: 0,
    label: 'Card Materials',
    description:
      'Choosing the right card material is very important when it comes to the functioning of the card and the purpose that it is meant to serve.',
    child: [
      {
        id: 1,
        label: 'PVC (Plastic)',
        link: '/card-features/card-materials#pvc',
      },
      {
        id: 2,
        label: 'ECO PVC (Plastic)',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 3,
        label: 'PET-G (Plastic)',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 4,
        label: 'PET-F (Plastic)',
        link: '/card-features/card-materials#pet-f',
      },
      {
        id: 5,
        label: 'Metal',
        link: '/card-features/card-materials#metal',
      },
    ],
  },
  {
    id: 6,
    label: 'Technology',
    description:
      'Advancements in technology paved the way for secure and reliable smart cards that dominate the different sectors of government, transportation, healthcare, retail, telecommunications and financial industries.',
    child: [
      {
        id: 7,
        label: 'Contact',
        link: '/card-features/technology-materials#contact',
      },
      {
        id: 8,
        label: 'Contactless',
        link: '/card-features/technology-materials#contactless',
      },
      {
        id: 9,
        label: 'Dual-Interface',
        link: '/card-features/technology-materials#dual-interface',
      },
      {
        id: 10,
        label: 'Hybrid',
        link: '/card-features/technology-materials#hybrid',
      },
      {
        id: 11,
        label: 'Magstripe',
        link: '/card-features/technology-materials#magnetic-stripe',
      },
    ],
  },
  {
    id: 12,
    label: 'Design Features',
    description:
      'FCI has the manufacturing capabilities of below special material and effects:',
    child: [
      {
        id: 13,
        label: 'Colored Core PVC',
        link: '/card-features/design-and-security-features#colored-pvc',
      },
      {
        id: 14,
        label: 'Holographic PVC',
        link: '/card-features/design-and-security-features#holographic',
      },
      {
        id: 15,
        label: 'Transparent PVC with special IR blocker',
        link: '/card-features/design-and-security-features#transparent-pvc',
      },
      {
        id: 16,
        label: 'Hot Stamping',
        link: '/card-features/design-and-security-features#hot-stamping',
      },
      {
        id: 17,
        label: 'Tactile/Spot UV',
        link: '/card-features/design-and-security-features#tactile',
      },
      {
        id: 18,
        label: 'Special Color Magstripes',
        link: '/card-features/design-and-security-features#magnetic-stripes',
      },
      {
        id: 19,
        label: 'Special Die Shapes',
        link: '/card-features/design-and-security-features#shapes-cards',
      },
      {
        id: 20,
        label: 'Aromatic & Touch Effect',
        link: '/card-features/design-and-security-features#aromatic',
      },
      {
        id: 21,
        label: 'Bejeweled',
        link: '/card-features/design-and-security-features#bejeweled',
      },
    ],
  },
];

const OPTIONS_IDENTIFICATION = [
  {
    id: 0,
    label: 'Card Materials',
    description:
      'Cards materials are supplied as foils for laminating or as granulates for injection molding of the cards.',
    child: [
      {
        id: 1,
        label: 'PVC',
        link: '/card-features/card-materials#pvc',
      },
      {
        id: 2,
        label: 'ECO PVC',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 3,
        label: 'PET-G',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 4,
        label: 'PET-F',
        link: '/card-features/card-materials#pet-f',
      },
      {
        id: 5,
        label: 'PC',
        link: '/card-features/card-materials#pc',
      },
    ],
  },
  {
    id: 6,
    label: 'Technology',
    description:
      'Advancements in technology paved the way for secure and reliable smart cards that dominate the different sectors of government, transportation, healthcare, retail, telecommunications and financial industries.',
    child: [
      {
        id: 7,
        label: 'Contact',
        link: '/card-features/technology-materials#contact',
      },
      {
        id: 8,
        label: 'Contactless',
        link: '/card-features/technology-materials#contactless',
      },
      {
        id: 9,
        label: 'Dual-Interface',
        link: '/card-features/technology-materials#dual-interface',
      },
      {
        id: 11,
        label: 'Magstripe',
        link: '/card-features/technology-materials#magnetic-stripe',
      },
    ],
  },
  {
    id: 12,
    label: 'Security Features',
    description:
      'FutureCard provides its customers with cards that offer a unique amalgamation of the most sophisticated design and security features.',
    child: [
      {
        id: 13,
        label: 'Rainbow printig',
        link: '/card-features/design-and-security-features#rainbow',
      },
      {
        id: 14,
        label: 'Micro text',
        link: '/card-features/design-and-security-features#micro-text',
      },
      {
        id: 15,
        label: 'Guilloche pattern printing',
        link: '/card-features/design-and-security-features#guilloche',
      },
      {
        id: 16,
        label: 'OVI (Optical Variable Inks)',
        link: '/card-features/design-and-security-features#ovi',
      },
      {
        id: 17,
        label: 'UV (Ultra Violet) invisible printing',
        link: '/card-features/design-and-security-features#uv',
      },
      {
        id: 18,
        label: 'In-build text',
        link: '/card-features/design-and-security-features#in-build-text',
      },
      {
        id: 19,
        label: '2D and 3D holograms',
        link: '/card-features/design-and-security-features#2d-3d',
      },
    ],
  },
];

const OPTIONS_TRANSPORT = [
  {
    id: 0,
    label: 'Card Materials',
    description:
      'Choosing the right card material is very important when it comes to the functioning of the card and the purpose that it is meant to serve.',
    child: [
      {
        id: 1,
        label: 'PVC (Plastic)',
        link: '/card-features/card-materials#pvc',
      },
      {
        id: 2,
        label: 'ECO PVC (Plastic)',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 3,
        label: 'PET-G (Plastic)',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 4,
        label: 'PET-F (Plastic)',
        link: '/card-features/card-materials#pet-f',
      },
      {
        id: 5,
        label: 'Paper',
        link: '/card-features/card-materials#paper-cardboard',
      },
    ],
  },
  {
    id: 6,
    label: 'Technology',
    description:
      'Advancements in technology paved the way for secure and reliable smart cards that dominate the different sectors of government, transportation, healthcare, retail, telecommunications and financial industries.',
    child: [
      {
        id: 7,
        label: 'Contact',
        link: '/card-features/technology-materials#contact',
      },
      {
        id: 9,
        label: 'Dual-Interface',
        link: '/card-features/technology-materials#dual-interface',
      },
      {
        id: 10,
        label: 'Contactless (Mifare)',
        link: '/card-features/technology-materials#contactless',
      },
      {
        id: 11,
        label: 'Contactless (Desfire)',
        link: '/card-features/technology-materials#contactless',
      },
    ],
  },
  {
    id: 12,
    label: 'Design Features',
    description:
      'FCI has the manufacturing capabilities of below special material and effects:',
    child: [
      {
        id: 13,
        label: 'Colored Core PVC',
        link: '/card-features/design-and-security-features#colored-pvc',
      },
      {
        id: 14,
        label: 'Holographic PVC',
        link: '/card-features/design-and-security-features#holographic',
      },
      {
        id: 15,
        label: 'Transparent PVC with special IR blocker',
        link: '/card-features/design-and-security-features#transparent-pvc',
      },
      {
        id: 16,
        label: 'Hot Stamping',
        link: '/card-features/design-and-security-features#hot-stamping',
      },
      {
        id: 17,
        label: 'Tactile/Spot UV',
        link: '/card-features/design-and-security-features#tactile',
      },
      {
        id: 18,
        label: 'Special Color Magstripes',
        link: '/card-features/design-and-security-features#magnetic-stripes',
      },
      {
        id: 19,
        label: 'Special Die Shapes',
        link: '/card-features/design-and-security-features#shapes-cards',
      },
    ],
  },
];

const OPTIONS_TELECOM = [
  {
    id: 0,
    label: 'Card Materials',
    description:
      'Choosing the right card material is very important when it comes to the functioning of the card and the purpose that it is meant to serve.',
    child: [
      {
        id: 1,
        label: 'PVC (Plastic)',
        link: '/card-features/card-materials#pvc',
      },
      {
        id: 2,
        label: 'ECO PVC (Plastic)',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 3,
        label: 'ABS (Plastic)',
        link: '/card-features/card-materials#abs',
      },
      {
        id: 5,
        label: 'Paper & Cardboard',
        link: '/card-features/card-materials#paper-cardboard',
      },
    ],
  },
  {
    id: 6,
    label: 'Technology',
    description:
      'Advancements in technology paved the way for secure and reliable smart cards that dominate the different sectors of government, transportation, healthcare, retail, telecommunications and financial industries.',
    child: [
      {
        id: 7,
        label: 'Contact',
        link: '/card-features/technology-materials#contact',
      },
      {
        id: 9,
        label: 'Scratch Panel',
        link: '/card-features/technology-materials',
      },
    ],
  },
  {
    id: 12,
    label: 'Design Features',
    description:
      'FCI has the manufacturing capabilities of below special material and effects:',
    child: [
      {
        id: 13,
        label: 'Colored Core PVC',
        link: '/card-features/design-and-security-features#colored-pvc',
      },
      {
        id: 19,
        label: 'Special Die Shapes',
        link: '/card-features/design-and-security-features#shapes-cards',
      },
    ],
  },
];

const OPTIONS_RETAIL = [
  {
    id: 0,
    label: 'Card Materials',
    description:
      'Choosing the right card material is very important when it comes to the functioning of the card and the purpose that it is meant to serve.',
    child: [
      {
        id: 1,
        label: 'PVC (Plastic)',
        link: '/card-features/card-materials#pvc',
      },
      {
        id: 2,
        label: 'ECO PVC (Plastic)',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 3,
        label: 'PET-G',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 5,
        label: 'PET-F',
        link: '/card-features/card-materials#pet-f',
      },
    ],
  },
  {
    id: 6,
    label: 'Technology',
    description:
      'Advancements in technology paved the way for secure and reliable smart cards that dominate the different sectors of government, transportation, healthcare, retail, telecommunications and financial industries.',
    child: [
      {
        id: 7,
        label: 'Contact',
        link: '/card-features/technology-materials#contact',
      },
      {
        id: 8,
        label: 'Contactless',
        link: '/card-features/technology-materials#contactless',
      },
      {
        id: 9,
        label: 'Dual-Interface',
        link: '/card-features/technology-materials#dual-interface',
      },
      {
        id: 11,
        label: 'Magstripe',
        link: '/card-features/technology-materials#magnetic-stripe',
      },
    ],
  },
  {
    id: 12,
    label: 'Design Features',
    description:
      'FCI has the manufacturing capabilities of below special material and effects:',
    child: [
      {
        id: 13,
        label: 'Colored Core PVC',
        link: '/card-features/design-and-security-features#colored-pvc',
      },
      {
        id: 14,
        label: 'Holographic PVC',
        link: '/card-features/design-and-security-features#holographic',
      },
      {
        id: 15,
        label: 'Transparent PVC with special IR blocker',
        link: '/card-features/design-and-security-features#transparent-pvc',
      },
      {
        id: 16,
        label: 'Hot Stamping',
        link: '/card-features/design-and-security-features#hot-stamping',
      },
      {
        id: 17,
        label: 'Tactile/Spot UV',
        link: '/card-features/design-and-security-features#tactile',
      },
      {
        id: 18,
        label: 'Special Color Magstripes',
        link: '/card-features/design-and-security-features#magnetic-stripes',
      },
      {
        id: 19,
        label: 'Special Die Shapes',
        link: '/card-features/design-and-security-features#shapes-cards',
      },
      {
        id: 20,
        label: 'Aromatic & Touch Effect',
        link: '/card-features/design-and-security-features#aromatic',
      },
      {
        id: 21,
        label: 'Bejeweled',
        link: '/card-features/design-and-security-features#bejeweled',
      },
    ],
  },
];

const OPTIONS_GENERAL = [
  {
    id: 22,
    label: 'Solutions',
    description:
      'As an end-to-end card manufacturer, mixing technology with security printing craftsmanship, FutureCard covers the complete value chain of design and manufacturing of secure cards on all kind of substrates:',
    child: [
      {
        id: 23,
        label: 'Instant Issuance',
        link: '/our-solutions/card-management-systems/instant-issuance',
      },
      {
        id: 24,
        label: 'Central Issuance',
        link: '/our-solutions/card-management-systems/central-issuance',
      },
      {
        id: 25,
        label: 'Card Holders Enrollment',
        link:
          '/our-solutions/card-management-systems/cardholder-enrollment-system',
      },
      {
        id: 26,
        label: 'Card Lifecycle Management',
        link:
          '/our-solutions/card-management-systems/card-life-cycle-management',
      },
    ],
  },
  {
    id: 27,
    label: 'Our Services',
    description:
      'FutureCard completes its offering with complementary cards services and solutions, positionning itself as a one-stop-shop for all cards needs.',
    child: [
      {
        id: 28,
        label: 'Card Design',
        link: '/our-services/card-design',
      },
      {
        id: 29,
        label: 'Card Personalization',
        link: '/our-services/card-personalization',
      },
      {
        id: 30,
        label: 'Fulfillment Packaging',
        link: '/our-solutions/fulfillment-packaging',
      },
      {
        id: 31,
        label: 'Card Consulting',
        link: '/our-solutions/card-consulting',
      },
    ],
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

const BACKGROUND_IMG = {
  ABOUT_FACILITY:
    'https://res.cloudinary.com/dhjitwuqp/image/upload/v1569098161/futurecard.com/facility_capabilities.jpg',
  CAREERS:
    'https://res.cloudinary.com/dhjitwuqp/image/upload/v1569101218/futurecard.com/careers.jpg',
  IDENTIFICATION:
    'https://res.cloudinary.com/dhjitwuqp/image/upload/v1569102626/futurecard.com/identification.jpg',
  CONTACT_MAP:
    'https://res.cloudinary.com/dhjitwuqp/image/upload/v1569105135/futurecard.com/contact-map-fci.png',
  WHO_WE_ARE:
    'https://res.cloudinary.com/dhjitwuqp/image/upload/v1569102341/futurecard.com/who_we_are.jpg',
};

export {
  ADDRESSES,
  OPTIONS_PAYMENT,
  OPTIONS_IDENTIFICATION,
  OPTIONS_TRANSPORT,
  OPTIONS_TELECOM,
  OPTIONS_RETAIL,
  OPTIONS_GENERAL,
  LANGUAGE,
  NAVIGATION,
  BACKGROUND_IMG,
};
