const requestFile = "json/data.json";
let value = false;
let website = "";
let directory;
let spotlight = ["place-spotlight1", "place-spotlight2", "place-spotlight3"];

function fetchData(directory) {
    fetch(requestFile)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            directory = jsonObject["directory"];

            getMembers(directory);
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

function getMembers(directory) {
    const int = getRandom(directory.length);

    displaySpotlight(directory, int, spotlight);
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
        document.querySelector(".spotlight").appendChild(container);

        let compName = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = displayCompanyWebsite(listing[compNum], value);

        compName.textContent = `${listing[compNum].name}`;
        address.textContent = `${listing[compNum].address}`;
        phone.textContent = `${listing[compNum].phone}`;
        image.setAttribute("src", listing[compNum].imagen);
        image.setAttribute("alt", `${listing[compNum].name} logo`);
        
        
        container.appendChild(compName);
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
