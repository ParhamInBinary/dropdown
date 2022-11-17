function addEventListenerToBurger() {
    const burger = document.querySelector("#burger");
    burger.addEventListener("click", toggleBurger);
}

function toggleBurger() {
    const header = document.querySelector("header");
    header.classList.toggle("dropped")
}

addEventListenerToBurger()
