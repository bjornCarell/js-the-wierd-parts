// BY VALUE
let a = 'primitive value';
b = a;

console.log(a); // primitive value
console.log(b); // primitive value

a = 45;

console.log(a); // 45
console.log(b); // primitive value
/* 
    console.log(a)
    console.log(b)

    What will be the outcome?
*/

// BY REFERENCE - All Objects (including functions)
let c = {greeting: 'hi'};
let d;
// both a and b points to the same place in memory
// they both reference the same object
d = c

console.log(c);
console.log(d);

c.greeting = 'hello change'; // mutate

/* 
    console.log(c)
    console.log(d)

    what will be the output?
*/

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(d);
console.log(c);

// The equals = operator sets up new memory space(new adress)
// The exception when it comes to objects
c = {greeting: 'howdy'};

/* 
    console.log(c);
    console.log(d);

    what will be the output?
*/
