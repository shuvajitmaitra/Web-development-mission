function trueFalse(number){
    let remainder = number%2;  
    if(remainder === 0){
        console.log('It is even Number')
        return true;
    }
    else{
        console.log('It is odd Number');
        return false;
    }
}

let teacherNumber = 90;
let valueChecker = trueFalse(teacherNumber);

console.log(valueChecker);