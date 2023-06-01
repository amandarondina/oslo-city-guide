import React from "react";
import "../../App.css";
import "../pages/Cards.css";
import CardItem from "./CardItem";

export default function Hotels(props) {
  const { data } = props;

  const hotelsEls = data.map((item) => <CardItem key={item.id} {...item} />);

  return (
    <>
      <div className="headline-container">
        <h1>Hotels</h1>
        <p>
          Whether you’re after a convenient location or a taste of luxury, each
          of these hotels has something unique to offer:
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{hotelsEls}</ul>
        </div>
      </div>
    </>
  );
}
