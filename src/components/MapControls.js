import react from "react";
import { useState } from "react";
import Map from "./Map";
import L from "leaflet";
import IsInVermont from "./IsInVermont";
import Random from "./Random";

function MapControls() {
  let startPosition = IsInVermont(Random()); // sets variable with an array, of the random coordinates (that is in VT) 
  const [newCenter, setNewCenter] = useState(startPosition); // useState uses that as the start position

  let moveAmount = 0.002; // distance to move stored as a variable
  let newLat = newCenter[0]; //takes out the first value as Lattitude
  let newLon = newCenter[1]; //takes out the first value as Longitude
  const goNorth = () => {   // called by the Button
    newLat = newLat + moveAmount; // value changes the appropriate direction for the button called
    setNewCenter([newLat, newLon]); // the new coordinates are set via the seNewCenter function to newCenter
  };
  const goSouth = () => {// called by the Button
    newLat = newLat - moveAmount;// value changes the appropriate direction for the button called
    setNewCenter([newLat, newLon]);// the new coordinates are set via the seNewCenter function to newCenter
  };
  const goEast = () => {// called by the Button
    newLon = newLon + moveAmount;// value changes the appropriate direction for the button called
    setNewCenter([newLat, newLon]);// the new coordinates are set via the seNewCenter function to newCenter
  };
  const goWest = () => {// called by the Button
    newLon = newLon - moveAmount;// value changes the appropriate direction for the button called
    setNewCenter([newLat, newLon]);// the new coordinates are set via the seNewCenter function to newCenter
  };

  return (
    <div>
      {/* Here are the directional buttons that move the pointer for the game */}
      <button onClick={goNorth}>North</button>
      <button onClick={goSouth}>South</button>
      <button onClick={goEast}>East</button>
      <button onClick={goWest}>West</button>

      <Map center={newCenter} zoom= {18} />
      {/* {L.marker(newCenter).addTo(Map)}  aborted attempt to add a breadcrumb to the map  */}
    </div>
  );
}

export default MapControls;
