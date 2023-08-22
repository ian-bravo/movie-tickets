//Business Logic for Movies --------------
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


//User Interface Logic --------



