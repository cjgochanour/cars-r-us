import { getTypes, setTypes } from "./database.js";

const types = getTypes();

document.addEventListener("change", (event) =>
    event.target.name === "types" ? setTypes(parseInt(event.target.value)) : "fix your code"
);

export const Types = () => {
    let typesHTML = "<ul>";

    let typesList = types.map(
        (type) => `<li>
    <input type="radio" name="types" value="${type.id}">${type.name}
    </li>`
    );

    typesHTML += typesList.join("");

    typesHTML += "</ul>";

    return typesHTML;
};
