// CLASS
// it's like blueprint for a building - building plan
// for class upperCase 1st letter
// below also default value for 'name'
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    // method below
    getGreeting() {
        // template strings below. After '$' we can write all JS expressions
        return `Hello, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

// Student class is other version of Person class with some variation
class Student extends Person {
    constructor(name, age, major) {
        // 'super' refers to parent class. We are using 'super' to take variables from parent class
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        // below we would receive boolean 'true' if major is present
        return !!this.major
    }
    // below overriding method
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }
        return description;
    }
}

// new instance of new class Student
const me = new Student("Piotr Cytryniak", 29, 'Computer Science');

// new instance of a Person class
const me = new Person("Piotr Cytryniak", 29);

console.log(me);
console.log(me.getGreeting());

// new class - Traveler
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` . I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const newMe = new Traveler("Piotr Cytryniak", 29, 'Warsaw');