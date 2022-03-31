function solution(nums) {
  const choice = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length > choice ? choice : arr.length;
}