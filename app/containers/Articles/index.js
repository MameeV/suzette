/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import NavBar from 'components/NavBar';
import NavMobile from 'components/NavMobile';
import MessageButton from 'components/MessageButton';
import Head2 from 'components/Head2';

export default class Articles extends React.PureComponent {
  render() {
  const footerStyle={
    background: "#74D1EA",
    position: "fixed",
    bottom: "10px",
    right: "10px",
    padding: "15px",
    borderRadius: "50px"
  }
  const mainStyle={
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px"
  }
  const bodyStyle={
    width: "88%",
    height: "100vh",
    background: "#FAE0EE",
    fontFamily: "Josefin Slab",
    fontWeight: "Bold",
    fontSize: "20px",
    color: "#3E262A"
  }
  const indentStyle={
    margin: "15px"
  }
  const bodyStyleMobile={
    width: "100%",
    height: "100vh",
    background: "#FAE0EE",
    fontFamily: "Josefin Slab",
    fontWeight: "Bold",
    fontSize: "20px",
    color: "#3E262A"
  }
    return (
      <div>

        <Helmet title="Articles" meta={[ { name: 'description', content: 'Description of Articles' }]}/>
      <Head2 title="My Articles"/>
      <main>
      <Responsive minDeviceWidth={1024}>
        <main style={mainStyle}>
          <NavBar/>
          <div style={bodyStyle}>
            <div style={indentStyle}>
              Enter article copy here.
            </div>
          </div>
        </main>
      </Responsive>

      <Responsive maxDeviceWidth={1023}>
        <NavMobile/>
        <main style={mainStyle}>
          <div style={bodyStyleMobile}>
            <div style={indentStyle}>
              Enter article copy here.
            </div>
          </div>
        </main>
      </Responsive>
      </main>

      <MessageButton/>

      </div>
    );
  }
}
