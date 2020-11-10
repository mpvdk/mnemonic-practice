//Javascript for pages:
//    - user_home.php
//    - ten.php
//    - hundred.php
//    - practice.php
//    - statistics.php

const title = document.querySelector(".userpage-title");
const updateForm = document.querySelector(".update-form");
const editable = document.querySelectorAll(".js-editable");
const nonEditable = document.querySelectorAll(".js-non-editable");
const editButton = document.querySelector(".edit-button");
const saveButton = document.querySelector("button[type=submit]");
const logoutButton = document.querySelector(".logout");
const dropArea = document.querySelectorAll(".droparea");
const rows = document.querySelectorAll("tr");
const previews = document.querySelectorAll(".preview");
const deleteButtons = document.querySelectorAll(".delete-image");
const actionCheckbox = document.querySelector(".js-action-checkbox");
const objectCheckbox = document.querySelector(".js-object-checkbox");
const globalErrorMessage = document.querySelector(".global-error-message");

const mobileButton = document.querySelector(".mobile-button");

const mobileImgInputs = document.querySelectorAll(".mobile-img-input");

const introHeaders = document.querySelectorAll(".intro-stack__element__header");

// vars

let allowPreview = 1;
let previousRow = "";
let mobileMenuShowing = 0;
var introSectionOneShowing = true;
var introSectionTwoShowing = false;
var introSectionThreeShowing = false;
// get the current filename without slashes
let page = window.location.pathname.substr(
  window.location.pathname.lastIndexOf("/") + 1
);

// functions

function update(e) {
  // Summary: save the changes to the table by updating the custom user table in the db

  e.preventDefault();

  let formData = new FormData(this);
  formData.append("table", this.id);

  // if ten-table, cut anything after the first letter and convert remaining to uppercase
  if (this.id === "js-ten-table") {
    for (var pair of formData.entries()) {
      if (pair[1] !== "js-ten-table") {
        let letter = pair[1];
        letter = letter.trim();
        if (letter.length > 1) {
          letter = letter.substring(0, 1);
        }
        letter = letter.toUpperCase();
        formData.set(pair[0], letter);
      }
    }
  }

  // if hundred-table and desktop, remove empty fields.
  // This is necessary because the hundred table has 2 inputs for
  // person, action, and for object (mobile edit and desktop edit)
  // If in desktop width, the empty mobile edits override them.
  let formDataUpdated = new FormData();
  if (window.innerWidth > 800) {
    for (var pair of formData.entries()) {
      if (pair[0].includes("desktop")) {
        let key = pair[0].replace("-desktop", "");
        formData.set(key, pair[1]);
      } else {
        formDataUpdated.append(pair[0], pair[1]);
      }
    }
    formData = formDataUpdated;
  }

  let options = {
    method: "POST",
    body: formData,
  };

  fetch("php/update-table.php", options)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      location.reload();
      // console.log(text);
    });
}

function toggleEdit(e) {
  // Summary: toggle the 'editability' of the custom user tables

  e.preventDefault();

  // change edit button text
  if (editButton.innerHTML === "edit table") {
    editButton.innerHTML = "cancel edit";
  } else if (editButton.innerHTML === "cancel edit") {
    editButton.innerHTML = "edit table";
  }
  // show/hide save button
  saveButton.classList.toggle("h-hide");

  // disable display options
  if (actionCheckbox) {
    let div = actionCheckbox.parentElement.parentElement;
    if (actionCheckbox.disabled) {
      actionCheckbox.disabled = false;
      objectCheckbox.disabled = false;
      div.classList.remove("disabled");
    } else {
      actionCheckbox.disabled = true;
      objectCheckbox.disabled = true;
      div.classList.add("disabled");
    }
  }

  // check if mobile and if table 00 - 99 or cards
  // because that page has different script
  if (window.innerWidth <= 800 && page == "hundred.php") {
    // mobile 00-99
    let mobileEditable = document.querySelectorAll(
      ".mobile-pao .object-mobile-editable, .mobile-pao .action-mobile-editable, .mobile-pao .person-mobile-editable, mobile, .mobile-card .card-association-mobile-editable"
    );
    let mobileNonEditable = document.querySelectorAll(
      ".mobile-pao .object-mobile, .mobile-pao .action-mobile, .mobile-pao .person-mobile, .mobile-card .card-association-mobile"
    );
    mobileEditable.forEach((el) => el.classList.toggle("h-hide"));
    mobileNonEditable.forEach((el) => el.classList.toggle("h-hide"));
  } else if (window.innerWidth <= 800 && page == "cards.php") {
    // mobile cards
    editable.forEach((el) => el.classList.toggle("h-hide"));
    nonEditable.forEach((el) => el.classList.toggle("h-hide"));
  } else {
    // show/hide and enable/disable image preview
    previews.forEach((preview) => preview.classList.add("h-hide"));
    if (allowPreview) {
      allowPreview = 0;
    } else {
      allowPreview = 1;
    }

    // show/hide editable and non-editable table cells
    editable.forEach((el) => {
      if (el.classList.contains("js-action-cell")) {
        if (actionCheckbox.checked) {
          el.classList.toggle("h-hide");
        } else {
          el.classList.add("h-hide");
        }
      } else if (el.classList.contains("js-object-cell")) {
        if (objectCheckbox.checked) {
          el.classList.toggle("h-hide");
        } else {
          el.classList.add("h-hide");
        }
      } else {
        el.classList.toggle("h-hide");
      }
    });
    nonEditable.forEach((el) => {
      if (el.classList.contains("js-action-cell")) {
        if (actionCheckbox.checked) {
          el.classList.toggle("h-hide");
        } else {
          el.classList.add("h-hide");
        }
      } else if (el.classList.contains("js-object-cell")) {
        if (objectCheckbox.checked) {
          el.classList.toggle("h-hide");
        } else {
          el.classList.add("h-hide");
        }
      } else {
        el.classList.toggle("h-hide");
      }
    });
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

function handleDrop(e) {
  // Summary: get dropped file, and if an image, upload it and
  //          associate with corresponding number
  // NOTE: also handles the mobile button image upload

  let file;
  let id;

  if (e.type === "drop") {
    // e = drop
    let dt = e.dataTransfer;
    file = dt.files[0];
    // get id (required to get row nr)
    if (this.id) {
      id = this.id;
    } else {
      id = this.parentElement.id;
    }
  } else {
    // e = input file upload
    file = this.files[0];
    // get id (required to get row nr)
    id = this.parentElement.parentElement.parentElement.parentElement.id;
  }
  // check extension
  // let extension = file.name.split(".").pop();
  extension = "jpg";
  // get row nr from id
  let nrOrCard;
  let type;
  if (id.includes("nr")) {
    nrOrCard = id.replace(/^nr/i, "");
    type = "nr";
  } else {
    nrOrCard = id.replace("-", " ");
    type = "card";
  }

  let formData = new FormData();
  formData.append("file", file);
  formData.append("nrOrCard", nrOrCard);
  formData.append("extension", extension);
  formData.append("type", type);

  let options = {
    method: "POST",
    body: formData,
  };

  fetch("php/save-image.php", options)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      if (text.includes("succes")) {
        setTimeout(() => {
          location.reload();
        }, 200);
      } else if (text === "no image") {
        this.classList.remove("drag-and-hover");
        globalErrorMessage.innerHTML = "FILE IS NOT AN IMAGE";
        globalErrorMessage.classList.remove("h-hide");
        setTimeout(() => {
          globalErrorMessage.classList.add("h-hide");
        }, 4000);
      } else if (text === "too large") {
        this.classList.remove("drag-and-hover");
        globalErrorMessage.innerHTML = "FILESIZE TOO LARGE (MAX = 1MB)";
        globalErrorMessage.classList.remove("h-hide");
        setTimeout(() => {
          globalErrorMessage.classList.add("h-hide");
        }, 4000);
      } else if (text === "failed") {
        console.log("upload failed");
      } else {
        console.log(text);
      }
    });
}

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function dragEnter() {
  previews.forEach((preview) => preview.classList.add("h-hide"));
  this.classList.add("drag-and-hover");
}

function dragLeave() {
  this.classList.remove("drag-and-hover");
}

function changeImagePreview(e) {
  // summary: change the image preview element to the one associated with
  //           the row the user last hovered over.

  if (allowPreview) {
    // grab current row
    let currentRow;
    if (this.id) {
      currentRow = this.id;
    } else {
      currentRow = this.parentElement.id;
    }

    // if user hovers over active row, do nothing
    if (currentRow === previousRow) {
      return;
    }
    // however, if user hovers over new row, change the preview accordingly
    else if (currentRow !== previousRow) {
      let ths = document.querySelectorAll("form th");
      if (previousRow !== "") {
        // another preview is now active, hide it
        let previousRowEl = document.querySelector(
          `#${CSS.escape(previousRow)} .preview`
        );
        previousRowEl.classList.add("h-hide");
        if (window.innerWidth <= 800) {
          // for mobile
          // change margin top for .table-cards to 30px
          updateForm.style.marginTop = "30px";
          // change "top" for .table-cards th to 0px
          ths.forEach((th) => (th.style.top = "0px"));

          //display preview element of current row
          let selectedPreview = document.querySelector(
            `#${CSS.escape(currentRow)} .preview`
          );
        }
      }
      //display preview element of current row
      let selectedPreview = document.querySelector(
        `#${CSS.escape(currentRow)} .preview`
      );
      selectedPreview.classList.remove("h-hide");
      if (window.innerWidth <= 800) {
        // for mobile
        // change delete image button width
        let delButton = this.querySelector(".delete-image");
        let img = this.querySelector("img");
        let imgWidth = getComputedStyle(img).getPropertyValue("width");
        delButton.style.width = imgWidth;
        // change margin top for .table-cards to 210px (height of preview)
        updateForm.style.marginTop = "210px";
        // change "top" for .table-cards th to 230px (height of preview)
        ths.forEach((th) => (th.style.top = "210px"));
        // hide page title
        title.classList.add("h-hide");
      }

      // set currently active preview element to "previousRow" for next run
      previousRow = currentRow;
    }
  } else {
    return;
  }
}

function hidePreviews() {
  this.classList.remove("active");
  // get all th elements
  let ths = document.querySelectorAll("form th");
  // hide all preview elements
  previews.forEach((preview) => preview.classList.add("h-hide"));
  // change margin top for .table-cards back to 30px
  updateForm.style.marginTop = "30px";
  // change "top" for .table-cards th back to 0px
  ths.forEach((th) => (th.style.top = "0px"));
  // display page title again
  title.classList.remove("h-hide");
  // clear previousRow
  previousRow = "";
}

function deleteImage(e) {
  // Summary: delete image from server and remove
  //          reference to image in custom user table

  e.preventDefault();

  let id = this.getAttribute("data-row");
  let nrOrCard;
  let type;
  if (id.length == 2) {
    nrOrCard = id;
    type = "nr";
  } else {
    nrOrCard = id.replace("-", " ");
    type = "card";
  }

  let formData = new FormData();
  formData.append("action", "delete");
  formData.append("nrOrCard", nrOrCard);
  formData.append("type", type);

  let options = {
    method: "POST",
    body: formData,
  };

  fetch("php/delete-image.php", options)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      // console.log(text);
      location.reload();
    });
}

function changeDisplayOption(e) {
  // Summary: enable/disable the "action" and "object" columns in the 00-99 table

  let column = this.id;
  if (this.checked) {
    // save setting in local storage
    localStorage.setItem(this.id, "visible");
    // enable selected column
    let cells = document.querySelectorAll(`.js-${column}-cell`);
    cells.forEach((cell) => {
      if (!cell.classList.contains("js-editable")) {
        cell.classList.remove("h-hide");
      }
    });
  } else {
    // save setting in local storage
    localStorage.setItem(this.id, "hidden");
    // disable selected column
    let cells = document.querySelectorAll(`.js-${column}-cell`);
    cells.forEach((cell) => {
      if (!cell.classList.contains("js-editable")) {
        cell.classList.add("h-hide");
      }
    });
  }
}

function toggleMobileMenu(e) {
  // Summary: toggles the mobile menu and burger button
  //          If user taps anywhere except for on an <a> element, the menu
  //          is closed. If the user taps on an <a> element, we return
  //          to cancel any animations, and just go to the selected page.

  if (mobileMenuShowing == 0) {
    // Toggle burger button state
    mobileButton.classList.toggle("active");
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
    if (e.target.tagName === "A" || e.target.tagName === "LI") {
      return;
    } else {
      // user tapped outside of the menu
      // Toggle burger button state
      mobileButton.classList.toggle("active");
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

function toggleIntroSection() {
  console.log("clicked");
  console.log(this);
  let animationSection = document.querySelector(".intro-animation h1");
  let mnemonicsSection = document.querySelector(".intro-mnemonics h1");
  let websiteSection = document.querySelector(".intro-website h1");
  // check which section we're toggling,
  // toggle required section,
  // and close all others that are open

  if (this.getAttribute("data-section") == "animation") {
    if (introSectionOneShowing == true) {
      introSectionOneShowing = false;
      closeIntroSection(this);
    } else {
      if (introSectionTwoShowing == true) {
        closeIntroSection(mnemonicsSection);
        introSectionTwoShowing = false;
      }
      if (introSectionThreeShowing == true) {
        closeIntroSection(websiteSection);
        introSectionThreeShowing = false;
      }
      setTimeout(() => {
        openIntroSection(this);
      }, 200);
      introSectionOneShowing = true;
    }
  } else if (this.getAttribute("data-section") == "mnemonics") {
    if (introSectionTwoShowing == true) {
      closeIntroSection(this);
      introSectionTwoShowing = false;
    } else {
      if (introSectionOneShowing == true) {
        closeIntroSection(animationSection);
        introSectionOneShowing = false;
      }
      if (introSectionThreeShowing == true) {
        closeIntroSection(websiteSection);
        introSectionThreeShowing = false;
      }
      setTimeout(() => {
        openIntroSection(this);
      }, 200);
      introSectionTwoShowing = true;
    }
  } else if (this.getAttribute("data-section") == "website") {
    if (introSectionThreeShowing == true) {
      closeIntroSection(this);
      introSectionThreeShowing = false;
    } else {
      if (introSectionOneShowing == true) {
        closeIntroSection(animationSection);
        introSectionOneShowing = false;
      }
      if (introSectionTwoShowing == true) {
        closeIntroSection(mnemonicsSection);
        introSectionTwoShowing = false;
      }
      setTimeout(() => {
        openIntroSection(this);
      }, 200);
      introSectionThreeShowing = true;
    }
  }
}

function closeIntroSection(section) {
  console.log("closeIntroSection");
  console.log(section);
  let content = section.parentElement.querySelector(
    ".intro-stack__element__content"
  );
  let arrows = section.querySelector("svg");
  // content is showing. Hide it.
  let height = window.getComputedStyle(content).getPropertyValue("height");
  height = height.replace("px", "");
  height = height - 15;
  section.parentElement.style.marginBottom = `-${height}px`;
  section.style.borderBottomLeftRadius = "15px";
  section.style.borderBottomRightRadius = "15px";
  arrows.classList.add("rotate");
  setTimeout(() => {
    content.style.visibility = "hidden";
  }, 100);
}
function openIntroSection(section) {
  console.log("openIntroSection");
  let content = section.parentElement.querySelector(
    ".intro-stack__element__content"
  );
  let arrows = section.querySelector("svg");
  // content is hidden. Show it.
  section.parentElement.style.marginBottom = "15px";
  section.style.borderBottomLeftRadius = "0px";
  section.style.borderBottomRightRadius = "0px";
  arrows.classList.remove("rotate");
  setTimeout(() => {
    content.style.visibility = "visible";
  }, 150);

  // scroll to position the header with 50px padding from top of viewport
  let headerToViewport = section.getBoundingClientRect().top; // px (+) between top of header and top of viewport
  let viewportToBody = document.body.getBoundingClientRect().top; // px (-) between top of viewport and top of <body>
  viewportToBody = Math.sqrt(viewportToBody * viewportToBody); // turn negative into positive
  let scrollToY = headerToViewport + viewportToBody - 50; // 50px padding
  window.scrollTo(0, scrollToY);
}

// function toggleIntroSection() {
//   let content = this.parentElement.querySelector(
//     ".intro-stack__element__content"
//   );
//   let arrows = this.querySelector("svg");
//   let marginBottom = window
//     .getComputedStyle(this.parentElement)
//     .getPropertyValue("margin-bottom");
//   if (marginBottom == "15px") {
//     // content is showing. Hide it.
//     let height = window.getComputedStyle(content).getPropertyValue("height");
//     height = height.replace("px", "");
//     height = height - 15;
//     this.parentElement.style.marginBottom = `-${height}px`;
//     this.style.borderBottomLeftRadius = "15px";
//     this.style.borderBottomRightRadius = "15px";
//     arrows.classList.add("rotate");
//     setTimeout(() => {
//       content.style.visibility = "hidden";
//     }, 100);
//   } else {
//     // content is hidden. Show it.
//     this.parentElement.style.marginBottom = "15px";
//     this.style.borderBottomLeftRadius = "0px";
//     this.style.borderBottomRightRadius = "0px";
//     arrows.classList.remove("rotate");
//     setTimeout(() => {
//       content.style.visibility = "visible";
//     }, 150);

//     // scroll to position the header with 50px padding from top of viewport
//     let headerToViewport = this.getBoundingClientRect().top; // px (+) between top of header and top of viewport
//     let viewportToBody = document.body.getBoundingClientRect().top; // px (-) between top of viewport and top of <body>
//     viewportToBody = Math.sqrt(viewportToBody * viewportToBody); // turn negative into positive
//     let scrollToY = headerToViewport + viewportToBody - 50; // 50px padding
//     window.scrollTo(0, scrollToY);
//   }
// }

// event listeners

if (updateForm) {
  updateForm.addEventListener("submit", update);
}
if (editButton) {
  editButton.addEventListener("click", toggleEdit);
}
if (logoutButton) {
  logoutButton.addEventListener("click", logout);
}
if (dropArea) {
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropArea.forEach((area) => {
      area.addEventListener(eventName, preventDefaults, false);
    });
  });
  dropArea.forEach((area) => {
    area.addEventListener("drop", handleDrop);
    area.addEventListener("dragenter", dragEnter);
    area.addEventListener("dragleave", dragLeave);
    area.addEventListener("mouseenter", changeImagePreview);
  });
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteImage);
  });
}
if (actionCheckbox) {
  actionCheckbox.addEventListener("click", changeDisplayOption);
  objectCheckbox.addEventListener("click", changeDisplayOption);
}
if (mobileButton) {
  mobileButton.addEventListener("click", toggleMobileMenu);
}
if (mobileImgInputs) {
  mobileImgInputs.forEach((input) => {
    input.addEventListener("change", handleDrop);
  });
}
if (introHeaders) {
  introHeaders.forEach((header) =>
    header.addEventListener("click", toggleIntroSection)
  );
}

// MISC

if (window.innerWidth <= 800) {
  rows.forEach((tr) => {
    // tr.addEventListener("mouseleave", hidePreviews);
    tr.addEventListener("mouseenter", rowActive);
  });
}

function rowActive() {
  this.classList.add("active");
}

// on load

// See if user had "action" and/or "object" column active in 00 - 99 row
// If so, show them again and check checkboxes.
if (window.innerWidth > 800 && page == "hundred.php") {
  if (localStorage.getItem("action") == "visible") {
    let checkbox = document.querySelector(".js-action-checkbox");
    let cells = document.querySelectorAll(`.js-action-cell`);
    cells.forEach((cell) => {
      if (!cell.classList.contains("js-editable")) {
        cell.classList.remove("h-hide");
      }
    });
    checkbox.checked = true;
  }
  if (localStorage.getItem("object") == "visible") {
    let checkbox = document.querySelector(".js-object-checkbox");
    let cells = document.querySelectorAll(`.js-object-cell`);
    cells.forEach((cell) => {
      if (!cell.classList.contains("js-editable")) {
        cell.classList.remove("h-hide");
      }
    });
    checkbox.checked = true;
  }
}
