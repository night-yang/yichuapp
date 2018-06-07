import React, { Component } from "react";
import styled from "styled-components";
import bannerimg from "../assets/images/banner.jpeg";
class Shouye extends Component {
  render() {
    const { articles } = this.props;
    return (
      <Wrapper>
        <header>
          <img src="http://i1.bvimg.com/648735/ca700b53fe85032a.png" alt="" />
        </header>
        <section>
          <div>
            <img src={bannerimg} alt="" />
          </div>
          <nav>
            <span>音乐</span> <span>播放</span> <span>文章</span>{" "}
            <span>电台</span> <span>排行榜</span>
          </nav>
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
  nav {
    margin: 1vh 0;
    display: flex;
    font-size: 18px;
    line-height: 30px;
    color: #333;
    justify-content: space-around;
  }
`;
