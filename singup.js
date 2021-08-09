const $submit = document.querySelector(".submit");
const $inputEmail = document.querySelector("input[type=email]");
const $iconsError = document.querySelectorAll(".icon-error");
const $errorMensagens = document.querySelectorAll(".error");
const $FirstName = document.querySelector(".first-name");
const $LastName = document.querySelector(".last-name");
const $inputPassword = document.querySelector("input[type=password]");
const mailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePatern = /[A-Z][a-z]* [A-Z][a-z]*/;
const lastnamePatern = /[a-z][A-Z]* [A-Z][A-Z]*/;
const passwordPatern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

$FirstName.addEventListener("input", (inputText) =>
  nameIsValid(inputText.target.value)
);
$LastName.addEventListener("input", (inputText) =>
  lastNameIsValid(inputText.target.value)
);

$inputEmail.addEventListener("input", (inputEmail) =>
  emailIsValid(inputEmail.target.value)
);

$inputPassword.addEventListener("input", ($inputPassword) =>
  passwordIsStrong($inputPassword.target.value)
);

function buttonStatus() {
  if (
    $FirstName.classList.contains("valid") &&
    $LastName.classList.contains("valid") &&
    $inputEmail.classList.contains("valid") &&
    $inputPassword.classList.contains("valid")
  ) {
    $submit.disabled = false;
  } else {
    $submit.disabled = true;
  }
}

function passwordIsStrong(password) {
  removeClass($inputPassword, "active");
  activeClass($inputPassword, "valid");

  if (!passwordPatern.test(password)) {
    activeClass($inputPassword, "active");
    removeClass($inputPassword, "valid");
  }
  buttonStatus();
}

function emailIsValid(email) {
  activeClass($inputEmail, "active");
  removeClass($inputEmail, "valid");

  if (mailPatern.test(email)) {
    removeClass($inputEmail, "active");
    activeClass($inputEmail, "valid");
  }
  buttonStatus();
}

function nameIsValid(text) {
  activeClass($FirstName, "active");
  removeClass($FirstName, "valid");

  if (namePatern.test(text)) {
    removeClass($FirstName, "active");
    activeClass($FirstName, "valid");
  }
  buttonStatus();
}

function lastNameIsValid(text) {
  activeClass($LastName, "active");
  removeClass($LastName, "valid");
  if (lastnamePatern.test(text)) {
    removeClass($LastName, "active");
    activeClass($LastName, "valid");
  }
  buttonStatus();
}

function activeClass($element, status) {
  $element.classList.add(status);
  $errorMensagens[$element.dataset.value].classList.add(status);
}
function removeClass($element, status) {
  $element.classList.remove(status);
  $errorMensagens[$element.dataset.value].classList.remove(status);
}
