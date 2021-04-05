"use strict";


// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("Test");
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;

// console.log(border);
// console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);


// filter

const filterThis = [2, 4, 3, 6, 8, 9];

const filter = (arr, fn) => {
   const filteredArr = [];
   for (let elem of arr)  {
     if (fn(elem)) filteredArr.push(elem);
   }
   return filteredArr;
};

console.log(filter(filterThis, (elem) => elem % 3 ==0));





//some
const someOfThis = ['Java', 'JavaScript', 'Python'];

const some = (arr, fn) => {
  for (let elem of arr)  {
    if (fn(elem)) return true;
  }
  return false;
};

console.log(some(someOfThis, (elem) => elem === 'JavaS'));


//map
const mapMe = [1000, 800, 2400, 500];

const map = (arr, fn) => {
  const mappedArr = [];
  for( let elem of arr) {
    mappedArr.push(fn(elem));
  }
  return mappedArr;
};

console.log(map(mapMe, (elem) => elem + 200));
