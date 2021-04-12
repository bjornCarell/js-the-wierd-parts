Having first class functions means that we can make use of functional programming in JS. 

How can I give my function functions?
How can I return functions from inside my functions?

Start thinking like this and see the power of fp programming with JS

Your functions should always do their best to not mutate data.


A FUNCTION CAN RETURN ITSELF EVEN!!??!!
    try it out: 

function fn(a, b) {
  switch(arguments.length) {
    case 0: return fn;
    case 1: return 'must take two numbers';
    case 2: return a + b;
  }
}

Why return the function itself???

