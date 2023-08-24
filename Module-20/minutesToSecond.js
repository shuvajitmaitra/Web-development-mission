function minutesToSecond(min){
    let sec = min*60;
    return sec;
}

let givenMinutes = 60;
let second = minutesToSecond(givenMinutes);
console.log(givenMinutes, 'minutes =', second, 'second');
