import { useState, useEffect } from "react";

export default function TwoPokemonsEncounter({
  locationPokemon,
  userPokemon,
  capitalizedName,
  pokemonImage,
  // pokemonTypes
}) {

  const [locationPokemonStats, setLocationPokemonStats] = useState("")

  useEffect(() => {
    fetch(locationPokemon.url)
      .then((res) => res.json())
      .then((data) => {
        setLocationPokemonStats(data);
        console.log("DATA STATS ", data.stats[0]["base_stat"]);
      });
    }, []);
    function handleAttack() {}

  return (
    <div>
      <div className="battle-location-pokemon">
        <h2 className="pokemon-name">
          {capitalizedName(locationPokemon.name)}
        </h2>
        <img src={pokemonImage} className="pokemon-image" />
        <div className="stats">
          {/* <div className="pokemon-type">{locationPokemonStats.types[0]}</div> */}
          <h2 className="pokemon-hp">
            HP: {locationPokemonStats.stats[0]["base_stat"]}
          </h2>
          <h2 className="pokemon-attack">
            {/* Attack: {locationPokemon.stats[1]["base_stat"]} */}
          </h2>
        </div>
      </div>
      <button className="attack-button" onClick={handleAttack}>
        Attack
      </button>
      <div className="battle-user-chosen-pokemon">
        <h2 className="pokemon-name">{capitalizedName(userPokemon.name)}</h2>
        <img
          src={userPokemon.sprites["front_default"]}
          className="pokemon-image"
        />
        <div className="stats">
          {/* <div className="pokemon-type">{pokemonTypes(userPokemon)}</div> */}
          <h2 className="pokemon-hp">
            {/* HP: {userPokemon.stats[0]["base_stat"]} */}
          </h2>
          <h2 className="pokemon-attack">
            {/* Attack: {userPokemon.stats[1]["base_stat"]} */}
          </h2>
          {/* <h2 className="pokemon-defense">Deffense: {userFirstPokemon.stats[2]["base_stat"]}</h2> */}
        </div>
      </div>
    </div>
  );
}
