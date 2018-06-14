import React from "react";
import Massage from "../components/Massage";
import { connect } from "react-redux";
const MassagesCantainer = props => {
  return <Massage {...props} />;
};
const mapStateToProps = state => ({
  replay: state.replay
});

export default connect(mapStateToProps)(MassagesCantainer);
