function longestCommonPrefix(strs: string[]): string {
  // Grab the shortest string to start
  let final = strs.reduce((a, b)=> a.length <= b.length ? a : b)
  // loop through each string
  strs.forEach((str) => {
    for(let i = 0; i < final.length; i++){
      // Check each string for matches and slice to the shortest version
      if (final[i] !== str[i]) {
        final = final.slice(0,i)
        break
      }
    }
  })
  // Shortest match in all strings
  return final
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))