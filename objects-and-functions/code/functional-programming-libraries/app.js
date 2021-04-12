////// MAP
function mapForEach(arr, fn) {

    let newArr = [];

    for(let i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr;
}

let arr1 = [1,2,3];

let arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});

console.log(arr2);

let arr3 = mapForEach(arr1, item => item * 5);
console.log(arr3);

let arr4 = mapForEach(arr1, item => item > 2);
console.log(arr4);

// ES6
const mapForEach2 = (arr, fn) => {
    let newArr = [];
    
    for(let value of arr) {
      newArr.push(fn(value));
    }
    
    return newArr;
  }

// with bind

let checkPastLimit = function(limiter, item) {
    return item > limiter;
}
let arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1)); 
// we set the limiter to 1
console.log(arr5);

let checkPastLimitSimplified = function(limiter) {  // 'limiter =>' will also work
    return function (limiter,item) {   
        return item > limiter;
    }.bind(this, limiter);
}

// now we don't need to call bind manually every time
let arr10 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr10);

// ES6

function myMap(func, arr) {
    let result = [];

    for(let value of arr) {
        result.push(
            func(value)
        );
    }

    return result;
}

let arr6 = myMap(value => value * 10, arr1);
console.log(arr6);



////// FILTER

function myFilter(arr, conditionFunc) {
    let result = [];

    for(let value of arr) {
        if(conditionFunc(value)) {
            result.push(value);
        }
    }

    return result;
}

let arr8 = [1,5,7,9,2,3,8,4];

let belowFive = myFilter(arr8, value => value < 5);
console.log(belowFive);

let arr9 = ['one', 2, 'three', 'four', 5];
let noNumbers = myFilter(arr9, value => typeof value !== 'number');
console.log(noNumbers);


const arr2 = ['Hi', 5, 'Hej', 8, 'Hey', 6];

const myFilter = (arr, conditionalFn) => {
  let newArr = [];
  
  for(let value of arr) {
    if(conditionalFn(value)){
      newArr.push(value);
    }
  }
  
  return newArr;
}

const getStrings = myFilter(arr2, item => typeof item === 'string');
console.log(getStrings);

///
const getType = (type, item) => typeof item === type;
const getStrings1 = getType.bind(this, 'string');

console.log(myFilter(arr2, getStrings1));

////
const getType2 = type => {
    return function(type, item){
        return typeof item === type;
    }.bind(this,type)
}

const getStrings2 = getType2('string');

console.log(myFilter(arr2, getStrings2));

//// PART 2