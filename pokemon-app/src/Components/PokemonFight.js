import { useState, useEffect } from "react";
import ShowLocations from "./ShowLocations";

let turn = 0;

export default function TwoPokemonsEncounter({
  locationPokemon,
  userPokemon,
  capitalizedName,
  pokemonTypes,
  // userCapturedPokemons={userCapturedPokemons},
  // setUserCapturedPokemons={setUserCapturedPokemons}
}) {
  const [locationPokemonHP, setLocationPokemonHP] = useState(
    locationPokemon.stats[0]["base_stat"]
  );
  const [userPokemonHP, setUserPokemonHP] = useState(
    userPokemon.stats[0]["base_stat"]
  );

  const usersAttack = userPokemon.stats[1]["base_stat"];
  const locationsAttack = locationPokemon.stats[1]["base_stat"];
  const usersDefense = userPokemon.stats[2]["base_stat"];
  const locationsDefense = locationPokemon.stats[2]["base_stat"];


  function handleAttack() {
    let random = Math.random() * (255 - 217) + 217;

    if (turn % 2 == 0) {
      turn = turn + 1;
      console.log(turn);
      setLocationPokemonHP((prevStateHP) =>
        Math.floor(
          prevStateHP - ((((2 / 5 + 2) * usersAttack * 60) / locationsDefense / 50 + 2) * random) / 255)
      )
    } else {
      turn = turn + 1;
      setUserPokemonHP((prevStateHP) =>
        Math.floor(
          prevStateHP - ((((2 / 5 + 2) * locationsAttack * 60) / usersDefense / 50 + 2) * random) / 255)
      );
    }
  }

  // if (locationPokemonHP <= 0)setUserCapturedPokemons(prevState => [...prevState, locationPokemon])


  return (
    <div>

      <div className="battle-location-pokemon">
        <h2 className="pokemon-name">
          {capitalizedName(locationPokemon.name)}
        </h2>
        <img
          src={locationPokemon.sprites["front_default"]}
          className="pokemon-image"
        />
        {/* Battle won - pokemon captured */}
        {locationPokemonHP < 0 ? <div className="pokemon-captured">
          <h2>Pokemon captured!</h2>
          {/* Go back to locations */}
          <button onClick={() => window.location.reload(true)}>Go back to locations</button>
        </div>:
        // Location's stats
        <div className="stats">
          <div className="pokemon-type">{pokemonTypes(locationPokemon)}</div>
          <h2 className="pokemon-hp">HP: {locationPokemonHP}</h2>
          <h2 className="pokemon-attack">Attack: {locationsAttack}</h2>
        </div>}
      </div>
      {/* Attack button */}
      {locationPokemonHP > 0 && <button className="attack-button" onClick={handleAttack}>
        Attack
      </button>}
      {/* Users pokemon */}
      <div className="battle-user-chosen-pokemon">
        <h2 className="pokemon-name">{capitalizedName(userPokemon.name)}</h2>
        <img
          src={userPokemon.sprites["front_default"]}
          className="pokemon-image"
        />
        {/* Users' stats */}
        <div className="stats">
          <div className="pokemon-type">{pokemonTypes(userPokemon)}</div>
          <h2 className="pokemon-hp">HP: {userPokemonHP}</h2>
          <h2 className="pokemon-attack">Attack: {usersAttack}</h2>
          {/* <h2 className="pokemon-defense">Deffense: {userPokemon.stats[2]["base_stat"]}</h2> */}
        </div>
      </div>
    </div>
  );
}
