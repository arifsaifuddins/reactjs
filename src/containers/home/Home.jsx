import React, { Component } from "react";
// import Card from "../../components/card/Card";
// import Counter from "../counter/Counter";
// import LifeCycleComp from "../lifecylce/LifeCycleComp";
import BlogPost from "../blog/BlogPost";
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
        <BlogPost />
      </div>
    )
  }
}

export default Home;