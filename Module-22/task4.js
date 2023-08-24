// find the string who has largest length

function bestFriend(arr) {

    let newArr = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= newArr.length) {
            newArr = arr[i];
        }
    }

    return newArr;
}

const myArr = ['shuvo', 'shuvo', '12', "shuvajit maitra"];
console.log(bestFriend(myArr));
