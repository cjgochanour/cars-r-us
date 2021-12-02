import { getTech } from "./database.js";

const techs = getTech();

document.addEventListener("change", (changeEvent) => {
    let chosenOption;

    if (changeEvent.target.id === "Technology") {
        const techId = changeEvent.target.value;
        if (techId > 0) {
            chosenOption = techs.find((tech) => parseInt(techId) === tech.id);
            window.alert(`You have selected the ${chosenOption.package}`);
        }
    }
});

export const Technologies = () => {
    let html = `<h2>Technologies</h2>
    <select id="Technology">
    <option value="0">Please select a package</option>`;

    const techMap = techs.map((tech) => {
        return `<option value="${tech.id}">${tech.package}</option>`;
    });

    html += techMap.join("");
    html += "</select>";
    return html;
};
