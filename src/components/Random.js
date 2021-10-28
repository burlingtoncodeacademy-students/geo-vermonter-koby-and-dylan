import { useState } from "react";

// function used to get a random set of GPS coordinates within the boundary Lat/Lon of Vermont
// returns an array of [lattitude, longitude] to props.random
function Random(props) {
  const [randomLatLon, setrandomLatLon] = useState([]);

  let minLat = 42.730315;
  let maxLat = 45.005419;
  let rangeLat = maxLat - minLat;
  let lattitude = 0;
  lattitude = parseFloat((Math.random() * rangeLat + minLat).toPrecision(9)); // uses parseFloat because toPrecision returns a string

  let minLon = -71.510225 * -1; // times -1 to remove the negative sign
  let maxLon = -73.35218 * -1; // times -1 to remove the negative sign
  let rangeLon = maxLon - minLon;
  let longitude = 0;
  longitude = (Math.random() * rangeLon + minLon).toPrecision(9) * -1; // * (-1) this makes the return negative

  setrandomLatLon([lattitude, longitude]);
  console.log(randomLatLon)
}
export default Random;
