const max = Math.max(12, 122, 54, 887, 37, 4329);
const number = [12, 34, 46, 38, 89, 95, 45, 25, 43]


const maxArray = Math.max(number);
console.log(maxArray);



const arrayMax = Math.max(...number); //... is the spread operator
console.log(arrayMax);


// Use spread operator to copy...................
const friends = [10, 10, 10, 10];
const anotherFriends = [...friends];
friends.push(20);
console.log(anotherFriends);
console.log(friends);



// Copy any array and add any element using spread operator

const moreFriend = [...friends, 300000000, 8090];
console.log(moreFriend);


