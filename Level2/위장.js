function solution(clothes) {
  let answer = 1;
  let obj = {};

  clothes.map((_, i) => obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1);
  for(let key in obj) answer *= obj[key];
  return answer - 1;
}