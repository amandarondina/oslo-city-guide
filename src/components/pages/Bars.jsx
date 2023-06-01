import React from "react";
import "../../App.css";
import "../pages/Cards.css";
import CardItem from "./CardItem";

export default function Bars(props) {
  const { data } = props;

  const barsEls = data.map((item) => <CardItem key={item.id} {...item} />);

  return (
    <>
      <div className="headline-container">
        <h1>Bars & Pubs</h1>
        <p>
          The bar is high (pun intended), but these are some of the the best
          places to go to if you are looking for good drinks and a chill
          atmosphere in the city:
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{barsEls}</ul>
        </div>
      </div>
    </>
  );
}
