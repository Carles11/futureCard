import { combineReducers } from 'redux';

import products from './products';
import dictionary from './dictionary';
import theme from './theme';
import location from './location';

export default combineReducers({
  products, dictionary, theme, location,
});
