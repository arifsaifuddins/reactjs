import React, { Component } from 'react';

class Button extends Component {
  state = {
    count: 0
  }

  // kirim ke counter dengan param
  setVal = (value) => {
    // props yang ada di jsx button
    this.props.changeValue(value)
  }

  handlePlus = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      this.setVal(this.state.count)
    });
  }

  handleMin = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      }, () => {
        this.setVal(this.state.count)
      });
    }
  }

  render() {
    return (
      <div className="button">
        <button className='btn' onClick={this.handleMin}>-</button>
        <div className="count">{this.state.count}</div>
        <button className='btn' onClick={this.handlePlus}>+</button>
      </div>
    )
  }
}

export default Button;