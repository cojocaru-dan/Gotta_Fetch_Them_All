import { useEffect, useState } from 'react';

export default function ShowLocations() {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location?offset=0&limit=20")
      .then(res => res.json())
      .then(fetchedLocations => setLocations(fetchedLocations.results));
  }, []);

  console.log(locations);

  const nameOfLocation = (loc) => 
    loc.name.replace("-", " ")
                 .split(" ")
                 .map(word => word[0].toUpperCase() + word.slice(1))
                 .join(" ");
  

  return (
    <div className='locations'>
      {locations && locations.map((location, index) => (
        <div key={index} className='location'>
          <h2>{nameOfLocation(location)}</h2>
        </div>
      ))}
    </div>
  )
}
