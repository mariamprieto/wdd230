const request = 'json/data.json';
const containerDirectory = document.querySelector('.information');

async function getDirectory() {
    let response = await fetch(request);
    if (response.ok) {
        let data = await response.json();

        buildDirectory(data);
    }
    else {
        throw Error(response.statusText);
    }
}

function buildDirectory(data) {
   

    data.temple.forEach(temple => {
        let card = document.createElement('div');
        let nameTemple = document.createElement('h3');
        let dedicateDate = document.createElement('h4');
        let website = document.createElement('a');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let imagen = document.createElement('img');
       
      

        nameTemple.innerHTML = `${temple.name}`;
        address.innerHTML = `<strong>Address:</strong> ${temple.address}`;
        phone.innerHTML= `<strong>Phone:</strong> ${temple.phone}`
        dedicareDate.innerHTML = ` ${temple.activity}`;
        website.setAttribute("href", `${temple.website}`);
        website.innerHTML = ` ${temple.website}`;
        imagen.setAttribute('src', temple.imagen);
        imagen.setAttribute('alt', `Company Name ${temple.name}`);
        imagen.setAttribute('loading', 'lazy');

       
        card.append(imagen);
        card.append(nameCompany);
        card.append(activity);
        card.append(address);
        card.append(phone);
        card.append(website);
       

        containerDirectory.append(card);

    })
}

getDirectory();