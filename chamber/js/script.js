const lastdate = {
  month: "numeric",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
document.getElementById("lastupdated").textContent = new Date(
  document.lastModified
).toLocaleDateString("en-US", lastdate);




const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
datefield.innerHTML = fulldate;


const currentyear = {
  year: "numeric",
};
document.getElementById("currentyear").textContent =
  new Date().toLocaleDateString("en-US", currentyear);

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById("hamburger");
x.onclick = toggleMenu;


const message = document.querySelector(".message");
const day = new Date().getDay();
if (day <= 2) {
  message.textContent =
    "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else if (day == 3) {
  message.textContent =
    "Come join us for the chamber meet and greet tonight at 7:00 p.m.";
} else {
  message.textContent =
    "We're sorry you missed the weekly chamber meet and greet but feel free to join us next Wednesday at 7:00 p.m.";
}