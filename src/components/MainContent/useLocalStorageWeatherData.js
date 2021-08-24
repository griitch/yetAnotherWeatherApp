import { useState, useEffect } from "react";

const useLocalStorageWeatherData = ( WeatherData, setWeatherData  ) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("WeatherData")) {
        let oldData = JSON.parse(localStorage.getItem("WeatherData"));
        if(oldData.length > 0)
            setLoading(true);
      oldData.forEach((city) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?APPID=71d90f3a0d75b4ffcd687686c145742c&q=${ city }&units=metric`
        )
          .then((resp) => resp.json())
          .then((data) => {
            setWeatherData((prev) => [
              ...prev,
              {
                city: city,
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
    localStorage.setItem("WeatherData", JSON.stringify(WeatherData.map( data => data.city  )));
  }, [WeatherData]);

  return loading;
};

export default useLocalStorageWeatherData;
