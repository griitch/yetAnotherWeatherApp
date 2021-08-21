/* eslint-disable react/prop-types */
import React from "react";
import Button from "../shared/Button";
import Container from "./Container";
import Header from "../shared/Header";
import CenteredDiv from "../shared/CenteredDiv";

function Card(props) {
  const { country, city, description, icon, temp, feels_like } =
    props.weatherInfo;

  return (
    <Container>
      <Header bgColor="gray">
        <h2>
          {city}, {country}
        </h2>
        <img
          src={`https://www.countryflags.io/${country}/flat/48.png`}
          alt={`${country} flag`}
        />
        <Button
          bgColor="red"
          hover="darkred"
          onClick={() => props.removeCity(city)}
          text="white"
        >
          <strong>X</strong>
        </Button>
      </Header>
      <CenteredDiv>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <h3>{description}</h3>
      </CenteredDiv>
      <CenteredDiv>
        <p>
          Current Temperature : <strong> {temp} C° </strong> <br />
          Feels Like : <strong>{feels_like} C°</strong>
        </p>
      </CenteredDiv>
    </Container>
  );
}

export default Card;
