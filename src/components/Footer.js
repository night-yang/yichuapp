import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
class Footer extends Component {
  state = {
    data: [
      {
        id: 1,
        footerbg: "http://i1.bvimg.com/648735/ad1be5ad3e5b213d.png",
        activebg: "http://i1.bvimg.com/648735/6d578d6fdc852398.png",
        linkto: "/home/"
      },
      {
        id: 2,
        footerbg: "http://i1.bvimg.com/648735/a774b5a2b17e9340.png",
        activebg: "http://i1.bvimg.com/648735/69a763232fffcfec.png",
        linkto: "/home/massage"
      },
      {
        id: 3,
        footerbg: "http://i1.bvimg.com/648735/96432af1a72a5d35.png",
        activebg: "",
        linkto: "/home/newtopic"
      },
      {
        id: 4,
        footerbg: "http://i1.bvimg.com/648735/1b209802f1e54f0e.png",
        activebg: " http://i1.bvimg.com/648735/df27b6c50cd215fc.png",
        linkto: "/home/Topic"
      },
      {
        id: 5,
        footerbg: "http://i1.bvimg.com/648735/d0c2eba2f7f0f988.png",
        activebg: "http://i1.bvimg.com/648735/cf5f76c14c850ef0.png",
        linkto: "/home/ponser"
      }
    ]
  };
  render() {
    const footerList = this.state.data.map(t => (
      <NavLink
        key={t.id}
        exact={t.id === 1 ? true : false}
        to={t.linkto}
        style={{
          width: "16vw",
          height: "6.8vh",
          backgroundImage: `url(${t.footerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain"
        }}
        activeStyle={{
          backgroundImage: `url(${t.activebg})`
        }}
      />
    ));
    return <Wrapper>{footerList}</Wrapper>;
  }
}

export default Footer;
const Wrapper = styled.div`
  width: 100vw;
  height: 6.95vh;
  display: flex;
  justify-content: space-around;
  a {
    display: block;
  }
`;
