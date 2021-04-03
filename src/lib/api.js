import axios from "axios";

export const getNews = (query) =>
  axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9fecc73829dd4bf3a4dab2ffd17e0572`
  );
