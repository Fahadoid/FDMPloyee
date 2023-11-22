import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './Login.css'


class EditAccount extends React.Component {
  constructor(props){
    super(props);
    this.state = {first_name: '', last_name: '', email: '', password: '', mobile: '', auth: ''}
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var current_user = localStorage.getItem("email");
    const url = 'http://localhost:8000/edit_account.php';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: current_user,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        mobile: this.state.mobile
      })
    }).then(response => response.json())
        .then(data => (this.storeData(data)))
  }

  storeData = (data) => {
    var success = data["success"];
    if (success){
      this.setState({auth: true});
    }

  }

  handleFnameChange = (event) => {
    this.setState({first_name: event.target.value});
    event.preventDefault();
  }

  handleLnameChange = (event) => {
    this.setState({last_name: event.target.value});
    event.preventDefault();
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
    event.preventDefault();
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
    event.preventDefault();
  }

  handleMobileChange = (event) => {
    this.setState({mobile: event.target.value});
    event.preventDefault();
  }

  render() {
    if (this.state.auth){
      this.setState({auth: false});
      return <Redirect to="/home"/>
    }
    return (
      <div className="App">
        <div>
        <h1 id="login">Edit account details:</h1>
        <div>
          <form onSubmit={this.handleSubmit} method="post">
            <div className='inputspace'>
              <label>First Name: </label>
              <input type="text" id='fname' value={this.state.first_name} onChange={this.handleFnameChange}
                     name='firstname' placeholder='Enter your first name'/>
            </div>
            <div className='inputspace'>
              <label>Last Name: </label>
              <input type="text" id='lname' value={this.state.last_name} onChange={this.handleLnameChange}
                     name='lastname' placeholder='Enter your last name'/>
            </div>
            <div className='inputspace'>
              <label>Email: </label>
              <input type="email" id='email' value={this.state.email} onChange={this.handleEmailChange}
                     name='email' placeholder='Enter your email'/>
            </div>
            <div className='inputspace'>
              <label>Password: </label>
              <input type="text" id='pword' value={this.state.password} onChange={this.handlePasswordChange}
                     name='password' placeholder='Enter your password'/>
            </div>
            <div className='inputspace'>
              <label>Mobile Number: </label>
              <input type="text" id='mnumb' value={this.state.mobile} onChange={this.handleMobileChange}
                     name='number' placeholder='Enter your mobile phone No.'/>
            </div>
            <button type='submit'>Confirm</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default EditAccount;