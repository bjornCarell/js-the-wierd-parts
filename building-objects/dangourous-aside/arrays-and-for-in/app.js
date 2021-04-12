Array.prototype.myCustomFeature = 'cool!';

let arr = ['John', 'Jane', 'Jim'];

for (let prop in arr) {
    console.log(prop + ': ' + arr[prop]); // what will be the output??
}

let index = 0;
for (let item of arr) {
    console.log(++index + ':' + item); 
}