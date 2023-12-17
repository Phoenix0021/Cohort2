/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

//completed

function countVowels(str) {
   const req = "aeiouAEIOU";
    let ans = 0;
    for(let  i = 0 ; i < str.length; i++){
      for(let j=0;j<10;j++){
        if(str[i] === req[j]){
          ans++;
          break;
        }
      }
    }
    return ans;

}

module.exports = countVowels;