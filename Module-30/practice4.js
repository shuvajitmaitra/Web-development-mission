const arr1 = [12, 45, 67, 87, 89];
const arr2 = [74, 24, 87, 90, 97];

const arrow = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    console.log(newArray);
    const max = Math.max(...newArray);
    return max;
}
console.log(arrow(arr1, arr2));