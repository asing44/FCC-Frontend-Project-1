import React, { useState, useReducer, Component } from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: "",
      author: ""
    };
    this.requestQuote = this.requestQuote.bind(this);
  };

  async requestQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      this.setState(state => ({
        quote: data.content,
        author: data.author
      }))
    } else {
      this.setState(state => { quote: "An erorr has occurred" })
      console.log(data);
    }
  }

  render() {
    return (
      <div>
        <h1>Random quote...</h1>
        <div className="quote-container">
          <div className="quote-w">
            <div className="quote">{this.state.quote}</div>
            <div className="author">- {this.state.author}</div>
          </div>
          <div className="quote-buttons-w">
            <a href="twitter.com/intent/tweet" className="share twitter">
              <img className="share-icon" src="twitter-square-logo-svgrepo-com.svg" alt="Twitter logo" />
            </a>
            <a href="" className="share facebook">
              <img className="share-icon" src="facebook-icon-logo-svgrepo-com.svg" alt="Facebook logo" />
            </a>
            <div className="spacing"></div>
            <button className="new-quote" onClick={this.requestQuote}>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App