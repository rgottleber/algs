const twoSum = function (nums: number[], target: number) {
  const dict: { [key: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i];
    const find = dict[n];
    if (find !== undefined) return [find, i];
    dict[nums[i]] = i;
  }
  return [];
};
const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
