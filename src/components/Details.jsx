import React, { useContext } from "react";
import { DataContext } from "../App";
export default function Details({ currentDetails }) {
  const moves = currentDetails.details.moves;
  const stats = currentDetails.details.stats;
  const types = currentDetails.details.types.map((el) => {
    return el.type.name;
  });
  const { weight, height, base_experience } = currentDetails.details;
  const abilities = currentDetails.details.abilities.map((el) => {
    return { name: el.ability.name };
  });

  console.log(currentDetails);
  const entries = Object.entries(currentDetails.images);
  const Map = entries.map((el, index) => (
    <>
      {el[1] !== null ? (
        <picture key={index}>
          <img src={el[1]} alt={el[0]}></img>
        </picture>
      ) : null}
    </>
  ));

  return (
    <div className="big_card_container">
      <div className="big_card">
        <h2>{currentDetails.name}</h2>
        <div className="pictures_container">{Map}</div>
        <div className="spc_details">
          <ul>
            <li>
              Height
              <h4>{height}</h4>
            </li>
            <li>
              Weight
              <h4>{weight}</h4>
            </li>
            <li>
              Abilities
              {abilities.map((el) => (
                <h4>{el.name}</h4>
              ))}
            </li>
            <li>
              Types
              {types.map((el) => (
                <h4>{el}</h4>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
