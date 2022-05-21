const input = document.querySelector("input");
const button_read = document.querySelector("button");
const list = document.querySelector("ul");

button_read.addEventListener("click", () => {
  const texto = input.value;
  if (texto != "") {
    input.focus();
    let listItem = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = texto;
    let btn = document.createElement("button");
    btn.textContent = "X";

    listItem.appendChild(span);
    listItem.appendChild(btn);
    list.appendChild(listItem);
    btn.style.backgroundColor = "#FAEBD7";
    btn.style.margin = "5px";
    btn.style.padding = "3px";
    btn.style.color = "red";
    btn.style.fontWeight = "bolder";
    btn.style.width = "30px";
    btn.style.height = "30px";
    
    
    
    btn.addEventListener("click", function () {
      list.removeChild(listItem);
    });
  } 
     


  
});
