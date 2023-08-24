class vehicle {
    constructor(wheel, load) {
        this.wheel = wheel;
        this.load = load;
    }

    method() {
        console.log(`This is ${this.wheel} car`);
        console.log(`Load capacity of this vehicle ${this.load}`);
    }

}
new vehicle('4 wheel', '30 TON').method();


class Motor extends vehicle {
    constructor(wheel, load, milage, brand) {
        super(wheel, load);
        this.milage = milage;
        this.brand = brand;
    }

    motorBike() {
        console.log(`This is ${this.wheel} bike`);
        console.log(`Load capacity ${this.load} person`);
        console.log(`Milage is ${this.milage} km`);
        console.log(`This is ${this.brand} bike \n \n `);

    }

}

new Motor('two wheeler', 'Two', 45, 'Suzuki').motorBike();
new Motor('two wheeler', 'Two', 50, 'Hero').motorBike();
new Motor('two wheeler', 'Two', 40, 'Yamaha').motorBike();
new Motor('two wheeler', 'Two', 30, 'BMW').motorBike();