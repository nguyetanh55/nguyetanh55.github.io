class Person {
    name;
    age;

    constructor(argName, argAge) {
        this.name = argName;
        this.age = argAge;
    }

    greet() {
        return "I'm" + this.name;
    }
}

var semi = new Person("Semi_Dev", 35);
var anh = new Person("Nguyet Anh", 19);

console.table(semi);
console.table(anh);