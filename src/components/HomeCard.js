import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css'

class HomeCard extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome to FDM Employee Portal</h1>
        <div className='innerbox'>
          <div className='tabbox'>
          <img id='logo' src={require("../assets/logos/fdmlogo.png")}/>
          <h2>Home</h2>
          <p>
            This is the home screen, from here you can use the menu bar to navigate throughout the app. 
          </p>
          <h3>Messages</h3>
          <p>
            In the messages tab you can view your inbox and send messages to others too. 
          </p>
          <h3>Forum</h3>
          <p>
            The forum tab will take you to the forum where you can ask questions and answer them.
          </p>
          <h3>News</h3>
          <p>
            The news tab will let you see recent news and post new things you find news worthy.
          </p>
          <h3>Directory</h3>
          <p>
            The directory tab will allow you to see all users on the fdm network. 
          </p>
          <h3>Account</h3>
          <p>
            Your account tab will let you view your details and also edit your account details.
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCard;
