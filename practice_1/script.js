"use strict";

const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = prompt('Насколько оцените его?', ""),
      с = prompt('Один из последних просмотренных фильмов?', ""),
      d = prompt('Насколько оцените его?', "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d;

console.log(personalMovieDB);
