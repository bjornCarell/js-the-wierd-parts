const b = () => console.log('Called b!')

b()

console.log(a)
//console.log(ab) // throws Uncaught ReferenceError

var a = 'Hello old World'
let ab = 'Hello World!' // let, can't be hoisted 

console.log(a)
console.log(ab)


/* 
Try out in the console: 

    What will the console calls above result in. 
*/
