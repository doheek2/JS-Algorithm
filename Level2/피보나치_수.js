function solution(n) {
  return fib(n) % 1234567;
}

const fib = n => {
  let nums = [0, 1, 1];
  for(let i = 3; i <= n; i++) {
    nums[i] = (nums[i-1] + nums[i-2]) % 1234567;
  }
  return nums[n];
};