"use client";

import React, { useState, useEffect } from "react";

function Dates() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://covid-19-data.p.rapidapi.com/help/countries?format=json";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d4c0fe99bbmsh2e2838cf44a894bp1acd03jsn5c531048d93f",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-blue-900 mb-6">
        Total infection 1,398,398
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {countries.map((country) => (
          <li
            key={country.alpha3code}
            className="transition-transform transform hover:scale-105"
          >
            <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                {country.name}
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dates;
