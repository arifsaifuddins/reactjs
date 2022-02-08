import React, { Component, Fragment, createContext } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Counter from "../pages/counter/Counter";
import LifeCycleComp from "../pages/lifecylce/LifeCycleComp";
import BlogPost from "../pages/blog/BlogPost";
import Detail from "../pages/blog/detail/Detail";
import Cards from "../pages/card/Cards";
import actionType from "../redux/globalActionType";

import "./Home.css";

// context
export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
  // state = {
  //   showComponent: true
  // }

  // componentDidMount() {
  //   // setTimeout(() => {
  //   //   this.setState({
  //   //     showComponent: false
  //   //   })
  //   // }, 15000);
  // }

  // context state
  state = {
    setCount: 9
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
      return this.state.setCount = 0
    }
  }

  render() {
    return (
      <div className="body">
        {/* <Card
          nama="Arief Saifuddien"
          job="UI/UX Designer"
          skill="Figma"
        />
        <Card
          nama="Edy Andriyansyah"
          job="Front End Dev"
          skill="CSS/HTML"
        />
        <Card
          nama="Joko Tingkir"
          job="Back End Dev"
          skill="PHP"
        />
        <Card
          nama="Ady Mulyana"
          job="FrontEnd Dev"
          skill="JS"
        /> */}
        {/* <Counter /> */}
        {/* {this.state.showComponent ? <LifeCycleComp /> : null} */}
        {/* <BlogPost /> */}

        {/* react-router */}
        <BrowserRouter>
          <Provider value={{
            state: this.state,
            count: this.dispatch
          }}>
            <Fragment>
              <div className="navbar">
                <Link className="link" to="/">Blog</Link>
                <Link className="link" to="/counter">Counter</Link>
                <Link className="link" to="/lifecycle">LifeCycle</Link>
                <Link className="link" to="/cards">Cards</Link>
              </div>

              <Route exact path="/" component={BlogPost} />
              <Route path="/detail/:postId" component={Detail} />
              <Route path="/counter" component={Counter} />
              <Route path="/lifecycle" component={LifeCycleComp} />
              <Route path="/cards" component={Cards} />
            </Fragment>
          </Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default Home;