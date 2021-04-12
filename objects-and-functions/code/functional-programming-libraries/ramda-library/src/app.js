import {add} from 'ramda';
// arguments.length === 2
const adding = add(1, 2);
console.log(adding);

// arguments.length === 1
const adding2 = add(1)(3);
console.log(adding2);

/*
// no arguments
const adding3 = add();
console.log(adding3);

// 1 argument 
const adding4 = add(1);
console.log(adding4);

// 0 arguments in first () and 2 in second ()
const adding5 = add()(3,2);
console.log(adding5);

// 0 arguments in first () and 1 in second ()
const adding6 = add()(6);
console.log(adding6);
*/