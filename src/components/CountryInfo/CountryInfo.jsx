import { apiURL } from "../../util/api";
import { useState, useEffect } from "react";
import { InfoDisplay } from "../InfoDisplay/InfoDisplay";
import { Alert, AlertTitle } from "@mui/material";

export const CountryInfo = ({ countryCode }) => {

  // it stores country data
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(false);

  // Function to fetch API
  useEffect(() => {
    async function getCountryByName(countryCode) {
      try {
        const res = await fetch(`${apiURL}/alpha/${countryCode}`);
        if (!res.ok) throw new Error("Could not found!");
        const data = await res.json();
        setCountryData(data);
      } catch (error) {
        setError(true);
      }
    }
    getCountryByName(countryCode);
  }, [countryCode]);

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
