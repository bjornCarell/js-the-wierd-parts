
const cart = {
    items: []
}

const addToCart = (cart, item, quantity) => {
    return {
        ...cart,
        items: cart.items.concat([{
            item,
            quantity
        }])
    }; 
}

const newCart = addToCart(
    cart,
    {
        name: 'AIK årskort',
        price: '3999,00',
        id: 'gsgkkg225sdgsdg72',
    },
    1
)

console.log(newCart);

const newerCart = addToCart(
    newCart,
    {
        name: 'AIK matchtröja',
        price: '599',
        id: 'dsnuiwhjj1kol293'
    },
    1
)

console.log(newerCart.items);
console.log(cart); // still intact, not mutated. 

// Map 
// https://javascript.info/map-set

const john = {firstname: 'John', lastname: 'Larsen'};
const ann = {firstname: 'Ann', lastname: 'Andersen'};
const jill = {firstname: 'Jill', lastname: 'Johnson'};

const roles = new Map([
    [john, 'Admin'],
    [ann, 'VP'],
    [jill, 'CTO']
]);

console.log(...roles)

const bjorn = {firstname: 'Björn', lastname: 'Carell'}
const addRole = roles.set(bjorn, 'Developer') // will always mutate?

const firstNameAndRole = roles.forEach((value, key, map) => console.log(key.firstname + ': ' + value));
console.log(firstNameAndRole);

for(let [key, value] of roles) {
    console.log(key, value);
}

for(let [key, value] of roles) {
    console.log(`${key.firstname} ${key.lastname}: ${value}`);
}

// lodash mapToArray
function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

console.log('lodash', mapToArray(roles)); 

// spread 
console.log('spread',[...roles]);

const spreadRoles = [...roles];
console.log(Array.isArray(spreadRoles));

const getFullname = object => `${object.firstname} ${object.lastname}`;
const twoValuesByKeys = (object, key1, key2) => `${object[key1]} ${object[key2]}`;
console.log(
    spreadRoles.map((users, index) => 
    `${twoValuesByKeys(users[0], "firstname", "lastname")}: ${users[1]}`)
);

// other version
const mapToArr = map => {
    let index = 0,
        result = Array(map.size);
    
    for(let [key, value] of map){
        result[index++] = [key, value];
    }
    return result;
}

console.log('other', mapToArr(roles));
console.log(Array.isArray(mapToArr(roles)))

const reverseRoles = new Map([
    ['Admin', john],
    ['VP', ann],
    ['CTO', jill]
]);

console.log(...reverseRoles);

console.log('JSON',JSON.stringify(...roles));

const iterator = roles[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(roles.entries());

// Object data
const data = {
    name: 'Björn',
    adress: {
        street: '1st street',
        number: 1,
        house: ['A', 'Hous', 'Called', 'Dome']
    }
}

// Convert Object data to Map
const mapData = new Map(Object.entries(data));

// 
const mapKeyValuesToArr = map => {
    let index = -1,
        result = Array(map.size);

    for(let [key, value] of map) {
       result[++index] = [key, value];
    }
    return result;
} 

const mapValues = mapToArr(mapData);
console.log(mapValues.map(arr => arr[1]))

// Unique values from Array
let values = [
    "Hare", "Krishna", "Hare", "Krishna", 
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const uniqueItemsArray = (arr) =>  [...new Set(arr)];
console.log(uniqueItemsArray(values));

// Remove Anagrams from Array
let arr1 = ["ear", "era", "nap", "teachers", "cheaters", "PAN", "hectares"];

function sortString(string){
      return string
            .toLowerCase()
            .split('')
            .slice()
            .sort()
            .join('');
} 

function removeAnagrams(arr) {
    let map = new Map();

    for(let word of arr) {
        let sorted = sortString(word);
        map.set(sorted, word);
    }
    return [...map.values()]; 
}
console.log(removeAnagrams(arr1));

// sort numbers in array using function composition
let numbers = [23, 2,1,13,11,9];

const compose = (f, g) => x => f(g(x));

const sortNumbersAscending = arr => arr
                                    .slice()
                                    .sort((a, b) => a < b ? -1 : 1);

                                       
const lastItemInArray = arr => arr.slice(-1); // 23
const firstItemInArray = arr => arr.slice(0,1); // 1

const biggestNumber = compose(lastItemInArray, sortNumbersAscending);
const smallestNumber = compose(firstItemInArray, sortNumbersAscending); 
console.log(biggestNumber(numbers));
console.log(smallestNumber(numbers));

