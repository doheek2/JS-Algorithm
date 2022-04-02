const isPrime = (n) => {
  for(let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if(n % i === 0) return false;
  }
  return true;
};

function solution(nums) {
  let answer = 0;
  nums.map((v, i) => {
    for(let a = i + 1; a < nums.length; a++) {
      for(let b = a + 1; b < nums.length; b++) {
        const num = v + nums[a] + nums[b];
        if(isPrime(num)) answer++;
      }
    }
  });
  return answer;
}