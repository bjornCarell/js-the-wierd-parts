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

john.__proto__ = person; // You should never do this!! For demo only!!!

// returns all the properties, on the object and the prototype
for(let prop in john) {
    console.log(prop + ': ' + john[prop]);
}

// the hasOwnProperty will only look for properties on the 'john' object 
for(let prop in john) {
    if(john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}
// hasOwnProperty checks what is on the main object,it does not go down the protype chain
console.log('--------')

let entries = Object.entries(person);

for(let [value, key] of entries) {
    console.log(value + ': ' + key);
}

// extends 

let jane = {
    adress: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' +this.firstname;
    }
}

let jim = {
    getFirstName: function() {
        return firstname;
    }
}

// neat es6 
let extended = {
    ...jane, 
    ...jim,
}

const mergeObjs = (...objs) => {
    if(objs.length === 0) return 'No objects to merge!'
    if(objs.length === 1) return objs[0];

    return objs.reduce((acc, obj) => ({
        ...acc, 
        ...obj
    }), {});
}

let map = new Map()

map.set('hello', 'wordw')
map.set('helo', 'wordw')

console.log(map)
