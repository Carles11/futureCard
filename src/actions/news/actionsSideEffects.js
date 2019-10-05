import api from "@src/utils/API";
import * as ACTION from "./actions";

export const getNews = () => async dispatch => {
  try {
    const news = await api.get("news");
    dispatch(ACTION.getNews(news));
  } catch (error) {
    dispatch(ACTION.errorNews(error.message));
  }
};

export const getOneNews = id => async (dispatch) => {
  try {
    const news = await api.get(`news/${id}`);
    console.log(news);
    dispatch(ACTION.getOneNews(news.data));
  } catch (error) {
    dispatch(ACTION.errorNews(error.message));
  }
};
