/**
*
* MessageButton
*
*/

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'Material-ui/TextField';

class MessageButton extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      contactOpen: false,
      message: "",
      email: ""
    }
  }
  handleOpen = () => {
    this.setState({
      contactOpen: true
    })
  }
  handleClose = () => {
    this.setState({
      contactOpen: false
    })
  }

  handleMessage = (event) => {
    this.setState({
      message:event.target.value
    })
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }

  contact = () => {
    var data = new FormData();
    data.append("message",this.state.message);
    data.append("email",this.state.email);

    fetch("http://mrsverbeck.com/api/contact",{
      method:"post",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.error){
        alert(json.error);
      }
      else if(json.success){
        alert(json.success);
      }
    })
  }
  render() {
    const buttonStyle={
      fontFamily: "Raleway",
      fontWeight: "Bold",
      fontStyle: "Italic",
      fontSize: "100%",
      color: "#B4938C"
    }
    const footerStyle={
      background: "#74D1EA",
      position: "fixed",
      bottom: "40px",
      right: "10px",
      padding: "15px",
      borderRadius: "50px",

    }
    const messageBoxStyle={
      fontFamily: "Raleway",
      color: "3E262A"
    }

    const actions = [
      <FlatButton label="Cancel" onTouchTap={this.handleClose}/>,
      <FlatButton label="Submit" onTouchTap={()=>this.contact()}/>
    ]
    return (
      <div>
        <footer style={footerStyle}>
          <FlatButton style={buttonStyle} label="Message Me!" onTouchTap={this.handleOpen}/>
        </footer>
        <Dialog titleStyle={messageBoxStyle} title="Send me a message. I look forward to hearing from you." actions={actions} open={this.state.contactOpen}>
        <br/>
        <TextField onChange={this.handleEmail} hintText="Enter your eMail address here."/>
        <br/>
        <TextField onChange={this.handleMessage} hintText="Enter your message here!"/>
        </Dialog>
      </div>
    );
  }
}

export default MessageButton;
