//grab elements from the DOM
//const submitBtn = document.querySelector(".container__form--submitBtn");
const friendForm = document.querySelector(".container__form");
const friendName = document.getElementById("name");
const emoji = document.getElementById("fav-emoji");
const favFood = document.getElementById("fav-food");
const favDess = document.getElementById("fav-dessert");
const favBev = document.getElementById("fav-bev");
const favGenre = document.getElementById("fav-genre");
const favCity = document.getElementById("fav-city");
const favTime = document.getElementById("fav-time");
const country = document.getElementById("country");
let personOne = document.querySelector(".person1");

//test area
//console.log(favFood);


//add a way to add a new person into the group. lets go with ES5 syntax this time.

function Person(name, favoriteEmoji, favoriteFood, favoriteDessert, favoriteBeverage, favoriteFilmGenre, favoriteCity, favoriteTimeOfYear,
    countryYoudLikeToVisit) {
    this.name = name;
    this.favoriteEmoji = favoriteEmoji;
    this.favoriteFood = favoriteFood;
    this.favoriteDessert = favoriteDessert;
    this.favoriteBeverage = favoriteBeverage;
    this.favoriteFilmGenre = favoriteFilmGenre;
    this.favoriteCity = favoriteCity;
    this.favoriteTimeOfYear = favoriteTimeOfYear;
    this.countryYoudLikeToVisit = countryYoudLikeToVisit;
    this.greeting = function() {
        `Hi! I'm ${this.name}.`
    }
}

let person1 = "";

friendForm.addEventListener("submit", function(e) {
    e.preventDefault();
    person1 = new Person(friendName.value, emoji.value, favFood.value, favDess.value, 
        favBev.value, favGenre.value, favCity.value, favTime.value, country.value)
    console.log(person1.favoriteFilmGenre);
    console.log("e listener worked");
    console.log(friendName.value);
})


//add a way to select a new experience

