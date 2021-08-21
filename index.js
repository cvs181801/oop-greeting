//grab elements from the DOM

//subtitle
const header2 = document.querySelector("h2");
const welcomeGreet = document.querySelector(".welcome");

//containers
const containerOne = document.querySelector(".container");
const containerTwo = document.querySelector(".container2");
const containerThree = document.querySelector(".container3");
const containerFour = document.querySelector(".container4");
const containerFive = document.querySelector(".container5");
const containerSix = document.querySelector(".container6");

//forms
const friendForm = document.querySelector(".container__form");
const friendForm2 = document.querySelector(".container__form2");
const friendForm3 = document.querySelector(".container__form3");
const friendForm4 = document.querySelector(".container__form4");
const friendForm5 = document.querySelector(".container__form5");
const friendForm6 = document.querySelector(".container__form6");

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

//4th friend form
const friendName4 = document.getElementById("name4");
const emoji4 = document.getElementById("fav-emoji4");
const favFood4 = document.getElementById("fav-food4");
const favDess4 = document.getElementById("fav-dessert4");
const favBev4 = document.getElementById("fav-bev4");
const favGenre4 = document.getElementById("fav-genre4");
const favCity4 = document.getElementById("fav-city4");
const favTime4 = document.getElementById("fav-time4");
const country4 = document.getElementById("country4");

//5th friend form
const friendName5 = document.getElementById("name5");
const emoji5 = document.getElementById("fav-emoji5");
const favFood5 = document.getElementById("fav-food5");
const favDess5 = document.getElementById("fav-dessert5");
const favBev5 = document.getElementById("fav-bev5");
const favGenre5 = document.getElementById("fav-genre5");
const favCity5 = document.getElementById("fav-city5");
const favTime5 = document.getElementById("fav-time5");
const country5 = document.getElementById("country5");

//6th friend form
const friendName6 = document.getElementById("name6");
const emoji6 = document.getElementById("fav-emoji6");
const favFood6 = document.getElementById("fav-food6");
const favDess6 = document.getElementById("fav-dessert6");
const favBev6 = document.getElementById("fav-bev6");
const favGenre6 = document.getElementById("fav-genre6");
const favCity6 = document.getElementById("fav-city6");
const favTime6 = document.getElementById("fav-time6");
const country6 = document.getElementById("country6");

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
const button1 = document.querySelector(".button__person1");
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

//make the 1st person( user) edit button work

let person1Name = document.createElement('p');
let person1emoji = document.createElement('p');

button1.addEventListener("click", function(e) {
    e.preventDefault();
    person1Name.textContent = "";
    person1emoji.textContent = "";
    console.log(person1.name, person1.favoriteFood);
    friendForm.classList.remove("hidden");
    containerOne.classList.remove("hiddenModal");
    if (person1) {
            friendForm.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log(person1.name, person1.favoriteFood);
        person1 = new Person(friendName.value, emoji.value, favFood.value, favDess.value, 
            favBev.value, favGenre.value, favCity.value, favTime.value, country.value)
        person1Name.textContent = person1.name;
        person1emoji.textContent = person1.favoriteEmoji;
        friendForm.classList.add("hidden");
        containerOne.classList.add("hiddenModal");
        personOne.setAttribute("title", `${person1.greeting()}`);
        welcomeGreet.textContent = person1.welcome();
        })
    } else {
        header2.textContent = `Oops, please try again!`

    }
})


//make the 1st person submit button work upon starting
friendForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    person1 = new Person(friendName.value, emoji.value, favFood.value, favDess.value, 
        favBev.value, favGenre.value, favCity.value, favTime.value, country.value)
    person1Name.textContent = person1.name;
    personOne.append(person1Name);
    person1emoji.textContent = person1.favoriteEmoji;
    personOne.append(person1emoji);
    friendForm.classList.add("hidden");
    containerOne.classList.add("hiddenModal");
    header2.textContent = `Add some information for up to 5 friends below.`
    personOne.setAttribute("title", `${person1.greeting()}`);

    hiddenDivs.forEach(div => {
        div.classList.remove("hidden");
    })
    welcomeGreet.textContent = person1.welcome();
})


//make the 2nd person button open a form where you can input your friend's info

let person2Name = document.createElement('p');
let person2emoji = document.createElement('p');

button2.addEventListener("click", function(e) {
    e.preventDefault();
    if (person2) { //if person2 object exists, edit it
    person2Name.textContent = "";
    person2emoji.textContent = "";
    containerTwo.classList.remove("hiddenModal");
    friendForm2.classList.remove("hidden");
        friendForm2.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log(" person 2 edit object e listener worked");
                person2 = new Person(friendName2.value, emoji2.value, favFood2.value, favDess2.value, 
                favBev2.value, favGenre2.value, favCity2.value, favTime2.value, country2.value)
        person2Name.textContent = person2.name;
        person2emoji.textContent = person2.favoriteEmoji;
        welcomeGreet.textContent = person2.welcome();
        friendForm2.classList.add("hidden");
        containerTwo.classList.add("hiddenModal");
        personTwo.setAttribute("title", `${person2.greeting()}`);
        })
    } else {
        button2.textContent = "Edit info";
        friendForm2.classList.remove("hidden");
        containerTwo.classList.remove("hiddenModal");
            friendForm2.addEventListener("submit", function(e) {
                e.preventDefault();
                person2 = new Person(friendName2.value, emoji2.value, favFood2.value, favDess2.value, 
                        favBev2.value, favGenre2.value, favCity2.value, favTime2.value, country2.value)
                console.log(" person 2 instantiation e listener worked");
                person2Name.textContent = person2.name;
                personTwo.append(person2Name);
                person2emoji.textContent = person2.favoriteEmoji;
                personTwo.append(person2emoji);
                welcomeGreet.textContent = person2.welcome();
                friendForm2.classList.add("hidden");
                containerTwo.classList.add("hiddenModal");
                personTwo.setAttribute("title", `${person2.greeting()}`);
        })
    }
})


//make the 3rd person button open a form where you can input your friend's info

let person3Name = document.createElement('p');
let person3emoji = document.createElement('p');

button3.addEventListener("click", function(e) {
    e.preventDefault();
    if (person3) {
        person3Name.textContent = "";
        person3emoji.textContent = "";
        friendForm3.classList.remove("hidden");
        containerThree.classList.remove("hiddenModal");
            friendForm3.addEventListener("submit", function(e) {
                e.preventDefault();
                person3 = new Person(friendName3.value, emoji3.value, favFood3.value, favDess3.value, 
                        favBev3.value, favGenre3.value, favCity3.value, favTime3.value, country3.value)
                
                console.log(" person 3 edit e listener worked");
                person3Name.textContent = person3.name;
                person3emoji.textContent = person3.favoriteEmoji;
                welcomeGreet.textContent = person3.welcome();
                friendForm3.classList.add("hidden");
                containerThree.classList.add("hiddenModal");
                personThree.setAttribute("title", `${person3.greeting()}`);
                })    
            } else {
                button3.textContent = "Edit info";
                friendForm3.classList.remove("hidden");
                containerThree.classList.remove("hiddenModal");
                    friendForm3.addEventListener("submit", function(e) {
                        e.preventDefault();
                        person3 = new Person(friendName3.value, emoji3.value, favFood3.value, favDess3.value, 
                        favBev3.value, favGenre3.value, favCity3.value, favTime3.value, country3.value)
                        console.log(" person 3 instantiation e listener worked");
                        person3Name.textContent = person3.name;
                        personThree.append(person3Name);
                        person3emoji.textContent = person3.favoriteEmoji;
                        personThree.append(person3emoji);
                        welcomeGreet.textContent = person3.welcome();
                        friendForm3.classList.add("hidden");
                        containerThree.classList.add("hiddenModal");
                        personThree.setAttribute("title", `${person3.greeting()}`);
                    })
                }
            })

//make the 4th person button open a form where you can input your friend's info

let person4Name = document.createElement('p');
let person4emoji = document.createElement('p');

button4.addEventListener("click", function(e) {
    e.preventDefault();
        if (person4) {
            person4Name.textContent = "";
            person4emoji.textContent = "";
            containerFour.classList.remove("hiddenModal");
            friendForm4.classList.remove("hidden");
                friendForm4.addEventListener("submit", function(e) {
                    e.preventDefault();
                    person4 = new Person(friendName4.value, emoji4.value, favFood4.value, favDess4.value, 
                            favBev4.value, favGenre4.value, favCity4.value, favTime4.value, country4.value)
                    console.log(" person 4 edit e listener worked");
                    person4Name.textContent = person4.name;
                    person4emoji.textContent = person4.favoriteEmoji;
                    welcomeGreet.textContent = person4.welcome();
                    friendForm4.classList.add("hidden");
                    containerFour.classList.add("hiddenModal");
                    personFour.setAttribute("title", `${person4.greeting()}`);
                })
            } else {
                button4.textContent = "Edit info";
                containerFour.classList.remove("hiddenModal");
                friendForm4.classList.remove("hidden");
                    friendForm4.addEventListener("submit", function(e) {
                        e.preventDefault();
                        person4 = new Person(friendName4.value, emoji4.value, favFood4.value, favDess4.value, 
                                favBev4.value, favGenre4.value, favCity4.value, favTime4.value, country4.value)
                        console.log(" person 4 instantiation e listener worked");
                        person4Name.textContent = person4.name;
                        personFour.append(person4Name);
                        person4emoji.textContent = person4.favoriteEmoji;
                        personFour.append(person4emoji);
                        welcomeGreet.textContent = person4.welcome();
                        friendForm4.classList.add("hidden");
                        containerFour.classList.add("hiddenModal");
                        personFour.setAttribute("title", `${person4.greeting()}`);
                    })
            }
})

//make the 5th person button open a form where you can input your friend's info

let person5Name = document.createElement('p');
let person5emoji = document.createElement('p');

button5.addEventListener("click", function(e) {
    e.preventDefault();
    if (person5) {
        person5Name.textContent = "";
        person5emoji.textContent = "";
        friendForm5.classList.remove("hidden");
        containerFive.classList.remove("hiddenModal");
            friendForm5.addEventListener("submit", function(e) {
                e.preventDefault();
                person5 = new Person(friendName5.value, emoji5.value, favFood5.value, favDess5.value, 
                        favBev5.value, favGenre5.value, favCity5.value, favTime5.value, country5.value)
                console.log(" person 5 edit e listener worked");
                person5Name.textContent = person5.name;
                person5emoji.textContent = person5.favoriteEmoji;
                welcomeGreet.textContent = person5.welcome();
                friendForm5.classList.add("hidden");
                containerFive.classList.add("hiddenModal");
                personFive.setAttribute("title", `${person5.greeting()}`);
            })
    } else {
        button5.textContent = "Edit info";
        friendForm5.classList.remove("hidden");
        containerFive.classList.remove("hiddenModal");
            friendForm5.addEventListener("submit", function(e) {
                e.preventDefault();
                person5 = new Person(friendName5.value, emoji5.value, favFood5.value, favDess5.value, 
                        favBev5.value, favGenre5.value, favCity5.value, favTime5.value, country5.value)                
                console.log(" person 5 instantiation e listener worked");            
                person5Name.textContent = person5.name;
                personFive.append(person5Name);
                person5emoji.textContent = person5.favoriteEmoji;
                personFive.append(person5emoji);               
                welcomeGreet.textContent = person5.welcome();
                friendForm5.classList.add("hidden");
                containerFive.classList.add("hiddenModal");
                personFive.setAttribute("title", `${person5.greeting()}`);
            })
        }
    })

//make the 6th person button open a form where you can input your friend's info

let person6Name = document.createElement('p');
let person6emoji = document.createElement('p');

button6.addEventListener("click", function(e) {
    e.preventDefault();
    if (person6) {
        person6Name.textContent = ""; 
        person6emoji.textContent = "";
        containerSix.classList.remove("hiddenModal");
        friendForm6.classList.remove("hidden");
            friendForm6.addEventListener("submit", function(e) {
                e.preventDefault();
                person6 = new Person(friendName6.value, emoji6.value, favFood6.value, favDess6.value, 
                        favBev6.value, favGenre6.value, favCity6.value, favTime6.value, country6.value)
                console.log(" person 6 edit e listener worked");
                person6Name.textContent = person6.name;
                person6emoji.textContent = person6.favoriteEmoji;
                welcomeGreet.textContent = person6.welcome();
                friendForm6.classList.add("hidden");
                containerSix.classList.add("hiddenModal");
                personSix.setAttribute("title", `${person6.greeting()}`);
            })
    } else {
        button6.textContent = "Edit info";
        containerSix.classList.remove("hiddenModal");
        friendForm6.classList.remove("hidden");
        friendForm6.addEventListener("submit", function(e) {
            e.preventDefault();
            person6 = new Person(friendName6.value, emoji6.value, favFood6.value, favDess6.value, 
                favBev6.value, favGenre6.value, favCity6.value, favTime6.value, country6.value)
            console.log(" person 6 instantiation e listener worked");
            person6Name.textContent = person6.name;
            personSix.append(person6Name);
            person6emoji.textContent = person6.favoriteEmoji;
            personSix.append(person6emoji);
            welcomeGreet.textContent = person6.welcome();
            friendForm6.classList.add("hidden");
            containerSix.classList.add("hiddenModal");
            personSix.setAttribute("title", `${person6.greeting()}`);
        })
        }
})