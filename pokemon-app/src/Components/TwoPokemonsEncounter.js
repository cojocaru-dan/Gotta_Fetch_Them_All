export default function TwoPokemonsEncounter({locationPokemon, userPokemon, capitalizedName, pokemonImage}) {
  return (
    <div>
        <div className="location-pokemon">
            <h2 className="pokemon-name">{capitalizedName(locationPokemon.name)}</h2>
            <img src={pokemonImage} className="pokemon-image" />
        </div>
        <div className="user-pokemon">
            <h2 className="pokemon-name">
            {capitalizedName(userPokemon.name)}
            </h2>
            <img
            src={userPokemon.sprites["front_default"]}
            className="pokemon-image"
            />
        </div>
    </div>
  );
}
