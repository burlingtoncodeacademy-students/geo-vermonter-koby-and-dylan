import Random from "./Random";
import borderData from "../data/border";
import L from "leaflet";
import leafletPip from "leaflet-pip";

function IsInVermont() {
  let inVermont = false;
  let randomStart;
  while (!inVermont === true) {
    randomStart = Random();

    leafletPip.bassackwards = true;
    let gjLayer = L.geoJSON(borderData);
    let results = leafletPip.pointInLayer(randomStart, gjLayer);

    if (results.length === 0) {
      inVermont = false;
    } else {
      inVermont = true;
    }
  }
  return randomStart;
}

export default IsInVermont;
