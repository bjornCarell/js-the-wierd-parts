// function statement
function greet(name) {
    console.log('Hello ' + name);
};
greet('John');

console.log(greet);

// using a function expressions 
let greetFunction = function(name) {
    console.log('Hello ' + name);
};
greetFunction('Jane');

// using an Immediately Invoked Function Expressions (IIFE)
let greeting = function(name) {
    return 'Hello ' + name;
}('Jenny');

console.log(greeting);
// console.log(greeting()); // What will happen here? 

// try to remove the semicolon after the string assigned to jimmy. What happens?
let jimmy = 'Jimmy Jones';

// the most common pattern for a IFFE
(function(name = 'Jane Hoffa') {
    let greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(jimmy));


(function(name) {
    console.log('Hello ' + name);
})('Folke');

(name) => console.log(`Hello ${name})`);

((name) => console.log(`Hello ${name}`))('Berit');

'Hello World';

['Hi', 'Mars'];

{ name: 'James' };

5;
