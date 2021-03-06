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
      fontFamily: "Fredericka the Great",
      fontStyle: "cursive",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#3E262A",
      fontSize: "50px"
    }
    const titleSize={
      width: "100vw",
      height: "60px"
    }
    const bodyStyle={
      width: "89%",
      minHeight: "100vh",
      background: "#FAE0EE",
      fontFamily: "Raleway",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#3E262A"
    }
    const bodyStyleMobile={
      width: "100%",
      minheight: "100vh",
      background: "#FAE0EE",
      fontFamily: "Raleway",
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
        <Helmet title="Home" meta={[{ name: 'MrsVerbeck.com', content: 'Who Is Mrs. Verbeck?' }]}/>

      <Responsive minDeviceWidth={1024}>
      <header>
          <span style={titleStyle}>
            <img style={animeStyle} src="http://h4z.it/Image/7a075b_IMG_0630.JPG"/>
          <div style={headingStyle}>
            Hello & Welcome!
          </div>
          </span>
        </header>
          <main style={mainStyle}>
            <NavBar activeItem="1"/>
            <div style={bodyStyle}>
              <div style={indentStyle}>
                My name is Suzette. I am a wife, mother, registered nurse, certified case manager, entrepreneur and tech gadget lover. My Husband and I are passionate about supporting artists in our community. Professionally I strive to help improve healthcare.
              <br/>
              <br/>
                  Please check out the Blog page to see articles I have written.
              <br/>
              <br/>
                  On the Links page, I compiled some interesting websites with links.
              <br/>
                <img style={mainphotoStyle} src="http://h4z.it/Image/162d37_IMG_0492.JPG"/>
              <br/>
                Augusta is a beautiful place. Here is a photo I took from the bank of the Savannah River during a Sunday afternoon bike ride.
              <br/>
              <br/>
                The following video shows what Downtown Augusta looks like, from the Savannah River, at daybreak.
              <br/>
                <iframe src="https://player.vimeo.com/video/202378707" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/202378707">Good Morning Augusta</a> from <a href="https://vimeo.com/user46574359">map</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
              </div>
            </div>
          </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <header>
            <span style={titleStyle}>
              <img style={animeStyle} src="http://h4z.it/Image/7a075b_IMG_0630.JPG"/>
            <div style={headingStyle}>
              Hello!
            </div>
            </span>
          </header>

          <NavMobile active={1}/>
          <main style={mainStyle}>
            <div style={bodyStyleMobile}>
              <div style={indentStyle}>
                My name is Suzette. I am a wife, mother, registered nurse, certified case manager, entrepreneur and tech gadget lover. My Husband and I are passionate about supporting artists in our community. Professionally I strive to help improve healthcare.
              <br/>
              <br/>
                Please check out the Blog page to see articles I have written.
            <br/>
            <br/>
                On the Links page, I compiled some interesting websites with links.
              <br/>
                <img style={mainphotoStyleMobile} src="http://h4z.it/Image/162d37_IMG_0492.JPG"/>
              <br/>
                Augusta is a beautiful place. Here is a photo I took from the bank of the Savannah River during a Sunday afternoon bike ride.
              <br/>
              <br/>
                The following video shows what Downtown Augusta looks like, from the Savannah River, at daybreak.
              <br/>
                <iframe src="https://player.vimeo.com/video/202378707" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/202378707">Good Morning Augusta</a> from <a href="https://vimeo.com/user46574359">map</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
              </div>
            </div>
          </main>
        </Responsive>

      </div>
    );
  }
}
