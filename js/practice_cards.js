// Element selectors

const rangeCheckboxes = document.querySelectorAll(".options__range input");
const rangeMessage = document.querySelector(".range-message");
const fromButtons = document.querySelectorAll(".options__mode__from input");
const toButtons = document.querySelectorAll(".options__mode__to input");
const modeMessage = document.querySelector(".mode-message");
const game = document.querySelector(".practice__game");
const blurredCue = document.querySelector(".cue");
const gameInput = document.querySelector(".game__input");
const gameMessage = document.querySelector(".game__message");
const gameButton = document.querySelector(".game__button");
const gameExpandButton = document.querySelector(".game-expand__button");
const closeGame = document.querySelector(".close__game");
const logoutButton = document.querySelector(".logout");
const mobileButton = document.querySelector(".mobile-button");

// Global variables/constants

let selectedSuits = ["hearts", "spades", "diamonds", "clubs"];
// array with the card suits selected by the user in the range options
// all selected by default
let modeFrom;
let modeTo;
let customCardArray = {
  hearts: [],
  spades: [],
  diamonds: [],
  clubs: [],
  joker: {},
};
// array filled with 53 objects, 1 for every playing card in a deck, sorted by suit
let rangedCardArray = [];
// array filled with objects of cards, updated according to user range settings
let currentCue;
let currentObject;
// object filled with information about a single playing card, taken from
// "customCardArray" with the use of "currentCue"
// Contains:
//    currentObject['card'],
//    currentObject['association'],
//    currentObject['image']
let gameExpandedShowing = 0;
let mobileMenuShowing = 0;

// Functions

function getCardArray() {
  // Summary: fetch all custom associations from user table

  fetch("php/get-cards.php")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      // put all 53 cards in customCardArray
      // create 4 arrays with cards of matching suit
      for (var x = 0; x < 13; x++) {
        customCardArray["hearts"].push(json[x]);
      }
      for (var x = 13; x < 26; x++) {
        customCardArray["spades"].push(json[x]);
      }
      for (var x = 26; x < 39; x++) {
        customCardArray["diamonds"].push(json[x]);
      }
      for (var x = 39; x < 52; x++) {
        customCardArray["clubs"].push(json[x]);
      }
      customCardArray["joker"] = json[52];

      // initially, add all cards to rangedCardArray
      // user can change this range later
      rangedCardArray = [];
      selectedSuits.forEach((suit) => {
        customCardArray[`${suit}`].forEach((card) => {
          // console.log(card);
          rangedCardArray.push(card);
        });
      });
    });
}

function getRandomInt(min, max) {
  // get random float between min and max, inclusive of both
  let randFloat = Math.random() * (max - min + 1) + min;
  // floor float to int and return
  return Math.floor(randFloat);
}

function setRange() {
  // Summary: update 'ranged' array to user settings

  // checkbox id's have format; "range-suit"
  // we want just what comes after the dash, the selected suit
  let suit = this.id.split("-")[1];

  // see if "all" was clicked
  if (suit === "all") {
    // Check all checkboxes
    rangeCheckboxes.forEach((checkbox) => (checkbox.checked = true));
    // add all card suits to selectedSuits
    selectedSuits = ["hearts", "spades", "diamonds", "clubs"];
    rangedCardArray = [];
    selectedSuits.forEach((suit) => {
      customCardArray[`${suit}`].forEach((card) => {
        rangedCardArray.push(card);
      });
    });
    rangedCardArray.push(customCardArray["joker"]);
    return;
  } else if (this.checked) {
    // specific suit was checked
    // add to selectedSuits array
    selectedSuits.push(suit);
    if (selectedSuits.length == 4) {
      // All suits are checked. Check the "all" checkbox
      rangeCheckboxes.forEach((checkbox) => {
        if (checkbox.id == "range-all") {
          checkbox.checked = true;
        } else {
          return;
        }
      });
    }
  } else {
    // specific suit was unchecked
    // remove the suit from the selectedSuits
    let index = selectedSuits.indexOf(suit);
    selectedSuits.splice(index, 1);
    // make sure "all" is unchecked too
    rangeCheckboxes.forEach((checkbox) => {
      if (checkbox.id == "range-all") {
        checkbox.checked = false;
      } else {
        return;
      }
    });
  }
  rangedCardArray = [];
  selectedSuits.forEach((suit) => {
    customCardArray[`${suit}`].forEach((card) => {
      // console.log(card);
      rangedCardArray.push(card);
    });
  });
  if (rangedCardArray.length > 0 && modeFrom && modeTo) {
    cueNext();
  } else {
    return;
  }
}

function changeFrom() {
  // Summary: change the "from" setting of the game

  // grab all radio inputs from options__mode__to
  const toCard = document.querySelector("#to-card");
  const toAssociation = document.querySelector("#to-association");
  // (re-)enable all radio buttons in options__mode__to
  // and uncheck all
  toButtons.forEach((button) => {
    button.removeAttribute("disabled");
    button.checked = 0;
  });
  modeTo = "";
  // grab "from" selection
  let fromSelection = this.getAttribute("data-selection");
  // set modeFrom to current selection
  modeFrom = fromSelection;
  // disable appropriate radio inputs in options__mode__to list
  switch (modeFrom) {
    case "card":
      // disable "card" option in options__mode__to
      toCard.setAttribute("disabled", "");
      break;
    case "association":
      // disable "association" option in options__mode__to
      toAssociation.setAttribute("disabled", "");
      break;
    case "image":
      break;
    default:
      break;
  }
}

function changeTo() {
  // Summary: change the "to" setting of the game

  // grab "to" selection
  let toSelection = this.getAttribute("data-selection");
  // set modeTo to current selection
  modeTo = toSelection;
  if (rangedCardArray.length > 0 && modeFrom && modeTo) {
    cueNext();
  } else {
    return;
  }
}

function cueNext() {
  // Summary: serve user next cue as per selected options

  // If user got here using the "next" button, reset everything
  if (gameButton.innerHTML === "next") {
    gameButton.innerHTML = "show";
    gameMessage.classList.add("blurry");
    gameButton.removeEventListener("click", cueNext);
    gameButton.addEventListener("click", showAnswer);
  }
  gameInput.value = "";

  // get new random cue within custom bounds
  currentCue = getRandomInt(0, rangedCardArray.length);
  // grab right card object with all custom associations included
  currentObject = rangedCardArray[currentCue];
  // serve cue
  switch (modeFrom) {
    case "card":
      blurredCue.innerHTML = currentObject.card;
      break;
    case "association":
      if (!currentObject.association) {
        blurredCue.innerHTML = `<span class='no-content'>no association set for ${currentObject.card}</span>`;
      } else {
        blurredCue.innerHTML = currentObject.association;
      }
      break;
    case "image":
      if (currentObject.image) {
        blurredCue.innerHTML = ` <img src="${currentObject.image}" alt="image cue ">`;
      } else {
        if (window.innerWidth <= 800) {
          blurredCue.innerHTML = `No associated image for <span class='bold'>${currentObject.card}.</span><br>See relevant table to upload images.
                `;
        } else if (window.innerWidth > 800) {
          blurredCue.innerHTML = `<p class='animation-label'>
              No associated image for <span class='bold'> ${currentObject.card}</span><br>
                <span class='animation-explanation'> Drag and drop an image onto a row in your <a href="cards.php">table</a> to upload it and associate it with the corresponding card </span>
              </p>
              <img id='animation' src = 'images/resources/drag-and-drop.gif' alt = ''>`;
        }
      }
      break;
    default:
      break;
  }
  switch (modeTo) {
    case "card":
      gameMessage.innerHTML = `<span class="cue__title">Card:</span><br><p class="answer">${currentObject.card}</p>`;
      break;
    case "association":
      if (currentObject.association) {
        gameMessage.innerHTML = `<span class="cue__title">Association:</span><br><p class="answer">${currentObject.association}</p>`;
      } else {
        gameMessage.innerHTML = `<span class="cue__title">Association:</span><br><p class="answer">No association set for nr ${currentCue}</p>`;
      }
      break;
  }
}

function checkAnswer() {
  // Summary: check if user answer matches correct answer to cue

  answer = gameInput.value;

  switch (modeTo) {
    case "card":
      if (currentObject.card === answer) {
        // answer correct
        gameInput.value = "";
        cueNext();
      }
      break;
    case "association":
      if (currentObject.association.toLowerCase() === answer.toLowerCase()) {
        // answer correct
        gameInput.value = "";
        cueNext();
      }
      break;
  }
}

function showAnswer() {
  // Summary: display the answer to the user

  // First, check if all settings are set. If not, show warning and exit.
  if (!(rangedCardArray.length > 0 && modeFrom && modeTo)) {
    if (!rangedCardArray.length > 0) {
      if (rangeMessage.innerHTML === "Set range") {
        window.scrollTo(0, 0);
        rangeMessage.style.animation = "bulge 500ms infinite";
        setTimeout(() => {
          rangeMessage.style.animation = "";
        }, 1000);
      } else {
        window.scrollTo(0, 0);
        rangeMessage.innerHTML = "Set range";
        rangeMessage.style.animation = "bulge 500ms infinite";
        setTimeout(() => {
          rangeMessage.style.animation = "";
        }, 1000);
      }
    } else {
      rangeMessage.innerHTML = "";
    }
    if (!(modeFrom && modeTo)) {
      if (modeMessage.innerHTML === "Please select practice mode") {
        window.scrollTo(0, 0);
        modeMessage.style.animation = "bulge 500ms infinite";
        setTimeout(() => {
          modeMessage.style.animation = "";
        }, 1000);
      } else {
        window.scrollTo(0, 0);
        modeMessage.innerHTML = "Please select practice mode";
        rangeMessage.style.animation = "bulge 500ms infinite";
        setTimeout(() => {
          rangeMessage.style.animation = "";
        }, 1000);
      }
    } else {
      modeMessage.innerHTML = "";
    }
    return;
  } else {
    rangeMessage.innerHTML = "";
    modeMessage.innerHTML = "";
  }

  if (modeFrom && modeTo) {
    gameButton.innerHTML = "next";
    gameButton.removeEventListener("click", showAnswer);
    gameButton.addEventListener("click", cueNext);
    gameMessage.classList.remove("blurry");
  }
}

function logout() {
  // Summary: logout the user

  let options = {
    method: "POST",
  };
  fetch("php/logout.php", options)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      window.location.href = "index.php";
    });
}

function minimizeGame() {
  game.classList.remove("practice__game--active");
  gameExpandedShowing = 0;
  document.removeEventListener("click", toggleGameDisplay);
  document.removeEventListener("keyup", toggleGameDisplay);
  document.querySelector(".mobile-button").classList.remove("h-hide");
}

function toggleGameDisplay(e) {
  // Summary: Toggle display type of the game (big overlay vs inline)

  // First, check if game is active
  if (gameExpandedShowing) {
    // game is active
    if (this.classList && this.classList.contains("close__game")) {
      // function was called by close button. Close game
      minimizeGame();
    } else if (e.key) {
      // if called by keypress, check if called by escape
      if (e.key === "Escape") {
        // if called by escape, shrink expanded game
        minimizeGame();
      } else {
        return;
      }
    } else {
      // Function is called by click. Check if user clicked outside or inside of expanded game area
      let path = e.composedPath();
      let flag = 0;
      path.forEach((path) => {
        if (path.classList) {
          if (path.classList.contains("practice__game")) {
            flag++;
          }
        }
      });
      if (flag === 0) {
        // click was outside of expanded game area. Shrink game.
        minimizeGame();
      } else {
        // click was inside game area. Do nothing.
        return;
      }
    }
  } else {
    // game not active
    // check if all settings are set. If not, show warning and exit.
    if (!(rangedCardArray.length > 0 && modeFrom && modeTo)) {
      if (!rangedCardArray.length > 0) {
        if (rangeMessage.innerHTML === "Set range") {
          window.scrollTo(0, 0);
          rangeMessage.style.animation = "bulge 500ms infinite";
          setTimeout(() => {
            rangeMessage.style.animation = "";
          }, 1000);
        } else {
          window.scrollTo(0, 0);
          rangeMessage.innerHTML = "Set range";
          rangeMessage.style.animation = "bulge 500ms infinite";
          setTimeout(() => {
            rangeMessage.style.animation = "";
          }, 1000);
        }
      } else {
        rangeMessage.innerHTML = "";
      }
      if (!(modeFrom && modeTo)) {
        if (modeMessage.innerHTML === "Please select practice mode") {
          window.scrollTo(0, 0);
          modeMessage.style.animation = "bulge 500ms infinite";
          setTimeout(() => {
            modeMessage.style.animation = "";
          }, 1000);
        } else {
          window.scrollTo(0, 0);
          modeMessage.innerHTML = "Please select practice mode";
          modeMessage.style.animation = "bulge 500ms infinite";
          setTimeout(() => {
            modeMessage.style.animation = "";
          }, 1000);
        }
      } else {
        modeMessage.innerHTML = "";
      }
      return;
    } else {
      // all settings check out
      // clear warning messages
      rangeMessage.innerHTML = "";
      modeMessage.innerHTML = "";
      // expand the game
      game.classList.add("practice__game--active");
      document.querySelector(".mobile-button").classList.add("h-hide");
      gameExpandedShowing = 1;
      setTimeout(() => {
        document.addEventListener("click", toggleGameDisplay);
        document.addEventListener("keyup", toggleGameDisplay);
      }, 250);
    }
  }
}

function toggleMobileMenu(e) {
  // Summary: toggles the mobile menu and burger button
  //          If user taps anywhere except for on an <a> element, the menu
  //          is closed. If the user taps on an <a> element, we return
  //          to cancel any animations, and just go to the selected page.

  // Toggle burger button state
  mobileButton.classList.toggle("active");

  if (mobileMenuShowing == 0) {
    // show menu
    document.querySelector("header").classList.remove("mobile-hide");
    // hide main
    document.querySelector("main").classList.add("hide");
    // set fleg
    mobileMenuShowing = 1;
    // add click eventlistener to the page
    // Small delay is needed, otherwise it fires this function again
    setTimeout(() => {
      document.addEventListener("click", toggleMobileMenu);
    }, 100);
  } else {
    // check if user tapped a link, or anywhere else
    if (e.target.tagName === "A") {
      // user tapped link, page will redirect. Cancel animations.
      return;
    } else {
      // user tapped outside of the menu
      // hide the menu
      document.querySelector("header").classList.add("mobile-hide");
      // show main
      document.querySelector("main").classList.remove("hide");
      // unset flag
      mobileMenuShowing = 0;
      // remove click eventlistener from page
      document.removeEventListener("click", toggleMobileMenu);
    }
  }
}

// Event Listeners

rangeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", setRange);
});
fromButtons.forEach((button) => button.addEventListener("click", changeFrom));
toButtons.forEach((button) => button.addEventListener("click", changeTo));
gameInput.addEventListener("keyup", checkAnswer);
gameButton.addEventListener("click", showAnswer);
gameExpandButton.addEventListener("click", toggleGameDisplay);
closeGame.addEventListener("click", toggleGameDisplay);
if (logoutButton) {
  logoutButton.addEventListener("click", logout);
}
if (mobileButton) {
  mobileButton.addEventListener("click", toggleMobileMenu);
}

// Misc

getCardArray();
