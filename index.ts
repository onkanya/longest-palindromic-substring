export function findLongestPalindrome(str: string): string {
  str = str.toLowerCase();
  let currentStr = "";
  let palindrome = "";

  if (isPalindrome(str)) {
    return str;
  }

  let startNumber = 0;
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    currentStr += chr;

    if (isPalindrome(currentStr) && currentStr.length > palindrome.length) {
      palindrome = currentStr;
    }

    if (i === str.length - 1 && startNumber < str.length - 1) {
      startNumber += 1;
      currentStr = "";
      i = startNumber - 1;
    }
  }

  return palindrome;
}

function isPalindrome(str: string): boolean {
  // 1. Check is string is empty or not a couple string
  if (!str || str.length < 2) {
    return false;
  }

  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (str === reverseStr) {
    return true;
  }

  return false;
}

console.log(findLongestPalindrome("babad"));
