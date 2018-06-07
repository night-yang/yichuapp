import React, { Component } from "react";
import Main from "../components/Main";
import { connect } from "react-redux";
import { loadArticles, loadPonsers } from "../actions";
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  componentDidMount() {
    this.props.loadArticles();
    this.props.loadPonsers();
  }

  render() {
    return (
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { loadArticles, loadPonsers }
)(App);
