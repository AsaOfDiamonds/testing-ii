import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  }

  strike = () => {
    if(this.state.strike <= 1) {
      this.setState({
        strike: this.state.strike + 1
      })
    } else {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0
      })
    }    
  }

  ball = () => {
    if(this.state.ball <= 2) {
      this.setState({
        ball: this.state.ball + 1
      })
    } else {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0
      })
    }
    
  }

  foul = () => {
    this.setState({
      foul: this.state.foul + 1
    })
  }

  hit = () => {
    this.setState({     
      strike: 0,
      ball: 0,
      foul: 0
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
          <button onClick={this.foul}>+ Foul</button>
        </div>
        <div className='hit'>          
          <button onClick={this.hit}>Hit</button>
        </div>
      </div>
    )
    
  }
}

export default Dashboard;