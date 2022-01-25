import React from "react";
import logo from "./logo.png";
import './Card.css';

const Card = e => {
  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <div className="desc">
        <h1>{e.nama}</h1><hr />
        <p>{e.job}</p><hr />
        <p>{e.skill}</p>
      </div>
    </div>
  )
}

// default props set
Card.defaultProps = {
  nama: "Admin",
  job: "Programmer",
  skill: "HTML, CSS, JS"
}

export default Card;