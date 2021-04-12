How does the JS engine handle asynchronous calls? 

While the JS engine is synchronous it does not act by itself
inside the browser. There are other parts of the browser that
simultanious does things, like the Rendering engine or HTTP
Requests. 

How does the JS engine handle the interaction with these other workers? 

The JS engine has hooks where it can go out and talk to the Rendering Engine or go out to get data(HTTP requests). But even though those things might run simultanious, asynchronous, inside the browser, what is happening inside the JS engine itself is still happening synhronous, line by line. 

Besides the execution stack, there is another list inside the 
JS egine called the Event Queue

The Event Queue
Contains things like click events, Http Requests etc
When does these events trigger? 
The JS engine looks at the Event Queue once the Execution
Stack is empty. And does this over and over again: The Event Loop. 
And that it is how the JS engine handles asynchronous code. 
So. JS code is still run line by line, even though it appears 
asynchronous.

This is why long bits of code can block the events. 

