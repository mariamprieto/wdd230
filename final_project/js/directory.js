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
  

    data.temple.forEach(temples => {
        let card = document.createElement('div');
        let nameTemple = document.createElement('h2');
        nameTemple.classList.add("name_temple")
        let dedicateDate = document.createElement('h3');
        dedicateDate.classList.add("dedicated")
        let website = document.createElement('a');
        website.classList.add("web_temple")
        let address = document.createElement('p');
        address.classList.add("temple_address")
        let phone = document.createElement('p');
        phone.classList.add("temple_phone");
        let imagen = document.createElement('img');
       
      

        nameTemple.innerHTML = `${temples.name}`;
        address.innerHTML = `<strong>Address:</strong> ${temples.address}`;
        phone.innerHTML= `<strong>Phone:</strong> ${temples.phone}`
        dedicateDate.innerHTML = ` ${temples.dedicated}`;
        website.setAttribute("href", `${temples.website}`);
        website.innerHTML = `<a href=${temples.website}><strong> WebSite <strong></a>` ;
        imagen.setAttribute('src', temples.imagen);
        imagen.setAttribute('alt', ` ${temples.name}`);
        imagen.setAttribute('loading', 'lazy');

       
        card.append(imagen);
        card.append(nameTemple);
        card.append(phone);
        card.append(dedicateDate);
        card.append(address);
        card.append(website);
       

        containerDirectory.append(card);

    })
}

getDirectory();


