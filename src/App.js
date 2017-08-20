import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const element = (
     <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Adventure Quest</h2>
        </div>
      <p className="App-intro">
        {"This toy project wasdesigned to help teach me how to use React so I don't cry about work so often. It's basically a text adventure game or something like Escape From Monkey Island/Sam and Max. Let's get right to it, then, shall we?"}
      </p>
      <input type="text" id="heroname" name="heroname" placeholder="Name of your hero" />
      <button class="StartJourney">Begin adventure!</button>
      </div>
)

class App extends Component {
    render() {
        return (
            element
        )
    }
}

export default App;
