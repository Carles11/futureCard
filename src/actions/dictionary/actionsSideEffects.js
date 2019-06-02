import getDic from '@src/utils/dictionaries';
import { getLocalStorage } from '@src/utils/helpers';
import * as ACTION from './actions';

export const getDictionary = () => (dispatch) => {
  try {
    const language = getLocalStorage('lang');
    const dictionary = getDic(language);

    dispatch(ACTION.getDictionary(language, dictionary));
  } catch (error) {
    throw new Error();
  }
};

export const setDictionary = lang => (dispatch) => {
  try {
    const language = getLocalStorage(lang);
    const dictionary = getDic(language);

    dispatch(ACTION.setDictionary(language, dictionary));
  } catch (error) {
    throw new Error();
  }
};
