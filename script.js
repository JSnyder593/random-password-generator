// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays
var lowCharAvail = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upCharAvail = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersCharAvail = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specCharAvail = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var allAvail = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
    //get length of password
    var numChar = prompt("How many characters do you want for your password? *must be 8 - 128 characters*")

    //will it contain lowercase 
    var lowChar = confirm("Would you like lowercase letters in your password?")

    //will it contain uppercase
    var upChar = confirm("Would you like uppercase letters in your password?")

    //will it contain numbers
    var numbersChar = confirm("Would you like numbers in your password?")

    //will it contain special characters
    var specChar = confirm("Would you like special characters in your password?")

    // if (lowChar && upChar && numChar & specChar) {
    //     var fullAvail = lowCharAvail.concat(upChar, numsChar, specChar)
    // }

        if (lowChar) {
            allAvail = allAvail.concat(lowCharAvail)
        }
        if (upChar) {
            allAvail = allAvail.concat(upCharAvail)
        }
        if (numbersChar) {
            allAvail = allAvail.concat(numbersCharAvail)
        }
        if (specChar) {
            allAvail = allAvail.concat(specCharAvail)
        }
        console.log(allAvail)

        for (let i = 0; i < numChar; i++) {
            var password = (Math.floor(Math.random()) * allAvail)
            return password
    }
}


generateBtn.addEventListener("click", writePassword);

Math.floor((Math.random() * 128) + 1);
Math.floor(Math.random() * 26);
Math.floor(Math.random() * 26);
Math.floor(Math.random() * 10);
Math.floor(Math.random() * 10);








//function that asks for the parameters of your password


// function createPassword() {
//     let numChar = [Array.from({length: 128}, (_, i) => i + 1)]
//     let lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//     let upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//     let numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//     let specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


