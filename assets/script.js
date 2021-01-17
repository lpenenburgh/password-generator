//variables

var lowerCasedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericalCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = [':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', '@', '%', '!', '#', '$', '^', '?', '+', '\\', '/', "'"];

//Prompting user for preffered password length
function getPassInput() {
    //storing the users length preference
    var length = parseInt(
        prompt("How long would you like your password. Please pick between 8 and 129")
    );
    //checking if user entered a valid number and length, if not valid, send an alert    
    if (isNaN(length) ===true) {
        alert("Please provide a number");
        return;
    }

    if (length > 129) {
        alert("Please provide a number less than 129");
        return;
    }

    if (length < 8) {
        alert("Please provide a number larger than 7");
    }
     //user chooses if they want to include lowercase letters, uppercase letters, numbers & special characters in the password using confirm
    var hasLowerCasedLetters = confirm(
        "Click OK to include lowercase letters in password."
    );

    var hasUpperCasedLetters = confirm(
        "Click OK to include uppercase letters in password."
    );

    var hasNumericalCharacters = confirm(
        "Click OK to include numbers in password."
    );

    var hasSpecialCharacters = confirm(
        "Click OK to include special characters in password."
    );
    // Send alert to user if they didnt add any of the previous prompted character
    if (!hasLowerCasedLetters && !hasUpperCasedLetters && !hasNumericalCharacters && !hasSpecialCharacters) {
        alert("Please select at least one option.");
        return;
    }
    //Store the users answers
    var passwordInput = {
        length: length,
        hasLowerCasedLetters: hasLowerCasedLetters,
        hasUpperCasedLetters: hasUpperCasedLetters,
        hasNumericalCharacters: hasNumericalCharacters,
        hasSpecialCharacters: hasSpecialCharacters
    };
    return passwordInput;
}






//Generating password


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
