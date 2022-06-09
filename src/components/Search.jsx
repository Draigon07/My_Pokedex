import React, { useState } from "react";

export default function Search({ arr, setPokemons, defaultList }) {
  function match(txt) {
    const normalArr = arr;
    const found = arr.filter((el) => el.name.toLowerCase().includes(txt));
    if (found) {
      setPokemons(found);
    } else {
      setPokemons(normalArr);
      console.log(arr);
    }
  }
  return (
    <div className="search_pokemon_container">
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            const cleanTxt = e.target.value.trim().toLowerCase();
            if (cleanTxt.length > 0) match(e.target.value.trim().toLowerCase());
          }}
        ></input>
      </form>
    </div>
  );
}
