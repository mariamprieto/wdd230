const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
const containerCard = document.getElementById("cards");

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
        
    })
    

     

 
}
getInformation();