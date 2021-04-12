let person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function () {
        let fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

let logName = function(lang1, lang2) {
    
    console.log('Logged ' + this.getFullName());
    console.log('Arguments ' + lang1 + ' ' +lang2);
    console.log('---------');
}

// BIND
console.log('---------');
console.log('BIND');

let logPersonName = logName.bind(person);
logPersonName('en', 'es');

let logNameAgain = function() {
    console.log('Logged again: ' + this.getFullName());
}.bind(person);

logNameAgain();

// CALL
console.log('---------');
console.log('CALL');

const arr = [
    {
        name: logName.call(person, 'fr', 'it'),
        city: 'Stockholm',
    },
    12345,
    'Hello World'
];


// APPLY
console.log('---------');
console.log('APPLY');

logName.apply(person, ['tr', 'ru']); // what happens when you remove this semicolon?

console.log('---------');
console.log('APPLY IFFE');

(function(lang1, lang2) {
    console.log('Logged ' + this.getFullName());
    console.log('Arguments ' + lang1 + ' ' +lang2);
    console.log('---------');
}).apply(person, ['sv', 'nk']);


// FUNCTION BORROWING - grab methods from similar objects

let person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
}

console.log(person.getFullName.apply(person2));

// FUNCTION CURRYING 
function multiply(a, b) {
    return a*b;
}

let multipleByTwo = multiply.bind(this, 2);

multipleByTwo(4); // 8
multipleByTwo(20); // 40
multipleByTwo(9); // 18

/* 
the first parameter in the copy of the multiply function will always be 
2, that is what the above does. We set a permanent value for the first 
variable. 

We can chose to set all our parameters, or none, or some. 
*/
console.log(multipleByTwo(3));
/* Then we set the  second paramter like the above and we get...what do
output do we get? 
*/

let multipleByThree = multiply.bind(this, 3)
console.log(multipleByThree(5))

// ES6
const multiply = (a, b = 2) => a * b;
const multiplyByFour = multiply.bind(this, 4);

console.log(multiplyByFour(3));