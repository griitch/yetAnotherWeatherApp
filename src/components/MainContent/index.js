import React from "react";
import Container from "./Container";
import CityForm from "../CityForm";
import CardsContainer from "../CardsContainer";
import { useState, useEffect } from "react";

function MainContent() {
  const [WeatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("WeatherData")) {
      setLoading(true);
      let oldData = JSON.parse(localStorage.getItem("WeatherData"));
      oldData.forEach((elem) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?APPID=71d90f3a0d75b4ffcd687686c145742c&q=${elem.city}&units=metric`
        )
          .then((resp) => resp.json())
          .then((data) => {
            setWeatherData((prev) => [
              ...prev,
              {
                city: elem.city,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                country: data.sys.country,
              },
            ]);
            setLoading(false);
          })
          .catch((e) => console.error(e));
      });
    }
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
