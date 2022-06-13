import axios from "axios";
import { useEffect, useState, createContext } from "react";
import "./App.css";
import Cards from "./components/Cards";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Details from "./components/Details";

export const DataContext = createContext();
function App() {
  const [currentDetails, setDetails] = useState({});
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

  function setCurrentDetails(name) {
    const match = pokemonList.find((el) => el.name == name);
    setDetails(match);
  }

  const MapperList = pokemonList.map((el, index) => {
    return (
      <div key={index}>
        <Link to={`details/:${el.name}`}>
          <Cards
            images={el.images}
            name={el.name}
            details={el.details}
            setCurrentDetails={setCurrentDetails}
          />
          ;
        </Link>
      </div>
    );
  });

  return (
    <DataContext.Provider value={pokemonList}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pokemonList={pokemonList}
                setPokemons={setPokemons}
                MapperList={MapperList}
              />
            }
          />
          <Route
            path="/details/:id"
            element={<Details currentDetails={currentDetails} />}
          />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
