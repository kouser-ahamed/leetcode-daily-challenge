// Contains Duplicate LeetCode-217 Javascript

var nums = [1,2,3,4];

var containsDuplicate = function (nums) {
  const count = {};
  for (let num of nums) {
    count[num] = count[num] + 1 || 1;
    if (count[num] >= 2) {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate(nums)); // Output: true