const dictionaries = {
  en: {
    LANDING_TITLE: '16 years manufacturing cards',
    LANDING_SUBTITLE:
      'Since its inception in 2003, futurecard is designing, manufacturing and personalizing cards to banks, goverments, operators and retailers around the world.',
  },
};

export default function getLanguage(lang) {
  return dictionaries[lang];
}
