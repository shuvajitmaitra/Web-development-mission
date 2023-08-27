
const person1 = {

    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
const person2 = {
    firstName: "John",
    lastName: 'Deo',
}
console.log(person1.fullName.call(person2));
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);