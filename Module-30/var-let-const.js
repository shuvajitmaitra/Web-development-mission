// var : can be reassign and redeclare 
// let: can be reassign but can not redeclare
// const: can not be reassign and redeclare

var name = 'shuvo'; //can
var name = 'shuvajit' //can


let name2 = 'shuvajit';
// let name2 = 'shuvo' //canNot redeclare
name = 'Shuvajit Maitra' //Can reAssign

const name3 = "Shuvajit Maitra";
// const name3 = 'Can not redeclare';
// name3 = 'Can not reAssign';

const array = [10, 24, 64, 25, 34];
array.push(34, 34, 34);
array.pop();
console.log(array);

// Note That: In const variable, we cannot reassign and redeclare bt we can change the internal value of array and object. Above and below we can see the example.
const object = {
    name: 'shuvajit',
    age: 25,
    address: 'Dhaka'
}
console.log(object);
object.name = 'Shuvo';
console.log(object);