
// with var we can redefine variable
var nameVar = 'Andrew';
var nameVar = 'Mike'
console.log("nameVar", nameVar);

// with let we cannot redefine variable. There will be an error
let nameLet = 'Jen';
console.log("nameLet", nameLet);

// with const we cannot redefine variable.
// 'var' are function-scoped, where 'let' is block-scoped
const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

getPetName();
// we cannot access petName because its scope is only within function. It does not exist beyond function
console.log(petName);

// Block scoping is for 'let'. 'var' is function scoped

// var - function-scoped
var fullName = 'Andrew Mead';

if(fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName);
}

// here we can also access first name since it is in 'if' statement
console.log(firstName);

// let - block-scoped
var fullName = 'Andrew Mead';

if (fullName) {
    let firstName = fullName.split(' ')[0]
    console.log(firstName);
}

// here we cannot access first name since it is in 'if' statement which is block-scoped
console.log(firstName);