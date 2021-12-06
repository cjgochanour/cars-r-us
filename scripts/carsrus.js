import { Technologies } from "./technologies.js";
import { Wheels } from "./wheels.js";
import { Paints } from "./paints.js";
import { Interiors } from "./interiors.js";
import { Orders } from "./Orders.js";
import { createCustomOrder } from "./database.js";
import { Types } from "./types.js";

document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
        createCustomOrder();
    }
});

const techs = Technologies();
const wheels = Wheels();
const paints = Paints();
const interiors = Interiors();
const types = Types();

export const carsRus = () => {
    return `
        <h1>Cars 'R Us</h1>

        <article class="choices">
            <section class="choices__techs options">
                ${techs}
            </section>
            <section class="choices__wheels options">
                ${wheels}
            </section>
            <section class="choices__paints options">
                ${paints}
            </section>
            <section class="choices__interiors options">
                ${interiors}
            </section>
        </article>

        <section>
        ${types}
        </section>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Recent Orders</h2>
            ${Orders()}
        </article>

        `;
};
