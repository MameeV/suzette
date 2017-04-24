/*
 *
 * Single
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from "react-router";
 import Burger from 'material-ui/svg-icons/Navigation/menu';
 import Drawer from 'material-ui/Drawer';
 import MenuItem from 'material-ui/MenuItem';
 import MessageButton from 'components/MessageButton';
 import NavMobile from 'components/NavMobile';


 export default class Single extends React.PureComponent {

  render() {
    const titleStyle={
      borderTop:"3px solid #74D1EA",
      borderBottom:"3px solid #74D1EA",
      background: "#FAE0EE",
      display: "flex",
      justifyContent: "center",
      fontFamily:"Raleway",
      fontWeight:"Bold",
      color: "#3E262A",
      fontSize: "48px"
    }
    const bodyStyle={
      background: "#FAE0EE",
      width: "100%",
      minheight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "Josefin Slab",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#3E262A",
      padding: "20px"
    }
    const photoStyle={
      borderRadius: "2%",
      width: "450px",
      height: "300px",
      alignSelf: "center",
    }

    return (
      <div>
        <Helmet title="Single" meta={[ { name: 'description', content: 'View page for selected article' }]}/>
        <header>
          <span style={titleStyle}>
            Article Title
          </span>
        </header>
        <NavMobile active={0}/>
        <main style={bodyStyle}>
          <img style={photoStyle} src="http://h4z.it/Image/162d37_IMG_0492.JPG"/>
          <br/>
          <br/>
          Article Body.
        </main>
      </div>
     );
   }
 }
