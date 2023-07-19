import { useState, useEffect } from "react";

export default function TwoPokemonsEncounter({
  locationPokemon,
  userPokemon,
  capitalizedName,
  pokemonTypes
}) {

  function handleAttack() {}

  return (
    <div>
      <div className="battle-location-pokemon">
        <h2 className="pokemon-name">
          {capitalizedName(locationPokemon.name)}
        </h2>
        <img src={locationPokemon.sprites["front_default"]} className="pokemon-image" />
        <div className="stats">
          <div className="pokemon-type">{pokemonTypes(locationPokemon)}</div>
          <h2 className="pokemon-hp">
            HP: {locationPokemon.stats[0]["base_stat"]}
          </h2>
          <h2 className="pokemon-attack">
            Attack: {locationPokemon.stats[1]["base_stat"]}
          </h2>
          <h2 className="pokemon-defense">Deffense: {locationPokemon.stats[2]["base_stat"]}</h2>
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
          <div className="pokemon-type">{pokemonTypes(userPokemon)}</div>
          <h2 className="pokemon-hp">
            HP: {userPokemon.stats[0]["base_stat"]}
          </h2>
          <h2 className="pokemon-attack">
            Attack: {userPokemon.stats[1]["base_stat"]}
          </h2>
          <h2 className="pokemon-defense">Deffense: {userPokemon.stats[2]["base_stat"]}</h2>
        </div>
      </div>
    </div>
  );
}
