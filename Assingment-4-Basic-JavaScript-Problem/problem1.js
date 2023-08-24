function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a number";
    }

    const result = number * number * number;
    return result;
}
const myNumber = 13;
console.log(cubeNumber(myNumber));