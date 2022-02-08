import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Counter from "../pages/counter/Counter";
import LifeCycleComp from "../pages/lifecylce/LifeCycleComp";
import BlogPost from "../pages/blog/BlogPost";
import Detail from "../pages/blog/detail/Detail";
import Cards from "../pages/card/Cards";

import "./Home.css";
import globalProvider from "../states/context/context";

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

            <Route exact path="/" component={BlogPost} />
            <Route path="/detail/:postId" component={Detail} />
            <Route path="/counter" component={Counter} />
            <Route path="/lifecycle" component={LifeCycleComp} />
            <Route path="/cards" component={Cards} />
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

// export default Home;
export default globalProvider(Home);