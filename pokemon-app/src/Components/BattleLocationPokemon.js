export default function BattleLocationPokemon({
    locationPokemon,
    locationPokemonHP,
    locationsAttack,
    capitalizedName,
    setWasClicked,
    pokemonTypes
}) {
    return (
        <div className="battle-location-pokemon">
            <h2 className="pokemon-name">
            {capitalizedName(locationPokemon.name)}
            </h2>
            <img
            src={locationPokemon.sprites["front_default"]}
            className="pokemon-image"
            />
            {/* Battle won - pokemon captured */}
            {locationPokemonHP <= 0 ? (
            <div className="pokemon-captured">
                <h2>Pokemon captured!</h2>
                {/* Go back to locations */}
                <button onClick={() => setWasClicked(false)}>Go back to locations</button>
            </div>
            ) :
            // Location's stats
            (<div className="stats">
            <div className="pokemon-type">{pokemonTypes(locationPokemon)}</div>
            <h2 className="pokemon-hp">HP: {locationPokemonHP}</h2>
            <h2 className="pokemon-attack">Attack: {locationsAttack}</h2>
            </div>)}
        </div>
    )
}
