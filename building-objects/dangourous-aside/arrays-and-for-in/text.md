Arrays in JS is objects. Therefore we can add our own methods to them. 
And we can use the for in loop.

When iterating over arrays never use the for in loop. It is not safe. It
will take all of added methods, if you add any, to the outcome. 

When iterating over arrays, use the regular for loop. Or an inbuilt method. 

Array.prototype.myCustomFeature = 'cool!';

let arr = ['John', 'Jane', 'Jim'];

for (let prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}