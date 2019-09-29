import api from '@src/utils/API';
import CONFIG from '@src/config';
import * as ACTION from './actions';

export const logIn = body => async (dispatch) => {
  try {
    const response = await api.logIn(body);
    dispatch(ACTION.logIn(response.data));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const logOut = () => async (dispatch) => {
  try {
    localStorage.removeItem(CONFIG.API_TOKEN_NAME);
    dispatch(ACTION.logOut(''));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

/** USERS */
export const getUsers = () => async (dispatch) => {
  try {
    const { data, count, message } = await api.get('users');
    dispatch(ACTION.setUsers(data, count, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const createUser = body => async (dispatch) => {
  try {
    const { data, success } = await api.post('users', body);
    if (success) {
      return dispatch(ACTION.setUser(data, 'UPDATED'));
    }
    throw new Error('Something went wrong');
  } catch (error) {
    throw new Error('Somthing went wrong');
  }
};

export const updateUser = (id, body) => async (dispatch) => {
  try {
    const { data, success } = await api.put(`users/${id}`, body);

    if (success) {
      return dispatch(ACTION.setUser(data, 'UPDATED'));
    }
    throw new Error('Something went wrong');
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getUser = id => async (dispatch) => {
  try {
    const { data, message } = await api.get(`users/${id}`);
    dispatch(ACTION.setUser(data, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const deleteUser = id => async (dispatch) => {
  try {
    const { data, message } = await api.delete(`users/${id}`);
    dispatch(ACTION.setUsers(data, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

/** NEWS */
export const getNews = () => async (dispatch) => {
  try {
    const { data, message } = await api.get('news');
    dispatch(ACTION.setNews(data, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getOneNews = id => async (dispatch) => {
  try {
    const { data, message } = await api.get(`news/${id}`);
    dispatch(ACTION.setOneNews(data, message));
  } catch (error) {
    throw new Error('Somethig went wrong');
  }
};

/** CAREERS */
export const getCareers = () => async (dispatch) => {
  try {
    const { data, message } = await api.get('careers');
    dispatch(ACTION.setCareers(data, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
