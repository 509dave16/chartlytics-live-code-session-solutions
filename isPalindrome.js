/**
 * Will determine if a the passed number string is a palindrome by the following criteria:
 * 1. Must be a symetrical sequence: aabbaa, aba, aabaa, abba
 * 2. Must handle odd length string: aba = 3/2 = 1 - 1
 * 3. Must handle even length string: abba = 4/2 = 2 - 1= 1
 * 4. Must handle 1 length string
 * 5. Must handle 2 length string
 * {string} numberString - a string of numbers 
 */
const isPalindrome = (numberString) => {
  const reversedNumberString = numberString.split('').reverse().join('');
  return numberString === reversedNumberString;
}

const printResult = (numberString, identifier) => {
  const isPalindromeCheck = isPalindrome(numberString);
  const isPalindromeStatement = isPalindromeCheck ? "yes" : "no";
  console.log(`${identifier}(${numberString}) is a palindrome: ${isPalindromeStatement}`);
}

printResult("0", "Set One");
printResult("010", "Set Two");
printResult("0110", "Set Three");

