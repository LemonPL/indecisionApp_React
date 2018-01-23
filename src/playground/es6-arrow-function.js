const square = function (x){
    return x * x;
};

// normal syntax for an arrow function
// const squareArrow = (x) => {
//     return x * x;
// };

// new syntax - we do not use explicitly return anywhere
const squareArrow = (x) => x * x;

console.log(square(8));

// challenge

const fullName = 'Andrew Mead';

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

getFirstName("Piotr Cyrtyniak");

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(firstName);