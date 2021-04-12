let person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

let john = {
    firstname: 'John',
    lastname: 'Doe'
}

// You should never do this!! For demo only!!!
john.__proto__ = person;
console.log(john.getFullName()); // John Doe

console.log(john.firstname);
console.log(john.__proto__.firstname);
console.log(john.__proto__.__proto__.firstname);

let jane = {
    firstname: 'Jane',
}

jane.__proto__ = person;
console.log(jane.lastname); // Default

jane.__proto__ = john;
console.log(jane.getFullName()); // Jane Default 

// You should never do this!! For demo only!!!

///// 
let f = function() {
    this.a = 1;
    this.b = 2;
} 

let o = new f();
console.log(o);

o.__proto__.b = 3;
o.__proto__.c = 4;

// What will the below consoles log? Why?
// Hint: property shadowing
console.log(o.a);
console.log(o.b);
console.log(o.c); 
console.log(o.d);
