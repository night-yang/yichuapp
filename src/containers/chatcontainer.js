import React from "react";
import { connect } from "react-redux";
import Chat from "../components/Chat";
const chatcontainer = props => {
  return <Chat {...props} />;
};
const mapStateToProps = state => ({
  chat: state.chat
});

export default connect(mapStateToProps)(chatcontainer);
