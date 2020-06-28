
//array of the uppercase
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//array of lowercase
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//array of symbols
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}'];

//function to generate random when clicking generate password
function generatePassword() {
    //entering the length of the password the user wants
    var length = prompt("enter the password length");
    //An empty Array
    var possibleChar = [];
    //The result of the password intially it is empty
    var resultPassword = "";

    //condition for checking the password length minimum 8 and max 128
    if (length < 8 || length >= 128) {
        alert("The length of the password should be atleast 8 and less than 128 characters");
        resultPassword = "Not a valid password!";
    }
    else if (length >= 8 || length < 128) {
        //user requirement conditions
        var upperCaseEl = confirm("do you want upper case letters");
        var lowerCaseEl = confirm("do you want to have lowercase letters");
        var numbersEl = confirm("do you want to have numbers");
        var symbolsEl = confirm("do you want to have symbols");
        //if uppercase is true push the elements to the array possible char
        if (upperCaseEl) {
            Array.prototype.push.apply(possibleChar, upperCase);
        }
        //if lowercase is true push the elements to the array possible char       
        if (lowerCaseEl) {
            Array.prototype.push.apply(possibleChar, lowerCase);
        }
        //if numbers is true push the elements to the array possible char       
        if (numbersEl) {
            Array.prototype.push.apply(possibleChar, numbers);
        }
        //if symbols is true push the elements to the array possible char    
        if (symbolsEl) {
            Array.prototype.push.apply(possibleChar, symbols);
        }
        //if none of them is true 
        if (possibleChar.length === 0) {
            alert("you should enter atleast 1 type of characters");
        }
        //if any of the above is true theen generating a random pwd    
        else {
            for (var i = 0; i < length; i++) {
                var getRandom = possibleChar[Math.floor(Math.random() * possibleChar.length)];
                resultPassword = resultPassword + getRandom;
            }
        }
    }
    //generating the password to the textarea on th ewindow
    document.getElementById("pwd").innerHTML = resultPassword;
    //enabling the copy clipboard after password is generated to copy   
    document.getElementById("copyClipboard").disabled = false;
}
//function for copying the password to the clipboard
function copyClipboard() {
    var copyText = document.getElementById("pwd");
    //coying the generated password
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    //command to the cpy pwd
    document.execCommand("copy");
    //An alert that the text is copied
    alert("Copied the text: " + copyText.value);
}