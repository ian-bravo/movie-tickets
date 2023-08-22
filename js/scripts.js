let person1 = new TicketHolder(20, 23);
let person2 = new TicketHolder(10, 8);

//Business Logic for Showings --------------
function TicketHolder(age, time) {
  this.age = age;
  this.time = time;
 
}


TicketHolder.prototype.canWatch = function(age) {
  if (this.age < 18){
  return false;
  } else if (this.age > 18){
  return true;
}}

// TicketHolder.prototype.availableTimes = function(time) {
//   if (this.time > 18)
//     return "Array of PG13 times";
//   else (this.time > 18)
//     return "Array of all times"
//   }

  TicketHolder.prototype.applyDiscount = function(age, time) {
    if (this.age > 35 || this.time === "matinee")
      return "Price - 2";
    else {
      return "Price";
    }
  }


//Business Logic for Movie -------
// function Movie(movieTitle, movieTimes, movieRating) {
//   this.movieTitle = movieTitle;
//   this.movieTimes = movieTimes; 
//   this.movieRating = movieRating;
// }

// let barbieMovie = new Movie("Barbie", [10, 11, 14], "ratedPG");
// let horrorMovie = new Movie("Parasite", [11, 15, 18], "ratedR");

let ticketHolder = new TicketHolder();

function selectMovieTimes(){
const inputtedAge = document.querySelector("input#age").value;
const selectedTime = document.querySelector("input#time").value;
}



function handleFormSubmission(event) {
  event.preventDefault();
 

}

window.addEventListener("load", function() {
  document.querySelector("form#age-input").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#times").addEventListener("click", selectMovieTimes);
  


});





//User Interface Logic --------





