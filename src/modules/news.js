import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const GET_NEWS = "news/GET_NEWS";
const GET_NEWS_SUCCESS = "news/GET_NEWS_SUCCESS";
const GET_NEWS_FAILURE = "news/GET_NEWS_FAILURE";

export const getNews = (category) => async (dispatch) => {
  const query = category === "all" ? "" : `&category=${category}`;
  
  dispatch({ type: GET_NEWS });
  try {
    const res = await api.getNews(query);
    dispatch({ type: GET_NEWS_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_NEWS_FAILURE, payload: e, error: true });
    throw e;
  }
};

const initialState = {
  news: null,
  categories: [
    {
      name: "all",
      text: "전체보기",
    },
    {
      name: "business",
      text: "비즈니스",
    },
    {
      name: "entertainment",
      text: "엔터테인먼트",
    },
    {
      name: "health",
      text: "건강",
    },
    {
      name: "science",
      text: "과학",
    },
    {
      name: "sports",
      text: "스포츠",
    },
    {
      name: "technology",
      text: "기술",
    },
  ],
  loading: false,
};

const news = handleActions(
  {
    [GET_NEWS]: (state) => ({
      ...state,
      loading: true,
    }),
    [GET_NEWS_SUCCESS]: (state, action ) => ({
      ...state,
      news: action.payload.articles,
      loading: false,
    }),
    [GET_NEWS_FAILURE]: (state) => ({
      ...state,
      loading: false,
    }),
  },
  initialState
);

export default news;
