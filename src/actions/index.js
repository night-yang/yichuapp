import axios from "axios";
export const loadArticles = () => {
  return dispatch => {
    const uri =
      "https://raw.githubusercontent.com/night-yang/yichuapp/master/data/articles.json";
    axios.get(uri).then(res => {
      const articles = res.data.article;
      dispatch({ type: "LOAD_ARTICLES", articles });
    });
  };
};
export const loadPonsers = () => {
  return dispatch => {
    const uri =
      " https://raw.githubusercontent.com/night-yang/yichuapp/master/data/ponser.json";
    axios.get(uri).then(res => {
      const ponsers = res.data;
      dispatch({ type: "LOAD_PONSERS", ponsers });
    });
  };
};
