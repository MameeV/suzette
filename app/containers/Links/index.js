/*
 *
 * Links
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";

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

        <header>Check Out These Resource Links!</header>
        <nav>
          <Link to="/"> Home </Link>
        <br/>
          <Link to="/articles"> Articles </Link>
        </nav>
        <main></main>

        <footer style={footerStyle}>
          Message Me!
        </footer>

      </div>
    );
  }
}
