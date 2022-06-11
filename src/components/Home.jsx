import React from "react";
import Search from "./Search";
export default function Home({ pokemonList, setPokemons, MapperList }) {
  return (
    <div className="home_container">
      <h1>Kanto Region Pokedex</h1>
      <Search arr={pokemonList} setPokemons={setPokemons} />
      <div>
        <nav className="cards_container">{MapperList}</nav>
      </div>
    </div>
  );
}
