// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');

// Creating a variable with the API URL
const api = {
    key: "efb7d71a34ef674075983e07613772f2",
    base: "https://api.openweathermap.org/data/2.5/",
    units: "imperial"
}

search_button.addEventListener('click', function () {
    searchResults(search_input.value)
})


//Function to access the data held in the API

function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}

//Function to obtain data from the API and display it on the web page
function displayResults(information) {
    // Add data from Api to the elements

    currentTemp.innerHTML = `${information.main.temp.toFixed(1)}`
    const icon = information.weather[0].icon;
    let desc = information["weather"][0]["description"];

    const imagesrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = desc.toUpperCase();
}

