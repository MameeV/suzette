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
      fontFamily:"Merriweather"
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
      background: "#FAE0EE"
    }
    const mainStyle={
      display: "flex",
      flexDirection: "row"
    }
    const footerStyle={
      width: "100%",
      height: "20px",
      background: "#74D1EA"
    }
    const animeStyle={
      borderRadius: "50%",
      width: "100px",
      height: "100px"
    }
    const mainphotoStyle={
      borderRadius: "2%",
      width: "450px",
      height: "300px",
      margin: "15px"
    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
        <span style={titleStyle}>
            <img style={animeStyle} src="http://h4z.it/Image/7a075b_IMG_0630.JPG"/>
          <div>
            Hello World! My Name is Suzette
          </div>
        </span>
        </header>
        <main style={mainStyle}>
          <div style={sideStyle}>
          <nav>
            <div>
            <Link to="/"> Home </Link>
            </div>
            <Link to="/about"> About </Link>
          </nav>
          </div>
          <div style={bodyStyle}>
            <div>
              Creating my first personal website
            </div>
            <img style={mainphotoStyle}
            src="http://h4z.it/Image/162d37_IMG_0492.JPG"/>
          </div>
        </main>
        <footer style={footerStyle}>
            <div>
              Created by Suzette Verbeck
            </div>
        </footer>
      </div>
    );
  }
}
