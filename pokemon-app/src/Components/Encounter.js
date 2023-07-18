import { useState } from "react";
import TwoPokemonsEncounter from "./TwoPokemonsEncounter";

export default function Encounter({pokemon, userFirstPokemon, userSecondPokemon, userThirdPokemon, capitalizedName, pokemonImage}) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function handlePokemonClick(event) {
    const selectedId = event.target.parentElement.id;
    if (selectedId=== '0') {
      setSelectedPokemon(userFirstPokemon);
    } else if (selectedId === "1") {
      setSelectedPokemon(userSecondPokemon);
    } else if (selectedId === "2") {
      setSelectedPokemon(userThirdPokemon);
    }
  }
  console.log(selectedPokemon);

  return (!selectedPokemon ? (
    userFirstPokemon !== "" &&
    userSecondPokemon !== "" &&
    userThirdPokemon !== "" ? (
        <>
          <div className="location-pokemon-card">
            <h2 className="pokemon-name">{capitalizedName(pokemon.name)}</h2>
            <img src={pokemonImage} className="pokemon-image" />
          </div>
          <div className="user-pokemon-card">
            <div id="0" onClick={handlePokemonClick}>
                <h2 className="pokemon-name">
                {capitalizedName(userFirstPokemon.name)}
                </h2>
                <img
                src={userFirstPokemon.sprites["front_default"]}
                className="pokemon-image"
                />
            </div>
            <div id="1" onClick={handlePokemonClick}>
                <h2 className="pokemon-name">
                {capitalizedName(userSecondPokemon.name)}
                </h2>
                <img
                src={userSecondPokemon.sprites["front_default"]}
                className="pokemon-image"
                />
            </div>
            <div id="2" onClick={handlePokemonClick}>
                <h2 className="pokemon-name">
                {capitalizedName(userThirdPokemon.name)}
                </h2>
                <img
                src={userThirdPokemon.sprites["front_default"]}
                className="pokemon-image"
                />
            </div>
          </div>
        </>
    ) : 
    null)
    :
    (
      <TwoPokemonsEncounter 
        locationPokemon={pokemon} 
        userPokemon={selectedPokemon} 
        capitalizedName={capitalizedName}
        pokemonImage={pokemonImage}
      />
    )
  )
}
