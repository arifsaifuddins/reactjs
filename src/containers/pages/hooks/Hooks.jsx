// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import './Hooks.css';

// // class component

// class Hooks extends Component {
//   state = {
//     count: 0
//   }

//   onChange = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   componentDidMount = () => {
//     return document.title = `Total Count : ${this.state.count}`;
//   }

//   componentDidUpdate = () => {
//     return document.title = `Total Count : ${this.state.count}`;
//   }

//   componentWillUnmount = () => {
//     return document.title = 'React Basic';
//   }

//   render() {
//     return (
//       <div className="counterHooks">
//         <h2>Your Value : {this.state.count}</h2>
//         <button onClick={() => this.onChange()}>Change Value</button>
//       </div>
//     )
//   }
// }

// functional component

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Total Count : ${count}`;
    return () => {
      document.title = `React Basic`;
    }
  })

  return (
    <div className="counterHooks">
      <h2>Your Value : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Change Value</button>
    </div>
  )
}

export default Hooks;