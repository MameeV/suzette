/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MessageButton from 'components/MessageButton';

export default class Enroll extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
      email: ""
    }
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  signup = () => {
    var data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    data.append("email", this.state.email);

    fetch ("http://localhost:8000/api/signup", {
      method: "post",
      body: data
    })
    .then (function(response) {
      return response.json();
    })
    .then (function(json) {
      if (json.error) {
        alert (json.error);
      }
      else if (json.success) {
        alert (json.success);
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
      color: "#FAE0EE",
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
    const inputEmail={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#999999",
      paddingLeft: "5px"
    }
    const inputUsername={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#888888",
      paddingLeft: "5px"
    }
    const inputPassword={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#777777",
      paddingLeft: "5px"
    }
    const inputSubmit={
      width: "100%",
      height: "auto",
      background: "#74D1EA",
    }
    const issueStyle={
      width: "100%",
      height: "auto",
      fontFamily: "Raleway",
      fontWeight: "bold",
      fontSize: "18px",
      color: "#74D1EA",
      textAlign: "center",
      paddingTop: "5px",
      paddingBottom: "30px",
      background: "#3E262A"
    }

    return (
      <div>
        <Helmet title="Enroll" meta={[ { name: 'description', content: 'SignUp to Obtain Articles Dashboard Access' }]}/>
        <div style={headTextStyle}>
          Dashboard Enrollment Screen
        </div>
      <main>
        <div style={titleStyle}> SignUp to Request Access </div>
        <div style={inputContainer}>
          <div style={input}>
            <textarea style={inputEmail} onChange={this.handleEmail} value={this.state.email} type="text" placeholder="Enter Your Email Address to Enroll for Database Site Access"/>
            <textarea style={inputUsername} onChange={this.handleUsername} value={this.state.username} type="text" placeholder="Enter Your First and Last Name"/>
            <textarea style={inputPassword} onChange={this.handlePassword} value={this.state.password} type="text" placeholder="Enter A Password"/>
            <input style={inputSubmit} onTouchTap={this.signup} type="submit"/>
          </div>
        </div>
        <div style={issueStyle}> If you are unable to enroll, please click the MESSAGE ME button and send information about your issue.
        <br/>
        You can expect a reply, to your email address, within 24 to 48 hours. </div>
        </main>
        <MessageButton/>
      </div>
    );
  }
}
