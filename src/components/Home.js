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
  height: 100vh;
  header {
    background: url(http://i1.bvimg.com/648735/b731136763ea534d.png) no-repeat;
    width: 100vw;
    height: 8.6vh;
    text-align: center;
    img {
      width: 90vw;
      margin-top: 2.6vh;
    }
  }
  section {
    flex-grow: 1;
    overflow: scroll;
    banner {
      img {
        width: 100%;
      }
    }
  }
`;
