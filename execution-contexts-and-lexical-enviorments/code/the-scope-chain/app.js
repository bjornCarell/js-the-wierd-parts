
/* 
    What will be the output in the console? Why? 
    Hint: Think of the outer reference. What is 
          each functions outer enviorment? What 
          will the execution stack look like?
*/

function b() {
    console.log(myLet)
}

function a() {
    let myLet = 2
    b()
}

let myLet = 1 
a()

/* 
    What is the outer enviorment of function b?
    What is the outer enviorment of function c? 
    Which number will be loged to the console? 
*/


const ab = () => {
    const bb = () => console.log(myConst)
    const myConst = 4
    bb()
}

const myConst = 3
ab()


/* 
    What is the outer enviorment of function b?
    What is the outer enviorment of function c? 
    Which number will be loged to the console? 

    Remember to read line by line.
    Where does the functions sit lexical?
*/


function outer() {
    let myVar = 'outer env';

    function findVar() {
        console.log(myVar);
    }

    findVar();
}
