let person = new Object() // not the preferd way to create an Object

person['firstname'] = 'Björn' 
person['lastname'] = 'Carell'
// The brackets are a operator 

const firstNameProperty = 'firstname'

console.log(person)
console.log(person[firstNameProperty])

// Another operator is the dot 
console.log(person.firstname)
console.log(person.lastname)

console.log(person.firstNameProperty) // What will this output? 

person.adress = new Object()
person.adress.street = '111 Main St'
person.adress.city = 'Philly'

console.log(person) // the object has changed
console.log(person['adress']['street'])


let objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true,
}

console.log(JSON.stringify(objectLiteral));


console.log(JSON.parse('{ "firstname" : "Mary", "isAProgrammer" : "true" }'));