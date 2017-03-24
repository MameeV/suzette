/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import IconButton from 'material-ui/IconButton';
import Burger from 'material-ui/svg-icons/Navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MessageButton from 'components/MessageButton';
import NavBar from 'components/NavBar';
import NavMobile from 'components/NavMobile';

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
    const bodyStyle={
      width: "88%",
      height: "100vh",
      background: "#FAE0EE",
      fontFamily: "Josefin Slab",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#3E262A"
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
    const mainStyle={
      display: "flex",
      flexDirection: "row"
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
    const mainphotoStyleMobile={
      borderRadius: "2%",
      width: "100%",
      height: "300px"
    }
    const headingStyle={
      margin: "15px"
    }
    const indentStyle={
      margin: "15px"
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

        <Responsive minDeviceWidth={1024}>
          <main style={mainStyle}>
            <NavBar activeItem="1"/>
            <div style={bodyStyle}>
              <div style={indentStyle}>
                My name is Suzette. I am a wife (of 28 years), mother (for 2 adult sons), registered nurse, certified case manager, entrepreneur and tech gadget lover. My Husband and I are passionate about supporting artists in our Augusta, GA community. Professionally I am working to help improve healthcare.
              <br/>
                <img style={mainphotoStyle} src="http://h4z.it/Image/162d37_IMG_0492.JPG"/>
              <br/>
                Here is a photo I took on the bank of the Savannah River during a Sunday afternoon bike ride.
              </div>
            </div>
          </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <NavMobile/>
          <main style={mainStyle}>
            <div style={bodyStyleMobile}>
              <div style={indentStyle}>
                My name is Suzette. I am a wife (of 28 years), mother (for 2 adult sons), registered nurse, certified case manager, entrepreneur and tech gadget lover. My Husband and I are passionate about supporting artists in our Augusta, GA community. Professionally I am working to help improve healthcare.
              <br/>
                <img style={mainphotoStyleMobile} src="http://h4z.it/Image/162d37_IMG_0492.JPG"/>
              <br/>
                Here is a photo I took on the bank of the Savannah River during a Sunday afternoon bike ride.
              </div>
            </div>
          </main>
        </Responsive>

        <MessageButton/>

      </div>
    );
  }
}
