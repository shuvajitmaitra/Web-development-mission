function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return `${count} \n`;
    }
}

const watch1 = stopWatch();
console.log(watch1());


const watch2 = stopWatch();
console.log(watch2());
console.log(watch2());

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();
console.log(!true ? "hello" : "world")
const sum = (p, q) => {
    return p + q;
}
const result = sum(2, 3);
console.log(result);
function work(x, y = 4) {
    return x + y;
}
console.log(work(32);