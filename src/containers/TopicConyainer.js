import React from "react";
import Topic from "../components/Topic";
import { connect } from "react-redux";
const TopicConyainer = props => <Topic {...props} />;

const mapStateToProps = state => {
  return {
    topic: state.topic
  };
};
export default connect(mapStateToProps)(TopicConyainer);
