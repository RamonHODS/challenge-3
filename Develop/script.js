var passwordLength = 10;
var passwordArray = [];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    password += passwordArray[randomIndex];
  }
  return password;
}

function getPrompts() {
  passwordArray = [];
  
  passwordLength = parseInt(prompt("Please enter a desired password length (8 - 128 characters)"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return false;
  }

  if (confirm("Would you like lowercase letters in this password?")) {
    passwordArray = passwordArray.concat(lowerCase);
  }

  if (confirm("Would you like uppercase letters in this password?")) {
    passwordArray = passwordArray.concat(upperCase);
  }

  if (confirm("Would you like special characters in this password?")) {
    passwordArray = passwordArray.concat(specialCharacter);
  }

  if (confirm("Would you like numbers in this password?")) {
    passwordArray = passwordArray.concat(numbers);
  }

  if (passwordArray.length === 0) {
    alert("You must select at least one character type.");
    return false;
  }

  return true;
}
