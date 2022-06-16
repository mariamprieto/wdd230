const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
const containerCard = document.querySelector('.cards');

async function getInformation() {
    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();

        buildCard(data);
    }
    else {
        throw Error(response.statusText);
    }
}

function buildCard(data) {
    console.log(data);

    data.prophets.forEach(prophet => {
        let card = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let place = document.createElement('p');
        let imagen = document.createElement('img');
        let fullName = `${prophet.name} ${prophet.lastname}`;

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        place.innerHTML = `Place of Birth: ${prophet.birthplace}`;
        imagen.setAttribute('src', prophet.imageurl);
        imagen.setAttribute('alt', `Picture of Prophets ${fullName}`);
        imagen.setAttribute('loading', 'lazy');

        card.append(h2);
        card.append(p);
        card.append(place);
        card.append(imagen);
        
        containerCard.append(card);
        
    })
    
}
getInformation();