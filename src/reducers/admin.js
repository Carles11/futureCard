import * as ACTION from "@src/actions/admin/actionsType";
import CONFIG from "@src/config";

const localToken = localStorage.getItem(CONFIG.API_TOKEN_NAME)
  ? JSON.parse(localStorage.getItem(CONFIG.API_TOKEN_NAME))
  : "";

const INITIAL_STATE = {
  token: Object.keys(localToken).length ? localToken.token : "",
  users: {
    itemSelected: {},
    data: [],
    count: 0,
    message: ""
  },
  news: {
    itemSelected: {},
    data: [],
    count: 0,
    message: ""
  },
  careers: {
    itemSelected: {},
    data: [],
    count: 0,
    message: ""
  }
};

function adminReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION.LOG_IN:
      return {
        ...state,
        token: action.data.token,
        session: {
          username: action.data.username,
          id: action.data.id
        }
      };
    case ACTION.LOG_OUT:
      return {
        ...INITIAL_STATE,
        token: ""
      };
    case ACTION.SET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          data: action.users,
          count: action.count,
          message: action.message
        }
      };
    case ACTION.SET_USER:
      return {
        ...state,
        users: {
          ...state.users,
          itemSelected: action.user,
          message: action.message
        }
      };
    case ACTION.RESET_USER:
      return {
        ...state,
        users: {
          ...state.users,
          itemSelected: {}
        }
      };
    case ACTION.SET_NEWS:
      return {
        ...state,
        news: {
          ...state.news,
          data: action.news,
          count: action.count,
          message: action.message
        }
      };
    case ACTION.SET_ONE_NEWS:
      return {
        ...state,
        news: {
          ...state.news,
          itemSelected: action.oneNews,
          message: action.message
        }
      };
    case ACTION.RESET_ONE_NEWS:
      return {
        ...state,
        news: {
          ...state.news,
          itemSelected: {}
        }
      };
    case ACTION.SET_CAREERS:
      return {
        ...state,
        careers: {
          ...state.careers,
          data: action.careers,
          count: action.count,
          message: action.message
        }
      };
    case ACTION.SET_CAREER:
      return {
        ...state,
        careers: {
          ...state.careers,
          itemSelected: action.career,
          message: action.message
        }
      };
    case ACTION.RESET_CAREER:
      return {
        ...state,
        careers: {
          ...state.careers,
          itemSelected: {}
        }
      };
    default:
      return {
        ...state
      };
  }
}

export default adminReducer;
