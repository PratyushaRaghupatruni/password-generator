var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}'];


window.onload = alert("Welcome! Please click 'Generate password' to start!");

function generatePassword() {
    var length = prompt("enter the password length");
    console.log(length);

    if (length < 6 || length >= 128) {
        alert("The length of the password should be atleast 6 and less than 128 characters" + length);
    }

    else if (length >= 6 || length < 128) {
        var upperCaseEl = confirm("do you want upper case letters");
        var lowerCaseEl = confirm("do you want to have lowercase letters");
        var numbersEl = confirm("do you want to have numbers");
        var symbolsEl = confirm("do you want to have symbols");
    }
    var possibleChar = [];
    var resultPassword = "";

    if (upperCaseEl) {
        Array.prototype.push.apply(possibleChar, upperCase);
    }
    console.log(possibleChar);
    if (lowerCaseEl) {
        Array.prototype.push.apply(possibleChar, lowerCase);
    }
    console.log(possibleChar);
    if (numbersEl) {
        Array.prototype.push.apply(possibleChar, numbers);
    }
    console.log(possibleChar);
    if (symbolsEl) {
        Array.prototype.push.apply(possibleChar, symbols);
    }
    console.log(possibleChar);
    if (possibleChar.length === 0) {
        alert("you should enter atleast 1 type of characters");
    }

    for (var i = 0; i < length; i++) {
        var getRandom = Math.floor(Math.random() * possibleChar.length);
        resultPassword = resultPassword + possibleChar[getRandom];
    }
    console.log(resultPassword);

    document.getElementById("pwd").innerHTML = resultPassword;
}

function copyClipboard() {

    var copyText = document.getElementById("pwd");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
    /* Alert the copied text */
    //  alert("Copied the text: " );
}
