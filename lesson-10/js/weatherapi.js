// select HTML elements in the document
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



// Creating a variable with the API URL
const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=efb7d71a34ef674075983e07613772f2`;

//Function to access the data held in the API
async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//Function to obtain data from the API and display it on the web page
function displayResults(information) {
    // Add data from Api to the elements

    currentTemp.innerHTML = `${information.main.temp.toFixed(1)}`
    const icon = information.weather[0].icon;
    let desc = information["weather"][0]["description"];

    const imagesrc = `https://openweathermap.org/img/w/${icon}@2x.png`;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = desc.toUpperCase();
}

apiFetch(url);