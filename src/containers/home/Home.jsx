import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Counter from "../pages/counter/Counter";
import LifeCycleComp from "../pages/lifecylce/LifeCycleComp";
import BlogPost from "../pages/blog/BlogPost";
import Cards from "../pages/card/Cards";

import "./Home.css";

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
          <Fragment>
            <div className="navbar">
              <Link className="link" to="/">Blog</Link>
              <Link className="link" to="/counter">Counter</Link>
              <Link className="link" to="/lifecycle">LifeCycle</Link>
              <Link className="link" to="/cards">Cards</Link>
            </div>

            <Routes>
              <Route exact path="/" element={<BlogPost />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/lifecycle" element={<LifeCycleComp />} />
              <Route path="/cards" element={<Cards />} />
            </Routes>
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default Home;