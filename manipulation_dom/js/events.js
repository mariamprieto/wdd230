const input = document.querySelector("input");
const button_read = document.querySelector("button");
const list = document.querySelector("ul");

button_read.addEventListener("click", () => {
  const texto = input.value;
  input.value = "";
  input.focus();
  let span = document.createElement("span");
  span.textContent = texto;

  let btn = document.createElement("button");
  btn.textContent = "X";
  btn.style.backgroundColor = "#FAEBD7";
  btn.style.margin = "10px";
  btn.style.padding = "3px";
  btn.style.color = "red";
  btn.style.fontWeight = "bolder";
  btn.style.gridColumn = "2/3";
  btn.style.width = "30px";
  btn.style.height = "30px";

  let listItem = document.createElement("li");
  listItem.appendChild(span);
  listItem.appendChild(btn);
  list.appendChild(listItem);
  list.setAttribute(
    "style",
    "list-style:none;marginTop:20px;width:300px;backgroundColor:;border:1px solid blue;"
  );
  span.style.textAlign = "rigth";
  span.style.padding = "7px";

  btn.addEventListener("click", function () {
    list.removeChild(listItem);
  });
});
