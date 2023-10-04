function isPalindrome(word) {
  // Write your algorithm here
    // Remove non-alphabet characters and convert to lowercase
    const cleanWord = word.replace(/[^a-z]/g, '').toLowerCase();
  
    // Compare the clean word with its reverse
    return cleanWord === cleanWord.split('').reverse().join('');
  }
  
  console.log(isPalindrome("abba")); // true
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("a")); // true
  console.log(isPalindrome("robot")); // false
  console.log(isPalindrome("ab")); // false

  


/* 
  Add your pseudocode here
  define function called isPalindrome
    const cleanword removes non-alphabetic characters and converts to lowercase
    return cleanword is equal to reverse word
    if word is a palindrome:
    return true
    else false

    print result to the console

*/

/*
  Add written explanation of your solution here
  The isPalindrome function  checks if a given word is a palindrome. 
  It compares the cleaned word with its reverse and returns true if 
  they are equal, indicating a palindrome, and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Mama")); 

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Panama"));
}

module.exports = isPalindrome;
