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

const currentyear = {
  year: "numeric",
};
document.getElementById("currentyear").textContent =
  new Date().toLocaleDateString("en-US", currentyear);


