"use strict";

// проверка логина learn.js

/*let login = prompt ("Кто там?", "");

if (login == "admin") {
   let pass = prompt ("Пароль:", "");
   if (pass == "Я Главный") {
     alert ("Hello!!");
   } else if ( pass == '' || pass == null) {
     alert ('Отменено')
   } else {
     alert ("Error")
   }
} else if ( login == '' || login == null) {
  alert ('Отменено')
} else  {
  alert ("Я вас не знаю");
} */

// homework les 12

// while ( true )
// {
//     var variable1 = prompt ('Write "2", please');

//     if ( variable1 == 2 ) break;

//     alert( "Error. Invalid value" );
// }



// if (numberOfFilms == null || numberOfFilms == '') {
//   +prompt ('Сколько фильмов вы уже посмотрели?', '');
// } else {
//   if (personalMovieDB.count < 10) {
//   alert('мало!');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
//   alert('classic');
// } else if(personalMovieDB.count > 30) {
//   alert('Good!');
//   } else {
//     alert ('OK!');
//   }
// }



let numberOfFilms;

function start() {
  numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == 'null' || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

   function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt ('Один из последних просмотренных фильмов:?', ''),
            b = prompt ('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              personalMovieDB.movies[a] = b;
              console.log('done');
            } else {
              console.log('error');
              i--;
            }
      }
  }

  rememberMyFilms();



  function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log('мало!')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('classic');
    } else if(personalMovieDB.count >= 30) {
        console.log('Good!');
    } else {
        console.log ('Error!');
    }
  }

  detectPersonalLevel();

  function showMyDB (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  }

  showMyDB(personalMovieDB.privat);

 function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres [i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
 }

 writeYourGenres();



 //// массивы

 const arr = [1, 2, 3, 6, 8];



//  console.log(arr);

//  for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//  };

arr.forEach(function(item, i, arr)  {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});
