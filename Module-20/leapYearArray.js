function leapYearArray(array){
    let newArray =[];
    for(let i = 0; i <= array.length; i++){

        if(array[i] % 400 === 0){
            newArray.push(array[i]);
        }

        else if(array[i] % 4 === 0){
            newArray.push(array[i]);
        }
        
    }
    return newArray;
}

let givenArray = [2023, 2024, 2025, 2028, 2030, 1952, 2010, 2020];
let newArray = leapYearArray(givenArray);
console.log('Leap year is:', newArray);
