const arr = [
    1,
    false,
    {
        name: 'Björn',
        adress: '111 Main St.'
    },
    function(name) {
        let greet = 'Hello';
        console.log(greet + ' ' + name);
    },
    'hello'
];

console.log(arr)
arr[3](arr[2].name)

/* 
    we call the function at index 3 with the name property that
    can be found inside the object at index 2. Pretty cool!
*/



