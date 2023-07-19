import { useState, useEffect } from "react";
import Encounter from "./Encounter";

export default function Pokemon(props) {
  const id = props.id;
  const setWasClicked = props.setWasClicked;
  const setLocationId = props.setLocationId;

  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/yveltal",
  ];

  function randomize(array) {
    return Math.floor(Math.random() * array.length);
  }

  const [pokemon, setPokemon] = useState("");
  const [pokemonImage, setPokemonImage] = useState();
  const [userFirstPokemon, setUserFirstPokemon] = useState("");
  const [userSecondPokemon, setUserSecondPokemon] = useState("");
  const [userThirdPokemon, setUserThirdPokemon] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/location-area/${Number(id) + 1}/`)
      .then((res) => res.json())
      .then((data) => {
        let area = data;

        let randomPokemon =
          area["pokemon_encounters"][randomize(area.pokemon_encounters)]
            .pokemon;
        setPokemon(randomPokemon);
      });
  }, []);

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Pokemon fetch url", data);
        setPokemonImage(data.sprites["front_default"]);
      });
  }, [pokemon]);

  useEffect(() => {
    fetch(usersPokemon[0])
      .then((res) => res.json())
      .then((data) => setUserFirstPokemon(data));
  }, [pokemon]);

  useEffect(() => {
    fetch(usersPokemon[1])
      .then((res) => res.json())
      .then((data) => setUserSecondPokemon(data));
  }, [pokemon]);

  useEffect(() => {
    fetch(usersPokemon[2])
      .then((res) => res.json())
      .then((data) => setUserThirdPokemon(data));
  }, [pokemon]);

  let capitalizedName = function (name) {
    if (name !== undefined) {
      return name[0].toUpperCase() + name.slice(1);
    }
  };
  // console.log("userFirstPokemon", userFirstPokemon);
  return (
    <>
      {pokemon.name === null ? (
        <>
          <h3>This location doesn't seem to have any pokémon</h3>
          <button
            onClick={() => {
              setWasClicked(false);
              setLocationId(null);
            }}
          >
            Go back to locations
          </button>
        </>
      ) : (
        <Encounter pokemon={pokemon} 
                   userFirstPokemon={userFirstPokemon} 
                   userSecondPokemon={userSecondPokemon}
                   userThirdPokemon={userThirdPokemon}
                   capitalizedName={capitalizedName}
                   pokemonImage={pokemonImage}
        />
      )}
    </>
  );
}
