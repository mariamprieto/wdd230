// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const weatherURL = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}