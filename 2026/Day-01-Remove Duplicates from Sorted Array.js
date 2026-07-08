// Remove Duplicates from Sorted Array

var nums = [1, 1, 2];

var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 1) return 1;
  let j = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
console.log(removeDuplicates(nums)); // Output: 2
