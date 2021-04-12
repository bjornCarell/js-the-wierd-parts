let a = new Number(3.141592);
console.log(typeof a); // what will be the output?
console.log(a);

console.log(Number.prototype);

console.log(a.toFixed())

let b = new String('john');
console.log(typeof b);
console.log(b);
console.log(String.prototype);
console.log(b.indexOf('o'));

console.log('STRING'.length);
// JavaScript, sometimes, boxes in the primitive to a object for us 

let c = new Date('3/24/2020');
console.log(c);

// add a functionality to all strings
String.prototype.isLenghtGreaterThan = function(limit) {
    return this.length > limit;
}

console.log('John'.isLenghtGreaterThan(3));

Number.prototype.isPositive = function() {
    console.log(this > 0);
}

// console.log(3.isPositive()); // what will be the output? why?

let d = new Number(3);

d.isPositive(); // true

console.log(3.141592.toFixed());
console.log('string'.charAt(0));

