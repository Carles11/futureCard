import * as ACTION from '../actions/news/actionsType';

const INITIAL_STATE = {
  success: false,
  data: [],
  item: {},
  count: 0,
};

export default function newsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.GET_NEWS:
      return {
        ...state,
        data: action.news.data,
        success: action.news.success,
        count: action.news.count,
      };
    case ACTION.GET_ONE_NEWS:
      console.log(action);
      return {
        ...state,
        item: { ...action.item },
      };
    default:
      return {
        ...state,
      };
  }
}
