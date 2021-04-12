// expression, reuslts in a value
let a, b, c
a = 5
b = {language: 'SE', greet: 'Hej'}
c = 'Hello World!'

// statement, expression can be used inside a statment and used as value resulting in either truthy or falsy

if(a > 4) {
    console.log('a is above 4');
} else {ßß
    console.log('a is 4 or lower');
}

// Function statement
function greet() {
    console.log('hi');
}

// Function expression - anonymous functions
// var anynomousGreet = function() {
//     console.log('hi');
// }

// Function expression - anonymous functions
anonomousGreet2();
var anonomousGreet2 = () => console.log('hello');

/* 
Try calling the both function expressions above 
before and after their lexical enviorment. What
are the results? 

greet()
anynomousGreet()
newAnonomousGreet()
*/

function log(a) {
    console.log(a)
}

log({
    greeting: 'hi' // we just created a Object on the fly
})


// First class functions, we create a function Object on the fly
function log2(b) {
    b()
}

log2(function() {
    console.log('Hi their')
})

log2(() => console.log('hello'))

