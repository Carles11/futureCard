import * as ACTION from "./actionsType";

export function getDictionary(language, dictionary) {
  return { type: ACTION.GET_DICTIONARY, language, dictionary };
}

export function setDictionary(language, dictionary) {
  return { type: ACTION.SET_DICTIONARY, language, dictionary };
}
