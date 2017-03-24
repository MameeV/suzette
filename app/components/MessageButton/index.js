/**
*
* MessageButton
*
*/

import React from 'react';

class MessageButton extends React.PureComponent {
  render() {
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
    return (
      <div>
        <footer style={footerStyle}>
          Message Me!
        </footer>
      </div>
    );
  }
}

export default MessageButton;
