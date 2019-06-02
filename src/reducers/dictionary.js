import getDictionary from '@src/utils/dictionaries';
import { getLocalStorage } from '@src/utils/helpers';
import * as ACTION from '../actions/dictionary/actionsType';

const lang = getLocalStorage('lang') ? getLocalStorage('lang') : 'en';

const INITIAL_STATE = {
  language: lang,
  data: getDictionary(lang),
};

export default function dictionaryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_DICTIONARY:
      return {
        language: action.language,
        data: action.dictionary,
      };
    default:
      return state;
  }
}
