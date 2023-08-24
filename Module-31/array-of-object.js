const product = [
    { id: 1, brand: 'asus', price: 650000 },
    { id: 2, brand: 'MacBook', price: 200000 },
    { id: 3, brand: 'Lenovo', price: 34000 },
    { id: 4, brand: 'HP', price: 343000 }
]

// map ...............................

// const map = product.map(n => n.brand)
// console.log(map);

// forEach .......................
product.forEach(n => console.log(n.price));

// Filters........................
const filter = product.filter(n => n.price > 10000)
console.log(filter);

// Find..................................
const find = product.find(n => n.price > 100000)
console.log(find);

// reduce...............................
const reduce = product.reduce((accu, current) => accu + current.price, 0);
console.log(reduce);