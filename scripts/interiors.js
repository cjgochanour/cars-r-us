import { getInteriors, setInteriors } from "./database.js";

const interiors = getInteriors();

document.addEventListener("change", (changeEvent) => {
    let chosenOption;

    if (changeEvent.target.name === "interiors") {
        const intId = changeEvent.target.value;
        if (intId > 0) {
            chosenOption = interiors.find((int) => parseInt(intId) === int.id);
            setInteriors(chosenOption.id);
        }
    }
});

export const Interiors = () => {
    let html = `<h2>Interiors</h2>
    <select name="interiors">
    <option value="0">Please select an interior</option>`;

    for (const interior of interiors) {
        html += `
            <option value="${interior.id}">${interior.fabric}</option>`;
    }

    html += "</select>";
    return html;
};
