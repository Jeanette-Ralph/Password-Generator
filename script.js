// Assignment Code
var generateBtn = document.querySelector("#generate");

// defining the variable globally so I can use it later
// this variable is storing the users password length preference
var passwordCharacterValue; 

// creating arrays for the different values the user wants in their password
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbersArray = ['1','2','3','4','5','6','7','8','9']
var specialArray = ['!','@','#','$','%','^','&','*','(',')','-','+','=','?','<','>','.']

var passwordCriteria= function() {
  generateBtn.element.ariaHasPopup(' ');
}

// this function is gathering user input for their password criteria
function generatePasswordChoices() {
  generateBtnCharacter = prompt('Enter a number between 8-128 for the number of characters in your password.');

    // creating a condition to check if the password criteria value 
    if ( generateBtnCharacter  > 8 && generateBtnCharacter  < 128) {
      // created a variable where the response to the generateBtnCharacterCriteria is stored, so I can call it later
      passwordCharacterValue = generateBtnCharacter;
      console.log(passwordCharacterValue);
      generateBtnCharacter = alert('Great!');

    } else {
      generateBtnCharacter = prompt("Please enter a valid password length. Remember password must be between 8 - 128 characters. ");
      if ( generateBtnCharacter  > 8 && generateBtnCharacter  < 128) {
        passwordCharacterValue = generateBtnCharacter;
        console.log(passwordCharacterValue);
        generateBtnCharacter = alert('Great!!');
      }
    }

    // creating a confirm to ask if they want these criteria
    var generateBtnCase = confirm("If you want upper case values in your password click ok.");
    // create a confirm for lower case
    var generateBtnLowCase = confirm('If you want lower case values in your password click ok.')
    var generateBtnSpecial = confirm('If you want special characters in your password then click ok');
    var generateBtnNumbers = confirm('If you want numbers in your password then click ok.');
    
    // this ensures that the user selects atleast one special character
    if (generateBtnCase === false && generateBtnLowCase === false && generateBtnSpecial === false && generateBtnNumbers ===false) {
      alert('Password must contain atleast 1 special character.');
      return null
    }

    console.log(generateBtnCase);

    // creating a variable for the password where we are storing all the criteria the user wants
    var passwordChoices = {
      length: passwordCharacterValue,
      capitalLetters: generateBtnCase,
      lowerletters: generateBtnLowCase,
      specialCharacters: generateBtnSpecial,
      numbers: generateBtnNumbers,
    }

    // check
    console.log(passwordChoices);
  

    // access function outside
    return passwordChoices

}

// this function is 
function generatePassword() {
  // get user password options
  var passwordChoices = generatePasswordChoices();

  // need an empty array to store password
  var passwordFinal = [];

  // empty array for all possible characters
  var allPossibleCharacters = [];

  // empty array for gurantee characters, character type they have selected
  var guranteeCharacters = [];

  // concatenating the uppercase array to the all possible characters array 
  if (passwordChoices.capitalLetters){
    allPossibleCharacters = allPossibleCharacters.concat(upperArray);
    // creating a andomCharacter variable where the upperArray will be randomized
    var randomCharacter = generateRandom(upperArray);
    // the randomCharacter variable is then added to the gurantee characters with the epush method
    guranteeCharacters.push(randomCharacter);
  } 

  // for lower characters
  if (passwordChoices.lowerletters){
    allPossibleCharacters = allPossibleCharacters.concat(lowerArray);
    // creating a randomCharacter variable where the upperArray will be randomized
    var randomCharacter = generateRandom(lowerArray);
    // the randomCharacter variable is then added to the gurantee characters with the epush method
    guranteeCharacters.push(randomCharacter);
  } 

  // for special characters
  if (passwordChoices.specialCharacters){
    allPossibleCharacters = allPossibleCharacters.concat(specialArray);
    var randomCharacter = generateRandom(specialArray);
    guranteeCharacters.push(randomCharacter);
  }
  
   // for numbers 
  if (passwordChoices.numbers){
    allPossibleCharacters = allPossibleCharacters.concat(numbersArray);
    var randomCharacter = generateRandom(numbersArray);
    guranteeCharacters.push(randomCharacter);
  }

  // for the length less than the passwordChoices keep adding a possible character from the possible character array that was randomized 
  for (var i = 0; i < passwordChoices.length; i++) {
    // adding the randomized allPossibleCharacters array
    var possibleCharacter = generateRandom(allPossibleCharacters);
    // pushing the new randomized possibleCharacter array to the passwordFinal array
    passwordFinal.push(possibleCharacter);
  } 
  // passwordFinal = each individual index in the guranteeChracters array
  for (var i = 0; i < guranteeCharacters; i++ ) {
    passwordFinal[i] = guranteeCharacters[i];
  }

  // need to return the array as a string
  console.log(passwordFinal);

  // converting passwordFinal to string and returning it
  return passwordFinal.join('');

}

// this fucntion is creating a variable where 
function generateRandom(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




