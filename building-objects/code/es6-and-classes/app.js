class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + this.firstname;
    }
}

let john = new Person('John', 'Doe');
console.log(john.greet());

Person.prototype.getFullName = function() {
    console.log(this.firstname + ' ' + this.lastname); 
}
// setting the method to the prototype of Person. All objects created out of person
// will get access to the method. Saves memory space. How? Becaues there is only 
// one prototype, the method gets set once. If we would set it directly on the class
// Person, the method would be greated, take up new memory space, each time we 
// created an object with new Person('firstname','lastname);

john.getFullName();

let jane = new Person('Jane', 'Doe');
jane.getFullName();


class InformalPerson extends Person {

    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return 'Whats up ' + this.firstname;
    }
}

let informalMike = new InformalPerson('Mike', 'Johnsson');
console.log(informalMike.greet());

class Person2 extends Person{
    constructor(firstname, lastname) {
        super(firstname,lastname);
    }
    
    greet() {
        return 'Whats up ' + this.firstname;
    }
}

Person2.greet = function() {
    return 'Good day ' + this.firstname;
}

let taleb = new Person2('Taleb', 'Malik');

console.log(taleb.greet());


const cart = {
    items: []
}

const addToCart = (cart, item, quantity) => {
    return {
        ...cart,
        items: cart.items.concat([{
            item,
            quantity
        }])
    }; 
}

const newCart = addToCart(
    cart,
    {
        name: 'AIK årskort',
        price: '3999,00'
    },
    1
)

console.log(newCart);

const newerCart = addToCart(
    newCart,
    {
        name: 'AIK matchtröja',
        price: '599'
    },
    1
)

console.log(newerCart.items);

console.log(cart); // still intact, not mutated. 