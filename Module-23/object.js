const nayok = {
    name: 'Shakib khan',
    age: 30,
    Movie: {
        movie1: "king khan",
        movie2: 'Ovineta',
        move2: 'password'
    },
    friends: ['apu', 'bubli', 'puja', 'mim'],
    car: 'tesla',
    income: [{ january: 10000, february: 100000, march: 100000 }, { april: 10000, june: 10000 }],

    hello: function () {
        console.log("hello world");
    }
}

console.log(nayok.name);
console.log(nayok.Movie.movie1);
console.log(nayok.friends);
console.log(nayok.income);
console.log(nayok.hello());