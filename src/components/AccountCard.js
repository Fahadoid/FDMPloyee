import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EditAccount from './EditAccount';
import './Directory.css'

class AccountCard extends React.Component {
    state = {
        loading: true,
        user: null
    }

    async componentDidMount() {
        const url = 'http://localhost:8000/account.php';
        var email = localStorage.getItem("email");
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            })
        });
        const data = await response.json();
        this.setState({user: data, loading: false})
    }

    render() {
        return (
            <div className='directory'>
                <h1>Account</h1>
                {this.state.loading || !this.state.user ? <div></div> :
                    this.state.user.reverse().map(res => (
                            <div className='accountbox'>
                                <p><b>First name:</b> {res.first_name}</p>
                                <p><b>Last name:</b> {res.last_name}</p>
                                <p><b>Email:</b> {res.email}</p>
                                <p><b>Number:</b> {res.mobile}</p>
                        </div>
                    ))}
                    <Router>
                        <li>
                            <Link className="navbtn" to="/editaccount">Edit Account</Link>
                        </li>
                        <Switch>
                            <Route path="/editaccount">
                                <Edit/>
                            </Route>
                        </Switch>
                    </Router>
            </div>
        );
    }
}
function Edit(){
    return <EditAccount/>
}

export default AccountCard;