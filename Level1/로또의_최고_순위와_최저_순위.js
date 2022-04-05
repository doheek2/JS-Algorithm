function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const minCount = lottos.filter(v => win_nums.includes(v)).length;
  const zeroCount = lottos.filter(v => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}