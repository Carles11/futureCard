import api from '@src/utils/API';
import * as ACTION from './actions';

export const getCards = (code, lang) => async (dispatch) => {
  try {
    const cards = await api.get(`cards?code=${code}&lang=${lang}`);
    dispatch(ACTION.getCards(cards.data, code, lang));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getAllCards = () => async (dispatch) => {
  try {
    const { data, count } = await api.get('cards');
    dispatch(ACTION.getAllCards(data, count));
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
