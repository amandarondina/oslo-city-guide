import React from "react";
import "../../App.css";
import "../pages/Cards.css";
import CardItem from "./CardItem";

// props

export default function Landmarks(props) {
  const { data } = props;


  const landmarksEls = data.map((item) => <CardItem key={item.id} {...item} />);

  return (
    <>
      <div className="headline-container">
        <h1>Things to do in Oslo</h1>
        <p>
          No matter how long you have to explore the city, there is truly
          something for everyone! <br />
          Here are some of the best things to do in Oslo:
        </p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{landmarksEls}</ul>
        </div>
      </div>
    </>
  );
}
