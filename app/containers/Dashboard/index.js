/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';


export default class Dashboard extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      title: "",
      body: "",
      image: "",
      preview: "",
      token: sessionStorage.getItem("token")
    }
  }
  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleBody = (event) => {
    this.setState({
      body: event.target.value
    })

  }
  handleImage = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  }

    storeArticle = () => {
        var data = new FormData();
        data.append("title", this.state.title);
        data.append("body", this.state.body);
        data.append("image", this.state.image);

        fetch ("http://mrsverbeck.com/api/storeArticle", {
          method: "post",
          body: data,
          headers: {
            "Authorization":"Bearer "+this.state.token
          }
        })
        .then (function(response) {
          return response.json();
        })
        .then (function(json) {
          if (json.success) {
            alert(json.success);
          }
          else if (json.error) {
            alert(json.error);
          }
        })
    }

  render() {
    const titleStyle={
      width: "100%",
      height: "auto",
      fontFamily: "Fredericka the Great",
      fontStyle: "cursive",
      fontWeight: "bold",
      fontSize: "40px",
      color: "#74D1EA",
      textAlign: "center",
      paddingTop: "20px",
      background: "#3E262A"
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
    const inputContainer={
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        background: "#3E262A",
        paddingTop: "30px",
        paddingLeft: "30px",
        paddingBottom: "30px"
    }
    const input={
      width: "25%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
    const inputTitle={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#999999",
      paddingLeft: "5px"
    }
    const inputBody={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#888888",
      paddingLeft: "5px"
    }
    const inputFile={
      width: "100%",
      height: "auto",
      background: "#777777",
    }
    const inputSubmit={
      width: "100%",
      height: "auto",
      background: "#74D1EA",
    }
    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Articles Dashboard' }]}/>
        <div style={headTextStyle}>
          Articles Dashboard
        </div>
      <main>
        <div style={titleStyle}> Enter Article Parts </div>
        <div style={inputContainer}>
          <div style={input}>
            <input style={inputFile} onChange={this.handleImage} type="file"/>
            <img src={this.state.preview}/>
            <textarea style={inputTitle} onChange={this.handleTitle} value={this.state.title} type="text" placeholder="Title"/>
            <textarea style={inputBody} onChange={this.handleBody} value={this.state.body} placeholder="Body Copy"> </textarea>
            <input style={inputSubmit} onTouchTap={this.storeArticle} type="submit"/>
          </div>
        </div>
        </main>
      </div>
    );
  }
}
