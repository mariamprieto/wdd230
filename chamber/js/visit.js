const visits = document.querySelector(".visitor");
const days = document.querySelector(".days");

let MSPERDAY = 86400000;
let today = Date.now();
let numVisits = Number(localStorage.getItem("visits"));
let lastVisit = localStorage.getItem("dateVisited");
let difference = (today - lastVisit);
let daysBwtnVisits = Math.round(difference / MSPERDAY);


if (numVisits !== 0) {
    visits.innerHTML=`Welcome! You have visited here ${numVisits} time.`
}

else {
    daysBwtnVisits = 0;
    visits.textContent = `Welcome, this is your first visit!"`
}

days.innerHTML = `Your last visit was ${daysBwtnVisits} days ago.`
numVisits++;

localStorage.setItem("visits", numVisits);
localStorage.setItem("dateVisited", today);

