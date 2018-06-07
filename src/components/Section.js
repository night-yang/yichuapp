import React, { Component } from "react";
import { Route } from "react-router-dom";
import Shouye from "./Shouye";
import Massage from "./Massage";
import Topic from "./Topic";
import NewTopic from "./NewTopic";
import Ponser from "./Ponser";
class Section extends Component {
  render() {
    return (
      <div>
        <Route path="/home/" exact component={Shouye} />
        <Route path="/home/massage" component={Massage} />
        <Route path="/home/Topic" component={Topic} />
        <Route path="/home/newtopic" component={NewTopic} />
        <Route path="/home/ponser" component={Ponser} />
      </div>
    );
  }
}

export default Section;
