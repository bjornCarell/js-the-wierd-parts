let a = 3;  // primitive, a number
let b = new Number(3); // an object

console.log(a == b); // true

console.log(a === b); // false 

let c = Number("3");
console.log(c === 3);