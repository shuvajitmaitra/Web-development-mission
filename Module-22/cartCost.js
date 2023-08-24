const shopping = [
    { productName: 'shirt', price: 1200, quantity: 5 },
    { productName: 'pant', price: 2000, quantity: 2 },
    { productName: 'shoe', price: 3000, quantity: 3 },
    { productName: 'glasses', price: 700, quantity: 2 },
    { productName: 'belt', price: 900, quantity: 1 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalProduct = product.quantity * product.price;
        sum = sum + totalProduct;
    }

    return sum;
}

const myShopping = totalCost(shopping);
console.log("Ajke kop dici:", myShopping, "taka");
