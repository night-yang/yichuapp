import React, { Component } from "react";
import { Route } from "react-router-dom";
import Shouyecontainer from "../containers/Shouyecontainer";
import NewTopic from "./NewTopic";
import MassagesCantainer from "../containers/MassagesCantainer";
import chatcontainer from "../containers/chatcontainer";
import TopicConyainer from "../containers/TopicConyainer";
import TableContainer from "../containers/TableContainer";
import ponserContainer from "../containers/ponserContainer";
class Section extends Component {
  render() {
    return (
      <div>
        <Route path="/home/" exact component={Shouyecontainer} />
        <Route path="/home/massage" component={MassagesCantainer} />
        <Route path="/home/Topic" component={TopicConyainer} />
        <Route path="/home/newtopic" component={NewTopic} />
        <Route path="/home/chat" component={chatcontainer} />
        <Route path="/home/table" component={TableContainer} />
        <Route path="/home/ponser" component={ponserContainer} />
      </div>
    );
  }
}

export default Section;
