const names = ['abul', 'abul', 'babul', 'babul', 'gabul', 'gabul', 'chabul', 'chabul', 'mokbul']

function duplicate(names) {
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        if (newArray.includes(names[i]) === false) {
            newArray.push(names[i]);
        }
    }
    return newArray;
}
console.log('Old array', names);

const finalArray = duplicate(names);
console.log('New array', finalArray);
