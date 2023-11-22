import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Messages.css';

class MessagesCard extends React.Component {

    state = {
        loading: true,
        message: null
    }

    async componentDidMount(){
        const url = 'http://localhost:8000/view_message.php';
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
        this.setState({message: data, loading: false});
        /*
        * {
            "id": 1,
            "to_email": "bill@hotmail.com",
            "from_email": "jeff@amazon.com",
            "body": "Hello World Microsoft",
            "date": "03/04/2022 03:01:50 pm"
        * }
        * */
    }

  render() {
      return (
        <div className='message'>
            <div>
                <h1>View Messages</h1>
                {this.state.loading || !this.state.message ? <div></div> :
                    this.state.message.reverse().map(res => (
                        <div>
                            <div className="emailbox">
                                <p>{res.from_email}</p>
                            </div>
                            <div className='messagebox'>
                                <p>{res.body}</p>
                                <p>{res.date}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        
    );
  }
}

export default MessagesCard;