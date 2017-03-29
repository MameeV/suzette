/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Dashboard extends React.PureComponent {
  render() {
    const pageStyle={
      background: "#FAE0EE"
    }
    const titleStyle={
      width: "100%",
      height: "auto"
    }
    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
