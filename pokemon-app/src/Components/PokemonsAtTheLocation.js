import capturedPokemons from "../CapturedPokemons";

export default function PokemonsAtTheLocation({
    locationPokemon,
    userFirstPokemon,
    userSecondPokemon,
    userThirdPokemon,
    capitalizedName,
    handlePokemonClick,
    pokemonTypes,
}) {
    return (
    <>
    {/* Pokemon at the location */}
        <div key={"location-pokemon-card"} className="location-pokemon-card">
        <h2 className="pokemon-name">{capitalizedName(locationPokemon.name)}</h2>
        <img src={locationPokemon.sprites["front_default"]} className="pokemon-image"/>
        </div>
        <h2 className="choose-message">Choose a pokemon for battle!</h2>
        {/* Users pokemons */}
        <div key={"user-pokemon-container"} className="user-pokemon-container">
            {/* First */}
            <div key="0" id="0" onClick={handlePokemonClick}>
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
            <div key="1" id="1" onClick={handlePokemonClick}>
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
            <div key="2" id="2" onClick={handlePokemonClick}>
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
            {capturedPokemons.map((capturedPokemon, index) => 
                <div key={index + 3} id={index + 3} onClick={handlePokemonClick}>
                    <h2 className="pokemon-name">
                        {capitalizedName(capturedPokemon.name)}
                    </h2>
                    <img
                        src={capturedPokemon.sprites["front_default"]}
                        className="pokemon-image"
                    />
                    <div className="stats">
                        <div className="pokemon-type">
                        {pokemonTypes(capturedPokemon)}
                        </div>
                        <h2 className="pokemon-hp">
                        HP: {capturedPokemon.stats[0]["base_stat"]}
                        </h2>
                        <h2 className="pokemon-attack">
                        Attack: {capturedPokemon.stats[1]["base_stat"]}
                        </h2>
                    </div>
                </div>
            )}
        </div>
    </>
    )
}
