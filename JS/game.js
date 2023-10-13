// CONST Variables
const petImg = document.getElementById("petImg");
const nameBox = document.querySelector(".nameBox");
const divColorChanger = document.getElementById("pet-container");
const feedsButton = document.getElementById("feedButton");
const activitiesButton = document.getElementById("activityButton");
const activityDisplay = document.getElementById("activity-buttons");
const feedsDisplay = document.getElementById("food-buttons");

// Local Storage
let petName = localStorage.getItem("petName");
let petColor = localStorage.getItem("petColor");
let petAnimal = localStorage.getItem("petAnimal");
let lsAnimalLow = petAnimal.toLowerCase();

// Placing Local Storage Pet
function placeUserPet() {
  divColorChanger.style.backgroundColor = petColor;
  nameBox.innerHTML = petName;

  if (petAnimal === "Husky") {
    petImg.src = "./images/husky/husky-super1.png";
  } else if (petAnimal === "Cat") {
    petImg.src = "./images/cat/cat-super1.png";
  }
}
placeUserPet();

// Button Functionality
feedsButton.addEventListener("click", openFeeding);
activitiesButton.addEventListener("click", openActivities);

function openFeeding() {
  if (feedsDisplay.style.display === "none" || feedsDisplay.style.display === "") {
    if (activityDisplay.style.display === "none" || activityDisplay.style.display === "") {
      feedsDisplay.style.display = "flex";
    } else if (activityDisplay.style.display === "flex") {
      activityDisplay.style.display = "none";
      feedsDisplay.style.display = "flex";
    }
  } else if (feedsDisplay.style.display === "flex") {
    feedsDisplay.style.display = "none";
  }
}
function openActivities() {
  if (activityDisplay.style.display === "none" || activityDisplay.style.display === "") {
    if (feedsDisplay.style.display === "none" || feedsDisplay.style.display === "") {
      activityDisplay.style.display = "flex";
    } else if (feedsDisplay.style.display === "flex") {
      feedsDisplay.style.display = "none";
      activityDisplay.style.display = "flex";
    }
  } else if (activityDisplay.style.display === "flex") {
    activityDisplay.style.display = "none";
  }
}
