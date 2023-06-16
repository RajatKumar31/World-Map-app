import { apiURL } from "../../util/api";
import { useState, useEffect } from "react";
import { InfoDisplay } from "../InfoDisplay/InfoDisplay";
import { Alert, AlertTitle } from "@mui/material";

export const CountryInfo = ({ country }) => {
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(false);

  let countryName = country;

  useEffect(() => {
    async function getCountryByName(countryName) {
      try {
        const res = await fetch(`${apiURL}/alpha/${countryName}`);
        if (!res.ok) throw new Error("Could not found!");
        const data = await res.json();
        setCountryData(data);
      } catch (error) {
        setError(true);
      }
    }
    getCountryByName(countryName);
  }, [countryName]);

  return (
    <>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>Data could not be fetched!</strong>
        </Alert>
      )}

      {!error && (
        <div>
          {countryData.map((country, index) => (
            <InfoDisplay country={country} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default CountryInfo;
