import React, { Component } from "react";
import Display from "./Display";

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
        <Display
         strike={this.state.strike}
         ball={this.state.ball}
         foul={this.state.foul}
         />
        <div className='dashboard'>          
            <div className='strike'>            
              <button data-testid='strike-btn' className='btn' onClick={this.strike}>+ Strike</button>
            </div>
          <div className='ball'>         
            <button data-testid='ball-btn' className='btn' onClick={this.ball}>+ Ball</button>
          </div>
          <div className='foul'>            
            <button data-testid='foul-btn' className='btn' onClick={this.foul}>+ Foul</button>
          </div>
          <div className='hit'>          
            <button data-testid='hit-btn' className='btn' onClick={this.hit}>Hit</button>
          </div>
        </div>
      </div>
    )
    
  }
}

export default Dashboard;