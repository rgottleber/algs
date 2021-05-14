function myAtoi(s: string): number {
  let result = 0;
  let isNegative = 1;
  let i = 0;
  let oneSign = false

  // check for whitespace and ignore
  while (i < s.length) {
    if (s[i] === " ") {
      i++;
      continue;
    }
    break;
  }
  // check for negative
  if (s[i] === "-") {
    isNegative = -1;
    oneSign = true
    i++;
  }
  // check for positive
  if (s[i] === "+") {
    if (oneSign) return 0
    i++;
  }
  //loop through rest
  for (; i < s.length; i++) {
    // check if number
    // if non number ignore the rest
    if (s[i].charCodeAt(0) < 48 || s[i].charCodeAt(0) > 57) break;
    // increment place value
    result *= 10;
    // nifty trick to subtract 
    result += s[i].charCodeAt(0) - 48;
  }
  result *= isNegative;
  return (result > 2147483647)
    ? 2147483647
    : (result < -2147483648)
    ? -2147483648
    : result;
}

console.log(myAtoi("42"));
console.log(myAtoi("-42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
