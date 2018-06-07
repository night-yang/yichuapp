import React from "react";
import Shouye from "../components/Shouye";
import { connect } from "react-redux";
const HomeContainer = props => {
  return <Shouye {...props} />;
};
const mapStateToProps = state => ({
  articles: state.articles,
  ponsers: state.ponsers
});
export default connect(mapStateToProps)(HomeContainer);
