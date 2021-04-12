typeof 
Checks the type of whatever you are checking the type for. 
Comse with some odds and ends, ex: not so usefull for checking for
Arrays. The "typeof null bug". 

instanceof
checks if the object is to be found down the prototype chain 

let e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);