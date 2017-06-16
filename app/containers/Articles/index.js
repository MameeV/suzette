/*
 *
 * Articles
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import NavMobile from 'components/NavMobile';
import Responsive from 'react-responsive';

export default class Articles extends React.PureComponent {
  constructor(props){
  super(props);
  this.state={
    articles:[],
  }
}
  componentWillMount(){
    fetch('http://mrsverbeck.com/api/getArticles')

    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        articles:json
      })
    }.bind(this))
  }

  render() {
    const footerStyle={
      background: "#74D1EA",
      position: "fixed",
      bottom: "10px",
      right: "10px",
      padding: "15px",
      borderRadius: "50px"
    }
    const body2Style={
      width: "100%",
      height: "100vh",
      background: "#FAE0EE",
      fontFamily: "Raleway",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#3E262A",
      paddingTop: "30px",
      paddingLeft: "25px"
    }
    const headTextStyle={
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
    const indentStyle={
      margin: "15px"
    }
    const articleContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "1000px",
      justifyContent: "space-around",
      background: "#FAE0EE",
      margin:"0 auto"
    }
    const articleContainerMobile={
      display: "flex",
      flexDirection: "column",
      width: "100%",
      background: "#FAE0EE"
    }
    const article={
      width: "25%",
      display: "flex",
      flexDirection: "column"
    }
    const articleMobile={
      width: "100%",
      display: "flex",
      flexDirection: "column"
    }
    const articleImage={
      width: "100%",
      height: "300px",
      maxHeight: "300px",
      overflow: "hidden",
      paddingTop: "20px",
      paddingLeft: "10px",
      paddingRight: "10px"
    }
    const imgStyle={
      width: "100%",
      height: "auto"
    }
    const articleTitle={
      width: "100%",
      height: "auto",
      fontFamily:"Raleway",
      fontWeight:"Bold",
      fontSize: "20px",
      color: "#3E262A",
      textShadow: "2px 5px 15px #74D1EA",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
      textOverflow: "ellipsis",
      paddingTop: "15px",
      paddingLeft: "15px",
      paddingRight: "15px"
    }
    const articleBody={
      width: "100%",
      height: "100px",
      maxHeight: "100px",
      fontFamily:"Raleway",
      fontWeight:"Medium",
      fontSize: "14px",
      color: "#3E262A",
      textAlign: "justify",
      textOverflow: "ellipsis",
      overflow: "hidden",
      paddingTop: "20px",
      paddingLeft: "35px",
      paddingRight: "35px",
      marginBottom: "35px"
    }

    return (
      <div>
        <Helmet title="Articles" meta={[ { name: 'description', content: 'Articles by Suzette Verbeck' }]}/>
        <div style={headTextStyle}>
          My Articles
        </div>

      <Responsive minDeviceWidth={1024}>
        <main>
          <NavMobile active={2}/>
          <div style={articleContainer}>
            {this.state.articles.map((a, i) => (
              <Link to={`/single/${a.id}`} style={article} key={i}>
                <div style={articleImage}>
                  <img style={imgStyle} src={a.image}/>
                </div>
                <div style={articleTitle}>
                {a.title}
                </div>
                <div style={articleBody}>
                {a.body}
                </div>
              </Link>
            ))}

          </div>
        </main>
      </Responsive>

      <Responsive maxDeviceWidth={1023}>
        <main>
          <NavMobile active={2}/>
          <div style={articleContainerMobile}>
            {this.state.articles.map((a, i) => (
              <Link to={`/single/${a.id}`} style={article} key={i}>
              <div style={articleMobile} key={i}>
                <div style={articleImage}>
                  <img style={imgStyle} src={a.image}/>
                </div>
                <div style={articleTitle}>
                {a.title}
                </div>
                <div style={articleBody}>
                {a.body}
                </div>
              </div>
              </Link>
            ))}
          </div>
        </main>
      </Responsive>

      </div>
    );
  }
}
