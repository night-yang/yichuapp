import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
class Massage extends Component {
  render() {
    const { replay } = this.props;
    console.log(replay);
    const replayList = replay.map(t => (
      <div key={t.id}>
        <img src={t.picUrl} alt="" />
        <span>{t.name}</span>
        <span>{t.title}</span>
      </div>
    ));
    return (
      <Warpper>
        <header>
          <div>
            <span style={{ color: "#fff" }}>动态</span>
            <Link to="/home/chat">
              <span>聊天</span>
            </Link>
          </div>
        </header>
        <Top>
          <p>一起说：</p>
          <div className="content">
            <img
              style={{ width: "22vw", height: "17vh", borderRadius: "5px" }}
              src="http://i2.bvimg.com/648735/38924324af90bf91.jpg"
              alt=""
            />
            <div className="title">
              <div>
                <h3>让毒鸡汤给你醒醒脑</h3>
                <p>大家一起来聊聊</p>
              </div>
              <div style={{ marginTop: "3vh" }}>
                <span>最新更新</span>
                <p>虽然你又胖又矮</p>
              </div>
            </div>
          </div>
        </Top>
        <Replay>
          <p>
            <span>让他回复</span>
            <span>查看更多 ></span>
          </p>
          <div className="replaylist">{replayList}</div>
        </Replay>
        <News>动态动态</News>
      </Warpper>
    );
  }
}

export default Massage;
const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  height: 93.04vh;
  header {
    display: flex;
    background: url(http://i1.bvimg.com/648735/b731136763ea534d.png) no-repeat;
    width: 100vw;
    height: 8.6vh;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      width: 35vw;
      justify-content: space-between;
    }'
  }
`;
const Top = styled.div`
  padding: 5vw 3vh;
  border-bottom: 8px solid #eee;
  p {
    color: #bbb;
  }
  .content {
    display: flex;
    margin-top: 2vh;
  }
  .title {
    margin-left: 5vw;
    h3 {
      font-weight: normal;
      font-size: 18px;
    }
    p {
      font-size: 14px;
      color: #999;
      margin-top: 1vh;
    }
    span {
      color: #ccc;
    }
  }
`;
const Replay = styled.div`
  border-bottom: 8px solid #eee;
  p {
    display: flex;
    justify-content: space-between;
    padding: 1.3vh 8vw;
    color: #666;
  }
  .replaylist {
    display: flex;
    overflow: scroll;
    div {
      display: flex;
      flex-direction: column;
      margin-left: 5vw;
      justify-content: center;
      span {
        text-align: center;
        font-size: 14px;
        color: #777;
        margin-top: 0.6vh;
      }
      img {
        width: 33vw;
      }
    }
  }
`;
const News = styled.div`
  padding: 5vw 3vh;
`;
