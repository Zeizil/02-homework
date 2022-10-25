// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(pwlength, reqLetters, reqNums, reqSpec) {
  var password = generatePassword(pwlength, reqLetters, reqNums, reqSpec);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(pwlength, reqLetters, reqNums, reqSpec){
  let pw = '';
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const spec = '!@#$';

  if(reqLetters){
    // yes letters
    if(reqNums){
      // yes letters, numbers
      if(reqSpec){
        // yes special characters - all three
        for (let a = 0; a < pwlength; a++){
          // coin flip to decide letter, number, or special character
          let decider = Math.floor(Math.random() * 3);
          // 0 is letter
          if(decider == 0){
            let letter = Math.floor(Math.random() * alphabet.length + 1);
            pw += alphabet.charAt(letter);
          }
          // 1 is number
          else if(decider == 1){
            let num = Math.floor(Math.random() * 10);
            pw += toString(num);
          }
          // 2 is special character
          else if(decider == 2){
            let symbol = Math.floor(Math.random() * spec.length + 1);
      pw += spec.charAt(symbol);
          }
        }
      }
      else{
        // only letters and numbers
        for (let b = 0; b < pwlength; b++){
          // coin flip to decide letter or number
          let decider = Math.floor(Math.random() * 2);
          // 0 is letter
          if(decider == 0){
            let letter = Math.floor(Math.random() * alphabet.length + 1);
            pw += alphabet.charAt(letter);
          }
          // 1 is number
          else if(decider == 1){
            let num = Math.floor(Math.random() * 10);
            pw += toString(num);
          }
        }
      }
    }
    else{
      // only letters
      for (let c = 0; c < pwlength; c++){
        let letter = Math.floor(Math.random() * alphabet.length + 1);
        pw += alphabet.charAt(letter);
      }
    }
  }
  else if(reqNums){
    // no letters, yes numbers
    if(reqSpec){
      // no letters, yes other two
      for (let d = 0; d < pwlength; d++){
        // coin flip to decide number or special
        let decider = Math.floor(Math.random() * 2);
        // 0 is number
        if(decider == 0){
          let num = Math.floor(Math.random() * 10);
          pw += toString(num);
        }
        // 1 is special
        else if(decider == 1){
          let symbol = Math.floor(Math.random() * spec.length + 1);
          pw += spec.charAt(symbol);
        }
      }
    }
    else{
      // only numbers
      for (let e = 0; e < pwlength; e++){
        let num = Math.floor(Math.random() * 10);
        pw += toString(num);
      }
    }
  }
  else{
    // only special characters
    for (let f = 0; f < pwlength; f++){
      let symbol = Math.floor(Math.random() * spec.length + 1);
      pw += spec.charAt(symbol);
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
