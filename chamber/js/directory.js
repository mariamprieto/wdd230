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
   

    data.directory.forEach(company => {
        let card = document.createElement('div');
        let nameCompany = document.createElement('h3');
        let activity = document.createElement('h4');
        let website = document.createElement('a');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let imagen = document.createElement('img');
       
      

        nameCompany.innerHTML = `${company.name}`;
        address.innerHTML = `<strong>Address:</strong> ${company.address}`;
        phone.innerHTML= `<strong>Phone:</strong> ${company.phone}`
        activity.innerHTML = ` ${company.activity}`;
        website.setAttribute("href", `${company.website}`);
        website.innerHTML = ` ${company.website}`;
        imagen.setAttribute('src', company.imagen);
        imagen.setAttribute('alt', `Company Name ${company.name}`);
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