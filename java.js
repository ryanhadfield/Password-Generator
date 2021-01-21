// This site will help generate a random password for user using prompts to obtain certain criteria

// Object containing the functions the that produce the random output
var randomParameters = {
  special: randomSpecial,
  number: randomNum,
  uppercase: randomUp,
  lowercase: randomLow,
};

// Functions to generate random Special Characters, Numbers, Uppercase, Lowercase
function randomSpecial() {
  var special = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
  return special[Math.floor(Math.random() * special.length)];
}

function randomNum() {
  var numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomUp() {
  var uppers = "ABCDEFGHIKLMNOPQRSTVXYZ";
  return uppers[Math.floor(Math.random() * uppers.length)];
}

function randomLow() {
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  return lowers[Math.floor(Math.random() * lowers.length)];
}

// Elements
var passwordEl = document.getElementById("password");
var copyEl = document.getElementById("copy");
var lengthEl = document.getElementById("length");
var specialEl = document.getElementById("special");
var numEl = document.getElementById("numbers");
var upEl = document.getElementById("uppercase");
var lowEl = document.getElementById("lowercase");
var generateEl = document.getElementById("generate");

// Button event that activates the random password generator
generateEl.addEventListener("click", function () {
  var length = +lengthEl.value;
  var checkSpecial = specialEl.checked;
  var checkNumber = numEl.checked;
  var checkUpper = upEl.checked;
  var checkLower = lowEl.checked;

  passwordEl.innerText = createPassword(
    checkSpecial,
    checkNumber,
    checkUpper,
    checkLower,
    length
  );
});

//  Function that creates the random password using the parameters provided by the user
function createPassword(special, number, uppercase, lowercase, length) {
  var parameters = special + number + uppercase + lowercase;
 
  var parametersArray = [
    { special },
    { number },
    { uppercase },
    { lowercase },
  ].filter((parameter) => Object.values(parameter)[0]);
  
  var newPassword = "";
  
  if (parameters == 0) {
    return "";
  }

  for (let index = 0; index < length; index += parameters) {
    parametersArray.forEach((parameter) => {
      var typesOfParameters = Object.keys(parameter)[0];
      newPassword += randomParameters[typesOfParameters]();
    });
  }

  var password = newPassword;
  return password;
}

