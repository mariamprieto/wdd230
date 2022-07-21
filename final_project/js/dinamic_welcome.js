const welcome = document.querySelector("h3");


function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(()=>elemento.innerHTML += letra, 75*i)
        
    });
}
typeWriter(welcome);