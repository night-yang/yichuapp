import React, { Component } from "react";
import styled from "styled-components";
class Ponser extends Component {
  render() {
    const { ponser } = this.props;
    const sjList = ponser.map(t => (
      <div
        style={{ display: "flex", alignItems: "center", padding: "3% 0" }}
        key={t.id}
      >
        <img style={{ width: "8%" }} src={t.src} alt="" />
        <span style={{ flexGrow: "0", marginLeft: "3%" }}>{t.title}</span>
        <span
          style={{
            color: "teal",
            fontSize: "13px",
            flexGrow: "1",
            marginLeft: "3%"
          }}
        >
          {t.body}
        </span>
        <span style={{ color: "teal", fontSize: "13px", flexGrow: "0" }}>
          {t.num} >{" "}
        </span>
      </div>
    ));
    return (
      <Wrapper>
        <div
          style={{
            width: "100%",
            backgroundColor: "#00b3d4",
            borderRadius: " 0 0 20px 20px"
          }}
        >
          <div
            style={{
              width: "90%",
              padding: "7% 0",
              color: "#fff",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>添加好友</span>
            <span>我</span>
            <span>设置</span>
          </div>
          <div
            style={{
              width: "80%",
              backgroundColor: "#00b3d4",
              margin: "0 auto",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              src="http://i4.bvimg.com/648795/dde42e81edef51c5.png"
              style={{ width: "20%", height: "20%" }}
              alt=""
            />
            <div style={{ marginLeft: "2%" }}>
              <p style={{ color: "#fff", fontWeight: "500", paddingTop: "3%" }}>
                SuperHero
              </p>
              <p style={{ color: "cyan", fontSize: "12px" }}>
                简介:努力努力再努力
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              width: "80%",
              margin: "0 auto",
              justifyContent: "space-between",
              paddingBottom: "7%",
              color: "cyan"
            }}
          >
            <p>
              313 <br />
              我的回信
            </p>
            <p>
              34 <br />
              我关注的人
            </p>
            <p>
              672 <br />
              关注我的人
            </p>
          </div>
        </div>
        <div style={{ width: "90%", margin: "0 auto", paddingBottom: "10%" }}>
          <p style={{ padding: "3% 0" }}>我的一处</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                style={{ width: "95%" }}
                src="http://i1.bvimg.com/648728/8ecb4085dca3ade7.jpg"
                alt=""
              />
              <p>一粒</p>
            </div>
            <div>
              <img
                style={{ width: "95%" }}
                src="http://i1.bvimg.com/648728/bbb74d8e8cd1db58.jpg"
                alt=""
              />
              <p>6/12</p>
            </div>
            <div>
              <img
                style={{ width: "95%" }}
                src="http://i1.bvimg.com/648728/56c49335238d306e.jpg"
                alt=""
              />
              <p>7/15</p>
            </div>
          </div>
        </div>
        <SzList style={{ width: "90%", margin: "0 auto" }}>{sjList}</SzList>
      </Wrapper>
    );
  }
}

export default Ponser;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 93.04vh;
  overflow: scroll;
`;
const SzList = styled.div`
  grow: 1;
`;
