let myArray = [12, 23, 45, 64, 35, 36, 13, 67, 45, 48];
let oddArrayList = oddNumber(myArray);
console.log('Given array:', myArray);

// Find Odd number
function oddNumber(numbers){
    let oddArray = [];
    for(var i = 0; i<numbers.length; i++){
        if(numbers[i] % 2 !==0){
            oddArray.push(numbers[i]);
        }
    }
    return oddArray;
}

console.log('New array:', oddArrayList);

// Find Odd number Sum
function arraySum(numbers){
    let sum = 0;
    for(var i = 0; i<numbers.length; i++){
      sum += numbers[i]
    }
    return sum;
}


let totalArraySum = arraySum(oddArrayList);
console.log('Total sum of the odd number:', totalArraySum);

