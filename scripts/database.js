const database = {
    paints: [
        { id: 1, color: "Silver", price: 200 },
        { id: 2, color: "Midnight Blue", price: 250 },
        { id: 3, color: "Firebrick Red", price: 400 },
        { id: 4, color: "Spring Green", price: 300 },
    ],
    interiors: [
        { id: 1, fabric: "Beige Fabric", price: 300 },
        { id: 2, fabric: "Charcoal Fabric", price: 375 },
        { id: 3, fabric: "White Leather", price: 600 },
        { id: 4, fabric: "Black Leather", price: 600 },
    ],
    techs: [
        { id: 1, package: "Basic Package", price: 1000 },
        { id: 2, package: "Navigation Package", price: 3000 },
        { id: 3, package: "Visibility Package", price: 5000 },
        { id: 4, package: "Ultra Package", price: 7500 },
    ],
    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 250 },
        { id: 2, name: "17-inch Pair Radial Black", price: 300 },
        { id: 3, name: "18-inch Pair Spoke Silver", price: 450 },
        { id: 4, name: "18-inch Pair Radial Black", price: 500 },
    ],
    types: [
        { id: 1, name: "Car", price: 1 },
        { id: 2, name: "SUV", price: 1.5 },
        { id: 3, name: "Truck", price: 2.25 },
    ],
    orders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            techId: 1,
            wheelsId: 1,
            typeId: 1,
            timestamp: 1638480048814,
        },
    ],
    orderBuilder: {},
};

export const getPaints = () => {
    return database.paints.map((paint) => ({ ...paint }));
};
export const getInteriors = () => {
    return database.interiors.map((interior) => ({ ...interior }));
};
export const getTech = () => {
    return database.techs.map((tech) => ({ ...tech }));
};
export const getWheels = () => {
    return database.wheels.map((wheel) => ({ ...wheel }));
};
export const getTypes = () => {
    return database.types.map((type) => ({ ...type }));
};
export const getOrders = () => {
    return database.orders.map((order) => ({ ...order }));
};
export const setPaints = (id) => {
    return (database.orderBuilder.paintId = id);
};
export const setInteriors = (id) => {
    return (database.orderBuilder.interiorId = id);
};
export const setTech = (id) => {
    return (database.orderBuilder.techId = id);
};
export const setWheels = (id) => {
    return (database.orderBuilder.wheelsId = id);
};
export const setTypes = (id) => {
    return (database.orderBuilder.typeId = id);
};
export const createCustomOrder = () => {
    const newOrder = { ...database.orderBuilder };

    const lastIndex = database.orders.length - 1;
    newOrder.id = database.orders[lastIndex].id + 1;

    newOrder.timestamp = Date.now();

    database.orders.push(newOrder);

    database.orderbuilder = {};

    document.dispatchEvent(new CustomEvent("stateChanged"));
};
