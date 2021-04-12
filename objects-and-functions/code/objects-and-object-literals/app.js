const Bjorn = {
    firstname:'Björn',
    lastname:'Carell',
    adress: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY',
    }
}
console.log(Bjorn)

// These are the same

const person2 = new Object()
person2.firstname = 'Erik'
person2.lastname = 'Eriksson'
person2.adress = new Object()
person2.adress.street = '123 Bagger street'
person2.adress.city = 'Chicago'
person2.adress.state = 'IL'
console.log(person2)

function greet(person) {
    console.log('Hi ' + person.firstname);
}

const greet = person => `Hi ${person.name}`; 

greet(Bjorn); // Hi Björn

greet({
    firstname: 'Mary', 
    lastname: 'Doe'
}); // Hi Mary

Bjorn.adress2 = {
    street: '222 Second St.'
}

console.log(Bjorn);

const Bjorn2 = {
    ...Bjorn,
    adress: {
        ...Bjorn.adress,
        street: '123 Baker Street'          // copy parts of an object
    },
    adress2 : null,
};

console.log(Bjorn2)
console.log(Bjorn) // origianl stays intact, not manipulated


// ### JavaScript Object Notation - JSON 

const objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}
// Convert to JSON when sending data to server
const whenSendingDataToServer = JSON.stringify(objectLiteral)
console.log(whenSendingDataToServer)

const strJSON = '{"firstname": "Mary","isAProgrammer": true}'
// Convert to object literals when fetching data from server
const whenFetchingDataFromServer = JSON.parse(strJSON)
console.log(whenFetchingDataFromServer)

// JSON.stringify - transform object to JSON. 
JSON.stringify(objectLiteral); 

let json = JSON.stringify(objectLiteral);

JSON.parse('{  "firstname" : "Mary", "isAProgrammer" : "true" }');