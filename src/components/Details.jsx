import React, { useEffect, useState } from "react";

export default function Details({ currentDetails }) {
  const [statsArr, setStats] = useState([{ name: "default", base: 23 }]);
  const moves = currentDetails.details.moves;
  const stats = currentDetails.details.stats;
  const types = currentDetails.details.types.map((el) => {
    return el.type.name;
  });
  const { weight, height, base_experience } = currentDetails.details;
  const abilities = currentDetails.details.abilities.map((el) => {
    return { name: el.ability.name };
  });

  const entries = Object.entries(currentDetails.images);

  const clear = entries.filter(
    (e) =>
      e[1] != null &&
      e[0] !== "front_shiny_female" &&
      e[0] !== "back_shiny_female" &&
      e[0] !== "front_female" &&
      e[0] !== "back_female"
  );

  const Map = clear.map((el, index) => (
    <>
      <picture key={index}>
        <img src={el[1]} alt={el[0]}></img>
      </picture>
    </>
  ));

  function getStats() {
    const arr = [];
    for (let i = 0; i < stats.length; i++) {
      const newObj = { name: stats[i].stat.name, base: stats[i].base_stat };
      arr.push(newObj);
    }

    return setStats(arr);
  }

  const lines = statsArr.map((el) => {
    if (el.base < 30) {
      return (
        <ul>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          {el.name.toLocaleUpperCase()}
        </ul>
      );
    }
    if (el.base >= 30 && el.base < 60) {
      return (
        <ul>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          {el.name}
        </ul>
      );
    }

    if (el.base >= 60 && el.base < 80) {
      return (
        <ul>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>

          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          {el.name}
        </ul>
      );
    }
    if (el.base >= 80 && el.base < 100) {
      return (
        <ul>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          {el.name}
        </ul>
      );
    }
    if (el.base >= 100) {
      return (
        <ul>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="default_line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          {el.name}
        </ul>
      );
    }
  });

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className="big_card_container">
      <div className="big_card">
        <h2>{currentDetails.name}</h2>
        <div className="pictures_container">{Map}</div>
        <div className="spc_details">
          <ul>
            <div className="column">
              <li>
                Height
                <h4>{height}</h4>
              </li>
              <li>
                Weight
                <h4>{weight}</h4>
              </li>
            </div>
            <div className="column">
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
            </div>
          </ul>
        </div>
        <div className="pokemon_stats_info">
          <div
            style={{ gridTemplateColumns: `repeat(${statsArr.length}, 1fr)` }}
          >
            {lines}
          </div>
        </div>
      </div>
    </div>
  );
}
