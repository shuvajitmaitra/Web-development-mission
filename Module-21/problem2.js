const numberOne = 10;
const numberTwo = 20;
const numberThree = 30;

if (numberOne < numberTwo && numberOne < numberThree) {
    console.log(numberOne, "is smallest number");

}

else if (numberTwo < numberOne && numberTwo < numberThree) {
    console.log(numberTwo, "is smallest number");

}
else {
    console.log(numberThree, 'is smallest number');

}