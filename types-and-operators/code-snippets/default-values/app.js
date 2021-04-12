// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet(); // Hello undefined

function greetDefault(name){
    name = name || 'Jane'
    console.log('Hi ' + name);
}
greetDefault(); // Hi Jane

// Arrow function 
const greet1 = name => console.log(`Hello ${name}`);
greet(); // Hello undefined

const greet2 = (name = 'James') => console.log(`Hey ${name}`);
greet(); // Hey James

