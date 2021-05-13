function convert(s: string, numRows: number): string {
  // If the string is empty, no work required
  if (s.length === 0) return "";
  // create the array to hold strings
  const arr: [string] = [""];
  // Push placeholder strings into the array
  for (let i = 0; i < numRows - 1; i++) {
    arr.push("");
  }
  // set direction of zig
  let down = true;
  // first row
  let row = 0;
  // loop through string
  for (let spot = 0; spot < s.length; spot++) {
    // add to the array for the row we are on
    arr[row] = arr[row].concat((s.charAt(spot)));
    // if we hit the bottom and are zigging, time to zag
    if (row === numRows - 1 && down) {
      down = false;
    }
    // if we are zagging and hit the top, zig
    if (!down && row === 0) {
      down = true;
    }
    // only change row if we have more than one row
    if (numRows > 1) {
      down ? row++ : row--;
    }
  }
  // flatten the array
  const flat = arr.concat.apply([], arr).join("");
  // done
  return flat;
}

console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
// P   A   H   N
// A P L S I I G
// Y   I   R
console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
console.log(convert("A", 1)); // A
console.log(convert("AB", 1)); // A
// A
