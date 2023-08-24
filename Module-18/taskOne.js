for(var i=1; i<=39; i++){
    console.log(i + " Ajk amar mon valo nai :(");
}


// Print 58 to 98 all numbers
for(var i=58; i<=98; i++){
    console.log(" Number: " + i);
}
// Print 412 to 458  all even numbers
for(var i=412; i<=458; i+=2){
    console.log("Even Number: " + i);
}
// Print 581 to 623  all Odd numbers
for(var i=581; i<=623; i+=2){
    console.log("Odd Number: " + i);
}

// print all the things that i learned in past few days
var learnedTopics = ['HTML', 'CSS', 'Tailwind', 'DaisyUI', 'Bootstrap', 'JavaScript'];
var i = 0;
while(i < learnedTopics.length){
    console.log("Got Topics: " + learnedTopics[i]);
    i++;
}

// Print 30 to 89
for(var i=30; i<=86; i++){
    console.log(i);
   if(i > 44){
    break;
   }
}

//pint the price of those books that price above 200tk

var price = [200, 230, 189, 199, 145, 453, 453, 343, 123];
for (var i = 0; i < price.length; i++) {
    if(price[i]> 200){
        continue;
    }
    console.log(price[i]);
}

var i = 0;
for (i=0; i<5; i++){};
console.log(i);