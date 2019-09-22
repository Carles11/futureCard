import * as ACTION from '../actions/cards/actionsType';

const INITIAL_STATE = {
  lang: '',
  payment: [],
  identification: [],
  transport: [],
  telecom: [],
  retail: [],
};

export default function cardsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_CARDS:
      return {
        ...state,
        lang: action.lang,
        [action.code]: [...action.cards],
      };
    default:
      return {
        ...state,
      };
  }
}
