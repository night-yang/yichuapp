import React, { Component } from "react";
import { Route } from "react-router-dom";
import Guide from "./Guide";
import Login from "./Login";
import Home from "../components/Home";
import articleContainer from "../containers/articleContainer";

class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Guide} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/shouye/:id" component={articleContainer} />
      </div>
    );
  }
}

export default Main;
