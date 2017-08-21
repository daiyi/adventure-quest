import React, {Component} from 'react';
import './App.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Adventure Quest</h2>
        </div>
        <p className="App-intro">
          {"This toy project was designed to help teach me how to use React so I don't cry about work so often. It's basically a text adventure game or something like Escape From Monkey Island/Sam and Max. Let's get right to it, then, shall we?"}
        </p>
        <input type="text" id="heroname" name="heroname" placeholder="Name your hero" />
        <button class="StartJourney">Begin adventure!</button>
      </div>
    )
  }
}

export default WelcomePage;
