const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,  
    movies: { },
    actores: { }, 
    genres: [], 
    privat: false,
};

const lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", " ");
const rateOfMovie = prompt("Насколько вы его оцените?", "");

personalMovieDB.movies[lastWatchedMovie] = rateOfMovie;

