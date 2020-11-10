// Selectors

const registerForm = document.querySelector(".register__form");
const usernameRegister = document.querySelector(".username__input");
const mailRegister = document.querySelector(".email__input");
const pwdRegister = document.querySelector(".pwd__input");
const pwdRepeatRegister = document.querySelector(".pwd-repeat__input");

// messages
const usernameMessage = document.querySelector(
  `.js-input-wrapper-username .form-message`
);
const mailMessage = document.querySelector(
  `.js-input-wrapper-email .form-message`
);
const registerMessage = document.querySelector(".form-message.general-message");
// new pw form
const resetForm = document.querySelector(".pwreset__form");
// form input wrappers
const mailInputWrapper = document.querySelector(".js-input-wrapper-email");
const usernameInputWrapper = document.querySelector(
  ".js-input-wrapper-username"
);
const pwdInputWrapper = document.querySelector(".js-input-wrapper-pwd");
const pwdRepeatInputWrapper = document.querySelector(
  ".js-input-wrapper-pwd-repeat"
);
const message = document.querySelector(".form-message-general");
const succesMessage = document.querySelector(".reset-succes-message");

// home_user edit details
const userEditButons = document.querySelectorAll(".user-home-edit");
const cancelUserEditButtons = document.querySelectorAll(".cancel-user-edit");
const homeUsernameInput = document.querySelector("#home-username");
const homeEmailInput = document.querySelector("#home-email");
const homeNewPwdInput = document.querySelector("#user-home-new-pwd");
const homeNewPwdRepeatInput = document.querySelector(
  "#user-home-new-pwd-repeat"
);

// vars
let usernameBackup;
let emailBackup;

// form validity flags
let usernameValid;
let mailValid;
let pwdValid;
let pwdRepeatValid;

// error messages
let usernameInvalidMessage =
  "<ul><li>3 - 20 characters</li><li>a-z, A-Z</li><li>0 - 9</li><li>'-' and '_'</li></ul>";
let usernameTakenMessage = "Username is taken";
let mailInvalidMessage = "Invalid email address";
let mailTakenMessage = "An account with this email address already exists";

// regular expressions
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegEx = /^[A-Za-z0-9_-]{3,20}$/;

// Functions

// Form validation functions

function usernameValidate() {
  // Summary: client-side username validation

  const inputWrapper = document.querySelector(".js-input-wrapper-username");

  let inputValue = usernameRegister.value;
  let usernameValidity = usernameRegEx.test(inputValue);
  if (usernameValidity) {
    // username valid
    inputWrapper.classList.remove("isInvalid");
    inputWrapper.classList.add("isValid");
    // set flag
    usernameValid = 1;
  } else {
    // username invalid
    inputWrapper.classList.remove("isValid");
    inputWrapper.classList.add("isInvalid");
    usernameMessage.innerHTML = usernameInvalidMessage;
    // clear flag
    usernameValid = 0;
  }
  if (inputValue === "") {
    // input empty, reset label/placeholder
    usernameRegister.classList.remove("hasText");
    // remove any indication of validity
    inputWrapper.classList.remove("isValid");
    inputWrapper.classList.remove("isInvalid");
  } else {
    // input has text, keep label/placeholder transformed
    usernameRegister.classList.add("hasText");
  }
}

function mailValidate() {
  // Summary: client-side email validation

  const inputWrapper = document.querySelector(".js-input-wrapper-email");
  let inputValue = mailRegister.value;
  let mailValidity = emailRegEx.test(inputValue);

  if (mailValidity) {
    // email valid
    inputWrapper.classList.remove("isInvalid");
    inputWrapper.classList.add("isValid");
    // set flag
    mailValid = 1;
  } else {
    // email invalid
    inputWrapper.classList.remove("isValid");
    inputWrapper.classList.add("isInvalid");
    mailMessage.innerHTML = mailInvalidMessage;
    // clear flag
    mailValid = 0;
  }
  if (inputValue === "") {
    // input empty, reset label/placeholder
    mailRegister.classList.remove("hasText");
    // remove any indication of validity
    inputWrapper.classList.remove("isValid");
    inputWrapper.classList.remove("isInvalid");
  } else {
    // input has text, keep label/placeholder transformed
    mailRegister.classList.add("hasText");
  }
}

function pwdValidate() {
  // Summary: client-side password validation

  const inputWrapper = document.querySelector(".js-input-wrapper-pwd");
  let inputValue = pwdRegister.value;
  let pwdValidity = inputValue.length >= 8;

  if (pwdValidity) {
    // pwd valid
    inputWrapper.classList.remove("isInvalid");
    inputWrapper.classList.add("isValid");
    // set flag
    pwdValid = 1;
  } else {
    // pwd invalid
    inputWrapper.classList.remove("isValid");
    inputWrapper.classList.add("isInvalid");
    // clear flag
    pwdValid = 0;
  }
  if (inputValue === "") {
    // input empty, reset label/placeholder
    pwdRegister.classList.remove("hasText");
    // remove any indication of validity
    inputWrapper.classList.remove("isValid");
    inputWrapper.classList.remove("isInvalid");
  } else {
    // input has text, keep label/placeholder transformed
    pwdRegister.classList.add("hasText");
  }
}

function pwdMatch() {
  // Summary: check if "password" input and "repeat password" inputs match

  const inputWrapper = document.querySelector(".js-input-wrapper-pwd-repeat");
  let pwdValue = pwdRegister.value;
  let pwdRepeatValue = pwdRepeatRegister.value;

  if (pwdValue === pwdRepeatValue) {
    // passwords match
    inputWrapper.classList.remove("isInvalid");
    inputWrapper.classList.add("isValid");
    // set flag
    pwdRepeatValid = 1;
  } else {
    // passwords don't match
    inputWrapper.classList.remove("isValid");
    inputWrapper.classList.add("isInvalid");
    // clear flag
    pwdRepeatValid = 0;
  }
  if (pwdRepeatValue === "") {
    // input empty, reset label/placeholder
    pwdRepeatRegister.classList.remove("hasText");
    // remove any indication of validity
    inputWrapper.classList.remove("isValid");
    inputWrapper.classList.remove("isInvalid");
  } else {
    // input has text, keep label/placeholder transformed
    pwdRepeatRegister.classList.add("hasText");
  }
}

// Username, e-mail and pwd change in user_home.php
function userEdit(e) {
  e.preventDefault();

  let id = this.parentElement.parentElement.id;
  let targetInput = document.querySelector(`#${id} input`);
  let userInput = targetInput.value;

  if (this.innerHTML === "edit") {
    // change to edit mode
    if (id === "username-edit") {
      usernameBackup = targetInput.value;
    } else if (id === "email-edit") {
      emailBackup = targetInput.value;
    }
    targetInput.removeAttribute("disabled");
    this.innerHTML = "save";
  } else if (this.innerHTML === "save") {
    if (id === "username-edit") {
      mailValid = 1;
    } else if (id === "email-edit") {
      usernameValid = 1;
    }
    if (mailValid && usernameValid) {
      // save changes
      let formData = new FormData();
      formData.append("userInput", userInput);
      formData.append("field", id);

      let options = {
        method: "POST",
        body: formData,
      };

      fetch("php/user-details-update.php", options)
        .then((res) => {
          return res.text();
        })
        .then((text) => {
          if (text === "succes") {
            location.reload();
          } else if (text == "taken") {
            let message = document.querySelector(`#${id} .user-home-message`);
            message.innerHTML = "already taken";
            message.classList.remove("h-hide");
            let inputWrapper = this.parentElement.parentElement;
            inputWrapper.classList.remove("isValid");
            inputWrapper.classList.add("isInvalid");
          }
        });
    } else {
      // input is invalid
    }
  }
}

function cancelUserEdit(e) {
  e.preventDefault();
  let id = this.parentElement.parentElement.id;
  let targetInput = document.querySelector(`#${id} input`);
  let saveButton = document.querySelector(`#${id} .user-home-edit`);
  if (id === "username-edit") {
    targetInput.value = usernameBackup;
  } else if (id === "email-edit") {
    targetInput.value = emailBackup;
  }
  targetInput.setAttribute("disabled", "disabled");
  // remove validity checks
  this.parentElement.classList.remove("isValid");
  this.parentElement.classList.remove("isInvalid");
  // clear and hide messages
  let messages = document.querySelectorAll(".form-message");
  messages.forEach((message) => {
    message.innerHTML = "";
  });
  // Change text in button back to "edit"
  saveButton.innerHTML = "edit";
}

function userSetNewPassword(e) {
  if (e.type === "focus") {
    homeNewPwdRepeatInput.parentElement.classList.remove("fold-away");
  } else if (e.type === "blur") {
    if (this.value === "") {
      homeNewPwdRepeatInput.value = "";
      homeNewPwdRepeatInput.parentElement.classList.add("fold-away");
    }
  }
}

// Actual registration

function attemptRegistration(e) {
  // Summary: attempt to register user with submitted information

  e.preventDefault();

  if (this.id === "guest-register") {
    // Guest is registering. We need to copy tables from SESSION to database
  }

  if (!(usernameValid && mailValid && pwdValid && pwdRepeatValid)) {
    // there are empty fields
    registerMessage.innerHTML = "Please fill out all forms correctly";
  } else {
    // put inputs into FormData
    let registerFormData = new FormData(this);
    // append submit input for PHP conditional
    registerFormData.append("register-submit", 1);

    let options = {
      method: "POST",
      body: registerFormData,
    };

    // Begin async registration
    fetch("php/registration.php", options)
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        // Server-side error handling. 10 cases:
        // 1.  There are empty fields
        // 2.  The email address is invalid
        // 3.  The username is invalid
        // 4.  The password is invalid
        // 5.  Password and password-repeat don't match
        // 6.  Both username and mail are taken
        // 7.  Only username is taken
        // 8.  Only email address is taken
        // 9.  All form inputs are fine, but there is an sql error
        // 10. No error: registration succesfull
        switch (text) {
          case "empty fields":
            // there are empty fields
            registerMessage.innerHTML = "Please fill out all forms";
            break;

          case "invalid mail":
            // email address is invalid
            mailInputWrapper.classList.remove("isValid");
            mailInputWrapper.classList.add("isInvalid");
            // clear flag
            mailValid = 0;
            break;

          case "invalid username":
            // username is invalid
            usernameInputWrapper.classList.remove("isValid");
            usernameInputWrapper.classList.add("isInvalid");
            // clear flag
            usernameValid = 0;
            break;

          case "invalid pwd":
            // pwd is invalid
            pwdInputWrapper.classList.remove("isValid");
            pwdInputWrapper.classList.add("isInvalid");
            // clear flag
            pwdValid = 0;
            break;

          case "no pwd match":
            // pwd and pwd-repeat don't match
            pwdRepeatInputWrapper.classList.remove("isValid");
            pwdRepeatInputWrapper.classList.add("isInvalid");
            // clear flag
            pwdRepeatValid = 0;
            break;

          case "both taken":
            // both username and email are taken
            usernameInputWrapper.classList.remove("isValid");
            usernameInputWrapper.classList.add("isInvalid");
            usernameMessage.innerHTML = usernameTakenMessage;

            mailInputWrapper.classList.remove("isValid");
            mailInputWrapper.classList.add("isInvalid");
            mailMessage.innerHTML = mailTakenMessage;

            registerMessage.innerHTML = "username and email taken";
            break;

          case "username taken":
            // username is taken
            usernameInputWrapper.classList.remove("isValid");
            usernameInputWrapper.classList.add("isInvalid");
            usernameMessage.innerHTML = usernameTakenMessage;
            registerMessage.innerHTML = "Username is taken";
            break;

          case "mail taken":
            // email address is taken
            mailInputWrapper.classList.remove("isValid");
            mailInputWrapper.classList.add("isInvalid");
            mailMessage.innerHTML = mailTakenMessage;
            registerMessage.innerHTML = "email is taken";
            break;

          case "fail":
            // all inputs are OK, but sql insert failed anyway
            registerMessage.innerHTML =
              "Server error. Try again later. Contact me if error persists";
            console.log(text);
            break;

          case "succes":
            // user is registered
            if (this.id === "guest-register") {
              // registration happened form guest-register page
              // !SET REGISTRATION MESSAGE
              setTimeout(() => {
                // redirect to home page
                window.location.href = "user_home.php";
              }, 1000);
            } else {
              // registration happened from landing page. Reset fp-cards
              backButton.classList.add("h-hide");
              const heading = document.querySelector("#register h1");
              registerForm.classList.add("h-hide");
              registerForm.parentElement.style.minHeight = "0px";
              heading.classList.add("noBeforeAfter");
              heading.classList.add("register-succes-message");
              heading.textContent = "Registration succesfull. Redirecting.";
              setTimeout(() => {
                // redirect to home page
                window.location.href = "index.php?login";
              }, 2500);
              setTimeout(() => {
                // redirect to home page
                heading.classList.remove("noBeforeAfter");
              }, 3000);
              break;
            }

          default:
            // fallback.
            registerMessage.innerHTML =
              "Something went wrong. Try again later.<br> Contact me if error persists";
            console.log(text);
            break;
        }
      });
  }
}

// Misc.

function submitNewPwd(e) {
  // Summary: grab new passwords entered by user and send them
  //          to php to set them

  e.preventDefault();
  // get current page - used later in function
  let path = window.location.pathname;
  let page = path.substr(path.lastIndexOf("/"));

  if (pwdValid === 1 && pwdRepeatValid === 1) {
    // passwords valid and match. allow submit
    let formData = new FormData(this);
    formData.append("submit", 1);

    let options = {
      method: "POST",
      body: formData,
    };

    fetch("php/setnewpassword.php", options)
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        if (text === "no match") {
          // passwords submitted don't match
          pwdRegister.value = "";
          pwdRepeatRegister.value = "";
          message.innerHTML = "Passwords didn't match";
        } else if (text === "new pwd set") {
          if (page == "/pwreset.php") {
            resetForm.classList.add("h-hide");
          }
          if (succesMessage) {
            succesMessage.classList.remove("h-hide");
          } else {
            pwdRegister.value = "New password set. Refreshing";
            pwdRepeatRegister.value = "New password set. Refreshing";
            message.innerHTML = "New password set. Refreshing.";
            message.classList.remove("h-hide");
          }
          setTimeout(() => {
            window.location.href = "index.php?login";
          }, 1000);
        } else {
          // something went wrong
          console.log(text);
          if (page == "/pwreset.php") {
            resetForm.classList.add("h-hide");
          }
          succesMessage.innerHTML =
            "Something went wrong. Try again later. <br> Redirecting to home page.";
          succesMessage.classList.remove("h-hide");
          setTimeout(() => {
            window.location.href = "index.php?login";
          }, 3000);
        }
      });
  }
}

function sessionToDatabase() {
  fetch("php/session_to_database.php")
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      console.log(text);
    });
}

//================
// Event listeners
//================

if (registerForm) {
  registerForm.addEventListener("submit", attemptRegistration);
  usernameRegister.addEventListener("keyup", usernameValidate);
  mailRegister.addEventListener("keyup", mailValidate);
  pwdRegister.addEventListener("keyup", pwdValidate);
  pwdRepeatRegister.addEventListener("keyup", pwdMatch);
}
if (userEditButons) {
  userEditButons.forEach((button) =>
    button.addEventListener("click", userEdit)
  );
  cancelUserEditButtons.forEach((button) =>
    button.addEventListener("click", cancelUserEdit)
  );
}
if (homeNewPwdInput) {
  homeNewPwdInput.addEventListener("focus", userSetNewPassword);
  homeNewPwdInput.addEventListener("blur", userSetNewPassword);
  homeEmailInput.addEventListener("keyup", mailValidate);
  homeUsernameInput.addEventListener("keyup", usernameValidate);
  resetForm.addEventListener("submit", submitNewPwd);
  pwdRegister.addEventListener("keyup", pwdValidate);
  pwdRepeatRegister.addEventListener("keyup", pwdMatch);
}
