/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";

export default class Home extends React.PureComponent {
  render() {
    const divStyle={
      width:"200px",
      height:"400px",
      background:"#3E262A"
    }
    const titleStyle={
      borderTop:"3px solid #74D1EA",
      borderBottom:"3px solid #74D1EA",
      background: "#FAE0EE",
      display: "flex",
      flexDirection: "row",
      fontFamily:"Raleway",
      fontWeight:"Bold",
      color: "#3E262A",
      fontSize: "48px"
    }
    const titleSize={
      width: "100vh",
      height: "60px"
    }
    const sideStyle={
      width: "10%",
      height: "100vh",
      background: "#B4938C"
    }
    const bodyStyle={
      width: "90%",
      height: "100vh",
      background: "#FAE0EE",
      fontFamily: "Josefin Slab",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#3E262A"
    }
    const mainStyle={
      display: "flex",
      flexDirection: "row"
    }
    const footerStyle={
      background: "#74D1EA",
      position: "fixed",
      bottom: "10px",
      right: "10px",
      padding: "15px",
      borderRadius: "50px"
    }
    const animeStyle={
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      margin: "3px"
    }
    const mainphotoStyle={
      borderRadius: "2%",
      width: "450px",
      height: "300px",
      margin: "15px"
    }
    const headingStyle={
      margin: "15px"
    }
    const indentStyle={
      margin: "15px"
    }
    const linkStyle={
      textDecoration: "none",
      fontFamily: "Raleway",
      fontWeight: "Medium",
      fontSize: "20px",
      color: "#ffffff",
      display: "block",
      margin: "20px",
      paddingTop: "10px"
    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
        <span style={titleStyle}>
            <img style={animeStyle} src="http://h4z.it/Image/7a075b_IMG_0630.JPG"/>
          <div style={headingStyle}>
            Hello World!
          </div>
        </span>
        </header>
        <main style={mainStyle}>
          <div style={sideStyle}>
          <nav>
            <div>
            <Link style={linkStyle} to="/"> Home </Link>
            <Link style={linkStyle} to="/about"> About </Link>
            <Link style={linkStyle} to="/links"> Links </Link>
            </div>
          </nav>
          </div>
          <div style={bodyStyle}>
            <div style={indentStyle}>
              My name is Suzette. I am creating my first personal website. a;dlsfkja;lsdkfja;ldjsdsfkjahdfsoijaewrj;ldasfj;dkas;lasdkjfkldasfj;ldjesdka s;ldkjsf;larjegnfadkijbhvs oikdfjrtga;lsnjbdvklndp;fsgkjaosijtgfa;lbja;dfo;airjet klna;lnstg;ldksgfj;aldskjbvaspoi. rajt;lasdmkftgp;asdlkrftmgtasdreoijasd;lknhbspoijaswkldfjg;lmnboiretnja;ldkfgmnjklcvmspo;rgfim
            </div>
            <img style={mainphotoStyle}
            src="http://h4z.it/Image/162d37_IMG_0492.JPG"/>
          </div>
        </main>
        <footer style={footerStyle}>
              Contact
        </footer>
      </div>
    );
  }
}
