import en from './dictionaries/en.json';
import es from './dictionaries/es.json';

const dictionaries = {
  en: {
    LANDING_TITLE: '17 YEARS MANUFACTURING CARDS',
    LANDING_SUBTITLE:
      'Since its inception in 2003, futurecard is designing, manufacturing and personalizing cards to banks, goverments, operators and retailers around the world.',
    PRODUCTS_TITLE: 'Products',
    SERVICES_TITLE: 'Services',
    CONTACT_TITLE: 'Contact',
    CONTACT_SUBTITLE: 'Let´s talk!',
    NEWS_TITLE: 'News',
  },
};

export default function getLanguage(lang) {
  return dictionaries[lang];
}
