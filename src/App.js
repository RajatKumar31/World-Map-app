import { MyMap } from "./components/Map/MyMap";
import { CountryInfo } from "./components/CountryInfo/CountryInfo";
import "./App.css";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("IND");

  function handleClick(countryCode) {
    setCountry(countryCode);
  }

  return (
    <div className="appContainer">

      <MyMap clickHandler={handleClick} />
      <CountryInfo country={country} />
    </div>
  );
}

export default App;
