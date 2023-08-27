function greeting(eventHandler, name) {
    eventHandler(name);
}

function morningGreeting(name) {
    console.log('Good morning', name);
}
function eveningGreeting(name) {
    console.log('Good evening', name);
}
function nightGreeting(name) {
    console.log('Good night', name);
}

greeting(morningGreeting, 'Shuvo');
greeting(morningGreeting, 'Mr shuvajit');
greeting(morningGreeting, 'shuvajit maitra');
greeting(eveningGreeting, 'Shuvo');
greeting(eveningGreeting, 'Mr shuvajit');
greeting(eveningGreeting, 'shuvajit maitra');
greeting(nightGreeting, 'Shuvo');
greeting(nightGreeting, 'Mr shuvajit');
greeting(nightGreeting, 'shuvajit maitra');


function submit() {
    console.log('Submit Button clicked');
}
document.getElementById('submit-btn').addEventListener('click', submit)