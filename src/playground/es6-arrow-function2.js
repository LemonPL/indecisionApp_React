// arguments object - no longer bound with arrow functions
// to use arguments we need normal es5 functions


const add = function (a,b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55,1,100));

// this keyword - uses nearest parent even if there is none
// in methods in objects we need to use es5 function
const user = {
    name: "Piotr",
    cities: ["Warsaw", "Radom"],
    // in method here must be es5 function, other way we would have undefined
    // printPlacesLived: function () {
    // or new syntax below
    // with .map we are receving new array
    // .map is like .forEach but we can also transform so it is better
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPlacesLived());

// challenge

const multiplier = {
    // numbers - array of numbers
    numbers: [1,2,3,4,5],
    // multiplyBy - single number
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((val) => val * this.multiplyBy)
    }
    // multiply - return a new array where the number have been multiplied
};

console.log(multiplier.multiply());