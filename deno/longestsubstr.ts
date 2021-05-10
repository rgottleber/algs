function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let curLen = 0;

  let sub: { [key: string]: string } = {};
  for (let i = 0; i < s.length; i++) {
    let find = sub[s[i]];
    if (find === undefined) {
      sub[s[i]] = "";
      curLen += 1;
    } else {
      if (maxLen <= curLen) {
        maxLen = curLen;
      }
      curLen = 1;
      sub = {};
      sub[s[i]] = "";
    }
    if (maxLen <= curLen) {
      maxLen = curLen;
    }
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));
