const openPopUpButton = document.getElementById("open-socials-popup");
const openPopUpButtonMobile = document.getElementById("open-socials-popup-mobile");
const popUp = document.getElementById("pop-up");

openPopUpButton.addEventListener("click", handleClick);
openPopUpButtonMobile.addEventListener("click", handleClick);

function handleClick() {
    popUp.classList.add("flex");
    popUp.classList.toggle("scale-x-0");
}
