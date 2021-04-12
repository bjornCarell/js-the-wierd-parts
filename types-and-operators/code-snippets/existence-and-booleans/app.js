let a;

// goes out to the internet and looks for a value
let a; 

// falsy
a = false;
a = undefined;
a = null;
a = '';
a = 0;

// truthy
a = 1;
a = 'one';
a = {};
a = [];

if(a || a === 0) {
    console.log('something is there')
} else {
    console.log('a is nothing')
}

// false || true --> outputs true 
// false && true --> outputs false

console.log(false|| true)
console.log(false && true)
