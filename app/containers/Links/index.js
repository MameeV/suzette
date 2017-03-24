/*
 *
 * Links
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import NavBar from 'components/NavBar';
import MessageButton from 'components/MessageButton';
import Head2 from 'components/Head2';
import Responsive from 'react-responsive';

export default class Links extends React.PureComponent {
  render() {
  const footerStyle={
    background: "#74D1EA",
    position: "fixed",
    bottom: "10px",
    right: "10px",
    padding: "15px",
    borderRadius: "50px"
  }
    return (
      <div>
        <Helmet title="Links" meta={[ { name: 'description', content: 'Description of Links' }]}/>
      <Head2 title="My Links"/>
      <NavBar/>

      <Responsive minDeviceWidth={1024}>
        <main style={mainStyle}>
          <NavBar/>
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
