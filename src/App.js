import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeCard from './components/HomeCard';
import LoginCard from './components/LoginCard';
import MessageHub from './components/MessageHub';
import NewsHub from './components/NewsHub';
import DirectoryCard from './components/DirectoryCard';
import AccountCard from './components/AccountCard';
import ForumHub from './components/ForumHub';
import './App.css';

export default function App() {
        return (
        <Router>
          <Redirect from='/' to={"/"}/>
          <div className='container'>
              <nav>
              <img src={require("./assets/logos/fdmlogo.png")}/>
                  <li>
                    <Link className='navbtn' to="/home">Home</Link>
                  </li>
                  <li>
                    <Link className='navbtn' to="/messages">Messages</Link>
                  </li>
                  <li>
                    <Link className='navbtn' to="/forum">Forum</Link>
                  </li>
                  <li>
                    <Link className='navbtn' to="/news">News</Link>
                  </li>
                  <li>
                    <Link className='navbtn' to="/directory">Directory</Link>
                  </li>
                  <li>
                    <Link className='navbtn' to="/account">Account</Link>
                  </li>
                  <li>
                    <Link className='navbtn' to="/login">Login</Link>
                  </li>
              </nav>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Route path="/messages">
                    <Messages/>
                  </Route>
                  <Route path="/news">
                    <News/>
                  </Route>
                  <Route path="/directory">
                    <Directory/>
                  </Route>
                  <Route path="/account">
                    <Account/>
                  </Route>
                  <Route path="/forum">
                    <Forum/>
                  </Route>
                  <Route path="/" exact component={() => <Login/>}/>
                </Switch>
              </div>
            </Router>
        );
}

function Home() {
        return <HomeCard />;
}

function Login() {
        return <LoginCard />;
}

function Messages(){
  return <MessageHub/>;
}

function News(){
  return <NewsHub/>;
}

function Directory(){
  return <DirectoryCard/>;
}

function Account(){
  return <AccountCard/>;
}

function Forum(){
  return <ForumHub/>;
}