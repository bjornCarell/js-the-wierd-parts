console.log(this);

function greet() {
    console.log(this);
    this.sayHello = 'hello';
}

let b = function() {
    console.log(this);
}

const log = () => console.log(this.sayHi = 'Hi');

greet();
b();
log();

console.log(sayHello);
console.log(sayHi);
// The 'this' variables gets attached to the global object

let c = {
    name: 'The c Object',
    log: function() {
        console.log(this);
    }
}
c.log(); 
// Where does the 'this' key word point to in the method above?

const nested = () => () => console.log(this);
const seeThis = nested();
seeThis();

function nestedS() {
    function withThis() {
        console.log(this);
    }
    withThis();
}
nestedS();
// Where does the 'this' keyword point in the function above?

let d = {
    name: 'The c Object',
    log: function() {
        console.log(1, this);

        this.name = 'Update c Object';
        console.log(2, this);

        let setName = function(newName) {
            this.name = newName;
        }
        setName('Update again! The c Object');
        console.log(3, this);
    }
}
d.log();
// Where does the 'this' keyword point in the instances above?

let e = {
    name: 'The e Object',
    log: function() {
        let self = this;
        console.log(self); 
        self.name = 'Update e Object';
        console.log(self);

        let setName = function(newName) {
            self.name = newName;
        }
        setName('Update again! The e Object');
        console.log(self);
    }
}
e.log();
// Where does the 'this' keyword point in the instances above?

const state = {
    ticketsData: [],
    tempList: [],
    tickets: [],
  }
  
  let {ticketsData, tempList, tickets} = state

  let aData = []

  console.log(this)