// Centimeter to meter
function centimeterToMeter(centi) {
    if (!typeof centi === 'number' || centi <= 0) {
        return 'Please provide a number';
    }

    const meter = centi / 100;
    return meter;

}

const myCentimeter = 100;
console.log(centimeterToMeter(myCentimeter));
