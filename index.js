//grab elements from the DOM

//subtitle
const header2 = document.querySelector("h2");
const welcomeGreet = document.querySelector(".welcome");

//form containers
const containerOne = document.querySelector(".container");
const containerTwo = document.querySelector(".container2");
const containerThree = document.querySelector(".container3");
const containerFour = document.querySelector(".container4");
const containerFive = document.querySelector(".container5");
const containerSix = document.querySelector(".container6");
const containers = document.querySelectorAll(".contain");

//card container parent element
const cardContainer = document.querySelector(".personcards");

//container cards for each friend
const containerCardOne = document.querySelector(".person1__container");
const containerCardTwo = document.querySelector(".person2__container");
const containerCardThree = document.querySelector(".person3__container");
const containerCardFour = document.querySelector(".person4__container");
const containerCardFive = document.querySelector(".person5__container");
const containerCardSix = document.querySelector(".person6__container");

//forms
const friendForm = document.querySelector(".container__form");
const friendForm2 = document.querySelector(".container__form2");
const friendForm3 = document.querySelector(".container__form3");
const friendForm4 = document.querySelector(".container__form4");
const friendForm5 = document.querySelector(".container__form5");
const friendForm6 = document.querySelector(".container__form6");
const formsList = document.getElementsByTagName(".form");

//1st form (user) inputs
const friendName = document.getElementById("name");
const favFood = document.getElementById("fav-food");
const favDess = document.getElementById("fav-dessert");
const favBev = document.getElementById("fav-bev");
const favGenre = document.getElementById("fav-genre");
const favCity = document.getElementById("fav-city");
const country = document.getElementById("country");
const foodCook = document.getElementById("food/cooking");
const musicArt = document.getElementById("music/art");
    
const histCulture = document.getElementById("history/culture");
const fitSport = document.getElementById("fitness/sports");
const animalNature = document.getElementById("animals/nature");

//2nd friend form inputs
const friendName2 = document.getElementById("name2");
const favFood2 = document.getElementById("fav-food2");
const favDess2 = document.getElementById("fav-dessert2");
const favBev2 = document.getElementById("fav-bev2");
const favGenre2 = document.getElementById("fav-genre2");
const favCity2 = document.getElementById("fav-city2");
const country2 = document.getElementById("country2");
const foodCook2 = document.getElementById("food/cooking2");
const musicArt2 = document.getElementById("music/art2");
const histCulture2 = document.getElementById("history/culture2");
const fitSport2 = document.getElementById("fitness/sports2");
const animalNature2 = document.getElementById("animals/nature2");

//3rd friend form
const friendName3 = document.getElementById("name3");
const favFood3 = document.getElementById("fav-food3");
const favDess3 = document.getElementById("fav-dessert3");
const favBev3 = document.getElementById("fav-bev3");
const favGenre3 = document.getElementById("fav-genre3");
const favCity3 = document.getElementById("fav-city3");
const country3 = document.getElementById("country3");
const foodCook3 = document.getElementById("food/cooking3");
const musicArt3 = document.getElementById("music/art3");
const histCulture3 = document.getElementById("history/culture3");
const fitSport3 = document.getElementById("fitness/sports3");
const animalNature3 = document.getElementById("animals/nature3");

//4th friend form
const friendName4 = document.getElementById("name4");
const favFood4 = document.getElementById("fav-food4");
const favDess4 = document.getElementById("fav-dessert4");
const favBev4 = document.getElementById("fav-bev4");
const favGenre4 = document.getElementById("fav-genre4");
const favCity4 = document.getElementById("fav-city4");
const country4 = document.getElementById("country4");
const foodCook4 = document.getElementById("food/cooking4");
const musicArt4 = document.getElementById("music/art4");
const histCulture4 = document.getElementById("history/culture4");
const fitSport4 = document.getElementById("fitness/sports4");
const animalNature4 = document.getElementById("animals/nature4");

//5th friend form
const friendName5 = document.getElementById("name5");
const favFood5 = document.getElementById("fav-food5");
const favDess5 = document.getElementById("fav-dessert5");
const favBev5 = document.getElementById("fav-bev5");
const favGenre5 = document.getElementById("fav-genre5");
const favCity5 = document.getElementById("fav-city5");
const country5 = document.getElementById("country5");
const foodCook5 = document.getElementById("food/cooking5");
const musicArt5 = document.getElementById("music/art5");
const histCulture5 = document.getElementById("history/culture5");
const fitSport5 = document.getElementById("fitness/sports5");
const animalNature5 = document.getElementById("animals/nature5");

//6th friend form
const friendName6 = document.getElementById("name6");
const favFood6 = document.getElementById("fav-food6");
const favDess6 = document.getElementById("fav-dessert6");
const favBev6 = document.getElementById("fav-bev6");
const favGenre6 = document.getElementById("fav-genre6");
const favCity6 = document.getElementById("fav-city6");
const country6 = document.getElementById("country6");
const foodCook6 = document.getElementById("food/cooking6");
const musicArt6 = document.getElementById("music/art6");
const histCulture6 = document.getElementById("history/culture6");
const fitSport6 = document.getElementById("fitness/sports6");
const animalNature6 = document.getElementById("animals/nature6");

//inner cards for the friends and user 
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
const formCloseBtns = document.querySelectorAll(".container__form--closeBtn");
const goButton = document.querySelector(".gobutton");
const clearButton = document.querySelector(".button__clear");

//test area
//enter test console.log code here!


//make the form close buttons work

 formCloseBtns.forEach(closeBtn => {
     closeBtn.addEventListener("click", function(e) {
         e.preventDefault();
         console.log("clicked on close btn");
         for(i=0; i < containers.length; i++) {
            console.log("contain close btn e listener worked");
            containers[i].classList.add("hiddenModal");
         }
    })
 })


//add a way to add a new person into the group. lets go with ES5 syntax this time.

function Person(name, favoriteFood, favoriteDessert, favoriteBeverage, favoriteFilmGenre, favoriteCity,
    countryYoudLikeToVisit, foodCook, musicArt, histCulture, fitSport, animalNature) {
    this.name = name;
    this.favoriteFood = favoriteFood.toLowerCase();
    this.favoriteDessert = favoriteDessert.toLowerCase();
    this.favoriteBeverage = favoriteBeverage.toLowerCase();
    this.favoriteFilmGenre = favoriteFilmGenre.toLowerCase();
    this.favoriteCity = favoriteCity;
    this.countryYoudLikeToVisit = countryYoudLikeToVisit;
    this.foodCook = foodCook;
    this.musicArt = musicArt;
    this.histCulture = histCulture;
    this.fitSport = fitSport;
    this.animalNature = animalNature;

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

let peopleArray = [];

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

        person1 = new Person(friendName.value, favFood.value, favDess.value, 
            favBev.value, favGenre.value, favCity.value, country.value, foodCook.checked, 
            musicArt.checked, histCulture.checked, 
            fitSport.checked, animalNature.checked)

        person1Name.textContent = person1.name;
        person1emoji.textContent = "??????";
        person1emoji.style.fontSize = "1.3rem";
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
    
    person1 = new Person(friendName.value, favFood.value, favDess.value, 
        favBev.value, favGenre.value, favCity.value, country.value, foodCook.checked, 
        musicArt.checked, histCulture.checked, 
        fitSport.checked, animalNature.checked)
    
    person1Name.textContent = person1.name;
    personOne.append(person1Name);
    person1emoji.textContent = "???"
    person1emoji.style.fontSize = "1.3rem";
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
    if (person2) { 
    person2Name.textContent = "";
    person2emoji.textContent = "";
    
    containerTwo.classList.remove("hiddenModal");
    friendForm2.classList.remove("hidden");
        friendForm2.addEventListener("submit", function(e) {
            e.preventDefault();
                person2 = new Person(friendName2.value, favFood2.value, favDess2.value, 
                favBev2.value, favGenre2.value, favCity2.value, country2.value, foodCook2.checked, 
                musicArt2.checked, histCulture2.checked, 
                fitSport2.checked, animalNature2.checked)

        console.log(`${person2.animalNature}`);        
        person2Name.textContent = person2.name;
        person2emoji.textContent = "";
        person2emoji.style.fontSize = "1.3rem";
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
                
                person2 = new Person(friendName2.value, favFood2.value, favDess2.value, 
                        favBev2.value, favGenre2.value, favCity2.value, country2.value, foodCook2.checked, 
                        musicArt2.checked, histCulture2.checked, 
                        fitSport2.checked, animalNature2.checked)

                console.log(`${person2.animalNature}`);
                person2Name.textContent = person2.name;
                personTwo.append(person2Name);
                person2emoji.textContent = "???";
                person2emoji.style.fontSize = "1.3rem";
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
                person3 = new Person(friendName3.value, favFood3.value, favDess3.value, 
                        favBev3.value, favGenre3.value, favCity3.value, country3.value, foodCook3.checked, 
                        musicArt3.checked, histCulture3.checked, 
                        fitSport3.checked, animalNature3.checked)
                
                person3Name.textContent = person3.name;
                person3emoji.textContent = "???";
                person3emoji.style.fontSize = "1.3rem";
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
                        person3 = new Person(friendName3.value, favFood3.value, favDess3.value, 
                        favBev3.value, favGenre3.value, favCity3.value, country3.value, foodCook3.checked, 
                        musicArt3.checked, histCulture3.checked, 
                        fitSport3.checked, animalNature3.checked)
                        person3Name.textContent = person3.name;
                        personThree.append(person3Name);
                        person3emoji.textContent = "???";
                        person3emoji.style.fontSize = "1.3rem";
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
                    person4 = new Person(friendName4.value, favFood4.value, favDess4.value, 
                            favBev4.value, favGenre4.value, favCity4.value, country4.value, foodCook4.checked, 
                            musicArt4.checked, histCulture4.checked, 
                            fitSport4.checked, animalNature4.checked)
                    person4Name.textContent = person4.name;
                    person4emoji.textContent = "???";
                    person4emoji.style.fontSize = "1.3rem";
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
                        person4 = new Person(friendName4.value, favFood4.value, favDess4.value, 
                                favBev4.value, favGenre4.value, favCity4.value, country4.value, foodCook4.checked, 
                                musicArt4.checked, histCulture4.checked, 
                                fitSport4.checked, animalNature4.checked)
                        person4Name.textContent = person4.name;
                        personFour.append(person4Name);
                        person4emoji.textContent = "???";
                        person4emoji.style.fontSize = "1.3rem";
                        personFour.append(person4emoji);
                        welcomeGreet.textContent = person4.welcome();
                        friendForm4.classList.add("hidden");
                        containerFour.classList.add("hiddenModal");
                        personFour.setAttribute("title", `${person4.greeting()}`);
                        peopleArray.push(person4);
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
                person5 = new Person(friendName5.value, favFood5.value, favDess5.value, 
                        favBev5.value, favGenre5.value, favCity5.value, country5.value, foodCook5.checked, 
                        musicArt5.checked, histCulture5.checked, 
                        fitSport5.checked, animalNature5.checked)
                person5Name.textContent = person5.name;
                person5emoji.textContent = "???";
                person5emoji.style.fontSize = "1.3rem";
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
                person5 = new Person(friendName5.value, favFood5.value, favDess5.value, 
                        favBev5.value, favGenre5.value, favCity5.value, country5.value, foodCook5.checked, 
                        musicArt5.checked, histCulture5.checked, 
                        fitSport5.checked, animalNature5.checked)                          
                person5Name.textContent = person5.name;
                personFive.append(person5Name);
                person5emoji.textContent = "???";
                person5emoji.style.fontSize = "1.3rem";
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
                person6 = new Person(friendName6.value, favFood6.value, favDess6.value, 
                        favBev6.value, favGenre6.value, favCity6.value, country6.value, foodCook6.checked, 
                        musicArt6.checked, histCulture6.checked, 
                        fitSport6.checked, animalNature6.checked)
                person6Name.textContent = person6.name;
                person6emoji.textContent = "???";
                person6emoji.style.fontSize = "1.3rem";
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
            person6 = new Person(friendName6.value, favFood6.value, favDess6.value, 
                favBev6.value, favGenre6.value, favCity6.value, country6.value, foodCook6.checked, 
                musicArt6.checked, histCulture6.checked, 
                fitSport6.checked, animalNature6.checked)
            person6Name.textContent = person6.name;
            personSix.append(person6Name);
            person6emoji.textContent = "???";
            person6emoji.style.fontSize = "1.3rem";
            personSix.append(person6emoji);
            welcomeGreet.textContent = person6.welcome();
            friendForm6.classList.add("hidden");
            containerSix.classList.add("hiddenModal");
            personSix.setAttribute("title", `${person6.greeting()}`);
            
        })
        }
        
})

//**~~  Create a way to compare each person's data/favs and suggest experience ideas!  ~~**//

let suggestFood = document.createElement("div");
let suggestDessert = document.createElement("div");
let suggestBev = document.createElement("div");
let suggestFilm = document.createElement("div");
let suggestCity = document.createElement("div");
let suggestCountry = document.createElement("div");
let suggestFoodandCooking = document.createElement("div");
let suggestMusicandArt = document.createElement("div");
let suggestHistandCulture = document.createElement("div");
let suggestFitSport = document.createElement("div");
let suggestAnimalNature = document.createElement("div");

//Food:
suggestFood.textContent = "";
suggestFood.classList.add("personcards__suggest");
suggestFood.style.gridColumn = "4 / 5";
cardContainer.insertBefore(suggestFood, containerCardTwo);
//suggestFood.style.border = "2px solid blue";



goButton.addEventListener("click", function(e) {
    e.preventDefault();
    goButton.classList.add("hidden");
    clearButton.id = "";
    if (person1 && person2 && person3 && person4 && person5 && person6) {
        peopleArray = [person1, person2, person3, person4, person5, person6];
    } else if (person1 && person2 && person4, person6, person5) {
        peopleArray = [person1, person2, person4, person6, person5];
    } else if (person1 && person2 && person4 && person6) {
        peopleArray = [person1, person2, person4, person6];
    } else if (person1 && person2 && person4) {
        peopleArray = [person1, person2, person4];
    } else if (person1 && person2) {
        peopleArray = [person1, person2];
    } else {
        welcomeGreet.textContent = "Please add some friends to get started!";
    }
    
console.log("peopleArray =", peopleArray);

const filterFoodArray = peopleArray.filter((person) => {
    return person.favoriteFood === peopleArray[0].favoriteFood;
})

if (filterFoodArray.length === 6) {
        suggestFood.textContent = `You, ${filterFoodArray[5].name}, ${filterFoodArray[4].name},
        ${filterFoodArray[3].name}, ${filterFoodArray[2].name} and ${filterFoodArray[1].name} like ${filterFoodArray[0].favoriteFood}!  
        Why not get take out and share a socially distant meal?`
    } else if (filterFoodArray.length === 5){
        suggestFood.textContent = `You, ${filterFoodArray[4].name},
        ${filterFoodArray[3].name}, ${filterFoodArray[2].name} and ${filterFoodArray[1].name} like ${filterFoodArray[0].favoriteFood}! 
        Why not get take out and share a socially distant meal?`
    } else if (filterFoodArray.length === 4) {
        suggestFood.textContent = `You, ${filterFoodArray[3].name}, ${filterFoodArray[2].name} and ${filterFoodArray[1].name} like ${filterFoodArray[0].favoriteFood}! 
        Why not get take out and share a socially distant meal?`
    } else if (filterFoodArray.length === 3) {
        suggestFood.textContent = `You, ${filterFoodArray[2].name} and ${filterFoodArray[1].name} like ${filterFoodArray[0].favoriteFood}! 
        Why not get take out and share a socially distant meal?`
    } else if (filterFoodArray.length === 2) {
        suggestFood.textContent = `You and ${filterFoodArray[1].name} like ${filterFoodArray[0].favoriteFood}! 
        Why not get take out and share a socially distant meal?`
    } 


//Dessert:
suggestDessert.textContent = "";
suggestDessert.classList.add("personcards__suggest");
suggestDessert.style.gridColumn = "2";
suggestDessert.style.gridRow = "1";
cardContainer.insertBefore(suggestDessert, containerCardThree);
//suggestDessert.style.border = "2px solid magenta";    

    const filterDessertArray = peopleArray.filter((person) => {
        return person.favoriteDessert === peopleArray[0].favoriteDessert;
    })
    
    console.log(filterDessertArray);
    
    if (filterDessertArray.length === 6) {
            suggestDessert.textContent = `You, ${filterDessertArray[5].name}, ${filterDessertArray[4].name},
            ${filterDessertArray[3].name}, ${filterDessertArray[2].name} and ${filterDessertArray[1].name} like ${filterDessertArray[0].favoriteDessert}!  
            Why not share a socially distant treat?`
        } else if (filterDessertArray.length === 5){
            suggestDessert.textContent = `You, ${filterDessertArray[4].name},
            ${filterDessertArray[3].name}, ${filterDessertArray[2].name} and ${filterDessertArray[1].name} like ${filterDessertArray[0].favoriteDessert}! 
            Why not share a socially distant treat?`
        } else if (filterDessertArray.length === 4) {
            suggestDessert.textContent = `You, ${filterDessertArray[3].name}, ${filterDessertArray[2].name} and ${filterDessertArray[1].name} like ${filterDessertArray[0].favoriteDessert}! 
            Why not share a socially distant treat?`
        } else if (filterDessertArray.length === 3) {
            suggestDessert.textContent = `You, ${filterDessertArray[2].name} and ${filterDessertArray[1].name} like ${filterDessertArray[0].favoriteDessert}! 
            Why not share a socially distant treat?`
        } else if (filterDessertArray.length === 2) {
            suggestDessert.textContent = `You and ${filterDessertArray[1].name} like ${filterDessertArray[0].favoriteDessert}! 
            Why not share a socially distant treat?`
        }    


//Beverage:
suggestBev.textContent = "";
suggestBev.classList.add("personcards__suggest");
//suggestBev.style.gridColumn = "2";
//suggestBev.style.gridRow = "1";
cardContainer.insertBefore(suggestBev, containerCardFour);
//suggestBev.style.border = "2px solid green";    

    const filterBevArray = peopleArray.filter((person) => {
        //person.favoriteFood.toLowerCase();
        return person.favoriteBeverage === peopleArray[0].favoriteBeverage;
    })
    
    console.log(filterBevArray);
    
    if (filterBevArray.length === 6) {
            suggestBev.textContent = `You, ${filterBevArray[5].name}, ${filterBevArray[4].name},
            ${filterBevArray[3].name}, ${filterBevArray[2].name} and ${filterBevArray[1].name} like ${filterBevArray[0].favoriteBeverage}!  
            Why not bond over a socially distant beverage?`
        } else if (filterBevArray.length === 5){
            suggestBev.textContent = `You, ${filterBevArray[4].name},
            ${filterBevArray[3].name}, ${filterBevArray[2].name} and ${filterBevArray[1].name} like ${filterBevArray[0].favoriteBeverage}! 
            Why not bond over a socially distant beverage?`
        } else if (filterBevArray.length === 4) {
            suggestBev.textContent = `You, ${filterBevArray[3].name}, ${filterBevArray[2].name} and ${filterBevArray[1].name} like ${filterBevArray[0].favoriteBeverage}! 
            Why not bond over a socially distant beverage?`
        } else if (filterBevArray.length === 3) {
            suggestBev.textContent = `You, ${filterBevArray[2].name} and ${filterBevArray[1].name} like ${filterBevArray[0].favoriteBeverage}! 
            Why not bond over a socially distant beverage?`
        } else if (filterBevArray.length === 2) {
            suggestBev.textContent = `You and ${filterBevArray[1].name} like ${filterBevArray[0].favoriteBeverage}! 
            Why not bond over a socially distant beverage?`
        }    


//Film Genre:
suggestFilm.textContent = "";
suggestFilm.classList.add("personcards__suggest");
//suggestBev.style.gridColumn = "2";
//suggestBev.style.gridRow = "1";
cardContainer.insertBefore(suggestFilm, containerCardFive);
//suggestFilm.style.border = "2px solid black";    


const filterFilmArray = peopleArray.filter((person) => {
    return person.favoriteFilmGenre === peopleArray[0].favoriteFilmGenre;
})

console.log(filterFilmArray);

if (filterFilmArray.length === 6) {
        suggestFilm.textContent = `You, ${filterFilmArray[5].name}, ${filterFilmArray[4].name},
        ${filterFilmArray[3].name}, ${filterFilmArray[2].name} and ${filterFilmArray[1].name} like ${filterFilmArray[0].favoriteFilmGenre}!  
        Why not set up a watch party?!`
    } else if (filterFilmArray.length === 5){
        suggestFilm.textContent = `You, ${filterFilmArray[4].name},
        ${filterFilmArray[3].name}, ${filterFilmArray[2].name} and ${filterFilmArray[1].name} like ${filterFilmArray[0].favoriteFilmGenre}! 
        Why not set up a watch party?!`
    } else if (filterFilmArray.length === 4) {
        suggestFilm.textContent = `You, ${filterFilmArray[3].name}, ${filterFilmArray[2].name} and ${filterFilmArray[1].name} like ${filterFilmArray[0].favoriteFilmGenre}! 
        Why not set up a watch party?!`
    } else if (filterFilmArray.length === 3) {
        suggestFilm.textContent = `You, ${filterFilmArray[2].name} and ${filterFilmArray[1].name} like ${filterFilmArray[0].favoriteFilmGenre}! 
        Why not set up a watch party?!`
    } else if (filterFilmArray.length === 2) {
        suggestFilm.textContent = `You and ${filterFilmArray[1].name} like ${filterFilmArray[0].favoriteFilmGenre}! 
        Why not set up a watch party?!`
    }   
    
//City:
suggestCity.textContent = "";
suggestCity.classList.add("personcards__suggest");
//suggestCity.style.gridColumn = "2";
//suggestCity.style.gridRow = "1";
cardContainer.insertBefore(suggestCity, containerCardSix);
//suggestCity.style.border = "2px solid red";    


const filterCityArray = peopleArray.filter((person) => {
    return person.favoriteCity === peopleArray[0].favoriteCity;
})

console.log(filterCityArray);

if (filterCityArray.length === 6) {
        suggestCity.textContent = `You, ${filterCityArray[5].name}, ${filterCityArray[4].name},
        ${filterCityArray[3].name}, ${filterCityArray[2].name} and ${filterCityArray[1].name} like ${filterCityArray[0].favoriteCity}!  
        Why not enjoy a virtual experience together in ${peopleArray[0].favoriteCity}?`
    } else if (filterCityArray.length === 5){
        suggestCity.textContent = `You, ${filterCityArray[4].name},
        ${filterCityArray[3].name}, ${filterCityArray[2].name} and ${filterCityArray[1].name} like ${filterCityArray[0].favoriteCity}! 
        Why not enjoy a virtual experience together in ${peopleArray[0].favoriteCity}?`
    } else if (filterCityArray.length === 4) {
        suggestCity.textContent = `You, ${filterCityArray[3].name}, ${filterCityArray[2].name} and ${filterCityArray[1].name} like ${filterCityArray[0].favoriteCity}! 
        Why not enjoy a virtual experience together in ${peopleArray[0].favoriteCity}?`
    } else if (filterCityArray.length === 3) {
        suggestCity.textContent = `You, ${filterCityArray[2].name} and ${filterCityArray[1].name} like ${filterCityArray[0].favoriteCity}! 
        Why not enjoy a virtual experience together in ${peopleArray[0].favoriteCity}?`
    } else if (filterCityArray.length === 2) {
        suggestCity.textContent = `You and ${filterCityArray[1].name} like ${filterCityArray[0].favoriteCity}! 
        Why not enjoy a virtual experience together in ${peopleArray[0].favoriteCity}?`
    } 

//Country:
suggestCountry.textContent = "";
suggestCountry.classList.add("personcards__suggest");
suggestCountry.style.gridColumn = "5";
suggestCountry.style.gridRow = "3";
cardContainer.insertBefore(suggestCountry, containerCardSix);
//suggestCountry.style.border = "2px solid white";    

const filterCountryArray = peopleArray.filter((person) => {
    return person.countryYoudLikeToVisit === peopleArray[0].countryYoudLikeToVisit;
})

if (filterCountryArray.length === 6) {
        suggestCountry.textContent = `You, ${filterCountryArray[5].name}, ${filterCountryArray[4].name},
        ${filterCountryArray[3].name}, ${filterCountryArray[2].name} and ${filterCountryArray[1].name} like ${filterCountryArray[0].countryYoudLikeToVisit}!  
        Why not enjoy a virtual experience together in ${peopleArray[0].countryYoudLikeToVisit}?`
    } else if (filterCountryArray.length === 5){
        suggestCountry.textContent = `You, ${filterCountryArray[4].name},
        ${filterCountryArray[3].name}, ${filterCountryArray[2].name} and ${filterCountryArray[1].name} like ${filterCountryArray[0].countryYoudLikeToVisit}! 
        Why not enjoy a virtual experience together in ${peopleArray[0].countryYoudLikeToVisit}?`
    } else if (filterCountryArray.length === 4) {
        suggestCountry.textContent = `You, ${filterCountryArray[3].name}, ${filterCountryArray[2].name} and ${filterCountryArray[1].name} like ${filterCountryArray[0].countryYoudLikeToVisit}! 
        Why not enjoy a virtual experience together in ${peopleArray[0].countryYoudLikeToVisit}?`
    } else if (filterCountryArray.length === 3) {
        suggestCountry.textContent = `You, ${filterCountryArray[2].name} and ${filterCountryArray[1].name} like ${filterCountryArray[0].countryYoudLikeToVisit}! 
        Why not enjoy a virtual experience together in ${peopleArray[0].countryYoudLikeToVisit}?`
    } else if (filterCountryArray.length === 2) {
        suggestCountry.textContent = `You and ${filterCountryArray[1].name} like ${filterCountryArray[0].countryYoudLikeToVisit}! 
        Why not enjoy a virtual experience together in ${peopleArray[0].countryYoudLikeToVisit}?`
    }     


//Food & Cooking:
suggestFoodandCooking.textContent = "";
suggestFoodandCooking.classList.add("personcards__suggest");
suggestFoodandCooking.style.gridColumn = "5";
suggestFoodandCooking.style.gridRow = "2";
cardContainer.insertBefore(suggestFoodandCooking, containerCardSix);
//suggestFoodandCooking.style.border = "2px solid purple";    

const filterFoodAndCookArray = peopleArray.filter((person) => {
    if (person1.foodCook === true) {
        return person.foodCook === true;
    }
})

console.log("filterfoodandcookarray =", filterFoodAndCookArray);

if (filterFoodAndCookArray.length === 6) {
        suggestFoodandCooking.textContent = `You, ${filterFoodAndCookArray[5].name}, ${filterFoodAndCookArray[4].name},
        ${filterFoodAndCookArray[3].name}, ${filterFoodAndCookArray[2].name} and ${filterFoodAndCookArray[1].name} like $Food & Cooking!  
        Why not enjoy a Food & Cooking virtual experience together?`
    } else if (filterFoodAndCookArray.length === 5){
        suggestFoodandCooking.textContent = `You, ${filterFoodAndCookArray[4].name},
        ${filterFoodAndCookArray[3].name}, ${filterFoodAndCookArray[2].name} and ${filterFoodAndCookArray[1].name} like Food & Cooking! 
        Why not enjoy a Food & Cooking virtual experience together?`
    } else if (filterFoodAndCookArray.length === 4) {
        suggestFoodandCooking.textContent = `You, ${filterFoodAndCookArray[3].name}, ${filterFoodAndCookArray[2].name} and ${filterFoodAndCookArray[1].name} like Food & Cooking! 
        Why not enjoy a Food & Cooking virtual experience together?`
    } else if (filterFoodAndCookArray.length === 3) {
        suggestFoodandCooking.textContent = `You, ${filterFoodAndCookArray[2].name} and ${filterFoodAndCookArray[1].name} like Food & Cooking! 
        Why not enjoy a Food & Cooking virtual experience together?`
    } else if (filterFoodAndCookArray.length === 2) {
        suggestFoodandCooking.textContent = `You and ${filterFoodAndCookArray[1].name} like Food & Cooking! 
        Why not enjoy a Food & Cooking virtual experience together?`
    } 
    
//Music & Art:
suggestMusicandArt.textContent = "";
suggestMusicandArt.classList.add("personcards__suggest");
suggestMusicandArt.style.gridColumn = "6";
suggestMusicandArt.style.gridRow = "1";
cardContainer.insertBefore(suggestMusicandArt, containerCardSix);
//suggestMusicandArt.style.border = "2px solid skyblue";        

const filterMusicAndArtArray = peopleArray.filter((person) => {
    if (person1.musicArt === true) {
    return person.musicArt === peopleArray[0].musicArt;
    }
})

if (filterMusicAndArtArray.length === 6) {
        suggestMusicandArt.textContent = `You, ${filterMusicAndArtArray[5].name}, ${filterMusicAndArtArray[4].name},
        ${filterMusicAndArtArray[3].name}, ${filterMusicAndArtArray[2].name} and ${filterMusicAndArtArray[1].name} like Music & Art!  
        Why not enjoy a Music & Art related virtual experience together?`
    } else if (filterMusicAndArtArray.length === 5){
        suggestMusicandArt.textContent = `You, ${filterMusicAndArtArray[4].name},
        ${filterMusicAndArtArray[3].name}, ${filterMusicAndArtArray[2].name} and ${filterMusicAndArtArray[1].name} like Music & Art! 
        Why not enjoy a Music & Art related virtual experience together?`
    } else if (filterMusicAndArtArray.length === 4) {
        suggestMusicandArt.textContent = `You, ${filterMusicAndArtArray[3].name}, ${filterMusicAndArtArray[2].name} and ${filterMusicAndArtArray[1].name} like Music & Art! 
        Why not enjoy a Music & Art related virtual experience together?`
    } else if (filterMusicAndArtArray.length === 3) {
        suggestMusicandArt.textContent = `You, ${filterMusicAndArtArray[2].name} and ${filterMusicAndArtArray[1].name} like Music & Art! 
        Why not enjoy a Music & Art related virtual experience together?`
    } else if (filterMusicAndArtArray.length === 2) {
        suggestMusicandArt.textContent = `You and ${filterMusicAndArtArray[1].name} like Music & Art! 
        Why not enjoy a Music & Art related virtual experience together?`
    }


//History & Culture:
suggestHistandCulture.textContent = "";
suggestHistandCulture.classList.add("personcards__suggest");
suggestHistandCulture.style.gridColumn = "6";
suggestHistandCulture.style.gridRow = "3";
cardContainer.insertBefore(suggestHistandCulture, containerCardSix);
//suggestHistandCulture.style.border = "2px solid aqua";       

const filterHistAndCultureArray = peopleArray.filter((person) => {
    if (person1.histCulture === true) {
        return person.histCulture === peopleArray[0].histCulture;
    }  
})

if (filterHistAndCultureArray.length === 6) {
        suggestHistandCulture.textContent = `You, ${filterHistAndCultureArray[5].name}, ${filterHistAndCultureArray[4].name},
        ${filterHistAndCultureArray[3].name}, ${filterHistAndCultureArray[2].name} and ${filterHistAndCultureArray[1].name} like History & Culture!  
        Why not enjoy a History & Culture related virtual experience together?`
    } else if (filterHistAndCultureArray.length === 5){
        suggestHistandCulture.textContent = `You, ${filterHistAndCultureArray[4].name},
        ${filterHistAndCultureArray[3].name}, ${filterHistAndCultureArray[2].name} and ${filterHistAndCultureArray[1].name} like History & Culture! 
        Why not enjoy a History & Culture related virtual experience together?`
    } else if (filterHistAndCultureArray.length === 4) {
        suggestHistandCulture.textContent = `You, ${filterHistAndCultureArray[3].name}, ${filterHistAndCultureArray[2].name} and ${filterHistAndCultureArray[1].name} like History & Culture! 
        Why not enjoy a History & Culture related virtual experience together?`
    } else if (filterHistAndCultureArray.length === 3) {
        suggestHistandCulture.textContent = `You, ${filterHistAndCultureArray[2].name} and ${filterHistAndCultureArray[1].name} like History & Culture! 
        Why not enjoy a History & Culture related virtual experience together?`
    } else if (filterHistAndCultureArray.length === 2) {
        suggestHistandCulture.textContent = `You and ${filterHistAndCultureArray[1].name} like History & Culture! 
        Why not enjoy a History & Culture related virtual experience together?`
    }


//Fitness & Sports:
suggestFitSport.textContent = "";
suggestFitSport.classList.add("personcards__suggest");
suggestFitSport.style.gridColumn = "4";
suggestFitSport.style.gridRow = "2";
cardContainer.insertBefore(suggestFitSport, containerCardSix);
//suggestFitSport.style.border = "2px solid pink";    

const filterFitSportArray = peopleArray.filter((person) => {
    if (person1.fitSport === true) {
    return person.fitSport === peopleArray[0].fitSport;
    }
})

if (filterFitSportArray.length === 6) {
        suggestFitSport.textContent = `You, ${filterFitSportArray[5].name}, ${filterFitSportArray[4].name},
        ${filterFitSportArray[3].name}, ${filterFitSportArray[2].name} and ${filterFitSportArray[1].name} like Fitness & Sports!  
        Why not enjoy a Fitness & Sports related virtual experience together?`
    } else if (filterFitSportArray.length === 5){
        suggestFitSport.textContent = `You, ${filterFitSportArray[4].name},
        ${filterFitSportArray[3].name}, ${filterFitSportArray[2].name} and ${filterFitSportArray[1].name} like Fitness & Sports! 
        Why not enjoy a Fitness & Sports related virtual experience together?`
    } else if (filterFitSportArray.length === 4) {
        suggestFitSport.textContent = `You, ${filterFitSportArray[3].name}, ${filterFitSportArray[2].name} and ${filterFitSportArray[1].name} like Fitness & Sports! 
        Why not enjoy a Fitness & Sports related virtual experience together?`
    } else if (filterFitSportArray.length === 3) {
        suggestFitSport.textContent = `You, ${filterFitSportArray[2].name} and ${filterFitSportArray[1].name} like Fitness & Sports! 
        Why not enjoy a Fitness & Sports related virtual experience together?`
    } else if (filterFitSportArray.length === 2) {
        suggestFitSport.textContent = `You and ${filterFitSportArray[1].name} like Fitness & Sports! 
        Why not enjoy a Fitness & Sports related virtual experience together?`
    } 

    
//Animals & Nature:
suggestAnimalNature.textContent = "";
suggestAnimalNature.classList.add("personcards__suggest");
suggestAnimalNature.style.gridColumn = "1";
suggestAnimalNature.style.gridRow = "1";
cardContainer.insertBefore(suggestAnimalNature, containerCardSix);
//suggestAnimalNature.style.border = "2px solid goldenrod";       

const filterAnimalNatureArray = peopleArray.filter((person) => {
    if (person1.animalNature === true) {
    return person.animalNature === peopleArray[0].animalNature;
    }
})

if (filterAnimalNatureArray.length === 6) {
        suggestAnimalNature.textContent = `You, ${filterAnimalNatureArray[5].name}, ${filterAnimalNatureArray[4].name},
        ${filterAnimalNatureArray[3].name}, ${filterAnimalNatureArray[2].name} and ${filterAnimalNatureArray[1].name} like Animals & Nature!  
        Why not enjoy a Animal and/or Nature related related virtual experience together?`
    } else if (filterAnimalNatureArray.length === 5){
        suggestAnimalNature.textContent = `You, ${filterAnimalNatureArray[4].name},
        ${filterAnimalNatureArray[3].name}, ${filterAnimalNatureArray[2].name} and ${filterAnimalNatureArray[1].name} like Animals & Nature! 
        Why not enjoy a Animal and/or Nature related related virtual experience together?`
    } else if (filterAnimalNatureArray.length === 4) {
        suggestAnimalNature.textContent = `You, ${filterAnimalNatureArray[3].name}, ${filterAnimalNatureArray[2].name} and ${filterAnimalNatureArray[1].name} like Animals & Nature! 
        Why not enjoy a Animal and/or Nature related related virtual experience together?`
    } else if (filterAnimalNatureArray.length === 3) {
        suggestAnimalNature.textContent = `You, ${filterAnimalNatureArray[2].name} and ${filterAnimalNatureArray[1].name} like Animals & Nature! 
        Why not enjoy a Animal and/or Nature related related virtual experience together?`
    } else if (filterAnimalNatureArray.length === 2) {
        suggestAnimalNature.textContent = `You and ${filterAnimalNatureArray[1].name} like Animals & Nature! 
        Why not enjoy a Animal and/or Nature related related virtual experience together?`
    }  

})

clearButton.addEventListener("click", function(e) {
    e.preventDefault();
    goButton.classList.remove("hidden");
    clearButton.id = "hidden";
})

