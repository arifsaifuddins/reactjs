// import React, { Component } from "react";
import React, { useState } from "react";
import './Hooks.css';

// class component

// class Hooks extends Component {
//   state = {
//     count: 0
//   }

//   onChange = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
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
  const [count, setCount] = useState(0)

  return (
    <div className="counterHooks">
      <h2>Your Value : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Change Value</button>
    </div>
  )
}

export default Hooks;