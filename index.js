//grab elements from the DOM

//subtitle
const header2 = document.querySelector("h2");
const welcomeGreet = document.querySelector(".welcome");

//containers
const containerTwo = document.querySelector(".container2");
const containerThree = document.querySelector(".container3");

//forms
const friendForm = document.querySelector(".container__form");
const friendForm2 = document.querySelector(".container__form2");
const friendForm3 = document.querySelector(".container__form3");

//1st form (user) inputs
const friendName = document.getElementById("name");
const emoji = document.getElementById("fav-emoji");
const favFood = document.getElementById("fav-food");
const favDess = document.getElementById("fav-dessert");
const favBev = document.getElementById("fav-bev");
const favGenre = document.getElementById("fav-genre");
const favCity = document.getElementById("fav-city");
const favTime = document.getElementById("fav-time");
const country = document.getElementById("country");

//2nd friend form inputs
const friendName2 = document.getElementById("name2");
const emoji2 = document.getElementById("fav-emoji2");
const favFood2 = document.getElementById("fav-food2");
const favDess2 = document.getElementById("fav-dessert2");
const favBev2 = document.getElementById("fav-bev2");
const favGenre2 = document.getElementById("fav-genre2");
const favCity2 = document.getElementById("fav-city2");
const favTime2 = document.getElementById("fav-time2");
const country2 = document.getElementById("country2");

//3rd friend form
const friendName3 = document.getElementById("name3");
const emoji3 = document.getElementById("fav-emoji3");
const favFood3 = document.getElementById("fav-food3");
const favDess3 = document.getElementById("fav-dessert3");
const favBev3 = document.getElementById("fav-bev3");
const favGenre3 = document.getElementById("fav-genre3");
const favCity3 = document.getElementById("fav-city3");
const favTime3 = document.getElementById("fav-time3");
const country3 = document.getElementById("country3");

//cards for the friends and user 
let personOne = document.querySelector(".person1");
let personTwo = document.querySelector(".person2");
let personThree = document.querySelector(".person3");
let personFour = document.querySelector(".person4");
let personFive = document.querySelector(".person5");
let personSix = document.querySelector(".person6");

//the cards that have the 'hidden' classes on them
const hiddenDivs = document.querySelectorAll(".hidden");

//buttons
const button2 = document.querySelector(".button__person2");
const button3 = document.querySelector(".button__person3");
const button4 = document.querySelector(".button__person4");
const button5 = document.querySelector(".button__person5");
const button6 = document.querySelector(".button__person6");

//test area
//enter test console.log code here!


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
        return `Hi! I'm ${this.name}.`
    }
    this.welcome = function() {
        return `Welcome, ${this.name}!`
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

    welcomeGreet.textContent = person1.welcome();
})


//make the 2nd person button open a form where you can input your friend's info

button2.addEventListener("click", function(e) {
    e.preventDefault();
    containerTwo.classList.remove("hiddenModal");
    //friendForm2.classList.remove("hidden");
    // friendName.value = "";
    // emoji.value = "";
    // favFood.value = "";
    // favDess.value = "";
    // favBev.value = "";
    // favGenre.value = "";
    // favCity.value = "";
    // favTime.value = "";
    // country.value = "";
   
})

friendForm2.addEventListener("submit", function(e) {
    e.preventDefault();
    person2 = new Person(friendName2.value, emoji2.value, favFood2.value, favDess2.value, 
            favBev2.value, favGenre2.value, favCity2.value, favTime2.value, country2.value)
    console.log(" person 2 e listener worked");
    const person2Name = document.createElement('p');
    person2Name.textContent = person2.name;
    personTwo.append(person2Name);
    const person2emoji = document.createElement('p');
    person2emoji.textContent = person2.favoriteEmoji;
    personTwo.append(person2emoji);
    welcomeGreet.textContent = person2.welcome();
    friendForm2.classList.add("hidden");
})

//make the 3rd person button open a form where you can input your friend's info

button3.addEventListener("click", function(e) {
    e.preventDefault();
    containerThree.classList.remove("hiddenModal");
    //friendForm3.classList.remove("hidden");
    console.log(friendForm3);
    // friendName.value = "";
    // emoji.value = "";
    // favFood.value = "";
    // favDess.value = "";
    // favBev.value = "";
    // favGenre.value = "";
    // favCity.value = "";
    // favTime.value = "";
    // country.value = "";
   
})


friendForm3.addEventListener("submit", function(e) {
    e.preventDefault();
    person3 = new Person(friendName3.value, emoji3.value, favFood3.value, favDess3.value, 
            favBev3.value, favGenre3.value, favCity3.value, favTime3.value, country3.value)
    
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
    welcomeGreet.textContent = person3.welcome();
    friendForm3.classList.add("hidden");
})

