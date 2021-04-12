function b() {
    let myLet;
    console.log(myLet); 
 // if run directly in the console, 
 // not in a js file, b() will output 2 undefined
 }
  
 function a() {
    let myLet = 2;
    console.log(myLet);
    b()
 }
  
 // Execution 
 let myLet = 1 ;			    // 1
 console.log(myLet);			// 2
  
 a();					        // 3
 console.log(myLet);			// 4

/* 
    The original example uses var instead of let

    What will be the console output of the code above? In what 
    order will the lets get loged? 

    Answer: 
*/