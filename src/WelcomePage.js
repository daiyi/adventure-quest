import React, { Component } from 'react';
import './App.css';
import styles from './WelcomePage.css';
import { GOTO_ROOM } from './actionTypes';
import rooms from './reducers';
import { createStore } from 'redux';

let store = createStore(rooms);

class WelcomePage extends Component {

  constructor() {
    super();
    this.state = {};
    this.nextRoom = this.nextRoom.bind(this);
  }

  nextRoom(room) {
    console.log(room);
  }

  render() {
    const firstDungeonRoom = "hello world";

    return (
      <div className="App" >
        <div className="App-header" >
          <h2 >Welcome to Adventure Quest</h2 >
        </div >
        <p className="App-intro" >
          {"This toy project was designed to help teach me how to use React so I don't cry about work so often. It's basically a text adventure game or something like Escape From Monkey Island/Sam and Max. Let's get right to it, then, shall we?"}
        </p >
        <input type="text" id="heroname" name="heroname" placeholder="Name your hero" />
        {startJourneyButton(firstDungeonRoom)}
      </div >
    )
  }
}

const startJourneyButton = (nextRoom) => (
  <button
    className={styles.startJourneyButton} onClick={() => {
    store.dispatch({
        type: GOTO_ROOM,
        text: "ROOM_ONE"
      }
    );

    console.log("here's the state ", store.getState())
  }} >
    Begin adventure!
  </button >);


export default WelcomePage;