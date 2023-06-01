import React from "react";
import "../../App.css";
import "../pages/Cards.css";
import CardItem from "./CardItem";

export default function Restaurants(props) {
  const { data } = props;

  const restaurantsEls = data.map((item) => (
    <CardItem key={item.id} {...item} />
  ));

  return (
    <>
      <div className="headline-container">
        <h1>Hotels</h1>
        <p>
          The bar is high (pun intended), but these are some of the the best
          places to go to if you are looking for good drinks and a chill
          atmosphere in the city: Here are some of the best places to explore
          the capital's culinary delights:
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{restaurantsEls}</ul>
        </div>
      </div>
    </>
  );
}
