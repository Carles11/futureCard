import * as ACTION from './actionsType';

export const logIn = data => ({
  type: ACTION.LOG_IN,
  data,
});

export const logOut = () => ({
  type: ACTION.LOG_OUT,
});

export const setUsers = (users, count, message) => ({
  type: ACTION.SET_USERS,
  users,
  count,
  message,
});

export const setUser = (user, message) => ({
  type: ACTION.SET_USER,
  user,
  message,
});

export const resetUser = () => ({
  type: ACTION.RESET_USER,
});

export const setNews = (news, message) => ({
  type: ACTION.SET_NEWS,
  news,
  message,
});

export const setOneNews = (oneNews, message) => ({
  type: ACTION.SET_ONE_NEWS,
  oneNews,
  message,
});

export const setCareers = (careers, message) => ({
  type: ACTION.SET_CAREERS,
  careers,
  message,
});
