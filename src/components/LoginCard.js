import React from 'react';
import SignUpCard from './SignUpCard';
import './Login.css'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

class LoginCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {username: '', password: ''};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:8000/action_page.php';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(response => response.json())
            .then(data => (this.storeData(data)))
    }

    storeData = (data) => {
        var success = data[0]["success"];
        var email = data[0]['email'];
        if (success){
            localStorage.setItem("email", email);
            this.setState({auth: true});
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
        event.preventDefault();
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
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
                    <img id='logo' src={require("../assets/logos/fdmlogo.png")}/>
                    <h1 id="login">Login to your account:</h1>
                    <div>
                        <form onSubmit={this.handleSubmit} method="post">
                            <div className='inputspace'>
                                <label>Username: </label>
                                <input type="text" id='uname' value={this.state.username}
                                       onChange={this.handleUsernameChange} name='username' placeholder='Enter your username'/>
                            </div>
                            <div className='inputspace'>
                                <label>Password: </label>
                                <input type="text" id='pword' name='password' value={this.state.password}
                                       onChange={this.handlePasswordChange} placeholder='Enter your password'/>
                            </div>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                    <Router>
                        <div className='loginlinks'>
                            <p><Link to="/">Forgot password?</Link></p>
                            <p><Link to="/signup">Sign up</Link></p>
                        </div>
                        <Switch>
                            <Route path="/signup">
                                <SignUp/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

function SignUp() {
    return <SignUpCard/>;
}

export default LoginCard;
