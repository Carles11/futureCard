import * as ACTION from './actionsType';

export function getNews(news) {
  return { type: ACTION.GET_NEWS, news };
}

export function getOneNews(item) {
  return { type: ACTION.GET_ONE_NEWS, item };
}

export function errorNews(error) {
  return { type: ACTION.ERROR_NEWS, error };
}
