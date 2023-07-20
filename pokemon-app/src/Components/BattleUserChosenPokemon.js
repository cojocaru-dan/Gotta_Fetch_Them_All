export default function BattleUserChosenPokemon({
    userPokemon,
    userPokemonHP,
    usersAttack,
    capitalizedName,
    setWasClicked,
    pokemonTypes
}) {
  return (
    <div className="battle-user-chosen-pokemon">
        <h2 className="pokemon-name">{capitalizedName(userPokemon.name)}</h2>
        <img
        src={userPokemon.sprites["front_default"]}
        className="pokemon-image"
        />
        {userPokemonHP <= 0 ? (
        <div className="battle-user-chosen-pokemon-lose">
            <h2  className="lose-message">Your pokemon lost the battle! 😞  </h2>
            {/* Go back to locations */}
            <button className="go-back-btn" onClick={() => setWasClicked(false)}>Go back to locations ⬅  </button>
        </div>
        ) : 
        (<div className="stats">
            <div className="pokemon-type">{pokemonTypes(userPokemon)}</div>
            <h2 className="pokemon-hp">HP: {userPokemonHP}</h2>
            <h2 className="pokemon-attack">Attack: {usersAttack}</h2>
            {/* <h2 className="pokemon-defense">Deffense: {userPokemon.stats[2]["base_stat"]}</h2> */}
        </div>)}
    </div>
  )
}
