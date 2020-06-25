var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}'];
var str     = ['aa','bb','cc','dd'];

var length = prompt("enter the password length");
var upperCaseEl = confirm("do you want upper case letters");
var lowerCaseEl = confirm("do you want to have lowercase letters");
var numbersEl = confirm("do you want to have numbers");
var symbolsEl = confirm("do you want to have symbols");
var temp = '';

if (length >= 6) {

    for (i = 0; i < length; i++) {

        var randPwd = str[Math.floor(Math.random() * str.length)];
         console.log(randPwd);
     
    if(randPwd === 'aa'){
        if(temp.length<length){
              if (upperCaseEl) {
                 var randUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
                 temp = temp + randUpperCase;
              }
         }
    }      
    if(randPwd === 'bb'){
        if(temp.length< length){
            if (lowerCaseEl) {
               var randLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
               temp = temp + randLowerCase;
           }
        }
    } 
      if(randPwd === 'cc'){
        if(temp.length<length){
            if (numbersEl) {
                var randNumbers = numbers[Math.floor(Math.random() * numbers.length)];
                temp = temp + randNumbers;
        }
    }
} 

      if(randPwd === 'dd'){            
        if(temp.length<length){
            if (symbolsEl) {
                var randSymbols = symbols[Math.floor(Math.random() * symbols.length)];
                temp = temp + randSymbols;
        }
    }    
}       
 }

}
else {

    alert("length of the password should be minimum 6");
}
console.log(temp);