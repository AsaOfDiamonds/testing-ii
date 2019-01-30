import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0
  }

  strike = () => {
    this.setState({
      strike: this.state.strike + 1
    })
  }

  ball = () => {
    this.setState({
      ball: this.state.ball + 1
    })
  }

  foul = () => {
    this.setState({
      foul: this.state.foul + 1
    })
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
          <div className='strike'>
            <h1>{this.state.strike} Strikes</h1>
            <button onClick={this.strike}>+ Strike</button>
          </div>
        <div className='ball'>
          <h1>{this.state.ball} Balls</h1>
          <button onClick={this.ball}>+ Ball</button>
        </div>
        <div className='foul'>
          <h1>{this.state.foul} Fouls</h1>
          <button onClick={this.foul}>+ foul</button>
        </div>
      </div>
    )
    
  }
}

export default Dashboard;