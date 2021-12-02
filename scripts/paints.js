import { getPaints } from "./database.js";

const paints = getPaints();

document.addEventListener("change", (changeEvent) => {
    let chosenOption;

    if (changeEvent.target.name === "paints") {
        const paintId = changeEvent.target.value;
        if (paintId > 0) {
            chosenOption = paints.find(
                (paint) => parseInt(paintId) === paint.id
            );
            window.alert(`You have selected the ${chosenOption.color}`);
        }
    }
});

export const Paints = () => {
    let html = `<h2>Paints</h2>
    <select name="paints">
    <option value="0">Please select a color</option>`;

    for (const paint of paints) {
        html += `
            <option value="${paint.id}">${paint.color}</option>`;
    }

    html += "</select>";
    return html;
};
