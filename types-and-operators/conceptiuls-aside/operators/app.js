let a = 4 + 3;
let b = 4 - 3;
let c = 4 > 3;
let d = 4 < 3;
let e = 4 !== 3;
let f = 4 === 3;

console.log(a,b,c,d,e,f);

// the operators are functions 
// infix notation - means that the function name sits between the two parameters

let g = 3 + 4 * 5;
let h = (3 + 4) * 5;
console.log(g);
console.log(h);
// which operator gets called first? 

let i = 2, j = 3, k = 4;

i = j = k;
// 1. j = k
// 2. i = j
// goes from right to left

// what will bi loged to the console? 
console.log(i);
console.log(j);
console.log(k);


let isNew = true
isNew = 'yup!'
isNew = 1

