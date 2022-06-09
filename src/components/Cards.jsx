import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

export default function Cards({ name, images, details }) {
  for (let i = 0; i < images.length; i++) {
    const element = images[i];
    console.log(element);
  }

  const matchColorBtn = (name) => {
    const loweredName = name.toLowercase();
    if (loweredName == "poison") return { background: "purple" };
    if (loweredName == "fire") return { background: "#fd7d24" };
    if (loweredName == "grass") return { background: "#9bcc50" };
    if (loweredName == "water") return { background: "#4592c4" };
    if (loweredName == "bug") return { background: "#729f3f" };
    return { background: "#ccc" };
  };

  const typesArr = details.types.map((el) => {
    const lowered = el.type.name;
    const MATCH_COLOR = {
      background:
        lowered == "poison"
          ? "purple"
          : lowered == "fire"
          ? "#fd7d24"
          : lowered == "grass"
          ? "#9bcc50"
          : lowered == "water"
          ? "#4592c4"
          : lowered == "bug"
          ? "#729f3f"
          : lowered == "flying"
          ? "linear-gradient(120deg, #3dc7ef 80%, #bdb9b8 50%)"
          : "#ccc",
      color: lowered == "normal" ? "#000" : "white",
    };

    if (details.types.length < 2) {
      return (
        <>
          <button className="card_buttons" style={MATCH_COLOR}>
            {el.type.name}
          </button>
          <button className="card_buttons" style={{ visibility: "hidden" }}>
            Hola
          </button>
        </>
      );
    }

    return (
      <>
        <button className="card_buttons" style={MATCH_COLOR}>
          {el.type.name}
        </button>
      </>
    );
  });

  return (
    <div className="poke-card">
      <h2 style={{ fontSize: "1rem" }}>{name}</h2>
      <div className="images_container">
        <picture>
          <img
            src={images.front_default}
            style={{ width: "100%" }}
            alt="Pokedex"
          />
        </picture>
      </div>
      {typesArr}
    </div>
  );
}
