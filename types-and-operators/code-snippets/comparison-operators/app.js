console.log(1 < 2 < 3); // true 
console.log(3 < 2 < 1); // true

/* 
    How does it come that both logs above results in true? 
    Hint: think of order precedence and coercion
*/

// What will undefined and null coerc to?
console.log(Number(undefined));
console.log(Number(null));


let a = 0;
let b = false;

if(a === b) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}

console.log(Object.is(+0,-0));

let a = 3 + 4 * 5; // 23
let b = (3 + 4) * 5; // 35

let a = 2, b = 3, c = 4;

b = c; // 4, 4, 4


console.log(Number(true)); // 1

false == 0; // true
null == 0; // false
"" == false // true

false === 0; // false
null === 0; // false
"" === false; // false