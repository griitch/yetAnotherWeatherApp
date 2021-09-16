# Griitch Weather

Built with React and styled with styled components.  
Weather data is provided by the [openweathermap api](https://openweathermap.org/api), and country flags are from countryflags.io

## features

- Display the current weather from different cities.
- Remove cities from the display.
- Data persistence using local storage.
- Mobile friendly

## Future improvement

- Make the user choose between Celsius and Fahrenheit.
- Implement a dark/light them using styled components's theming api.
- Make the ui look nicer

## installation and setup

Get an API key from openweathermap.org and set it in the variable API_KEY in the file components/CityForm/index.js

Install the dependencies :

```
    npm install
```

Start local developpement server :

```
    npm run serve
```

Compile the bundle to the dist folder :

```
    npm run build
```
