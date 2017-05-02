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
      width: "100%",
      height: "80px",
      top: "auto",
      borderTop:"3px solid #74D1EA",
      borderBottom:"3px solid #74D1EA",
      background: "#FAE0EE",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontFamily: "Fredericka the Great",
      fontStyle: "cursive",
      fontWeight: "bold",
      fontSize: "40px",
      color: "#3E262A",
      textTransform: "uppercase",
      textAlign: "center",
      paddingTop: "10px"
    }
    const bodyStyle={
      background: "#FAE0EE",
      width: "100%",
      minheight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "Raleway",
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

          </span>
        </header>
        <NavMobile active={0}/>
        <main style={bodyStyle}>
          <img style={photoStyle} src=""/>
          <br/>
          <br/>

        </main>
      </div>
     );
   }
 }
