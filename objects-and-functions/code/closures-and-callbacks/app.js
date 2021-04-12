function sayHiLater() {
    let greeting = 'Hi';

    setTimeout(function() {
        
        console.log(greeting);

    }, 3000);
}

sayHiLater();

/* 
    Look closely at the code above.

    How come the function inside the setTimeOut has access to the 
    greeting variable, about 3s after the sayHiLater() has been invoked?

    Explain. 
*/

const sayHiLater2 = () => {
    const greeting = 'Hi';
    setTimeout(() => console.log(greeting), 3000); 
  }
  
  sayHiLater2();

// jQuery uses function expressions and first-class functions!
// $("button").click(function() {

// })

// CALLBACK
function tellMeWhenDone(callback) {
    
    let a = 2000; // some work
    let b = 'Hey'; // some work

    callback(); // the 'callback', it runs the function I give it
}

tellMeWhenDone(function () {
    console.log('I am done');
})

tellMeWhenDone(function() {
    console.log('All done...');
})