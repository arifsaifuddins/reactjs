import React, { Component } from 'react';
import { globalConsumer } from '../../states/context/context';
import Button from './button/Button';
// import { connect } from 'react-redux';
import './Counter.css';

class Counter extends Component {
  // state = {
  //   count: 0
  // }

  // handleControl = (newVal) => {
  //   this.setState({
  //     count: newVal
  //   })
  // }

  render() {
    return (
      <>
        <h1 className="header">Couter</h1><hr />
        <div className="counter">
          {/* redux */}
          {/* <h1 className="numb">{this.props.count}</h1> */}

          {/* context */}
          <h1 className="numb">{this.props.state.setCount}</h1>
          <Button className="button" />

          {/* dapat value dari button.js */}
          {/* <h1 className="numb">{this.props.setCount}</h1> */}
          {/* <Button className="button" changeValue={(value) => this.handleControl(value)} /> */}
        </div>
      </>
    )
  }

}

//redux 

// const mapStateToProps = state => {
//   return {
//     count: state.setCount
//   }
// }

// export default connect(mapStateToProps)(Counter);

// context
export default globalConsumer(Counter);

// export default Counter;
