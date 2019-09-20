import { combineReducers } from 'redux';

import contact from './contact';
import products from './products';
import dictionary from './dictionary';
import theme from './theme';
import location from './location';
import career from './career';
import news from './news';
import cards from './cards';

export default combineReducers({
  products,
  dictionary,
  theme,
  location,
  contact,
  career,
  news,
  cards,
});
