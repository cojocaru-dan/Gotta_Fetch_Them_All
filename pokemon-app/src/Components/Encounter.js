import { useState } from "react";
import PokemonFight from "./PokemonFight";

export default function Encounter({
  locationPokemon,
  userFirstPokemon,
  userSecondPokemon,
  userThirdPokemon,
  capitalizedName,
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
    }
  }

  const pokemonTypes = function (pokemon) {

    if (pokemon !== "") {
      if (pokemon.types.length > 1) {
        return pokemon.types.map((typeItem, index) => {
          return <h3 key={index}>{typeItem.type.name}</h3>;
        });
      } else {
        return pokemon.types.type.name;
      }
    }
    return;
  };

  return !selectedPokemon ? (
    userFirstPokemon !== "" &&
    userSecondPokemon !== "" &&
    userThirdPokemon !== "" ? (
      <>
      {/* Pokemon at the location */}
        <div className="location-pokemon-card">
          <h2 className="pokemon-name">{capitalizedName(locationPokemon.name)}</h2>
          <img src={locationPokemon.sprites["front_default"]} className="pokemon-image" />
        </div>
        <h2 className="choose-message">Choose a pokemon for battle!</h2>
        {/* Users pokemons */}
        <div className="user-pokemon-container">
          {/* First */}
          <div id="0" onClick={handlePokemonClick}>
            <h2 className="pokemon-name">
              {capitalizedName(userFirstPokemon.name)}
            </h2>
            <img
              src={userFirstPokemon.sprites["front_default"]}
              className="pokemon-image"
            />
            <div className="stats">
              <div className="pokemon-type">
                {pokemonTypes(userFirstPokemon)}
              </div>
              <h2 className="pokemon-hp">
                HP: {userFirstPokemon.stats[0]["base_stat"]}
              </h2>
              <h2 className="pokemon-attack">
                Attack: {userFirstPokemon.stats[1]["base_stat"]}
              </h2>
            </div>
          </div>
          {/* Second */}
          <div id="1" onClick={handlePokemonClick}>
            <h2 className="pokemon-name">
              {capitalizedName(userSecondPokemon.name)}
            </h2>
            <img
              src={userSecondPokemon.sprites["front_default"]}
              className="pokemon-image"
            />
            <div className="stats">
              <div className="pokemon-type">
                {pokemonTypes(userSecondPokemon)}
              </div>
              <h2 className="pokemon-hp">
                HP: {userSecondPokemon.stats[0]["base_stat"]}
              </h2>
              <h2 className="pokemon-attack">
                Attack: {userSecondPokemon.stats[1]["base_stat"]}
              </h2>
            </div>
          </div>
          {/* Third */}
          <div id="2" onClick={handlePokemonClick}>
            <h2 className="pokemon-name">
              {capitalizedName(userThirdPokemon.name)}
            </h2>
            <img
              src={userThirdPokemon.sprites["front_default"]}
              className="pokemon-image"
            />
            <div className="stats">
              <div className="pokemon-type">
                {pokemonTypes(userThirdPokemon)}
              </div>
              <h2 className="pokemon-hp">
                HP: {userThirdPokemon.stats[0]["base_stat"]}
              </h2>
              <h2 className="pokemon-attack">
                Attack: {userThirdPokemon.stats[1]["base_stat"]}
              </h2>
            </div>
          </div>
        </div>
      </>
    ) : null
  ) : (
    <PokemonFight
      locationPokemon={locationPokemon}
      userPokemon={selectedPokemon}
      capitalizedName={capitalizedName}
      pokemonTypes={pokemonTypes}
    />
  );
}
