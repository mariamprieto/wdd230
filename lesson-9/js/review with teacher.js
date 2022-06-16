const URL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
const containerCard = document.getElementById("cards");

 
fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        
    });
