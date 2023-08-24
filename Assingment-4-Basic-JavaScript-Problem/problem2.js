function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please make sure both of two are string"
    }

    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}

const mystring1 = "John Doe";
const mystring2 = 'John';

console.log(matchFinder(mystring1, mystring2));