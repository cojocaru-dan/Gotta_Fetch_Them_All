import { useEffect, useState } from "react";

export default function ShowLocations(props) {
  const clickEvent = props.onClick;

  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location?offset=0&limit=20")
      .then((res) => res.json())
      .then((fetchedLocations) => setLocations(fetchedLocations.results));
  }, []);

  const nameOfLocation = (loc) =>
    loc.name
      .replace("-", " ")
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="location-cards-container">
      {locations &&
        locations.map((location, index) => (
          <div
            key={index}
            id={index}
            className="location-card"
            onClick={clickEvent}
          >
            <h2 id={index}>{nameOfLocation(location)}</h2>
          </div>
        ))}
    </div>
  );
}
