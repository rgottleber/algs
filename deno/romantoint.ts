function romanToInt(s: string): number {
  // Create map of roman numerals to ints
  const r2iMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  // Place holder for final value
  let finalVal = 0;
  // Iterate through the input string
  for (let i = 0; i < s.length; i++) {
    // Roman numerals are strange. Sometimes you need to subtract values.
    // If the current 'number' is less than the next number, we hit this case.
    // Ex: IV -> '1' '5' -> 5 - 1 -> 4
    // This is what makes the question tricky. It is accounted for here.
    if ((i + 1) < s.length && r2iMap.get(s[i])! < r2iMap.get(s[i + 1])!) {
      finalVal += r2iMap.get(s[i + 1])! - r2iMap.get(s[i])!;
      // If we hit this edge case we skip 2 numbers instead of 1
      i += 1;
    } else {
      // The happy case of just adding numbers
      finalVal += r2iMap.get(s[i])!;
    }
  }
  // Return the number
  return finalVal;
}

console.log(romanToInt("VII"));
console.log(romanToInt("X"));
console.log(romanToInt("IV"));
