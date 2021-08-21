/* eslint-disable react/prop-types */
import React from 'react';
import Container from './Container';
import Card from '../Card';
import uniqid from 'uniqid';

function CardsContainer( props ) {

   
    return (
        <Container>
            { props.WeatherData.map( city => <Card removeCity = {props.removeCity}  key = { uniqid() } weatherInfo = { city } /> )}
        </Container>
    )
}

export default CardsContainer;








