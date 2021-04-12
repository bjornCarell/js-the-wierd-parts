let a = 3;
console.log(typeof a); // number

let b = 'Hello';
console.log(typeof b); // string

let c = {};
console.log(typeof c); // object

let d = [];
console.log(typeof d); // object - not so useful
console.log(Object.prototype.toString.call(d)); // true
console.log(Array.isArray(d)); // true

function Person(name) {
    this.name = name;
}

let e = new Person('Jane');
console.log(typeof e); // object
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined 
console.log(typeof null); // object -- built in bug

let z = function () {};
console.log(typeof z); // function