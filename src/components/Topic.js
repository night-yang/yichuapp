import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import tuijian from "../assets/images/tuiijian.jpeg";
import styled from "styled-components";
class Topic extends Component {
  render() {
    const { topic } = this.props;
    const topicList = topic.map(t => (
      <div
        style={{ width: "90%", margin: "0 auto", paddingTop: "10%" }}
        key={t.id}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={t.src} style={{ width: "8%" }} alt="" />
          <span style={{ marginLeft: "3%" }}>{t.name}</span>
        </div>
        <p style={{ fontSize: "17px" }}>{t.title}</p>
        <p style={{ color: "#696969", marginTop: "5%" }}>{t.body}</p>
        <p style={{ color: "#C0C0C0", marginTop: "3%" }}>{t.time}</p>
      </div>
    ));
    return (
      <Wrapper>
        <div className="wrap" style={{ paddingBottom: "18%" }}>
          <div
            style={{
              backgroundImage: `url(http://i1.bvimg.com/648735/b731136763ea534d.png)`,
              paddingTop: "6%",
              paddingBottom: "6%",
              backgroundSize: "cover",
              width: "100%"
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <div>
                <NavLink
                  style={{ color: "black" }}
                  to="/home/Topic"
                  exact
                  activeStyle={{ color: "#fff" }}
                >
                  推荐
                </NavLink>
              </div>
              <div>
                <NavLink
                  style={{ color: "black" }}
                  to="/home/table"
                  activeStyle={{ color: "#fff" }}
                >
                  圆桌
                </NavLink>
              </div>
            </div>
          </div>
          <img src={tuijian} style={{ width: "100%" }} alt="" />
          <div>{topicList}</div>
        </div>
      </Wrapper>
    );
  }
}

export default Topic;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 93.04vh;
  overflow: scroll;
`;
