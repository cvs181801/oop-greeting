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
let personTwo = document.querySelector(".person2");
let personThree = document.querySelector(".person3");
let personFour = document.querySelector(".person4");
let personFive = document.querySelector(".person5");
let personSix = document.querySelector(".person6");
const button2 = document.querySelector(".button__person2");
const button3 = document.querySelector(".button__person3");
const button4 = document.querySelector(".button__person4");
const button5 = document.querySelector(".button__person5");
const button6 = document.querySelector(".button__person6");
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

let person1 = "";
let person2 = "";
let person3 = "";
let person4 = "";
let person5 = "";
let person6 = "";

console.log(Boolean(!person1));

//make the 1st person submit button work
friendForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    person1 = new Person(friendName.value, emoji.value, favFood.value, favDess.value, 
        favBev.value, favGenre.value, favCity.value, favTime.value, country.value)
    //console.log(person1.favoriteFilmGenre);
    //console.log("e listener worked");
    //console.log(friendName.value);
    const person1Name = document.createElement('p');
    person1Name.textContent = person1.name;
    personOne.append(person1Name);
    const person1emoji = document.createElement('p');
    person1emoji.textContent = person1.favoriteEmoji;
    personOne.append(person1emoji);
})


//make the 2nd person button work

button2.addEventListener("submit", function(e) {
    e.preventDefault();
    person2 = new Person(friendName.value, emoji.value, favFood.value, favDess.value, 
            favBev.value, favGenre.value, favCity.value, favTime.value, country.value)
        //console.log(person1.favoriteFilmGenre);
        //console.log("e listener worked");
        //console.log(friendName.value);
        const person2Name = document.createElement('p');
        person2Name.textContent = person2.name;
        personTwo.append(person2Name);
        person2emoji.textContent = person2.favoriteEmoji;
        personTwo.append(person2emoji);
    })
