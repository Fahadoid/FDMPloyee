import React from 'react';
import {Box, Card, Image, Heading, Text} from 'rebass';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './Messages.css';

class SendMessages extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', message: ''}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:8000/send_message.php';
        var email = localStorage.getItem("email");
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to_email: this.state.email,
                from_email: email,
                message: this.state.message,
            })
        }).then(response => response.json())
            .then(data => this.storeData(data))
    }

    storeData = (data) => {
        var success = data['success'];
        if (success){
            this.setState({success: true});
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
        event.preventDefault();
    }

    handleMessageChange = (event) => {
        this.setState({message: event.target.value});
        event.preventDefault();
    }
    
    render() {
        if (this.state.success){
            this.setState({success: false});
            return <Redirect to="/home"/>
        }
        return (
            <div className='message'>
                <h1>Send Message</h1>
                <div>
                    <form onSubmit={this.handleSubmit} method="post">
                        <div className='inputspace'>
                            <label>Email: </label>
                            <input type="memail" id='email' value={this.state.email} onChange={this.handleEmailChange}
                                   name='email' placeholder='To:'/>
                        </div>
                        <input type="mtext" id='message' value={this.state.message} onChange={this.handleMessageChange}
                               name='message' placeholder='Type your message here:'/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default SendMessages;