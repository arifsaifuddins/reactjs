import React, { Component } from 'react';
import Button from '../button/Button';
import './Counter.css';

class Counter extends Component {
  state = {
    count: 0
  }

  handleControl = (newVal) => {
    this.setState({
      count: newVal
    })
  }

  render() {
    return (
      <div className="counter">
        <h1 className="numb">{this.state.count}</h1>
        {/* dapat value dari button.js */}
        <Button changeValue={(value) => this.handleControl(value)} />
      </div>
    )
  }
}

export default Counter;