# Immediately invoked function expressions

A function statement happens as a new statement. JS puts in in memory. JS does
not really do anything, until you invoke it. 

A functio expression, it is not put into memory initialy. Instead JS creates the object
function assigned to the variable, on the fly. And we can invoke it by using ()

1. The function object gets created 
2. Then it will be invoked
3. Value gets returned

The varibable assigned the invoked function will then point to that 
returned value, it holds that value, it is eaht gets assigned to the
equals operator. So if we try to invoke the variable it will give as 
an error. 

3;
'This is a string'
{
    name: 'Jane',
    language: 'es'
}

These are all valid code for the JS parser. We write out our expressions and object
but we do not do anything with it. We just let it be there. The does not work
for functions. Ig we try this: 

function(name) {
    console.log('Hello ' name)
}

we will get an error. Why? Because when the JS parsers sees the word 'function' 
it expects an function statement, and a function statement must have a name, so
the parser throughs an error when a name is missing. 

To get around this, we use IFFEs: 

let jimmy = 'Jimmy Jones';

(function(name) {
    let greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(jimmy));

