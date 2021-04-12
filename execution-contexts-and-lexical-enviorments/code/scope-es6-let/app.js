console.log(a); // Uncaught ReferenceError: a is not defined
let a = 'Hello'; 

let b;
console.log(b); // undefined

if(a > b) {
    let c = true;       
}

console.log(c); // Uncaught ReferenceError: c is not defined

for(let i = 0; i < 3; i++) {
    console.log(i);
};

for(var i = 0; i < 3; i++) {
    console.log(i);
}