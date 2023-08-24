const myArray = [1, 2, 4, 3, 2, 1];

let largest = 0;
let second = 0;
for (let iterator of myArray) {
    if (largest < iterator) {
        second = largest;
        largest = iterator;

    }
    if (second < iterator && largest > iterator) {
        second = iterator;
    }
}
console.log(second, 'last second');