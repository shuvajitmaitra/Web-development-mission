function sum(a, b, c, d) {
    console.log(arguments);
    console.log(arguments[4]);
    const arg = [...arguments];
    console.log(arg);
    return a + b + c + d;
}
const total = sum(2, 20, 200, 2000, 20000, 200000, 2000000);
console.log(total);

console.log(sum.length);
