const bulb = document.getElementById('div');
const btn = document.getElementById('btn');
var flag = 0;
btn.addEventListener('click', function () {
    if (flag == 0) {
        bulb.style.backgroundColor = 'yellow';
        console.log('Bulb On');
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = 'white';
        console.log('Bulb Off');
        flag = 0;
    }
})