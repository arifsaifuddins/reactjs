import React, { Component } from "react";
import Card from "../../../components/card/Card";

class Cards extends Component {
  render() {
    return (
      <>
        <h1 className="header">Cards</h1><hr />
        <Card
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
        />
      </>
    )
  }
}

export default Cards;