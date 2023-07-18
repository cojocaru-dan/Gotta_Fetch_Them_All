import { useState, useEffect } from "react";
import "./App.css";
import ShowLocations from "./Components/ShowLocations";
import Pokemon from "./Components/Pokemon";

function App() {
  const [wasClicked, setWasClicked] = useState(false);
  const [locationId, setLocationId] = useState(null);

  function handleClick(event) {
    console.log(event.target.id);
    setWasClicked((prev) => !prev);
    setLocationId(event.target.id);
  }

  return (
    <div className="Pokemon-app">
      {!wasClicked && <ShowLocations onClick={handleClick} />}
      {locationId && <Pokemon 
                        id={locationId} 
                        setWasClicked={setWasClicked} 
                        setLocationId={setLocationId}
                      />}
    </div>
  );
}

export default App;
