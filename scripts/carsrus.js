import { Technologies } from "./technologies.js";
import { Wheels } from "./wheels.js";
import { Paints } from "./paints.js";
import { Interiors } from "./interiors.js";

const techs = Technologies();
const wheels = Wheels();
const paints = Paints();
const interiors = Interiors();

export const carsRus = () => {
    return `
    ${techs}
    ${wheels}
    ${paints}
    ${interiors}
    `;
};
