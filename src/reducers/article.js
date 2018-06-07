const articles = (state = [], action) => {
  switch (action.type) {
    case "LOAD_ARTICLE":
      return action.articles;
    default:
      return state;
  }
};
export default articles;
