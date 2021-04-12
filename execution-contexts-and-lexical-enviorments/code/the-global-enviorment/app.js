// what will these calls show in the console?


b()
console.log('a', a)  
// console.log('ab', ab)
// console.log('abc',abc)
//ba()

var a = 'Hello old world'        // bound to 'this'
let ab = 'Hello world'          // not bound to 'this'
const abc = 'Hello new World ' // not boudn to 'this'

function b() {    
    console.log('called func b')
    const bvariable = 'variable in func b'
    console.log(bvariable)
}

const ba = () => console.log('called ab', this)
ba()
/* 

Try out in the console: 


*/
let bac = function foo() {} 
console.log(this)
console.log(this.a)
console.log(this.b)
console.log(this.ba)
console.log(this.bac)