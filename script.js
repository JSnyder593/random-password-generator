//arrays of characters
var lowChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numChars= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

//Generates password
function generatePassword() {

    //confirm password parameters
    numChar = prompt("How many characters would you like your password to be? (Must be between 8 and 128 characters)");

    if (numChar < 8 || numChar > 128) {
        alert("Your password must be between 8 and 128 characters!");
        return;
    } else if (isNaN(numChar)) {
        alert("Entry invalid")
    } else {
        alert("Password length set!");
    }

    hasLower = confirm("Would you like lowercase letters?");
    if (hasLower) {
        alert("Lowercase included.")
    } else {
        alert("Lowercase excluded.")
    }

    hasUpper = confirm("Would you like uppercase letters?");
    if (hasUpper) {
        alert("Uppercase included.")
    } else {
        alert("Uppercase excluded.")
    }

    hasNumbers = confirm("Would you like numbers??");
    if (hasNumbers) {
        alert("Numbers included.")
    } else {
        alert("Numbers excluded.")
    }

    hasSpecials = confirm("Would you like special characters?");
    if (hasSpecials) {
        alert("Special characters included.")
    } else {
        alert("Special characters excluded.")

    }

    if (hasLower === false && hasUpper === false && hasNumbers === false && hasSpecials === false) {
        alert("You must choose at least one character type!");
      };

    var allAvail = [];

    //passes all characters based on choices into an array
    if (hasLower) {
        allAvail = allAvail.concat(lowChars)
    }
    if (hasUpper) {
        allAvail = allAvail.concat(upChars)
    }
    if (hasNumbers) {
        allAvail = allAvail.concat(numChars)
    }
    if (hasSpecials) {
        allAvail = allAvail.concat(specChars)
    }

    //sets & defines password
    var password = ""
    for (var i = 0; i < numChar; i++) {
        var randomIndex = [Math.floor(Math.random() * allAvail.length)]
        password = password + allAvail[randomIndex]
    }
    return password;
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);








