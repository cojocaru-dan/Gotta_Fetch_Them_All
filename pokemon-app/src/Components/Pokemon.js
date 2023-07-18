import { useState, useEffect } from "react";

export default function Pokemon(props) {
  const id = props.id;

  function randomize(array) {
    return Math.floor(Math.random() * array.length);
  }

  const [pokemon, setPokemon] = useState("");
  const [pokemonImage, setPokemonImage] = useState();

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
        setPokemonImage(data.sprites["front_default"]);
      });
  }, [pokemon]);



  let capitalizedName = function(name){
    if (name !== undefined) {
    return name[0].toUpperCase() + name.slice(1);
  }}

  return (
    <>
      {pokemon.name === null ? (
        <h3>This location doesn't seem to have any pokémon</h3>
      ) : (
        <div className="pokemon-card">
          <h2 className="pokemon-name">{capitalizedName(pokemon.name)}</h2>
          <img src={pokemonImage} className="pokemon-image" />
        </div>
      )}
    </>
  );
}
