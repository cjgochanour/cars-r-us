import { carsRus } from "./carsrus.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRus();
};

renderAllHTML();
