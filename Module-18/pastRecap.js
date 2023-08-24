// String type variables
var name = 'shuvajit maitra';

// Numeric types variables
var myClassRollNumber = 210316085;

// Boolean type variables
var amISingle = true;


// Array example 
var myTableItems = ['laptop', 'Mouse', 'Mouse Pad', 'Bottle Cap'];

var indexing = myTableItems.indexOf('mouse');
myTableItems[2] = 'bottle';
var itemsPush = myTableItems.push('pen');
var itemsPop = myTableItems.pop();
var itemsUnshift = myTableItems.unshift('Lighter');
var itemsShift = myTableItems.shift();

// Conditional Operators In js
if(myTableItems === 3){
    console.log('myTableItems is 3');
}
else if(myTableItems[2] == 'bottle'){
    console.log('Number three items is bottle');
}
else{
    console.log("You don't know about conditions");
}