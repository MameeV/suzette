/*
 *
 * Links
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Links extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Links" meta={[ { name: 'description', content: 'Description of Links' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
