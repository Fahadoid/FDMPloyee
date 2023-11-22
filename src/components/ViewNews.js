import React from 'react';
import {Box, Card, Image, Heading, Text} from 'rebass';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Messages.css';

class ViewNews extends React.Component {
    state = {
        loading: true,
        news: null
    }

    async componentDidMount() {
        const url = 'http://localhost:8000/news.php';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({news: data, loading: false})
        /*
        * {
            "id": 1,
            "header": "Apple",
            "body": "Apple hits $5 trillion in Market Cap",
            "date": "05/04/2022 05:13:41 pm"
        * }
        * */
    }

    render() {
        return (
            <div className='message'>
                <div>
                    <h1>View News</h1>
                    {this.state.loading || !this.state.news ? <div></div> :
                        this.state.news.reverse().map(res => (
                            <div>
                                <div className="emailbox">
                                    <p>{res.header}</p>
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

export default ViewNews;