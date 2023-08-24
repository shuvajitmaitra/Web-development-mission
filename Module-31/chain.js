const data = [{ name: 'shuvo', age: 24, town: 'Dhaka' }]

console.log(data[0].town);

// Nested Object data access
const product = {
    count: 5000,
    product: 'Mobile',
    quantity: [
        { id: 1, brand: 'asus', price: 160000 },
        { id: 1, brand: 'MacBook', price: 2320000 },
        { id: 1, brand: 'Lenovo', price: 340000 },
        { id: 1, brand: 'HP', price: 343000 }],
    town: 'Dhaka'

}

console.log(product.quantity[1].brand);


const user = {
    id: 5000,
    name: 'Raj',
    address: {
        street: {
            first: 'Road No 1',
            second: 'Road No 2',
            third: 'Road No 3'
        }
    },
    town: 'Dhaka, Bangladesh'
}

console.log(user.address.street.second);

const user2 = {
    id: 5000,
    name: 'Pori',
    address: {
        first: 'Road No 1',
        second: 'Road No 2',
        third: 'Road No 3'
    },
    town: 'Dhaka, Bangladesh'
}
console.log(user2.address.street?.second);