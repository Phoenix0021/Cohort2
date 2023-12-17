/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
//completed


function isPalindrome(str) {
  let alphabeticChars = str.replace(/[^a-zA-Z]/g, '');
  alphabeticChars = alphabeticChars.toLowerCase();
  console.log(alphabeticChars);

  for(let i = 0; i<alphabeticChars.length/2  ;i++){
    if(alphabeticChars[i] != alphabeticChars[alphabeticChars.length - i-1] ){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
