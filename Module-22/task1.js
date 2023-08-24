//Feet to inch
function feetToInch(feet) {
    if (typeof feet !== 'number' || feet <= 0) {
        return 'please Provide a number';
    }
    const inch = feet * 12;
    return inch;
}

const myFeet = 1;
console.log(feet12ToInch(myFeet));
