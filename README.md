```
Describe: Showings();

Test 1: It should contain an empty object that will hold movie title properties.
Code: function Showings();
Expected Output: this.movieList = {};

Describe: Showings.prototype.assignId ();

Test 1: It should assign an ID to a movie
Code: Showings.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}
Expected Output: movie1.currentId[1]

Describe: Showings.prototype.addMovie = function (movie)

Test 1: It should make a function that will add a movie
Code: Showings.prototype.addMovie = function (movie) {
  movie.id = this.assignID();
  this.movieList[movie.id] = movie
}
Expected Output: movie1[1]

Describe: Movie(movieTitle, movieTimes, movieRating, movieRelease);

Test 1: It should contain properties of Movie
Code: 
function Movie (movieTitle, movieTimes, movieRating, movieRelease) {
  this.movieTitle = movieTitle;
  this.movieTimes = movieTimes;
  this.movieRating = movieRating;
  this.movieRelease = movieRelease;
}
Expected Output: 
  movieTitle: 
  movieTimes: 
  movieRating:
  movieRelease:


```