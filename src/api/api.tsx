import axios from 'axios';
export const getList =(page:number) =>
  axios.get(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
  );