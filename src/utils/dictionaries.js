import en from './dictionaries/en.json';
import es from './dictionaries/es.json';
import fr from './dictionaries/fr.json';

const dictionaries = {
  en,
  es,
  fr,
};

export default function getLanguage(lang) {
  return dictionaries[lang];
}
