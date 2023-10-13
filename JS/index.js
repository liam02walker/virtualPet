// Saves Button
let mySavesContainer = document.getElementById("petSavesContainer");

function savesClicked() {
  if (mySavesContainer.style.display === "none" || mySavesContainer.style.display === "") {
    mySavesContainer.style.display = "flex";
  } else {
    mySavesContainer.style.display = "none";
  }
}

// Animal Changer
const petAnimalForm = document.getElementById("animalContainer");
let petImg = document.getElementById("petImg");
let animalType = "";

function showAnimalContainer() {
  if (petAnimalForm.style.display === "none" || petAnimalForm.style.display === "") {
    petAnimalForm.style.display = "flex";
  } else {
    petAnimalForm.style.display = "none";
  }
}

function changeAnimalHusky() {
  petImg.src = "./images/husky/husky-super1.png";
  animalType = "Husky";

  localStorage.setItem("petAnimal", animalType);
}

function changeAnimalCat() {
  petImg.src = "./images/cat/cat-super1.png";
  animalType = "Cat";

  localStorage.setItem("petAnimal", animalType);
}

function setAnimalImage() {
  let lsAnimal = localStorage.getItem("petAnimal");

  if (lsAnimal === "Husky") {
    petImg.src = "./images/husky/husky-super1.png";
  } else if (lsAnimal === "Cat") {
    petImg.src = "./images/cat/cat-super1.png";
  }
}
setAnimalImage();

// Pet Namer
let inputName = "Pet Name";
let myNameContainer = document.getElementById("nameContainer");
let inputPetName = document.getElementById("nameOfPet");

function showNameContainer() {
  if (myNameContainer.style.display === "none" || myNameContainer.style.display === "") {
    myNameContainer.style.display = "flex";
  } else if (myNameContainer.style.display === "flex" && inputName === "") {
    myNameContainer.style.display = "none";
    inputName = "Freddie";
    setPetName();
  } else {
    myNameContainer.style.display = "none";
  }
}

function setPetName() {
  inputPetName.innerText = localStorage.getItem("petName");
}

const petNameForm = document.getElementById("nameContainer");

petNameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = event.target.inputName.value;
  inputName = petName;

  if (petName.length === 0) {
    inputName = "Freddie";
  }

  localStorage.setItem("petName", inputName);
  showNameContainer();
  setPetName();
});
setPetName();

// Colour Changer
const petColorForm = document.getElementById("colorPicker");
let divColorChanger = document.getElementById("changePetColor");
let petColor = "";

function showColorContainer() {
  if (petColorForm.style.display === "none" || petColorForm.style.display === "") {
    petColorForm.style.display = "flex";
  } else if (petColorForm.style.display === "flex" && petColor === "") {
    petColorForm.style.display = "none";
    petColor = "#fff";
    setPetName();
  } else {
    petColorForm.style.display = "none";
  }
}

petColorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const colorChoice = event.target.inputColor.value;
  petColor = colorChoice;

  if (colorChoice) {
    petColorChanger();
  }

  localStorage.setItem("petColor", colorChoice);
});

function petColorChanger() {
  divColorChanger.style.backgroundColor = localStorage.getItem("petColor");
}

petColorChanger();

// Start The Game

function startButton() {
  const lsPetName = localStorage.getItem("petName");
  const lsColorName = localStorage.getItem("petColor");
  const lsAnimalName = localStorage.getItem("petAnimal");

  if (lsPetName && lsColorName && lsAnimalName) {
    window.location.href = "./game.html";
  } else {
    localStorage.setItem("petName", "Freddie");
    localStorage.setItem("petColor", "#fff");
    localStorage.setItem("petAnimal", "Cat");
    window.location.href = "./game.html";
  }
}
