import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import u1 from "../assets/images/u1.png";
import u2 from "../assets/images/u2.png";
import u3 from "../assets/images/u3.png";
import u4 from "../assets/images/u4.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
class Guide extends Component {
  state = {
    data: ["1", "2", "3", "4"]
  };
  render() {
    const imgArr = [u1, u2, u3, u4];
    return (
      <WingBlank style={{ width: "100%", margin: "0" }}>
        <Carousel
          autoplay={false}
          infinite={false}
          cellSpacing={0}
          slideWidth={1}
          dots={false}
        >
          {this.state.data.map(val => (
            <div key={val} style={{ position: "relative" }}>
              <Link
                style={val === "4" ? { display: "block" } : { display: "none" }}
                to="/login"
              >
                <Enter />
              </Link>
              <img
                src={imgArr[Number(val) - 1]}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "100%" });
                }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Guide;
const Enter = styled.div`
  width: 26vw;
  height: 5vh;
  background-color: red;
  opacity: 0;
  position: absolute;
  left: 37vw;
  top: 72vh;
`;
