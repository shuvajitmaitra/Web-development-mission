function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const myinches = 12131;
const myFeet = inchesToFeet(myinches);

console.log('My Feet is:', parseFloat(myFeet.toFixed(2)),'ft');
