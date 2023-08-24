// Without default value set
function add1(num1, num2) {
    result = num1 + num2;
    console.log(num1, num2, result);
}

// with default value set
function add2(num1 = 0, num2 = 0) {
    result = num1 + num2;
    console.log(num1, num2, result);
}

add1(1);
add2(2);


// array default value set 
function array(num = []) {

}


// object default value set 
function object(num = {}) {

}


// boolean default value set 
function boolean(num = true) {

}


