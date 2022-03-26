function solution(n) {
  let answer = 0;
  let stringNum = '';
  while(n !== 0) {
    stringNum += String(n % 3);
    n = Math.floor(n / 3);
  }
  stringNum.split('').reverse().map((val, idx) => {
    if(idx === 0) answer = Number(val) * 1;
    else answer += Number(val) * Math.pow(3, idx);
  })
  return answer;
}

/*
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
*/