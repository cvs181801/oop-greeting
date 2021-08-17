//grab elements from the DOM
const submitBtn = document.querySelector(".container__form--submitBtn");
//test area

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


submitBtn.addEventListener('submit', function(e) {
//instantiate a new person
})
//add a way to select a new experience

