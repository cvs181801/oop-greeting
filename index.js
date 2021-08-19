//grab elements from the DOM
//const submitBtn = document.querySelector(".container__form--submitBtn");
const friendForm = document.querySelector(".container__form");
const header2 = document.querySelector("h2");
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
const hiddenDivs = document.querySelectorAll(".hidden");

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
    friendForm.classList.add("hidden");
    header2.textContent = `Add some information for up to 5 friends below.`
    
    hiddenDivs.forEach(div => {
        div.classList.remove("hidden");
    })

    const welcomeGreet = document.createElement('p');
    welcomeGreet.textContent = `Welcome, ${person1.name}!`;
    header2.append(welcomeGreet);
   
})


//make the 2nd person button open a form where you can input your friend's info

button2.addEventListener("click", function(e) {
    e.preventDefault();
    friendForm.classList.remove("hidden");
    friendForm.className = "container__form2";
    friendName.value = "";
    emoji.value = "";
    favFood.value = "";
    favDess.value = "";
    favBev.value = "";
    favGenre.value = "";
    favCity.value = "";
    favTime.value = "";
    country.value = "";
   
})
const friendForm2 = document.querySelector(".container__form2");

friendForm2.addEventListener("submit", function(e) {
    e.preventDefault();
    person2 = new Person(friendName.value, emoji.value, favFood.value, favDess.value, 
            favBev.value, favGenre.value, favCity.value, favTime.value, country.value)
    
    console.log(" person 2 e listener worked");
    const person2Name = document.createElement('p');
    person2Name.textContent = person2.name;
    personTwo.append(person2Name);
    const person2emoji = document.createElement('p');
    person2emoji.textContent = person2.favoriteEmoji;
    personTwo.append(person2emoji);
    console.log(person2.name);
    console.log(person1.name);
})

//make the 3rd person button open a form where you can input your friend's info

button3.addEventListener("click", function(e) {
    e.preventDefault();
    friendForm.classList.remove("hidden");
    friendForm.className = "container__form3";
    console.log(friendForm3);
    friendName.value = "";
    emoji.value = "";
    favFood.value = "";
    favDess.value = "";
    favBev.value = "";
    favGenre.value = "";
    favCity.value = "";
    favTime.value = "";
    country.value = "";
   
})
const friendForm3 = document.querySelector(".container__form3");

friendForm3.addEventListener("submit", function(e) {
    e.preventDefault();
    person2 = new Person(friendName.value, emoji.value, favFood.value, favDess.value, 
            favBev.value, favGenre.value, favCity.value, favTime.value, country.value)
    
    console.log(" person 3 e listener worked");
    const person3Name = document.createElement('p');
    person3Name.textContent = person3.name;
    personThree.append(person3Name);
    const person3emoji = document.createElement('p');
    person3emoji.textContent = person3.favoriteEmoji;
    personThree.append(person3emoji);
    console.log("person 1 name:", person1.name);
    console.log("person 2 name:" , person2.name);
    console.log("person 3 name:" , person3.name);
    
})

