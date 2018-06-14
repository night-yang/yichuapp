import React from "react";
import Ponser from "../components/Ponser";
import { connect } from "react-redux";
const ponserContainer = props => <Ponser {...props} />;
const mapStateToProps = state => {
  return {
    ponser: state.ponser
  };
};
export default connect(mapStateToProps)(ponserContainer);
