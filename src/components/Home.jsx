import React from "react";
import Search from "./Search";
export default function Home({
  pokemonList,
  setPokemons,
  MapperList,
  MapperSearch,
  onSearch,
  setOnSearch,
}) {
  return (
    <div className="home_container">
      <h1>Kanto Region Pokedex</h1>
      <Search
        arr={pokemonList}
        setPokemons={setPokemons}
        onSearch={onSearch}
        setOnSearch={setOnSearch}
      />
      <div>
        <nav className="cards_container">
          {onSearch.length > 0 ? MapperSearch : MapperList}
        </nav>
      </div>
    </div>
  );
}
