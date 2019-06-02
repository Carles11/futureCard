import * as ACTION from './actionsType';

export function getDictionary(language, dictionary) {
  return { type: ACTION.GET_DICTIONARY, payload: { language, dictionary } };
}

export function setDictionary(language, dictionary) {
  return { type: ACTION.SET_DICTIONARY, payload: { language, dictionary } };
}
