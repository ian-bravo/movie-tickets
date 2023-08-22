//Business Logic for Showings --------------
function Showings() {
  this.movieList = {};
  this.currentId = 0;
}

Showings.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Showings.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movieList[movie.id] = movie;
}

//Business Logic for Movie -------
function Movie (movieTitle, movieTimes, movieRating, movieRelease) {
  this.movieTitle = movieTitle;
  this.movieTimes = movieTimes;
  this.movieRating = movieRating;
  this.movieRelease = movieRelease;
}


//User Interface Logic --------



