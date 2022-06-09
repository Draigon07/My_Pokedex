import axios from "axios";
import { useEffect, useState, useLayoutEffect, createContext } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Search from "./components/Search";

import ModalDetails from "./components/ModalDetails";

export const DataContext = createContext();
function App() {
  const [pokemonList, setPokemons] = useState([
    {
      name: "Default",
      images: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
        front_shiny_female: null,
      },
      details: { types: [] },
    },
  ]);

  //region de Kanto

  async function getPokemonDetails(url, name) {
    try {
      const res = await axios(url);
      const image = await axios(res.data.forms[0].url);
      const images = image.data.sprites;

      return { name, details: res.data, images };
    } catch (e) {
      console.error(e);
    }
  }

  //Get image: details-forms

  async function getPokemons() {
    const url = "https://pokeapi.co/api/v2/pokemon";
    try {
      const res = await axios(url);
      const results = res.data.results;

      const getAllDetails = await Promise.all(
        results.map(async (el) => {
          return await getPokemonDetails(el.url, el.name);
        })
      );

      return setPokemons(getAllDetails);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const MapperList = pokemonList.map((el) => {
    return <Cards images={el.images} name={el.name} details={el.details} />;
  });

  return (
    <DataContext.Provider value={pokemonList}>
      <div className="App">
        <h1>Kanto Region Pokedex</h1>
        <Search arr={pokemonList} setPokemons={setPokemons} />
        <div>
          <div className="cards_container">{MapperList}</div>
        </div>
        <ModalDetails />
      </div>
    </DataContext.Provider>
  );
}

export default App;
