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
 import FacebookIcon from 'react-icons/lib/fa/facebook';
 import TwitterIcon from 'react-icons/lib/fa/twitter';
 import LinkedinIcon from 'react-icons/lib/fa/linkedin';

 export default class Single extends React.PureComponent {
   constructor(props){
     super(props);
     this.state={
      article:""
     }
   }

   componentWillMount(){
     fetch('http://localhost:8000/api/showArticle/'+this.props.params.id)

     .then(function(response) {
       return response.json();
     })
     .then(function(json) {
       this.setState({
         article:json
       })
     }.bind(this))
   }

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
    const footerContainer={
        background: "#B4938C",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: "Raleway",
        fontWeight: "Regular",
        color: "#74D1EA",
        fontSize: "14px",
        paddingTop: "10px",
        paddingLeft: "20px",
        paddingBottom: "5px"
    }
    const iconContainer={
        background: "#B4938C",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
    const icon={
        width: "40px",
        height: "auto",
        color: "#74D1EA"
    }

    return (
      <div>
        <Helmet title="Single" meta={[ { name: 'description', content: 'View page for selected article' }]}/>
        <header>
          <span style={titleStyle}>
            {this.state.article.title}
          </span>
        </header>
        <NavMobile active={0}/>
        <main style={bodyStyle}>
          <img style={photoStyle} src={this.state.article.image}/>
          <br/>
          <br/>
          {this.state.article.body}
        </main>

        <footer style={footerContainer}>
          &copy; Suzette Verbeck
          <div style={iconContainer}>
            <div style={icon}>
              <FacebookIcon/>
            </div>
            <div style={icon}>
              <TwitterIcon/>
            </div>
            <div style={icon}>
              <LinkedinIcon/>
            </div>
          </div>
        </footer>
      </div>
     );
   }
 }
