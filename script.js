// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getLen(){
  let len = prompt('lenght of passoword\n 8-128')
  if(parseInt(len) < 8){
    alert('must be at least 8');
    getLen()
  }else if (parseInt(len)> 128) {
    alert('length must be no greater than 128')
    getLen()
  }else{
    return parseInt(len)
  }
  
 }

 function getSpecialChar(){
  specialChar = ['!','@','#','$','&','*']
  let choice = confirm('Do you want to use speical characters')
  if(choice){
    return specialChar
  }else{
    return choice
  }
 }



function generatePassword(){
 

  return getLen()
}
