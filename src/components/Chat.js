import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
class Chat extends Component {
  render() {
    const { chat } = this.props;
    const chatList = chat.map(t => (
      <div className="every" key={t.id}>
        <img src={t.picUrl} alt="" />
        <div className="neirong">
          <span>{t.name}</span>
          <span>{t.content}</span>
        </div>
        <span>{t.time}</span>
      </div>
    ));
    return (
      <Warpper>
        <header>
          <div>
            <Link to="/home/massage">
              <span>动态</span>
            </Link>
            <span style={{ color: "#fff" }}>聊天</span>
          </div>
        </header>
        <Content>{chatList}</Content>
      </Warpper>
    );
  }
}

export default Chat;
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
const Content = styled.div`
  .every {
    display: flex;
    padding: 6vw 0.6vh;
  }
  .neirong {
    display: flex;
  }
  img {
    width: 12vw;
    height: 12vw;
  }
`;
