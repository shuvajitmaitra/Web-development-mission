function mileToKilo(mile){
    kilo = mile * 1.69034;
    return kilo;

}

let myMile = 1234;
let mykilo = mileToKilo(myMile);
console.log("My kilometer is:", parseFloat(mykilo.toFixed(2)),'km');


