import * as ACTION from "../actions/careers/actionsType";

const INITIAL_STATE = {
  success: false,
  data: [],
  item: {},
  count: 0
};

export default function careerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_CAREERS:
      return {
        ...state,
        data: action.careers.data,
        success: action.careers.success,
        count: action.careers.count
      };
    default:
      return {
        ...state
      };
  }
}
