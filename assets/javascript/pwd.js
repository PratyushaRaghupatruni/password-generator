var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}'];
var temp = '';



window.onload = alert("Welcome! Please click 'Generate password' to start!");



function generatePassword(){
var length = prompt("enter the password length");
console.log(length);

if (length < 6 || length > 56) {
    alert("The length of the password should be atleast 6 and less than 128 characters" + length);
}

else if(length > 6 || length < 56 ) {
    var upperCaseEl = confirm("do you want upper case letters");
    var lowerCaseEl = confirm("do you want to have lowercase letters");
    var numbersEl = confirm("do you want to have numbers");
    var symbolsEl = confirm("do you want to have symbols");
}   

    for (i = 0; i < length; i++) {
     
        if(temp.length<length){
              if (upperCaseEl) {
                 var randUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
                 temp = temp + randUpperCase;
              }
         }
     
 
        if(temp.length< length){
            if (lowerCaseEl) {
               var randLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
               temp = temp + randLowerCase;
           }
        }
     
     
        if(temp.length<length){
            if (numbersEl) {
                var randNumbers = numbers[Math.floor(Math.random() * numbers.length)];
                temp = temp + randNumbers;
        }
    }
          
        if(temp.length<length){
            if (symbolsEl) {
                var randSymbols = symbols[Math.floor(Math.random() * symbols.length)];
                temp = temp + randSymbols;
        }
    }    
      if(upperCaseEl!== true && lowerCaseEl !== true  && numbersEl !== true && symbolsEl !== true){
          alert("you should have atleast one character");
 }
}


console.log(temp);

var s="";
  function shuffle(s) {
    var arr = temp.split("");           // Convert String to array
    for(var i=0 ; i< arr.length ;i++) {
      var password = arr[Math.floor(Math.random() * arr.length)]; 
           s=password+s; // Get random of [0, n-1] 
    }
    
   s = arr.join("");                // Convert Array to string
    return s;                        // Return shuffled string
  }

   var pwd = shuffle(s);
  console.log(pwd); 
  
document.getElementById("pwd").innerHTML=pwd;
}

function copyClipboard(){
    var copypwd = document.querySelector("h4");
  
    /* Select the text field */
    copypwd.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copypwd.value);
  }
