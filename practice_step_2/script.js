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

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
 };


 const a = prompt ('Один из последних просмотренных фильмов:?', ''),
       b = prompt ('На сколько оцените его?', ''),
       c = prompt ('Один из последних просмотренных фильмов:?', ''),
       d = prompt ('На сколько оцените его?', '');

 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

 console.log(personalMovieDB)
