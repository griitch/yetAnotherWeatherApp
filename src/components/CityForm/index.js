/* eslint-disable react/prop-types */
import Button from "../shared/Button";
import React from "react";
import TextInput from "./TextInput";
import Error from "./error";
import Loading from "./loading";
import Container from "./Container";
import { useState } from "react";
import loadingPic from "../../assets/loading.png";

function CityForm(props) {
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const API_KEY = "YOUR API KEY"; // SET YOUR API KEY HERE

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}&units=metric`
    )
      .then((response) => {
        if (!response.ok) throw new Error();
        setError(false);
        return response.json();
      })
      .then((data) => {
        props.getData({
          city: cityName,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          country: data.sys.country,
        });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <TextInput
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <Button px="2" py="0.5" bgColor="green" hover="darkgreen" text="white">
          Add City
        </Button>
        {loading && <Loading src={loadingPic} alt="loading" />}
        {error && <Error>City not found !! </Error>}
      </Container>
    </>
  );
}

export default CityForm;
