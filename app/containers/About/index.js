/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";

export default class About extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

        <header>About Me</header>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
        <main>Backgroup copy</main>
        <footer>me</footer>

      </div>
    );
  }
}
