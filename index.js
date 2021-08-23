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

//4th friend form
const friendName4 = document.getElementById("name4");
const favFood4 = document.getElementById("fav-food4");
const favDess4 = document.getElementById("fav-dessert4");
const favBev4 = document.getElementById("fav-bev4");
const favGenre4 = document.getElementById("fav-genre4");
const favCity4 = document.getElementById("fav-city4");
const country4 = document.getElementById("country4");

//5th friend form
const friendName5 = document.getElementById("name5");
const favFood5 = document.getElementById("fav-food5");
const favDess5 = document.getElementById("fav-dessert5");
const favBev5 = document.getElementById("fav-bev5");
const favGenre5 = document.getElementById("fav-genre5");
const favCity5 = document.getElementById("fav-city5");
const country5 = document.getElementById("country5");

//6th friend form
const friendName6 = document.getElementById("name6");
const favFood6 = document.getElementById("fav-food6");
const favDess6 = document.getElementById("fav-dessert6");
const favBev6 = document.getElementById("fav-bev6");
const favGenre6 = document.getElementById("fav-genre6");
const favCity6 = document.getElementById("fav-city6");
const country6 = document.getElementById("country6");

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
    this.favoriteFood = favoriteFood;
    this.favoriteDessert = favoriteDessert;
    this.favoriteBeverage = favoriteBeverage;
    this.favoriteFilmGenre = favoriteFilmGenre;
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
        person1 = new Person(friendName.value, favFood.value, favDess.value, 
            favBev.value, favGenre.value, favCity.value, country.value, foodCook.value, 
            musicArt.value, histCulture.value, 
            fitSport.value, animalNature.value)

            console.log(`${person1.animalNature}`);
        person1Name.textContent = person1.name;
        person1emoji.textContent = "❧";
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
        favBev.value, favGenre.value, favCity.value, country.value, foodCook.value, 
        musicArt.value, histCulture.value, 
        fitSport.value, animalNature.value)
    
    console.log(`${person1.animalNature}`);
    person1Name.textContent = person1.name;
    personOne.append(person1Name);
    person1emoji.textContent = "❧"
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
    addMeaningFoodCook();
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
                person2 = new Person(friendName2.value, favFood2.value, favDess2.value, 
                favBev2.value, favGenre2.value, favCity2.value, country2.value, foodCook2.value, 
                musicArt2.value, histCulture2.value, 
                fitSport2.value, animalNature2.value)

        console.log(`${person2.animalNature}`);        
        person2Name.textContent = person2.name;
        person2emoji.textContent = "❡";
        person2emoji.style.fontSize = "1.3rem";
        welcomeGreet.textContent = person2.welcome();
        friendForm2.classList.add("hidden");
        containerTwo.classList.add("hiddenModal");
        personTwo.setAttribute("title", `${person2.greeting()}`);
        checkFoods1and2();
        checkDessert();
        makeArrays()
        })
    } else {
        button2.textContent = "Edit info";
        friendForm2.classList.remove("hidden");
        containerTwo.classList.remove("hiddenModal");
            friendForm2.addEventListener("submit", function(e) {
                e.preventDefault();
                person2 = new Person(friendName2.value, favFood2.value, favDess2.value, 
                        favBev2.value, favGenre2.value, favCity2.value, country2.value, foodCook2.value, 
                        musicArt2.value, histCulture2.value, 
                        fitSport2.value, animalNature2.value)

                console.log(`${person2.animalNature}`);
                console.log(" person 2 instantiation e listener worked");
                person2Name.textContent = person2.name;
                personTwo.append(person2Name);
                person2emoji.textContent = "❡";
                person2emoji.style.fontSize = "1.3rem";
                personTwo.append(person2emoji);
                welcomeGreet.textContent = person2.welcome();
                friendForm2.classList.add("hidden");
                containerTwo.classList.add("hiddenModal");
                personTwo.setAttribute("title", `${person2.greeting()}`);
                checkFoods1and2();
                checkDessert1and2();
                makeArrays1and2();
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
                        favBev3.value, favGenre3.value, favCity3.value, country3.value)
                
                console.log(" person 3 edit e listener worked");
                person3Name.textContent = person3.name;
                person3emoji.textContent = "✷";
                person3emoji.style.fontSize = "1.3rem";
                welcomeGreet.textContent = person3.welcome();
                friendForm3.classList.add("hidden");
                containerThree.classList.add("hiddenModal");
                personThree.setAttribute("title", `${person3.greeting()}`);
                checkFoods12and3()
                checkDessert12and3()
                })    
            } else {
                button3.textContent = "Edit info";
                friendForm3.classList.remove("hidden");
                containerThree.classList.remove("hiddenModal");
                    friendForm3.addEventListener("submit", function(e) {
                        e.preventDefault();
                        person3 = new Person(friendName3.value, favFood3.value, favDess3.value, 
                        favBev3.value, favGenre3.value, favCity3.value, country3.value)
                        console.log(" person 3 instantiation e listener worked");
                        person3Name.textContent = person3.name;
                        personThree.append(person3Name);
                        person3emoji.textContent = "✷";
                        person3emoji.style.fontSize = "1.3rem";
                        personThree.append(person3emoji);
                        welcomeGreet.textContent = person3.welcome();
                        friendForm3.classList.add("hidden");
                        containerThree.classList.add("hiddenModal");
                        personThree.setAttribute("title", `${person3.greeting()}`);
                        checkFoods12and3()
                        checkDessert12and3()
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
                            favBev4.value, favGenre4.value, favCity4.value, country4.value)
                    console.log(" person 4 edit e listener worked");
                    person4Name.textContent = person4.name;
                    person4emoji.textContent = "☙";
                    person4emoji.style.fontSize = "1.3rem";
                    welcomeGreet.textContent = person4.welcome();
                    friendForm4.classList.add("hidden");
                    containerFour.classList.add("hiddenModal");
                    personFour.setAttribute("title", `${person4.greeting()}`);
                    checkFoods123and4();
                })
            } else {
                button4.textContent = "Edit info";
                containerFour.classList.remove("hiddenModal");
                friendForm4.classList.remove("hidden");
                    friendForm4.addEventListener("submit", function(e) {
                        e.preventDefault();
                        person4 = new Person(friendName4.value, favFood4.value, favDess4.value, 
                                favBev4.value, favGenre4.value, favCity4.value, country4.value)
                        console.log(" person 4 instantiation e listener worked");
                        person4Name.textContent = person4.name;
                        personFour.append(person4Name);
                        person4emoji.textContent = "☙";
                        person4emoji.style.fontSize = "1.3rem";
                        personFour.append(person4emoji);
                        welcomeGreet.textContent = person4.welcome();
                        friendForm4.classList.add("hidden");
                        containerFour.classList.add("hiddenModal");
                        personFour.setAttribute("title", `${person4.greeting()}`);
                        checkFoods123and4();
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
                        favBev5.value, favGenre5.value, favCity5.value, country5.value)
                console.log(" person 5 edit e listener worked");
                person5Name.textContent = person5.name;
                person5emoji.textContent = "❦";
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
                        favBev5.value, favGenre5.value, favCity5.value, country5.value)                
                console.log(" person 5 instantiation e listener worked");            
                person5Name.textContent = person5.name;
                personFive.append(person5Name);
                person5emoji.textContent = "❦";
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
                        favBev6.value, favGenre6.value, favCity6.value, country6.value)
                console.log(" person 6 edit e listener worked");
                person6Name.textContent = person6.name;
                person6emoji.textContent = "✰";
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
                favBev6.value, favGenre6.value, favCity6.value, country6.value)
            console.log(" person 6 instantiation e listener worked");
            person6Name.textContent = person6.name;
            personSix.append(person6Name);
            person6emoji.textContent = "✰";
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

//Fav foods person 1 and 2:
const suggestFood = document.createElement("div");
suggestFood.classList.add("personcards__suggest");
//suggestFood.style.gridColumn = "4 / 5";
cardContainer.insertBefore(suggestFood, containerCardTwo);
//suggestFood.style.border = "2px solid blue";

function checkFoods1and2() {
    //console.log(Boolean(person1 || person2));
    //console.log(Boolean(person1 && person2)); why is this returning false while the above is returning true?
    if(person1 || person2) {
        if(person1.favoriteFood == person2.favoriteFood) { 
            suggestFood.textContent = `${person1.name} and ${person2.name} both like ${person2.favoriteFood}!`;
        } else {
            suggestFood.textContent = "";
        }
    }
}

//Fav food 1, 2, and 3 
const suggestFood3 = document.createElement("div");
suggestFood3.classList.add("personcards__suggest");
suggestFood3.style.gridColumn = "1";
suggestFood3.style.gridRow = "1";
cardContainer.insertBefore(suggestFood3, containerCardThree);
//suggestFood3.style.border = "2px solid blue";

function checkFoods12and3() {
    //console.log(Boolean(person1 || person2));
    //console.log(Boolean(person1 && person2)); why is this returning false while the above is returning true?
    if(person3) {
        if(person2.favoriteFood == person3.favoriteFood && person1.favoriteFood == person3.favoriteFood) {
            suggestFood.textContent = "";
            suggestFood3.textContent = `${person1.name}, ${person2.name} and ${person3.name} all like ${person3.favoriteFood}!`; 
        } else if (person1.favoriteFood == person3.favoriteFood) {
            suggestFood3.textContent = `${person1.name} and ${person3.name} both like ${person3.favoriteFood}!`;           
        } else if (person2.favoriteFood == person3.favoriteFood ) {
            suggestFood3.textContent = `${person2.name} and ${person3.name} both like ${person3.favoriteFood}!`;
        } else {
            suggestFood3.textContent = "";
        }
    }
}

//Fav food 1, 2, 3 and 4 
const suggestFood4 = document.createElement("div");
suggestFood4.classList.add("personcards__suggest");
suggestFood4.style.gridColumn = "2";
suggestFood3.style.gridRow = "2";
cardContainer.insertBefore(suggestFood4, containerCardFour);
suggestFood4.style.border = "2px solid blue";

function checkFoods123and4() {
    //console.log(Boolean(person1 || person2));
    //console.log(Boolean(person1 && person2)); why is this returning false while the above is returning true?
    if(person4) {
        if(person1.favoriteFood == person4.favoriteFood && person2.favoriteFood == person4.favoriteFood && person3.favoriteFood == person4.favoriteFood) {
            suggestFood.textContent = "";
            suggestFood3.textContent = "";
            suggestFood4.textContent = `${person1.name}, ${person2.name}, ${person3.name} and ${person4.name} all like ${person4.favoriteFood}!`; 
        } else if (person1.favoriteFood == person4.favoriteFood && person2.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person1.name} and ${person2.name} both like ${person4.favoriteFood}!`;           
        } else if (person2.favoriteFood == person4.favoriteFood && person3.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person2.name} and ${person3.name} both like ${person4.favoriteFood}!`;
        } else if (person1.favoriteFood == person4.favoriteFood && person3.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person1.name} and ${person3.name} both like ${person4.favoriteFood}!`; 
        } else if (person1.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person1.name} and ${person4.name} both like ${person4.favoriteFood}!`; 
        } else if  (person2.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person2.name} and ${person4.name} both like ${person4.favoriteFood}!`; 
        } else if (person3.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person3.name} and ${person4.name} both like ${person4.favoriteFood}!`; 
        } else {
            suggestFood3.textContent = "";
        }
    }
}

function checkFoods1234and5() {
    //console.log(Boolean(person1 || person2));
    //console.log(Boolean(person1 && person2)); why is this returning false while the above is returning true?
    if(person4) {
        if(person1.favoriteFood == person5.favoriteFood && person2.favoriteFood == person5.favoriteFood && person3.favoriteFood == person5.favoriteFood
             && person4.favoriteFood == person5.favoriteFood && person1.favoriteFood == person4.favoriteFood && person2.favoriteFood == person4.favoriteFood &&
             person3.favoriteFood == person4.favoriteFood && person1.favoriteFood == person3.favoriteFood && person1.favoriteFood == person2.favoriteFood) {
            suggestFood.textContent = "";
            suggestFood3.textContent = "";
            suggestFood4.textContent = "";
            suggestFood5.textContent = `${person1.name}, ${person2.name}, ${person3.name}, ${person4.name} and ${person5.name} all like ${person5.favoriteFood}!`; 
        } else if (person1.favoriteFood == person5.favoriteFood && person2.favoriteFood == person5.favoriteFood && person3.favoriteFood == person5.favoriteFood) {
            suggestFood4.textContent = `${person1.name}, ${person2.name} and ${person3.name} all like ${person5.favoriteFood}!`;           
        } else if (person2.favoriteFood == person5.favoriteFood && person3.favoriteFood == person5.favoriteFood) { //**add logic 
            suggestFood4.textContent = `${person2.name} and ${person3.name} both like ${person4.favoriteFood}!`;
        } else if (person1.favoriteFood == person4.favoriteFood && person3.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person1.name} and ${person3.name} both like ${person4.favoriteFood}!`; 
        } else if (person1.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person1.name} and ${person4.name} both like ${person4.favoriteFood}!`; 
        } else if  (person2.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person2.name} and ${person4.name} both like ${person4.favoriteFood}!`; 
        } else if (person3.favoriteFood == person4.favoriteFood) {
            suggestFood4.textContent = `${person3.name} and ${person4.name} both like ${person4.favoriteFood}!`; 
        } else {
            suggestFood3.textContent = "";
        }
    }
}

// Fav desserts person 1 and 2:
const suggestDessert = document.createElement("div");
suggestDessert.classList.add("personcards__suggest");
cardContainer.insertBefore(suggestDessert, containerCardTwo);
//suggestDessert.style.border = "2px solid blue";
//suggestDessert.textContent = "dessert";
suggestDessert.style.gridColumn = "4 / 5";
suggestDessert.style.gridRow = "2";

function checkDessert1and2() {
    if (person1 || person2) {
        if(person1.favoriteDessert == person2.favoriteDessert) { 
            suggestDessert.textContent = `${person1.name} and ${person2.name} both like ${person2.favoriteDessert}!`;
        } else {
             suggestDessert.textContent = "";
        }
    }
}


//Fav Dessert 1, 2 and 3 

const suggestDessert3 = document.createElement("div");
suggestDessert3.classList.add("personcards__suggest");
suggestDessert3.style.gridColumn = "2";
suggestDessert3.style.gridRow = "1";
cardContainer.insertBefore(suggestDessert3, containerCardThree);
//suggestDessert3.style.border = "2px solid blue";

function checkDessert12and3() {
    //console.log(Boolean(person1 || person2));
    //console.log(Boolean(person1 && person2)); why is this returning false while the above is returning true?
    if(person3) {
        if(person2.favoriteDessert == person3.favoriteDessert && person1.favoriteDessert == person3.favoriteDessert) {
            suggestDessert.textContent = "";
            suggestDessert3.textContent = `${person1.name}, ${person2.name} and ${person3.name} all like ${person3.favoriteDessert}!`; 
        } else if (person1.favoriteDessert == person3.favoriteDessert) {
            suggestDessert3.textContent = `${person1.name} and ${person3.name} both like ${person3.favoriteDessert}!`;           
        } else if (person2.favoriteDessert == person3.favoriteDessert ) {
            suggestDessert3.textContent = `${person2.name} and ${person3.name} both like ${person3.favoriteDessert}!`;
        } else {
            suggestDessert3.textContent = "";
        }
    }
}



//test area : test the checkbox fields

// if(person1.animalNature == person2.animalNature) {
//     console.log("they both like animals & nature");
// } else {
//     console.log("they don't both like animals/nature");
// }


 //compare person1 and person2 shared interests (checkboxes)

function addMeaningFoodCook() {
    if (foodCook.checked == true) {
        console.log(`person1 Food & Cooking is checked`);
    } else {
        return;
    }
}



//*****make all names on the input elements the same across the form ("interest" ) with a unique value . then use input.checked to find a boolean value***


// function makeArrays1and2() {
//  const person1interests = [addMeaningFoodCook(), musicArt.value, histCulture.value, fitSport.value, animalNature.value];
//  const person2interests = [addMeaningFoodCook(), musicArt2.value, histCulture2.value, fitSport2.value, animalNature2.value];
// console.log(person1interests);
// console.log(person2interests);
//     person1interests.forEach(interest => {
//         for(i=0; i< person2interests.length; i++) {
//             if(interest === person2interests[i]) {
//                 console.log(`${person1.name} and ${person2.name} both like ${interest}!`);
//                 console.log(interest, person2interests[i]);
//             }
//             //console.log("interest person 1" + interest + "interest person 2" + person2interests[i]);
            
//         }
//     })
// }

//         else if (person1.favoriteBeverage == person2.favoriteBeverage)  {
//             const suggestBev = document.createElement("p");
//             suggestBev.textContent = `You and ${person2.name} both like ${person2.favoriteBeverage}!`;
//             cardContainer.append(suggestBev);
//         } else if (person1.favoriteDessert == person2.favoriteDessert) {
//             const suggestBev = document.createElement("p");
//             suggestDessert.textContent = `You and ${person2.name} both like ${person2.favoriteDessert}!`;
//             cardContainer.append(suggestDessert);
//         } else if (person1.favoriteFilmGenre == person2.favoriteFilmGenre) {
//             const suggestFilm = document.createElement("p");
//             suggestFilm.textContent = `You and ${person2.name} both like ${person2.favoriteFilmGenre}!`;
//             cardContainer.append(suggestFilm);
//         } else {
//             suggestFood.textContent = "";
//             suggestBev.textContent = "";
//             suggestDessert.textContent = "";
//             suggestFilm.textContent = "";
//         }
//     }
// }


