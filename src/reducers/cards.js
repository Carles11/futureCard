import * as ACTION from "../actions/cards/actionsType";

const INITIAL_STATE = {
  lang: "",
  payment: [],
  identification: [],
  transport: [],
  telecom: [],
  retail: [],
  all: [],
  count: 0
};

export default function cardsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_CARDS:
      return {
        ...state,
        lang: action.lang,
        [action.code]: [...action.cards]
      };
    case ACTION.GET_ALL_CARDS:
      return {
        ...state,
        all: [...action.cards],
        count: action.count
      };
    default:
      return {
        ...state
      };
  }
}
