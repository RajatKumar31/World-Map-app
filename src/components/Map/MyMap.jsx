import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./myMap.css";

export function MyMap({ clickHandler }) {
  // Map styling
  const countryStyle = {
    weight: 0.6,
    color: "black",
    fillColor: "pink",
  };

  // function that gets called on each feature before adding it to a GeoJSON layer
  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    const countryCode = country.properties.ISO_A3;
    layer.bindPopup(countryName);
    layer.on({
      mouseover: (event) => {
        //console.log(event.target.feature.properties.ADMIN);
        event.target.setStyle({
          fillColor: "yellow",
          color: "black",
          fillOpacity: 0.5,
        });
      },
      mouseout: (event) => {
        event.target.setStyle({
          fillColor: "pink",
          fillOpacity: 0.2,
          color: "black",
        });
      },
      click: () => {
        clickHandler(countryCode);
      },
    });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }} className="title">
        World Map
      </div>
      <MapContainer
        style={{ height: "95vh", width: "70vw" }}
        zoom={4}
        center={[20, 100]}
      >
        <GeoJSON
          style={countryStyle}
          data={mapData.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
}
