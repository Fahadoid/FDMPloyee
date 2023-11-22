import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.css'


class SignUpCard extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
        <h1 id="login">Sign up to FDM:</h1>
        <div>
          <form action="http://localhost:8000/sign_up.php" method="post">
            <div className='inputspace'>
            <label>First Name: </label>
            <input type="text" id='fname' name='firstname' placeholder='Enter your first name'/>
            </div>
            <div className='inputspace'>
            <label>Last Name: </label>
            <input type="text" id='lname' name='lastname' placeholder='Enter your last name'/>
            </div>
            <div className='inputspace'>
            <label>Email: </label>
            <input type="email" id='email' name='email' placeholder='Enter your email'/>
            </div>
            <div className='inputspace'>
            <label>Password: </label>
            <input type="text" id='pword' name='password' placeholder='Enter your password'/>
            </div>
            <div className='inputspace'>
            <label>Mobile Number: </label>
            <input type="text" id='mnumb' name='number' placeholder='Enter your mobile phone No.'/>
            </div>
            <button type='submit'>Sign up</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default SignUpCard;
