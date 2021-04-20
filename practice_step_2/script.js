"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == 'null' || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
        console.log('мало!')
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
          console.log('classic');
      } else if(personalMovieDB.count >= 30) {
          console.log('Good!');
      } else {
          console.log ('Error!');
      }
    },
    showMyDB: function(hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
    },
    writeYourGenres: function() {
      for (let i = 1; i < 2; i++) {
         let genre = prompt(`Введите жанры через запятую`).toLowerCase();
        if (genre === "" || genre == null) {
          console.log("error");
          i--
        }
        else {
          personalMovieDB.genres = genre.split(', ');
          personalMovieDB.genres.sort();
        }
      }

      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`)
      });
    }
  };
