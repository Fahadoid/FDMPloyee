import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Messages.css';

class AddNews extends React.Component {
  render() {
    return (
        <div className='message'>
            <h1>Add announcement</h1>
            <div>
                <form action="http://localhost:8000/add_news.php" method="post">
                    <div className='inputspace'>
                        <label>Headline: </label>
                        <input type="memail" id='headline' name='headline' placeholder='Enter the post title'/>
                    </div>
                    <input type="mtext" id='post' name='post' placeholder='Type your post here:'/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
        
    );
  }
}

export default AddNews;