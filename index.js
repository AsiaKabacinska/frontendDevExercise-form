const form = document.querySelector("form");
const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");
const textAreaInput = form.querySelector("#textarea");
const submitBtn = form.querySelector("#btn__submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValidationOk = false;

  if (false == validateNameInput(nameInput.value)) {
    nameInput.style.backgroundColor = "red";
  }
  if (false == validateMail(emailInput.value)) {
    emailInput.style.backgroundColor = "red";
  }
  if (false == validateTextAreaInput(textAreaInput.value)) {
    textAreaInput.style.backgroundColor = "red";
  }
  if (isValidationOk) {
    e.target.submit();
  }
});

/*
    value - wartosc z pola input z formularza
*/
function validateNameInput(value) {
  if (typeof value != "string") {
    return false;
  }
  console.log(typeof value);
  if (value.length == 0) {
    return false;
  }
  if (hasSpecialCharacter(value)) {
    return false;
  }

  //1. ma text
  //2. nie ma numberow
  //3. nie ma znakow specjalnych
  //4. nie zawiera spacji
  // 5. nie jest pustym stringiem

  return true;
}
function hasSpecialCharacter(value) {
  const specialCharacters = [
    "@",
    "!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    ":",
    " ",
  ];
  for (let i = 0; i < value.length; i++) {
    if (specialCharacters.includes(value[i])) {
      return true;
    }
  }

  return false;
}
function hasNumbers(value) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    if (hasNumbers.includes(numbers[i])) {
      return true;
    }
  }
}
//walidacja adresu email DO POPRAWYYYYYY !!!!

function validateMail(value) {
  for (let i = 0; i <= value.length; i++) {
    if (value[i] == "@") {
      return true;
    }
  }
  return false;
}

function validateTextAreaInput(value) {
  if (value.length > 120) {
    return false;
  }

  return true;
}

// PRZYCISK DISABLE POMOCY !!!
function validateSubmitBtn() {
  if (value == false) {
    submitBtn.classList.toggle("disabled");
  } else {
    true;
  }
}
