/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MessageButton from 'components/MessageButton';

export default class Access extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      email: "",
      password: "",
      token: "",
    }
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  signin = () => {
    var data = new FormData();
    data.append ("email", this.state.email);
    data.append ("password", this.state.password);

    fetch ("http://mrsverbeck.com/api/signin" , {
      method: "post",
      body: data
    })
    .then ((response) => {
      return response.json();
    })
    .then ((json) => {
      if (json.error) {
        alert (json.error);
      }
      else if (json.token === false)
      {
        alert ("Invaid Credentials");
      }
      else if (json.token !== false)
      {
        sessionStorage.setItem("token", JSON.stringify(json.token));
        alert ("Welcome Back!");

        this.setState({token: sessionStorage.getItem('token')});
        console.log(this.state.token);
      }
    });
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
    const inputEmail={
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
        <Helmet title="Access" meta={[ { name: 'description', content: 'SignIn Page for Articles Dashboard' }]}/>
        <div style={headTextStyle}>
          Access the Articles Dashboard
        </div>
      <main>
        <div style={titleStyle}> SignIn for Access </div>
        <div style={inputContainer}>
          <div style={input}>
            <textarea style={inputEmail} onChange={this.handleEmail} value={this.state.email} type="text" placeholder="Enter Your Email Address"/>
            <textarea style={inputPassword} onChange={this.handlePassword} value={this.state.password} type="text" placeholder="Enter Your Password"/>
            <input style={inputSubmit} onTouchTap={this.signin} type="submit"/>
          </div>
        </div>
        <div style={issueStyle}> If you have a problem signing in, please click the MESSAGE ME button and send information about your issue.
        <br/>
        You can expect a reply, to your email address, within 24 to 48 hours. </div>
        </main>
        <MessageButton/>
      </div>
    );
  }
}
