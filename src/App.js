import { MyMap } from "./components/Map/MyMap";
import { CountryInfo } from "./components/CountryInfo/CountryInfo";
import "./App.css";
import { useState } from "react";

function App() {

  // It stores the country code which is used  to fetch country information through API
  const [country, setCountry] = useState("IND");

  // click handler to set country code
  function handleClick(countryCode) {
    setCountry(countryCode);
  }

  return (
    <div className="appContainer">
      <MyMap clickHandler={handleClick} />
      <CountryInfo countryCode={country} />
    </div>
  );
}

export default App;
