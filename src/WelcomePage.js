import React, { Component } from 'react';
import './App.css';
import styles from './WelcomePage.css';
import rooms from './reducers';
import { SET_NAME } from './actions';
import { createStore } from 'redux';

let store = createStore(rooms);

class WelcomePage extends Component {

  constructor() {
    super();
    this.state = {};
    this.nextRoom = this.nextRoom.bind(this);
    // this.getInitialState = this.getInitialState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onClickFn = this.onClickFn.bind(this)
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  nextRoom(room) {
    console.log(room);
  }

  onClickFn() {
    store.dispatch({
        type: SET_NAME,
        text: this.state.input
      }
    );

    console.log("here's the state ", store.getState())
  }

  render() {
    return (
      <div className="App" >
        <div className="App-header" >
          <h2 >Welcome to Adventure Quest</h2 >
        </div >
        <p className="App-intro" >
          {"This toy project was designed to help teach me how to use React so I don't cry about work so often. It's basically a text adventure game or something like Escape From Monkey Island/Sam and Max. Let's get right to it, then, shall we?"}
        </p >
        <input type="text"
               id="heroname"
               name="heroname"
               onChange={this.handleChange}
               placeholder="Name your hero" />
        <button
          className={styles.startJourneyButton} onClick={this.onClickFn} >
          Begin adventure!
        </button >
      </div >
    )
  }
}


export default WelcomePage;