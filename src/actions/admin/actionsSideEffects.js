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
    const { data, count, message } = await api.get('news');
    dispatch(ACTION.setNews(data, count, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const createNews = obj => async (dispatch) => {
  try {
    const body = new FormData();
    if (obj.file) body.append('file', obj.file, obj.file.name);
    body.append('title', obj.title);
    body.append('text', obj.text);
    body.append('link', obj.link);
    body.append('creator', obj.creator);

    const { data, success } = await api.post('news', body);
    if (success) {
      return dispatch(ACTION.setOneNews(data, 'UPDATED'));
    }
    throw new Error('Something went wrong');
  } catch (error) {
    throw new Error('Somthing went wrong');
  }
};

export const updateNews = (id, obj) => async (dispatch) => {
  try {
    const body = new FormData();
    if (obj.file) body.append('file', obj.file, obj.file.name);
    body.append('title', obj.title);
    body.append('text', obj.text);
    body.append('link', obj.link);
    body.append('creator', obj.creator);

    const { data, success } = await api.put(`news/${id}`, body);

    if (success) {
      return dispatch(ACTION.setOneNews(data, 'UPDATED'));
    }
    throw new Error('Something went wrong');
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

export const deleteNews = id => async (dispatch) => {
  try {
    const { data, message } = await api.delete(`news/${id}`);
    dispatch(ACTION.setNews(data, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

/** CAREERS */
export const getCareers = () => async (dispatch) => {
  try {
    const { data, count, message } = await api.get('careers');
    dispatch(ACTION.setCareers(data, count, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const createCareer = obj => async (dispatch) => {
  try {
    const body = new FormData();
    if (obj.file) body.append('file', obj.file, obj.file.name);
    body.append('title', obj.title);
    body.append('text', obj.text);
    body.append('link', obj.link);
    body.append('creator', obj.creator);

    const { data, success } = await api.post('careers', body);
    if (success) {
      return dispatch(ACTION.setCareer(data, 'UPDATED'));
    }
    throw new Error('Something went wrong');
  } catch (error) {
    throw new Error('Somthing went wrong');
  }
};

export const updateCareer = (id, obj) => async (dispatch) => {
  try {
    const body = new FormData();
    if (obj.file) body.append('file', obj.file, obj.file.name);
    body.append('title', obj.title);
    body.append('text', obj.text);
    body.append('link', obj.link);
    body.append('creator', obj.creator);

    const { data, success } = await api.put(`careers/${id}`, body);

    if (success) {
      return dispatch(ACTION.setCareer(data, 'UPDATED'));
    }
    throw new Error('Something went wrong');
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getCareer = id => async (dispatch) => {
  try {
    const { data, message } = await api.get(`careers/${id}`);
    dispatch(ACTION.setCareer(data, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const deleteCareer = id => async (dispatch) => {
  try {
    const { data, message } = await api.delete(`career/${id}`);
    dispatch(ACTION.setCareers(data, message));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
