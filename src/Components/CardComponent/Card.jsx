import React from "react";
import { CardList } from "../CardListComponent/CardList";
import "./Card.css";
import { cardlist } from "../../data";


export const Card = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam illo
          repellat animi, sapiente temporibus delectus magnam maiores
          repudiandae aliquid? Molestiae quo beatae repellat magni placeat
          incidunt officia? Eos, modi fugit.
        </p>
      </div>
      <div className="pl-list">
        {cardlist.map((item) => (
          <CardList key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};
