const burger = document.getElementById("#burger");
const header = document.querySelector("header");

burger.addEventListener("click", () => {
    burger.classList.toggle();
    header.style.height = "100%"
});