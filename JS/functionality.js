// Globals to change pet animation & image
let petMood = "super";
let petImageNum = 1;

// Getting every element needed
const gameOver = document.getElementById("gameOver");
const hungerBar = document.getElementById("hunger-bar");
const healthBar = document.getElementById("health-bar");
const happyBar = document.getElementById("happy-bar");
const feedButton = document.getElementById("feed-button");
const chocoButton = document.getElementById("choco-button");
const saladButton = document.getElementById("salad-button");
const paperButton = document.getElementById("paper-button");
const partyButton = document.getElementById("party-button");
const parkButton = document.getElementById("park-button");
const gymButton = document.getElementById("gym-button");
const backgroundChange = document.body;

// Every Detail on the Pet
let petEverything = {
  updateEveryTick: {
    tickUpdate: {
      hunger: 1000,
      health: 5000,
      happy: 1000,
    },
    levelDefault: {
      hunger: 75,
      health: 50,
      happy: 100,
    },
    updateRates: {
      hunger: 1,
      health: 2,
      happy: 1,
    },
  },
  food: {
    feed: {
      happy: 1,
      health: 0,
      hunger: 5,
      inventory: 3,
    },
    chocolate: {
      happy: 5,
      health: -3,
      hunger: 1,
      inventory: 3,
    },
    salad: {
      happy: -3,
      health: 3,
      hunger: 0,
      inventory: 3,
    },
    paper: {
      happy: 30,
      health: -10,
      hunger: -5,
      inventory: 2,
    },
  },
  activities: {
    gym: {
      happy: 2,
      health: 5,
      hunger: -3,
      travel: 3,
    },
    park: {
      happy: 3,
      health: 1,
      hunger: -2,
      travel: 3,
    },
    party: {
      happy: 5,
      health: -1,
      hunger: -2,
      travel: 3,
    },
  },
  petMethods: {
    updateHunger() {
      if (petEverything.updateEveryTick.levelDefault.hunger > 0) {
        petEverything.updateEveryTick.levelDefault.hunger -= petEverything.updateEveryTick.updateRates.hunger;

        if (petEverything.updateEveryTick.levelDefault.hunger < 0) {
          petEverything.updateEveryTick.levelDefault.hunger = 0;
        }
        petEverything.petMethods.petUpdate();
      }
    },
    updateHealth() {
      if (petEverything.updateEveryTick.levelDefault.health > 0) {
        petEverything.updateEveryTick.levelDefault.health += petEverything.updateEveryTick.updateRates.health;
        if (petEverything.updateEveryTick.levelDefault.health > 100) {
          petEverything.updateEveryTick.levelDefault.health = 100;
        }
        petEverything.petMethods.petUpdate();
      }
    },
    updateHappy() {
      if (petEverything.updateEveryTick.levelDefault.happy > 0) {
        petEverything.updateEveryTick.levelDefault.happy -= petEverything.updateEveryTick.updateRates.happy;
        if (petEverything.updateEveryTick.levelDefault.happy < 0) {
          petEverything.updateEveryTick.levelDefault.happy = 0;
        }
        petEverything.petMethods.petUpdate();
      }
    },
    petUpdate() {
      if (petMood !== "dead") {
        hungerBar.style.width = `${petEverything.updateEveryTick.levelDefault.hunger}%`;
        healthBar.style.width = `${petEverything.updateEveryTick.levelDefault.health}%`;
        happyBar.style.width = `${petEverything.updateEveryTick.levelDefault.happy}%`;

        saladButton.innerText = `Feed Salad: ${petEverything.food.salad.inventory}`;
        paperButton.innerText = `Feed Paper: ${petEverything.food.paper.inventory}`;
        chocoButton.innerText = `Feed Chocolate: ${petEverything.food.chocolate.inventory}`;
        feedButton.innerText = `Feed Pet Food: ${petEverything.food.feed.inventory}`;

        partyButton.innerText = `Go To The Party : ${petEverything.activities.party.travel}`;
        parkButton.innerText = `Go To The Park : ${petEverything.activities.park.travel}`;
        gymButton.innerText = `Go To The Gym : ${petEverything.activities.gym.travel}`;

        if (
          petEverything.updateEveryTick.levelDefault.hunger <= 1 ||
          petEverything.updateEveryTick.levelDefault.health <= 1 ||
          petEverything.updateEveryTick.levelDefault.happy <= 1
        ) {
          petHasDied();
          petMood = "dead";
        } else if (petEverything.updateEveryTick.levelDefault.hunger <= 30 || (petEverything.updateEveryTick.levelDefault.happy <= 30 && petMood !== "sad")) {
          petMood = "sad";
        } else if (petEverything.updateEveryTick.levelDefault.hunger <= 50 || (petEverything.updateEveryTick.levelDefault.happy <= 50 && petMood !== "mid")) {
          petMood = "mid";
        } else if (petEverything.updateEveryTick.levelDefault.hunger <= 90 || (petEverything.updateEveryTick.levelDefault.happy <= 90 && petMood !== "happy")) {
          petMood = "happy";
        } else if (
          petEverything.updateEveryTick.levelDefault.hunger > 90 ||
          (petEverything.updateEveryTick.levelDefault.health >= 50 && petEverything.updateEveryTick.levelDefault.happy > 90 && petMood !== "super")
        ) {
          petMood = "super";
        }
      }
    },
    petAnimate() {
      if (petMood !== "dead") {
        if (petImageNum === 1) {
          petImageNum = 2;
        } else {
          petImageNum = 1;
        }
        petImg.src = `./images/${lsAnimalLow}/${lsAnimalLow}-${petMood}${petImageNum}.png`;
      }
    },
    tempInvFunc() {
      if (petMood !== "dead") {
        petEverything.food.feed.inventory += 2;
        petEverything.food.salad.inventory += 2;
        petEverything.food.paper.inventory += 2;
        petEverything.food.chocolate.inventory += 2;
        petEverything.activities.gym.travel += 2;
        petEverything.activities.park.travel += 2;
        petEverything.activities.party.travel += 2;
      }
    },
  },
};
// Running each function
setInterval(petEverything.petMethods.updateHunger, petEverything.updateEveryTick.tickUpdate.hunger);
setInterval(petEverything.petMethods.updateHealth, petEverything.updateEveryTick.tickUpdate.health);
setInterval(petEverything.petMethods.updateHappy, petEverything.updateEveryTick.tickUpdate.happy);
setInterval(petEverything.petMethods.petAnimate, 500);
setInterval(gotGoldCoin, 5000);
//Food
feedButton.addEventListener("click", () => animalReward(petEverything.food.feed));
chocoButton.addEventListener("click", () => animalReward(petEverything.food.chocolate));
saladButton.addEventListener("click", () => animalReward(petEverything.food.salad));
paperButton.addEventListener("click", () => animalReward(petEverything.food.paper));
//Activities
partyButton.addEventListener("click", () => animalReward(petEverything.activities.party));
parkButton.addEventListener("click", () => animalReward(petEverything.activities.park));
gymButton.addEventListener("click", () => animalReward(petEverything.activities.gym));
// Background Updates
partyButton.addEventListener("click", () => backgroundChanger(petEverything.activities.party));
parkButton.addEventListener("click", () => backgroundChanger(petEverything.activities.park));
gymButton.addEventListener("click", () => backgroundChanger(petEverything.activities.gym));

function backgroundChanger(petEvent) {
  if (petEvent.travel > 0) {
    if (petEvent === petEverything.activities.party) {
      backgroundChange.style.backgroundImage = `url("./images/backgroundlocations/animalparty.jpg")`;
      backgroundChange.style.backgroundRepeat = "none";
      backgroundChange.style.backgroundPosition = "center";
      backgroundChange.style.backgroundSize = "cover";
    } else if (petEvent === petEverything.activities.park) {
      backgroundChange.style.backgroundImage = `url("./images/backgroundlocations/animalpark.jpg")`;
      backgroundChange.style.backgroundRepeat = "none";
      backgroundChange.style.backgroundSize = "cover";
      backgroundChange.style.backgroundPositionY = "-125px";
    } else if (petEvent === petEverything.activities.gym) {
      backgroundChange.style.backgroundImage = `url("./images/backgroundlocations/animalgym.jpg")`;
      backgroundChange.style.backgroundRepeat = "none";
      backgroundChange.style.backgroundPosition = "center";
      backgroundChange.style.backgroundSize = "cover";
    }
  }
}

// Food Function
function animalReward(reward) {
  if (reward.inventory > 0 || reward.travel > 0) {
    petEverything.updateEveryTick.levelDefault.hunger += reward.hunger;
    reward.inventory -= 1;
    reward.travel -= 1;
    if (petEverything.updateEveryTick.levelDefault.hunger > 100) {
      petEverything.updateEveryTick.levelDefault.hunger = 100;
    }
    petEverything.updateEveryTick.levelDefault.happy += reward.happy;
    if (petEverything.updateEveryTick.levelDefault.happy > 100) {
      petEverything.updateEveryTick.levelDefault.happy = 100;
    }
    petEverything.updateEveryTick.levelDefault.health += reward.health;
    if (petEverything.updateEveryTick.levelDefault.health > 100) {
      petEverything.updateEveryTick.levelDefault.health = 100;
    }
  }
  petEverything.petMethods.petUpdate();
}

// Pet dying function
function petHasDied() {
  gameOver.style.display = "flex";
}
function restartGame() {
  location.assign("./index.html");
}

// Gold Coins Function Idea
function gotGoldCoin() {
  let winHeight = window.innerHeight;
  let winWidth = window.innerWidth;

  ranTop = coinRanNum(0, winHeight);
  ranLeft = coinRanNum(0, winWidth);

  let goldCoin = document.createElement("button");
  goldCoin.style.width = "50px";
  goldCoin.style.height = "50px";
  goldCoin.style.position = "absolute";
  goldCoin.style.backgroundColor = "gold";
  goldCoin.style.top = `${ranTop}px`;
  goldCoin.style.left = `${ranLeft}px`;
  goldCoin.style.borderRadius = "25px";
  goldCoin.style.border = "none";
  goldCoin.style.zIndex = "250";
  goldCoin.addEventListener("click", petEverything.petMethods.tempInvFunc);
  goldCoin.addEventListener("click", function () {
    goldCoin.remove();
  });

  const coinID = document.getElementById("coinID");
  document.body.insertBefore(goldCoin, coinID);
}
function coinRanNum(min, max) {
  return Math.random() * (max - min) + min;
}
