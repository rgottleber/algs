function isPalindrome(x: number): boolean {
  //   if (x < 0) {
  //     return false;
  //   }
  //   const s = x.toString();
  //   const len: number = x.toString().length;
  //   let a = 0;
  //   let b = len - 1;
  //   while (a < b) {
  //     if (s[a] !== s[b]) {
  //       return false;
  //     }
  //     a++;
  //     b--;
  //   }
  if (x === 0) {
    return true;
  }
  if (x <= 10) {
    return false;
  }
  let rem,
    final = 0;

  const temp = x;
  while (x > 0) {
    rem = x % 10;
    x = Math.floor(x / 10);
    final = final * 10 + rem;
  }
  if (final === temp) {
    return true;
  }
  return false;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
