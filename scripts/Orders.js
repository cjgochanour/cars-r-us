import {
    getOrders,
    getPaints,
    getInteriors,
    getTech,
    getWheels,
} from "./database.js";

export const buildOrderListItem = (order) => {
    const paints = getPaints();
    const interiors = getInteriors();
    const techs = getTech();
    const wheels = getWheels();

    const selectedPaint = paints.find((paint) => paint.id === order.paintId);
    const selectedInterior = interiors.find(
        (interior) => interior.id === order.interiorId
    );
    const selectedTech = techs.find((tech) => tech.id === order.techId);
    const selectedWheels = wheels.find((wheel) => wheel.id === order.wheelsId);

    const totalCost =
        selectedPaint.price +
        selectedInterior.price +
        selectedTech.price +
        selectedWheels.price;

    const theCost = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    return `<li>
        Order #${order.id} costs ${theCost}
    </li>`;
};

export const Orders = () => {
    const orders = getOrders();

    let html = "<ul>";

    let listItems = orders.map(buildOrderListItem);

    html += listItems.join("");
    html += "</ul>";

    return html;
};
