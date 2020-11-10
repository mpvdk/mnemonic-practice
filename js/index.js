// element selectors

// all front page cards
const fpCards = document.querySelectorAll(".fp-card");
// individual cards
const login = document.querySelector(".login");
const guest = document.querySelector("#guest");
const register = document.querySelector(".register");
// button to go back
const backButton = document.querySelector(".back-button");
// guest "continue" button
const guestButton = document.querySelector(".guest-button");
// login
// login - form
const loginForm = document.querySelector(".login__form");
// login - inputs
const idLogin = document.querySelector(".js-id-login");
const pwdLogin = document.querySelector(".js-pwd-login");
// login - message
const loginMessage = document.querySelector(".login__message");
// forgot pw
const forgotPassword = document.querySelector(".forgot-password");
const about = document.querySelector(".about");
// register form
const registerInputs = document.querySelectorAll(".register__form input");
// asterisk explainer
const asteriskExplainer = document.querySelector(".asterisk-explainer");

// global variables and constants

// flags
let pwResetMode = 0;
let aboutShowing = 0;

// check querystrings

const qString = new URLSearchParams(window.location.search);
if (qString.has("login")) {
  cardSelect("login");
} else if (qString.has("register")) {
  cardSelect("register");
} else if (qString.has("guest")) {
  cardSelect("guest");
}

// functions

function cardSelect(card) {
  // Summary: expand selected card, hide other 2.

  // Hide asterisk explainer and iff viewport < 800px, hide "about"
  // This is for considerations about page layout
  asteriskExplainer.classList.add("h-hide");
  if (window.innerWidth <= 800) {
    about.classList.add("h-hide");
  }

  let currentCard;
  // grap id of selected card
  if (card == "login" || card == "register" || card == "guest") {
    currentCard = card;
  } else if (this.id) {
    currentCard = this.id;
  } else {
    return;
  }

  // set selected card to active, all others to inactive
  fpCards.forEach((card) => {
    let content = document.querySelector(`#${card.id} .content`);
    if (card.id === currentCard) {
      card.classList.add("fp-card--active");
      setTimeout(() => {
        content.classList.remove("h-hide2");
      }, 200);
    } else {
      card.classList.add("fp-card--inactive");
    }
  });

  // show back-button
  setTimeout(() => {
    backButton.classList.remove("h-hide");
    let el = document.querySelector(`#${currentCard}`);
    let height = getComputedStyle(el).height;
    let heightInteger = parseInt(height.split(".")[0]);
    let newNumber = heightInteger + 40;
    // set "top" to 'absolutely' postioned button
    backButton.style.top = `${newNumber}px`;
  }, 300);
}

function goBack() {
  // Summary: 1) go back to landing page; display all fpcards, and
  //       f   2) if login page was in pw reset mode, change it back

  // 1) Go back to landing page with all fp-cards shown
  fpCards.forEach((card) => {
    let content = document.querySelector(`#${card.id} .content`);
    content.classList.add("h-hide2");
    card.classList.remove("fp-card--inactive");
    card.classList.remove("fp-card--active");
    card.classList.remove("smaller");
  });

  // show asterisk explainer
  asteriskExplainer.classList.remove("h-hide");
  // If hidden, show "about" button
  if (about.classList.contains("h-hide")) {
    about.classList.remove("h-hide");
  }

  // hide back-button
  backButton.style.top = "0";
  backButton.classList.add("h-hide");

  // 2) Check if in pw-reset mode
  if (pwResetMode === 1) {
    // login form is in pw reset mode. Change it back to login mode
    // Change form heading
    const heading = document.querySelector("#login h1");
    heading.innerHTML = "login";
    // Show password input field and label
    const passwordInputWrapper = document.querySelector(
      ".input-wrapper-password"
    );
    passwordInputWrapper.classList.remove("h-hide");
    // Change button text
    const button = document.querySelector("#login button[type=submit]");
    button.innerHTML = "login";
    // Display the "forgot password" link
    forgotPassword.classList.remove("h-hide");
    // Clear error message
    loginMessage.innerHTML = "";
    // Change form submit action back to login
    loginForm.removeEventListener("submit", sendRecoveryMail);
    loginForm.addEventListener("submit", attemptLogin);
  }
}

function checkForContent() {
  // Summary: handle animated login input label/placeholder

  if (this.value === "") {
    // input empty, reset label/placeholder
    this.classList.remove("hasText");
  } else {
    // input has text, keep label/placeholder transformed
    this.classList.add("hasText");
  }
}

function attemptLogin(e) {
  // Summary: attempt to login user with submitted information

  e.preventDefault();

  let loginFormData = new FormData(this);
  loginFormData.append("login-submit", 1);

  let options = {
    method: "POST",
    body: loginFormData,
  };

  fetch("php/login.php", options)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      if (text === "no user") {
        // username or email doesn't exist
        loginMessage.innerHTML = "Username or email not found";
      } else if (text === "invalid") {
        // invalid email or pwd
        loginMessage.innerHTML = "Invalid password";
      } else if ("succes") {
        // login succesfull, session started
        window.location.href = "user_home.php";
        // console.log(text);
      } else {
        console.log(text);
      }
    });
}

function resetPassword(e) {
  // Summary: 1) change login form layout, and
  //          2) change action on form submit.

  e.preventDefault();
  pwResetMode = 1;

  // 1) Change login form layout to pw reset layout
  // Change form heading
  const heading = document.querySelector("#login h1");
  heading.innerHTML = "forgot password";
  // Hide password input field and label
  const passwordInputWrapper = document.querySelector(
    ".input-wrapper-password"
  );
  passwordInputWrapper.classList.add("h-hide");
  // change button text
  const button = document.querySelector("#login button[type=submit]");
  button.innerHTML = "send email";
  // Hide the "forgot password" link
  forgotPassword.classList.add("h-hide");
  // Clear login message
  loginMessage.innerHTML = "";

  // 2) Change action on form submit to email recovery
  loginForm.removeEventListener("submit", attemptLogin);
  loginForm.addEventListener("submit", sendRecoveryMail);
}

function sendRecoveryMail(e) {
  // Summary: send submitted data to php script to send user recovery e-mail,
  //          and check server response to display appropriate message to user

  e.preventDefault();

  let recoveryFormdata = new FormData(this);
  recoveryFormdata.append("recover-submit", 1);
  let options = {
    method: "POST",
    body: recoveryFormdata,
  };

  fetch("php/pwrecover.php", options)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      if (text === "no user") {
        loginMessage.innerHTML = "user not found";
      } else if (text === "not sent") {
        loginMessage.innerHTML =
          "Something went wrong, <br> try again later. <br> If error persists, contact me.";
      } else if (text === "sent") {
        // Hide username/email input field and label
        const idInputWrapper = document.querySelector(".input-wrapper-id");
        idInputWrapper.classList.add("h-hide");
        // hide buttons
        const button = document.querySelector("#login button[type=submit]");
        button.classList.add("h-hide");
        backButton.classList.add("h-hide");
        // Change message
        loginMessage.innerHTML =
          "We've sent you an email <br> with further instructions.";
        loginMessage.classList.add("mail-sent");
      } else {
        // Something went wrong
        loginMessage.innerHTML = "unknown error";
        console.log(text);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function toggleAbout(e) {
  const aboutExp = document.querySelector(".about-expanded");
  if (aboutShowing == 0) {
    // aboutExp.classList.toggle("h-hide");
    aboutExp.classList.remove("h-hide");
    fpCards.forEach((card) => card.classList.add("invisible"));
    if (window.innerWidth < 800) {
      about.classList.add("h-hide");
    }
    asteriskExplainer.classList.add("h-hide");
    aboutShowing = 1;
    setTimeout(() => {
      document.addEventListener("click", toggleAbout);
    }, 250);
  } else {
    if (!e.target.classList.contains("about-expanded")) {
      // aboutExp.classList.add("h-hide");
      aboutExp.classList.add("h-hide");
      fpCards.forEach((card) => card.classList.remove("invisible"));
      if (about.classList.contains("h-hide")) {
        about.classList.remove("h-hide");
      }
      asteriskExplainer.classList.remove("h-hide");
      aboutShowing = 0;
      document.removeEventListener("click", toggleAbout);
    } else {
      return;
    }
  }
}

// event listeners

fpCards.forEach((card) => {
  card.addEventListener("click", cardSelect);
});
if (backButton) {
  backButton.addEventListener("click", goBack);
}

if (loginForm) {
  loginForm.addEventListener("submit", attemptLogin);
  idLogin.addEventListener("blur", checkForContent);
  pwdLogin.addEventListener("blur", checkForContent);
  forgotPassword.addEventListener("click", resetPassword);
}
if (registerInputs) {
  registerInputs.forEach((input) =>
    input.addEventListener("blur", checkForContent)
  );
}
if (forgotPassword) {
  forgotPassword.addEventListener("click", resetPassword);
}
if (about) {
  about.addEventListener("click", toggleAbout);
}
if (guestButton) {
  guestButton.addEventListener("click", () => {
    window.location.href = "user_home.php?newguest";
  });
}
