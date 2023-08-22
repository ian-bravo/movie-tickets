//Business Logic for Movies --------------
function Showings() {
  this.movieList = {};
}

Showings.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}




//User Interface Logic --------



