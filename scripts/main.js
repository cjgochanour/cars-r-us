import { carsRus } from "./carsrus.js";

const mainContainer = document.querySelector("#container");

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "resource") {
        const chosenOption = changeEvent.target.value;
        console.log(chosenOption); // "1" or "2"
    }
});

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRus();
};

renderAllHTML();
