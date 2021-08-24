import { useState, useEffect } from "react";

const useLocalStorageWeatherData = ( WeatherData, setWeatherData  ) => {
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

  return loading;
};

export default useLocalStorageWeatherData;
