// HOC (hight order component)

import React, { Component, createContext } from "react";
import actionType from "../globalActionType";

// context
export const RootContext = createContext();
const Provider = RootContext.Provider;


// provider
const globalProvider = (Childern) => {
  return (
    class ParentComp extends Component {
      // context state
      state = {
        setCount: 0
      }

      dispatch = (action) => {
        if (action.type === actionType.plus) {
          return this.setState({
            setCount: this.state.setCount + 1
          })
        } else if (action.type === actionType.minus) {
          if (this.state.setCount > 0) {
            return this.setState({
              setCount: this.state.setCount - 1
            })
          }
          return this.setState({
            setCount: 0
          })
        }
      }

      render() {
        return (
          <Provider value={{
            state: this.state,
            count: this.dispatch
          }}>
            <Childern {...this.props} />
          </Provider>
        )
      }
    }
  )
}

export default globalProvider;

// consumer
const Consumer = RootContext.Consumer;
export const globalConsumer = (Childern) => {
  return (
    class ParentComp extends Component {
      render() {
        return (
          <Consumer>
            {
              value => {
                return (
                  <Childern {...this.props} {...value} />
                )
              }
            }
          </Consumer>
        )
      }
    }
  )
}