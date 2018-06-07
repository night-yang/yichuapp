import React, { Component } from "react";
import styled from "styled-components";
import bannerimg from "../assets/images/banner.jpeg";
class Shouye extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <img src="http://i1.bvimg.com/648735/ca700b53fe85032a.png" alt="" />
        </header>
        <section>
          <div>
            <img src={bannerimg} alt="" />
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default Shouye;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 93.04vh;
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
    div {
      img {
        width: 100%;
      }
    }
  }
`;
