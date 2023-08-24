const friends = ['abul', 'babul', 'kabula', 'gabul'];

const arrow = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length % 2 == 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(arrow(friends));