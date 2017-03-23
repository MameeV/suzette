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

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      menuOpen: false
    }
  }

  handleMenu = () => {
    this.setState({
      menuOpen: true
    })
  }

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
      width: "12%",
      height: "100vh",
      background: "#B4938C"
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
    const footerStyle={
      background: "#74D1EA",
      position: "fixed",
      bottom: "10px",
      right: "10px",
      padding: "15px",
      borderRadius: "50px",
      fontFamily: "Raleway",
      fontWeight: "Bold",
      fontStyle: "Italic",
      fontSize: "100%",
      color: "#B4938C"
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
    const topBurger={
      background: "#B4938C"
    }
    const linkStyleMobile={
      background: "#FAE0EE",
      textDecoration: "none",
      fontFamily: "Raleway",
      fontWeight: "Bold",
      fontSize: "100%",
      color: "#B4938C",
    }
    const drawerStyle={
      background: "#FAE0EE"
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

          <Responsive maxDeviceWidth={1023}>
              <nav>
                <div style={topBurger}>
                  <IconButton onTouchTap={this.handleMenu}> <Burger/> </IconButton>
                </div>
                <Drawer
                  containerStyle={drawerStyle}
                  docked={false}
                  width={90}
                  open={this.state.menuOpen}
                  onRequestChange={(menuOpen) => this.setState({menuOpen})}
                >
                  <MenuItem>
                    <Link style={linkStyleMobile} to="/articles"> Articles </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link style={linkStyleMobile} to="/links"> Links </Link>
                  </MenuItem>
              </Drawer>
              </nav>
          </Responsive>

          <Responsive minDeviceWidth={1024}>
            <main style={mainStyle}>
              <div style={sideStyle}>
                <nav>
                  <div>
                  <Link style={linkStyle} to="/articles"> Articles </Link>
                  <Link style={linkStyle} to="/links"> Links </Link>
                  </div>
                </nav>
              </div>
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

        <footer style={footerStyle}>
              Message Me!
        </footer>
      </div>
    );
  }
}
