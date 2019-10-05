import * as ACTION from "./actionsType";

export function getCards(cards, code, lang) {
  return {
    type: ACTION.GET_CARDS,
    cards,
    code,
    lang
  };
}

export function getAllCards(cards, count) {
  return {
    type: ACTION.GET_ALL_CARDS,
    cards,
    count
  };
}
