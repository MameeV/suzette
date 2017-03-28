/*
 *
 * Articles
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import NavMobile from 'components/NavMobile';
import MessageButton from 'components/MessageButton';

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
  const body2Style={
    width: "100%",
    height: "100vh",
    background: "#FAE0EE",
    fontFamily: "Raleway",
    fontWeight: "Bold",
    fontSize: "20px",
    color: "#3E262A",
    paddingTop: "30px",
    paddingLeft: "25px"
  }
  const headTextStyle={
    width: "100%",
    height: "80px",
    top: "auto",
    borderTop:"3px solid #74D1EA",
    borderBottom:"3px solid #74D1EA",
    background: "#FAE0EE",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Fredericka the Great",
    fontStyle: "cursive",
    fontWeight: "bold",
    fontSize: "40px",
    color: "#3E262A",
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: "10px"
  }
  const indentStyle={
    margin: "15px"
  }
    return (
      <div>
        <Helmet title="Articles" meta={[ { name: 'description', content: 'Description of Articles' }]}/>
        <div style={headTextStyle}>
          My Articles
        </div>
        <main>
        <NavMobile active={2}/>
          <div style={body2Style}>
            Enter article copy here.
          </div>
          <MessageButton/>
        </main>
      </div>
    );
  }
}
