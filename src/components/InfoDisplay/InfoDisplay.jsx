import "./infoDisplay.css";

export function InfoDisplay({ country }) {
  console.log(country);
  return (
    <div className="infoContainer">
      <h1 className="countryHeading">{country.name.common}</h1>
      <div className="imageContainer">
        <img src={country.flags.png} alt="Country Flag" />
      </div>

      <p>
        <b>Capital :</b> {country.capital}
      </p>
      <p>
        <b>Population :</b> {country.population}
      </p>
      <p>
        <b>Continent :</b> {country.continents[0]}
      </p>
      <p>
        <b>lat-lng :</b> {country.latlng[0]}
        {country.latlng[1]}
      </p>
      <p>
        <b>Area :</b> {country.area}
      </p>
      <p>
        <b>Timezone :</b> {country.timezones[0]}
      </p>
    </div>
  );
}
