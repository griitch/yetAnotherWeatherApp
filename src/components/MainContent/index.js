import React from "react";
import Container from "./Container";
import CityForm from "../CityForm";
import CardsContainer from "../CardsContainer";
import { useState } from "react";
import useLocalStorageWeatherData from "./useLocalStorageWeatherData";

function MainContent() {
  const [WeatherData, setWeatherData] = useState([]);
  const loading = useLocalStorageWeatherData(WeatherData, setWeatherData);


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
      {loading && <h1>loading ...</h1> }
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
