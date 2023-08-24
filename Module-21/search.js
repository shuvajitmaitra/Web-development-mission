// We can search any word in any string using includes()
// includes are case Sensitive so string word and search both can be same case
// to solve this problem we can make both word are lower case 
// in below we can seen two way make string are lower case
let myString = 'Hello, Everyone I am shuvo, I am a dedicated learner';

// First method 
const searchString = 'everyone';
const myStringLowerCase = myString.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();
const findString = myStringLowerCase.includes(searchStringLowerCase);
console.log(findString);

// second method which is one line of code
const findStringInOneLine = myString.toLowerCase().includes(searchString.toLowerCase());
console.log(findStringInOneLine);

// INDEX OF in string
myString = 'Hello, Everyone I am shuvo, I am a dedicated learner';
console.log(myString.indexOf('Everyone'));



// Starts with in string
console.log(myString.startsWith('Hello'));



// Ends with in string
console.log(myString.endsWith('learner'));
