// Class syntax 
class ClassName {
    constructor(parameter1, parameter2) {
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
    }
    method() {
        console.log(`I can play with ${this.parameter1}`);
        console.log(`Also, I can play with ${this.parameter2}`);

    }


}
new ClassName('hello', 'world').method();


class TeacherClass {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    display() {
        console.log(`Teacher name is ${this.name}`);
        console.log(`Teacher subject is ${this.subject}`);
    }
}
new TeacherClass('atiq', 'C programming').display();
new TeacherClass('tariq', 'Web development').display();
