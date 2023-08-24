
function ticketCost(ticketNumber) {
    const ticket100 = 100;
    const ticket200 = 90;
    const restTicket = 70;
    if (ticketNumber <= 100) {

        let price = ticket100 * ticketNumber;

        return price;
    }
    else if (ticketNumber <= 200) {
        let first100price = ticket100 * 100;
        let restOfTicket = ticket200 * (ticketNumber - 100);

        const price = first100price + restOfTicket;

        return price;
    }
    else {
        let first100price = ticket100 * 100;
        let second100price = ticket200 * 100;
        let restOfTicket = restTicket * (ticketNumber - 200);

        const price = first100price + second100price + restOfTicket;

        return price;
    }
}

const myTicket = ticketCost(120);
console.log("Ticket Price:", myTicket);


let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum += i;
}
console.log(sum);
let mystring = "hello i am shuvo";
console.log(mystring.length);
