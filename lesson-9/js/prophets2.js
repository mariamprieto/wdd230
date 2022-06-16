const URL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
const containerCard = document.querySelector('.cards');

 
fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dateBirth = document.createElement('p');
    let placeBirth = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    dateBirth.textContent = 'Date of Birth:'+ ''+ prophet.birthdate;
    placeBirth.textContent = 'place of Birth:'+ ''+prophet.birthplace;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(dateBirth);
    card.appendChild(placeBirth);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    containerCard.appendChild(card);
}