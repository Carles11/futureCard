import { combineReducers } from 'redux';

import products from './products';
import dictionary from './dictionary';
import theme from './theme';
import contact from './contact';

export default combineReducers({
  products, dictionary, theme, contact,
});
