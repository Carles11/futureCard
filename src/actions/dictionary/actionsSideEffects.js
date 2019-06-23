import getDic from '@src/utils/dictionaries';
import { handleLocalStorage } from '@src/utils/helpers';
import * as ACTION from './actions';

export const getDictionary = () => (dispatch) => {
  try {
    const language = handleLocalStorage('READ', 'lang');
    const dictionary = getDic(language);

    dispatch(ACTION.getDictionary(language, dictionary));
  } catch (error) {
    throw new Error();
  }
};

export const setDictionary = lang => (dispatch) => {
  try {
    handleLocalStorage('CREATE', 'lang', lang);
    const dictionary = getDic(lang);

    dispatch(ACTION.setDictionary(lang, dictionary));
  } catch (error) {
    throw new Error();
  }
};
