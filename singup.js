const $submit = document.querySelector(".submit");
const $inputEmail = document.querySelector("input[type=email]");
const $iconsError = document.querySelectorAll(".icon-error");
const $errorMensagens = document.querySelectorAll(".error");
const $inputTexts = document.querySelectorAll("input[type=text]");
const $inputPassword = document.querySelector("input[type=password]");
const mailPatern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$submit.addEventListener("click", buttonPress);

function buttonPress() {
  const $inputTextsValue = [...$inputTexts];
  if ($inputTextsValue.includes("") || !mailPatern.test($inputEmail.value)) {
    activeClass($inputEmail, "active");
    activeClass($inputPassword, "active");
    $inputEmail.placeholder = "email@example/com";
    [$inputTexts, $errorMensagens].forEach(($array) =>
      activeClassArray($array)
    );
  } else {
    $inputEmail.placeholder = "Email Address";
    [$inputTexts, $errorMensagens].forEach(($array) =>
      removeClassArray($array)
    );
    removeClass($inputEmail, "active");
    removeClass($inputPassword, "active");
    $inputTexts.forEach(($input) => inputReset($input));
    inputReset($inputEmail);
    inputReset($inputPassword);
  }
}

function activeClassArray($array) {
  $array.forEach(($element) => {
    activeClass($element, "active");
  });
}
function removeClassArray($array) {
  $array.forEach(($element) => {
    removeClass($element, "active");
  });
}

function activeClass($element, status) {
  $element.classList.add(status);
}
function removeClass($element, status) {
  $element.classList.remove(status);
}
function inputReset($input) {
  $input.value = "";
}
