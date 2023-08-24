const typeOfPhone = [
    { brand: 'samsung', camera: 10, price: 28902, color: 'red' },
    { brand: 'Nokia', camera: 20, price: 30000, color: 'red' },
    { brand: 'apple', camera: 30, price: 40000, color: 'red' },
    { brand: 'realme', camera: 40, price: 20000, color: 'red' },
    { brand: 'Xiomi', camera: 50, price: 29000, color: 'red' },
    { brand: 'Oppo', camera: 60, price: 23000, color: 'red' },
];
function hightestCamera(phones) {
    let hightest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        if (hightest.camera < phones[i].camera) {
            hightest = phones[i];
        }
    }

    return hightest;
}

const myChoice = hightestCamera(typeOfPhone);
console.log('Dam kono bapar na amar camera e lagbe', myChoice);
