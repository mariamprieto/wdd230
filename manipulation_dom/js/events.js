const input = document.querySelector('input');
const button_read = document.querySelector('button');
const list = document.querySelector('ul');


button_read.addEventListener('click', () => {
    const texto = input.value;
    input.value = "";
    input.focus();
    let span = document.createElement("span");
    span.textContent = texto;
    
    let btn = document.createElement("button");
    btn.textContent = "X"
   


    let listItem = document.createElement("li");
    listItem.appendChild(span);
    listItem.appendChild(btn);
    list.appendChild(listItem);
    

 btn.addEventListener("click", function () {
     list.removeChild(listItem);
     
 }) ;
   
    
   
});



