const requestFile = "json/data.json";
let value = false;
let website = "";
let temple;
let information_temple = ["place-temple1", "place-temple2", "place-temple3"];

function fetchData(temple) {
    fetch(requestFile)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            temple = jsonObject["temple"];

            getMembers(temple);
        });
}

function getRandom(max) {
    let int = [];
    for (let i = 0; i < 3; i++) {
        spot = Math.floor(Math.random() * max);
        if (int.includes(spot)) {
            i--;
        } else {
            int.push(spot);
        }
    }
    return int;
}

function getMembers(temple) {
    const int = getRandom(temple.length);

    displaySpotlight(temple, int, information_temple);
}

function displayCompanyWebsite(listing, value) {
    for (const property in listing) {
        if (property == "website") {
            value = true;
            website = document.createElement("a");
            website.setAttribute("href", `${listing.website}`);
            website.textContent = "Website";
            return { website, value };
        }
    }
    return { website, value };
}

function displaySpotlight(listing, int, label) {
    for (let i = 0; i < label.length; i++) {
        let spotNum = label[i];
        let compNum = int[i];

        let container = document.createElement("div");
        container.setAttribute("class", `${spotNum}`);
        document.querySelector(".card_temple").appendChild(container);

        let templeName = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = displayCompanyWebsite(listing[compNum], value);

        templeName.textContent = `${listing[compNum].name}`;
        address.textContent = `${listing[compNum].address}`;
        phone.textContent = `${listing[compNum].phone}`;
        image.setAttribute("src", listing[compNum].imagen);
        image.setAttribute("alt", `${listing[compNum].name} logo`);
        
        
        container.appendChild(templeName);
        container.appendChild(image);
        container.appendChild(address);
        container.appendChild(phone);

        if (website.value == true) {
            container.appendChild(website.website);
        } else {
            alternate = document.createElement("p");
            alternate.setAttribute("class", "alternate");
            alternate.innerHTML = `<em>Come in and see us!</em>`;
            container.appendChild(alternate);
        }
    }
}

window.addEventListener("load", fetchData);
