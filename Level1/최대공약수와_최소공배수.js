function solution(n, m) {
  const minNum = Math.min(n, m);
  const maxNum = Math.max(n, m);

  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);

  return [gcd(maxNum, minNum), lcm(maxNum, minNum)];
}
