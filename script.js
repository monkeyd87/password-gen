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
  let len = prompt('lenght of passoword\n 8-128').trim()
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
  const specialChar = '!@#$%^&*?-_'
  let choice = confirm('Do you want to use speical characters')
  if(choice){
    return specialChar
  }else{
    return choice
  }
 }

 function getLower(){
   let lst = 'abcdefghijklmnopqrstvwxyz'
   let value = confirm('LOWER Case characters?')
   if(value){
    return lst
  }else{
    return value;
  }
 }

 function getUpper(){
  let lst = 'ABCUDEFGHIJKLMNOPQRSTUVWXYZ'
  let value = confirm('upper Case characters?')
  if(value){
   return lst
 }else{
   return value;
 }
}

function GetNum(){
  let lst = '123456789'
  let value = confirm('Numbers?')
  if(value){
   return lst
 }else{
   return value;
 }
}




function generatePassword(){
  let pass = ''
  let lst = []
  let len = getLen()

  let specialChar = getSpecialChar()

  let lower = getLower()

  let upper = getUpper()

  if(upper){
    lst.push(...upper)
  }
  if(lower){
    lst.push(...lower)
  }
  if(specialChar){
    lst.push(...specialChar)
  }

  
  for(let i = 0; i < len; i++){
    pass += lst[Math.floor(Math.random()*lst.length)]
  }
 
  return  pass


  
}
