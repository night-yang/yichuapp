import React, { Component } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Section from "./Section";
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Section />
        <Footer />
      </Wrapper>
    );
  }
}

export default Home;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
