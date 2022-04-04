function solution(s) {
  const nums = s.split(' ').map(v => parseInt(v));
  return `${Math.min.apply(null, nums)} ${Math.max.apply(null, nums)}`;
}