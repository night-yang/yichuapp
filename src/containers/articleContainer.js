import React from "react";
import { connect } from "react-redux";
import Article from "../components/Article";
const articleContainer = props => {
  return <Article {...props} />;
};
const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps)(articleContainer);
