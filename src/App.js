import React, { Component } from 'react';
import './App.css';
import BreakSession from './Components/BreakSession';
import SessionLength from "./Components/SessionLength";
import Timer from "./Components/Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      breakSession: 5,
      sessionLength: 25,
      timePerSession: 25
    };
  }

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <div className="interval-container">
          <BreakSession breakSession={this.state.breakSession} />
          <SessionLength sessionLength={this.state.sessionLength} />
        </div>
        <Timer timePerSession={this.state.timePerSession} />
      </main>
    )
  }
}

export default App;
