import { getWheels, setWheels } from "./database.js";

const wheels = getWheels();

document.addEventListener("change", (changeEvent) => {
    let chosenOption;

    if (changeEvent.target.id === "wheels") {
        const wheelId = changeEvent.target.value;
        if (wheelId > 0) {
            chosenOption = wheels.find(
                (wheel) => parseInt(wheelId) === wheel.id
            );
            setWheels(chosenOption.id);
        }
    }
});

export const Wheels = () => {
    let html = `<h2>Wheels</h2>
    <select id="wheels">
    <option value="0">Please select a configuration</option>`;

    for (const wheel of wheels) {
        html += `
            <option value="${wheel.id}">${wheel.name}</option>`;
    }

    html += "</select>";
    return html;
};
