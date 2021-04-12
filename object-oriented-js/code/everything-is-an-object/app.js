let a = {};
console.log(a.__proto__);

let b = function() {};
console.log(b.__proto__);

let c = [];
console.log(c.__proto__);

// the end of the prototype chains
console.log(a.__proto__); 
console.log(b.__proto__.__proto__); 
console.log(c.__proto__.__proto__); 
