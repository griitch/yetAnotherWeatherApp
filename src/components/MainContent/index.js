import React from "react";
import Container from "./Container";
import CityForm from "../CityForm";
import CardsContainer from "../CardsContainer";
import { useState, useEffect } from "react";

function MainContent() {
  const [WeatherData, setWeatherData] = useState([]);

  useEffect(() => {
    localStorage.getItem("WeatherData") &&
      setWeatherData(JSON.parse(localStorage.getItem("WeatherData")));
  }, []);

  useEffect(() => {
    localStorage.setItem("WeatherData", JSON.stringify(WeatherData));
  }, [WeatherData]);

  return (
    <Container>
      <CityForm
        getData={(data) =>
          setWeatherData((prev) => {
            for (let e of prev) if (e.city === data.city) return prev;
            return [...prev, data];
          })
        }
      />
      <CardsContainer
        removeCity={(city2remove) =>
          setWeatherData((prev) =>
            prev.filter((cityData) => cityData.city != city2remove)
          )
        }
        WeatherData={WeatherData}
      />
    </Container>
  );
}

export default MainContent;
