import * as ACTION from '../actions/features/actionsType';

const INITIAL_STATE = {
  lang: '',
  technology: [],
  materials: [],
  design: [],
};

export default function featuresReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_FEATURES:
      return {
        ...state,
        lang: action.lang,
        [action.code]: [...action.features],
      };
    default:
      return {
        ...state,
      };
  }
}
