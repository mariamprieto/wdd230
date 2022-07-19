const button_menu = document.querySelector("#btonMenu");
const menu = document.querySelector("#menu");

button_menu.addEventListener("click", function () {
    menu.classList.toggle("display");
});

const subMenuBtn = document.querySelectorAll(".submenu_btn");
for (let i = 0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function () {
        if (window.innerWidth < 1024) {
            
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if (subMenu.classList.contains("deploy")) {
                subMenu.classList.remove("desploy");
                subMenu.removeAttribute("style");
            }
            else {
                subMenu.classList.add("desploy");
                subMenu.style.height = height + "px";
            }
        }
    });

}
