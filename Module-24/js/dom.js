// // Option-1: getElementByTagName------------------------
// const liCollection = document.getElementsByTagName("li");
// // console.log(liCollection);
// for (const li of liCollection) {
//     console.log(li.innerText);
// }
// const allHeading = document.getElementsByTagName("h1");
// for (const h1 of allHeading) {
//     console.log(h1.innerText);
// }
// // Option-2: getElementById-----------------------------
// const fruit = document.getElementById("Fruit-title");
// console.log(fruit);

// // option-3 getElementsByClassName---------------------
// const places = document.getElementsByClassName("favorite-places");
// console.log(places);

// let heading = document.getElementById("lists-heading");
// heading.innerText = "New List";

// option-4 querySelector
// document.querySelector("#fruit")

// Option-5 querySelectorAll\

document.getElementById("lists-heading").style.backgroundColor = "yellow"

document.getElementById('fruit').getAttribute('class')