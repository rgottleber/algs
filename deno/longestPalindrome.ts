function longestPalindrome(s: string): string {
  // Create a check for palindromes
  function isPalindrome(i: number, j: number): boolean {
    // While our start and end are in line keep checking
    while (i < j) {
      // if any don't match up, false
      if (s[i++] !== s[j--]) {
        return false;
      }
    }
    // we have a pali
    return true;
  }

  let start = 0;
  let count = 1;
  // Use two pointers one to walk forward through the string
  for (let i = 0; s.length - i > count; i++) {
    // a second pointer to walk back through it.
    for (let j = s.length - 1; j + 1 - i > count; j--) {
      if (isPalindrome(i, j)) {
        start = i;
        count = j + 1 - i;
      }
    }
  }
  return s.substr(start, count);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("thisisaracecar"));
console.log(longestPalindrome("amanaplanacanalpanama"));
