import Button from '../shared/Button';
import React from 'react';
import TextInput from './TextInput';
import Container from './Container';
import { useState } from "react";

function CityForm() {


    const [cityName, setCityName] = useState("");



    return (
        <Container>
            <TextInput value = {cityName} onChange = {e => setCityName( e.target.value )} />
            <Button
                px = "2" py = "0.5"
                bgColor = "green"
                hover = 'darkgreen'
                text = 'white'
            >Add City</Button>
        </Container>
    )
}

export default CityForm;
