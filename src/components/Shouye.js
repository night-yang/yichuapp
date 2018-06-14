import React, { Component } from "react";
import styled from "styled-components";
import bannerimg from "../assets/images/banner.jpeg";
import { Link } from "react-router-dom";
class Shouye extends Component {
  render() {
    const { articles } = this.props;
    console.log(articles);
    const articlesList = articles.map(t => (
      <div key={t.id} style={{ marginTop: "2vh" }}>
        <Top>
          <span style={{ color: "rgb(37, 226, 201)" }}>| 浮世绘</span>
          <span className="author">
            {t.author}
            <img style={{ width: "8vw" }} src={t.authorimg} alt="" />
          </span>
        </Top>
        <Link
          to={{
            pathname: `/shouye/${t.id}`
          }}
        >
          <Content>
            <div style={{ width: "45vw" }}>
              <h3>{t.title}</h3> <p>{t.jianjie}</p>
            </div>
            <img style={{ width: "40vw" }} src={t.picurl} alt="" />
          </Content>
        </Link>
      </div>
    ));
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
          <div>{articlesList}</div>
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
      text-align: center;
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
const Top = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
  .author {
    display: flex;
    align-items: center;
  }
`;
const Content = styled.div`
  display: flex;
  padding: 0 2vw;
  justify-content: space-between;
  align-items: center;
  margin-top: 3vh;
  h3 {
    font-weight: normal;
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: #999;
    margin-top: 3vh;
  }
`;
