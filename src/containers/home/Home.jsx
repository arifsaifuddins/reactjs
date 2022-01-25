import React, { Component } from "react";
// import Card from "../../components/card/Card";
import Counter from "../counter/Counter";
import "./Home.css";

class Home extends Component {
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
        <Counter />
      </div>
    )
  }
}

export default Home;