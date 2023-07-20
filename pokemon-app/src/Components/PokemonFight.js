import { useState } from "react";
import capturedPokemons from "../CapturedPokemons";
import BattleLocationPokemon from "./BattleLocationPokemon";
import BattleUserChosenPokemon from "./BattleUserChosenPokemon";

let turn = 0;

export default function TwoPokemonsEncounter({
  locationPokemon,
  userPokemon,
  capitalizedName,
  pokemonTypes,
  setWasClicked
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

    if (turn % 2 === 0) {
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

  if (locationPokemonHP <= 0 && (capturedPokemons.find(capturedPokemon => capturedPokemon.name === locationPokemon.name) === undefined)) {
    capturedPokemons.push(locationPokemon);
  }

  return (
    <div className="battle-pokemon">
      <BattleLocationPokemon 
          locationPokemon={locationPokemon}
          locationPokemonHP={locationPokemonHP}
          locationsAttack={locationsAttack}
          capitalizedName={capitalizedName}
          setWasClicked={setWasClicked}
          pokemonTypes={pokemonTypes}
      />
      {/* Attack button */}
      {(locationPokemonHP > 0 && userPokemonHP > 0) && <button className="attack-button" onClick={handleAttack}>
        Attack
      </button>}
      <BattleUserChosenPokemon
          userPokemon={userPokemon}
          userPokemonHP={userPokemonHP}
          usersAttack={usersAttack}
          capitalizedName={capitalizedName}
          setWasClicked={setWasClicked}
          pokemonTypes={pokemonTypes}
      />
    </div>
  );
}
