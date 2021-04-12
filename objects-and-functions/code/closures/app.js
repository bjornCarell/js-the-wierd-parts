function greet(whatToSay) {
    return function(name) {
        console.log(whatToSay + ' ' + name);
    }
}

greet('Hi')('Tamara');

let sayHi = greet('Hi');
sayHi('Tony');

const greet2 = whatToSay => name => console.log(`${whatToSay} ${name}`);

function todo(whatToDo) {
    return function(whenToDoIt) {
        return function(howToDoIt) {
            console.log('+ ' + whatToDo + ' ' + whenToDoIt + ' ' + howToDoIt);
        }
    }
}

todo('Learn JavaScript,')('continuously,')('by doing something JavaScript related at least 1h every week day.');

const learnJavaScript = todo('Learn JavaScript');
learnJavaScript('1h a day,')('1 day at a time.');

const learnJavaScriptEachDay = learnJavaScript('each day;');
learnJavaScriptEachDay('by reading, praciticing, and understanding.');

// PART 2


function buildFunctions() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);
            });
    }
    
    return arr;
}

let fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

/* 

What will be the input of above calls? Why?
What happens when we change for(var i...) to for(let i...)? Why? 

*/



// Workaround before let

function buildFunctions2() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
       arr.push(
           (function(j) {
               return function() {
                   console.log(j)
               }
           }
       )(i))
    }
    
    return arr;
}

let fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

const buildFns = () => {
  
    let arr = [];
    
    for(let i = 0; i < 3; i++) {
      
      arr.push(() => console.log(i));
      
    }
    
    return arr;
  }
  
  const fns = buildFns();
  fns[0]();
  fns[1]();
  fns[2]();

  function buildFunctions3() {
    var arr = [];
  
    for(var i = 0; i < 3; i++) {
       
      (function(j) {
         arr.push(
            function() {
                console.log(j);
            })
      }(i));
    }
   
    return arr;
 }
 
 const fs3 = buildFunctions3();
 fs3[0](); // 0
 fs3[1](); // 1
 fs3[2](); // 2

