import React, { Component } from 'react';
import './App.css';
import "./Components/BreakInterval";
import BreakInterval from './Components/BreakInterval';
import SessionLength from "./Components/SessionLength";
import Timer from "./Components/Timer";

class App extends Component {
  constructor() {
    super();
    this.state ={
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    };
  }

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <BreakInterval breakInterval={this.state.breakLength}/>
        <SessionLength sessionLength={this.state.sessionLength}/>
        <Timer timerMinute={this.state.timerMinute}/>
      </main>
    )
  }
}

export default App;
