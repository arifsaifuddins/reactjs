import React, { Component } from 'react';

// import { connect } from 'react-redux';
import actionType from '../../../redux/globalActionType';

//context
import { RootContext } from '../../../home/Home';

class Button extends Component {
  // state = {
  //   count: 0
  // }

  // // kirim ke counter dengan param
  // setVal = (value) => {
  //   // props yang ada di jsx button
  //   this.props.changeValue(value)
  // }

  // handlePlus = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   }, () => {
  //     this.setVal(this.state.count)
  //   });
  // }

  // handleMin = () => {
  //   if (this.state.count > 0) {
  //     this.setState({
  //       count: this.state.count - 1
  //     }, () => {
  //       this.setVal(this.state.count)
  //     });
  //   }
  // }

  render() {
    // console.log(this.props) // redux
    // return (
    //   <div className="button">
    //     <button className='btn' onClick={this.props.handleMin}>-</button>
    //     <div className="count">{this.props.count}</div>
    //     <button className='btn' onClick={this.props.handlePlus}>+</button>
    //   </div>
    // )

    // context
    return (
      <RootContext.Consumer>
        {
          value => {
            return (
              <div className="button">
                <button className='btn' onClick={() => value.count({ type: actionType.minus })}>-</button>
                <div className="count">{value.state.setCount}</div>
                <button className='btn' onClick={() => value.count({ type: actionType.plus })}>+</button>
              </div>
            )
          }
        }
      </RootContext.Consumer>
    )
  }
}

// // redux(state management)

// const mapStateToProps = (state) => {
//   return {
//     count: state.setCount
//   }
// }

// const setDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: actionType.plus }),
//     handleMin: () => dispatch({ type: actionType.minus }),
//   }
// }

// export default connect(mapStateToProps, setDispatchToProps)(Button);

// context
export default Button;