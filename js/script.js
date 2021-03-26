"use strict";


if(4 == 9) {
  console.log('OK!');
} else {
  console.log('error!');
}



// if (num < 49) {
//   console.log('Мало!');
// } else if (num > 100) {
//   console.log('Много!');
// } else {
//   console.log('OK!');
// }

// (num === 50) ?  console.log('OK!') : console.log('error!');

const num = 50;

switch (num) {
  case 49:
    console.log('error!');
    break;
  case 100:
    console.log('error!');
    break;
  case 50:
    console.log('OK!');
    break;
  default:
    console.log('F**ck');
    break;
}
