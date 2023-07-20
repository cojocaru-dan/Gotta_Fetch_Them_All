import { useState } from "react";
import PokemonFight from "./PokemonFight";
import capturedPokemons from "../CapturedPokemons";
import PokemonsAtTheLocation from "./PokemonsAtTheLocation";

export default function Encounter({
  locationPokemon,
  userFirstPokemon,
  userSecondPokemon,
  userThirdPokemon,
  capitalizedName,
  setWasClicked
}) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function handlePokemonClick(event) {
    const selectedId = event.target.parentElement.id;
    if (selectedId === "0") {
      setSelectedPokemon(userFirstPokemon);
    } else if (selectedId === "1") {
      setSelectedPokemon(userSecondPokemon);
    } else if (selectedId === "2") {
      setSelectedPokemon(userThirdPokemon);
    } else {
      setSelectedPokemon(capturedPokemons[selectedId - 3]);
    }
  }

  const pokemonTypes = function (pokemon) {



    if (pokemon !== "") {
      if (pokemon.types.length > 1) {
        return pokemon.types.map((typeItem, index) => {
          return <h3 key={index}>{typeItem.type.name[0].toUpperCase() + typeItem.type.name.slice(1)}</h3>;
        });
      } else {
        return <h3 key={0}>{pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1)}</h3>;
      }
    }
    return;
  };

  return !selectedPokemon ? (
    userFirstPokemon !== "" &&
    userSecondPokemon !== "" &&
    userThirdPokemon !== "" ? 
    <PokemonsAtTheLocation
      locationPokemon={locationPokemon}
      userFirstPokemon={userFirstPokemon}
      userSecondPokemon={userSecondPokemon}
      userThirdPokemon={userThirdPokemon}
      capitalizedName={capitalizedName}
      handlePokemonClick={handlePokemonClick}
      pokemonTypes={pokemonTypes}
    /> : 
    null
  ) : (
    <PokemonFight
      locationPokemon={locationPokemon}
      userPokemon={selectedPokemon}
      capitalizedName={capitalizedName}
      pokemonTypes={pokemonTypes}
      setWasClicked={setWasClicked}
    />
  );
}
