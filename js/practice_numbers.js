// Javascript for page(s):
//    - practice.php

// Element selectors

const rangeMin = document.querySelector(".min");
const rangeMax = document.querySelector(".max");
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

let min = 0;
let max = 99;
let modeFrom;
let modeTo;
let customNumberArray;
// array filled with objects 100 objects for nrs 00 - 99
let currentCue;
let currentObject;
// object filled with information about a single number, taken from
// "customnumberArray" with the use of "currentCue"
// Contains:
//    currentObject['number'],
//    currentObject['letters'],
//    currentObject['person']
//    currentObject['action'],
//    currentObject['object'],
//    currentObject['image']
let aboutShowing = 0;
let gameExpandedShowing = 0;
let mobileMenuShowing = 0;

// Functions

function getNumberArray() {
  // Summary: fetch all custom associations from user table

  fetch("php/get-numbers.php")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      customNumberArray = json;
      customNumberArray.forEach((el) => {
        if (el.number < 10) {
          // add preceding 0
          let nr = `0${el.number}`;
          el.number = nr;
        }
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
  // Summary: change the range to user selection

  min = rangeMin.valueAsNumber;
  if (min < 0) {
    min = 00;
    rangeMin.value = "00";
  }
  max = rangeMax.valueAsNumber;
  if (max > 99) {
    max = 99;
    rangeMax.value = 99;
  }
  cueNext();
}

function changeFrom() {
  // Summary: change the "from" setting of the game

  // grab all radio inputs from options__mode__to
  const toNumber = document.querySelector("#to-number");
  const toLetters = document.querySelector("#to-letters");
  const toName = document.querySelector("#to-name");
  const toAction = document.querySelector("#to-action");
  const toObject = document.querySelector("#to-object");
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
    case "number":
      // disable "number" option in options__mode__to
      toNumber.setAttribute("disabled", "");
      break;
    case "letters":
      // disable "letters" option in options__mode__to
      toLetters.setAttribute("disabled", "");
      break;
    case "name":
      // disable "name" and "letters" option in options__mode__to
      toName.setAttribute("disabled", "");
      toLetters.setAttribute("disabled", "");
      break;
    case "action":
      // disable "action" option in options__mode__to
      toAction.setAttribute("disabled", "");
      break;
    case "object":
      // disable "object" option in options__mode__to
      toObject.setAttribute("disabled", "");
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
  cueNext();
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
  currentCue = getRandomInt(min, max);
  // add preceding 0 if necessary for output to user
  if (currentCue < 10) {
    currentCue2 = `0${currentCue}`;
  } else {
    currentCue2 = currentCue;
  }
  // grab right number object with all custom associations included
  currentObject = customNumberArray[currentCue];
  // serve cue
  switch (modeFrom) {
    case "number":
      blurredCue.innerHTML = currentObject.number;
      break;
    case "letters":
      if (!currentObject.letters) {
        blurredCue.innerHTML = `<span class='no-content'>no letters set for nr ${currentCue2}</span>`;
      } else {
        blurredCue.innerHTML = currentObject.letters;
      }
      break;
    case "name":
      if (!currentObject.person) {
        blurredCue.innerHTML = `<span class='no-content'>no name set for nr ${currentCue2}</span>`;
      } else {
        blurredCue.innerHTML = currentObject.person;
      }
      break;
    case "action":
      if (!currentObject.action) {
        blurredCue.innerHTML = `<span class='no-content'>no action set for nr ${currentCue2}</span>`;
      } else {
        blurredCue.innerHTML = currentObject.action;
      }
      break;
    case "object":
      if (!currentObject.object) {
        blurredCue.innerHTML = `<span class='no-content'>no object set for nr ${currentCue2}</span>`;
      } else {
        blurredCue.innerHTML = currentObject.object;
      }
      break;
    case "image":
      if (currentObject.image) {
        blurredCue.innerHTML = ` <img src="${currentObject.image}" alt="image cue ">`;
      } else {
        if (window.innerWidth <= 800) {
          blurredCue.innerHTML = `No associated image for <span class='bold'>nr ${currentCue2}.</span><br>See relevant table to upload images.
                `;
        } else if (window.innerWidth > 800) {
          blurredCue.innerHTML = `<p class='animation-label'>
              No associated image for <span class='bold'>nr ${currentCue2}</span><br>
                <span class='animation-explanation'> Drag and drop an image onto a row in your <a href="hundred.php">00 - 99 table</a> to upload it and associate it with the corresponding number </span>
              </p>
              <img id='animation' src = 'images/resources/drag-and-drop.gif' alt = ''>`;
        }
      }
      break;
    default:
      break;
  }
  switch (modeTo) {
    case "number":
      gameMessage.innerHTML = `<span class="cue__title">Number:</span><br><p class="answer">${currentObject.number}</p>`;
      break;
    case "letters":
      if (currentObject.letters) {
        gameMessage.innerHTML = `<span class="cue__title">Letters:</span><br><p class="answer">${currentObject.letters}</p>`;
      } else {
        gameMessage.innerHTML = `<span class="cue__title">Letters:</span><br><p class="answer">No letters set for nr ${currentCue2}</p>`;
      }
      break;
    case "name":
      if (currentObject.person) {
        gameMessage.innerHTML = `<span class="cue__title">Person:</span><br><p class="answer">${currentObject.person}</p>`;
      } else {
        gameMessage.innerHTML = `<span class="cue__title">Person:</span><br><p class="answer">No person set for nr ${currentCue2}</p>`;
      }
      break;
    case "action":
      if (currentObject.action) {
        gameMessage.innerHTML = `<span class="cue__title">Action:</span><br><p class="answer">${currentObject.action}</p>`;
      } else {
        gameMessage.innerHTML = `<span class="cue__title">Action:</span><br><p class="answer">No action set for nr ${currentCue2}</p>`;
      }
      break;
    case "object":
      if (currentObject.object) {
        gameMessage.innerHTML = `<span class="cue__title">Object:</span><br><p class="answer">${currentObject.object}`;
      } else {
        gameMessage.innerHTML = `<span class="cue__title">Object:</span><br><p class="answer">No object set for nr ${currentCue2}`;
      }
      break;
  }
}

function checkAnswer() {
  // Summary: check if user answer matches correct answer to cue

  answer = gameInput.value;

  switch (modeTo) {
    case "number":
      if (currentObject.number === answer) {
        // answer correct
        gameInput.value = "";
        cueNext();
      }
      break;
    case "letters":
      if (currentObject.letters.toLowerCase() === answer.toLowerCase()) {
        // answer correct
        gameInput.value = "";
        cueNext();
      }
      break;
    case "name":
      if (currentObject.person.toLowerCase() === answer.toLowerCase()) {
        // answer correct
        gameInput.value = "";
        cueNext();
      }
      break;
    case "action":
      if (currentObject.action.toLowerCase() === answer.toLowerCase()) {
        // answer correct
        gameInput.value = "";
        cueNext();
      }
      break;
    case "object":
      if (currentObject.object.toLowerCase() === answer.toLowerCase()) {
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
  if (!(min >= 0 && max <= 99 && min < max && modeFrom && modeTo)) {
    if (!(min >= 0 && max <= 99)) {
      if (rangeMessage.innerHTML === "Set range from 00 - 99.") {
        window.scrollTo(0, 0);
        rangeMessage.style.animation = "bulge 500ms infinite";
        setTimeout(() => {
          rangeMessage.style.animation = "";
        }, 1000);
      } else {
        window.scrollTo(0, 0);
        rangeMessage.innerHTML = "Set range from 00 - 99.";
        rangeMessage.style.animation = "bulge 500ms infinite";
        setTimeout(() => {
          rangeMessage.style.animation = "";
        }, 1000);
      }
    } else if (min > max) {
      if (rangeMessage.innerHTML === "Min must be lower than max.") {
        window.scrollTo(0, 0);
        rangeMessage.style.animation = "bulge 500ms infinite";
        setTimeout(() => {
          rangeMessage.style.animation = "";
        }, 1000);
      } else {
        window.scrollTo(0, 0);
        rangeMessage.innerHTML = "Min must be lower than max.";
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
    if (!(min >= 0 && max <= 99 && min < max && modeFrom && modeTo)) {
      if (!(min >= 0 && max <= 99)) {
        if (rangeMessage.innerHTML === "Set range from 00 - 99.") {
          window.scrollTo(0, 0);
          rangeMessage.style.animation = "bulge 500ms infinite";
          setTimeout(() => {
            rangeMessage.style.animation = "";
          }, 1000);
        } else {
          window.scrollTo(0, 0);
          rangeMessage.innerHTML = "Set range from 00 - 99.";
        }
      } else if (min > max) {
        if (rangeMessage.innerHTML === "Min must be lower than max.") {
          window.scrollTo(0, 0);
          rangeMessage.style.animation = "bulge 500ms infinite";
          setTimeout(() => {
            rangeMessage.style.animation = "";
          }, 1000);
        } else {
          window.scrollTo(0, 0);
          rangeMessage.innerHTML = "Min must be lower than max.";
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

rangeMin.addEventListener("blur", setRange);
rangeMax.addEventListener("blur", setRange);
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

getNumberArray();
