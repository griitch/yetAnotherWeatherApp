import React from 'react'
import Header from './Header'
import MainContent  from "./MainContent";
import '../styles/globalstyles.css';
// implement a dark mode with theming api.....
//  <img src="https://www.countryflags.io/ { country code (ma for xmpl) } /flat/48.png"></img> 
// http://openweathermap.org/img/wn/10d@2x.png
//<img src="http://openweathermap.org/img/wn/ { icon code } @2x.png"  />
// http://api.openweathermap.org/data/2.5/find?q={ city } &units=metric&appid= {api key} metric
// http://api.openweathermap.org/data/2.5/find?q={ city } &appid= {api key} fahreanit 

/*
    fields to extract from response :
        weather.description
        weather.icon
        main.temp
        main.feels_like
        sys.country
*/ 
 

export default function App() {

    return (
        <>
            <Header />
            <MainContent />
        </>
    )

    
}
