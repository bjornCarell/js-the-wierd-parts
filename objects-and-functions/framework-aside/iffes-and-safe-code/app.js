let jimmy = 'Jimmy Jones';
let jose = 'Jose Garcia';

(function(global, name = 'Jane Hoffa') {

    let greeting = 'Hello';
    console.log(greeting + ' ' + name);

    global.greeting = 'Hola';

}(window, jose));

console.log(window);
console.log(greeting + ' ' + jimmy);