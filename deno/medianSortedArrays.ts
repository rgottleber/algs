function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Grab length of the arrays
  const totalLength = nums1.length + nums2.length;
  // Calculate the middle number
  const medianPosition = Math.floor(totalLength / 2) + 1;
  // Creat array for first half of sorted list, we don't need the whole thing
  const firstHalfList: number[] = [];

  for (let i = 0; i < medianPosition; i++) {
    // if we don't have nums1 use nums2
    // if nums2 exists and is less than nums1 use it
    if (!nums1.length || (nums2.length && nums1[0] > nums2[0])) {
      // shift first off and push it onto firstHalfListf
      firstHalfList.push(nums2.shift()!);
    } else {
      // shift first off and push it onto firstHalfList
      firstHalfList.push(nums1.shift()!);
    }
  }
  // if the length is odd use falsy evaluation
  // take the last value
  return totalLength % 2
    ? firstHalfList.pop()!
    // if the length is even, add the last two and divide
    : (firstHalfList.pop()! + firstHalfList.pop()!) / 2;
}

console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([2], [])); // 2
